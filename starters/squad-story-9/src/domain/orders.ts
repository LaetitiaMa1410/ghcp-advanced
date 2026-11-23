import { randomUUID } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { z } from "zod";

const orderLineSchema = z.object({
  duckId: z.string(),
  name: z.string(),
  quantity: z.number().int().positive(),
  priceCents: z.number().int().nonnegative(),
  lineTotalCents: z.number().int().nonnegative(),
});

const orderSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  shipping: z.object({
    name: z.string(),
    email: z.string(),
    address: z.string(),
  }),
  lines: z.array(orderLineSchema),
  totalCents: z.number().int().nonnegative(),
});

const ordersFileSchema = z.object({
  version: z.literal(1),
  orders: z.array(orderSchema),
});

export type OrderLine = z.infer<typeof orderLineSchema>;
export type Order = z.infer<typeof orderSchema>;
export type NewOrder = Omit<Order, "id" | "createdAt">;

export type OrderStore = {
  create(input: NewOrder): Order;
  findById(id: string): Order | undefined;
  list(): Order[];
};

/**
 * JSON-file-backed order store (Story 4). Orders survive restarts; writes are
 * atomic (temp file + rename), same as the catalog store. Card details are
 * never part of an order record.
 */
export function createOrderStore(
  filePath: string,
  now: () => Date = () => new Date()
): OrderStore {
  const dataPath = path.resolve(filePath);
  let orders: Order[] = [];
  if (fs.existsSync(dataPath)) {
    const parsed = ordersFileSchema.safeParse(
      JSON.parse(fs.readFileSync(dataPath, "utf8"))
    );
    if (!parsed.success) {
      throw new Error(
        `orders: file at ${dataPath} is not valid: ${parsed.error.message}`
      );
    }
    orders = parsed.data.orders;
  }

  function persist(): void {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    const tmp = `${dataPath}.${process.pid}.${Date.now()}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify({ version: 1, orders }, null, 2), "utf8");
    fs.renameSync(tmp, dataPath);
  }

  return {
    create(input) {
      const order: Order = {
        id: `ord_${randomUUID()}`,
        createdAt: now().toISOString(),
        ...input,
      };
      orders.push(order);
      try {
        persist();
      } catch (err) {
        orders.pop();
        throw err;
      }
      return order;
    },
    findById(id) {
      return orders.find((o) => o.id === id);
    },
    list() {
      return [...orders];
    },
  };
}
