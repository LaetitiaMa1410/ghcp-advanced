import { Hono } from "hono";
import { z } from "zod";
import type { CartStore } from "../domain/cart.js";
import type { CatalogStore } from "../domain/catalog.js";
import {
  DuckNotFoundError,
  InsufficientStockError,
  ValidationError,
} from "../domain/errors.js";
import type { SessionVariables } from "../middleware/session-cookie.js";

const addItemSchema = z
  .object({
    duckId: z.string().min(1),
    quantity: z.number().int().positive().optional(),
  })
  .strict();

const patchItemSchema = z
  .object({
    quantity: z.number().int().positive(),
  })
  .strict();

export function createCartRoutes(
  cart: CartStore,
  catalog: CatalogStore
): Hono<{ Variables: SessionVariables }> {
  const app = new Hono<{ Variables: SessionVariables }>();

  app.get("/", (c) => {
    const sessionId = c.get("sessionId");
    const view = cart.toView(cart.getCart(sessionId), catalog);
    return c.json(view);
  });

  app.post("/items", async (c) => {
    const body = await readJson(c);
    const parsed = addItemSchema.safeParse(body);
    if (!parsed.success) {
      throw new ValidationError("validation failed", zodFields(parsed.error));
    }
    const { duckId, quantity = 1 } = parsed.data;
    const sessionId = c.get("sessionId");
    const inCart =
      cart.getCart(sessionId).lines.find((l) => l.duckId === duckId)
        ?.quantity ?? 0;
    assertStock(catalog, duckId, inCart + quantity);
    const updated = cart.addLine(sessionId, duckId, quantity);
    const view = cart.toView(updated, catalog);
    return c.json(view, 201);
  });

  app.patch("/items/:duckId", async (c) => {
    const duckId = c.req.param("duckId");
    const body = await readJson(c);
    const parsed = patchItemSchema.safeParse(body);
    if (!parsed.success) {
      throw new ValidationError("validation failed", zodFields(parsed.error));
    }
    const sessionId = c.get("sessionId");
    if (cart.getCart(sessionId).lines.some((l) => l.duckId === duckId)) {
      assertStock(catalog, duckId, parsed.data.quantity);
    }
    const updated = cart.setLineQuantity(sessionId, duckId, parsed.data.quantity);
    const view = cart.toView(updated, catalog);
    return c.json(view);
  });

  app.delete("/items/:duckId", (c) => {
    const duckId = c.req.param("duckId");
    const sessionId = c.get("sessionId");
    const updated = cart.removeLine(sessionId, duckId);
    const view = cart.toView(updated, catalog);
    return c.json(view);
  });

  return app;
}

function assertStock(
  catalog: CatalogStore,
  duckId: string,
  requested: number
): void {
  const duck = catalog.findById(duckId);
  if (!duck) throw new DuckNotFoundError(duckId);
  if (requested > duck.stock) {
    throw new InsufficientStockError({
      quantity:
        duck.stock === 0
          ? `${duck.name} is sold out`
          : `only ${duck.stock} of ${duck.name} left`,
    });
  }
}

export async function readJson(c: import("hono").Context): Promise<unknown> {
  try {
    return await c.req.json();
  } catch {
    throw new ValidationError("request body must be valid JSON");
  }
}

export function zodFields(err: z.ZodError): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const issue of err.issues) {
    if (issue.code === "unrecognized_keys" && Array.isArray(issue.keys)) {
      for (const key of issue.keys) {
        if (!(key in fields)) fields[key] = "unknown field is not allowed";
      }
      continue;
    }
    const key = issue.path.length > 0 ? issue.path.join(".") : "(root)";
    if (!(key in fields)) fields[key] = issue.message;
  }
  return fields;
}
