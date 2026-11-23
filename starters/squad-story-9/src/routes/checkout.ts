import { Hono } from "hono";
import { z } from "zod";
import type { CartStore } from "../domain/cart.js";
import type { CatalogStore } from "../domain/catalog.js";
import { ValidationError } from "../domain/errors.js";
import type { OrderStore } from "../domain/orders.js";
import type { SessionVariables } from "../middleware/session-cookie.js";
import { readJson, zodFields } from "./cart.js";

const checkoutSchema = z
  .object({
    name: z.string().trim().min(1, "name is required"),
    email: z.string().trim().email("must be a valid email address"),
    address: z.string().trim().min(1, "address is required"),
    // Mocked payment: any non-empty string is accepted and never stored.
    card: z.string().trim().min(1, "card is required"),
  })
  .strict();

export function createCheckoutRoutes(
  cart: CartStore,
  catalog: CatalogStore,
  orders: OrderStore
): Hono<{ Variables: SessionVariables }> {
  const app = new Hono<{ Variables: SessionVariables }>();

  app.post("/", async (c) => {
    const parsed = checkoutSchema.safeParse(await readJson(c));
    if (!parsed.success) {
      throw new ValidationError("validation failed", zodFields(parsed.error));
    }
    const sessionId = c.get("sessionId");
    const current = cart.getCart(sessionId);
    if (current.lines.length === 0) {
      throw new ValidationError("cart is empty", { cart: "cart is empty" });
    }

    catalog.decrementStock(current.lines);
    let view;
    let order;
    try {
      view = cart.toView(current, catalog);
      const { name, email, address } = parsed.data;
      order = orders.create({
        shipping: { name, email, address },
        lines: view.lines,
        totalCents: view.totalCents,
      });
    } catch (err) {
      catalog.restoreStock(current.lines);
      throw err;
    }
    cart.clear(sessionId);

    return c.json(
      {
        orderId: order.id,
        createdAt: order.createdAt,
        lines: order.lines,
        totalCents: order.totalCents,
        shipping: { name: order.shipping.name },
      },
      201
    );
  });

  return app;
}
