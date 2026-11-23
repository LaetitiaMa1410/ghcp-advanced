import * as fs from "node:fs";
import { describe, expect, it } from "vitest";
import { createCatalogStore } from "../../src/domain/catalog.js";
import { createOrderStore } from "../../src/domain/orders.js";
import { makeApp, type TestSeedDuck } from "../_helpers/app.js";

type App = ReturnType<typeof makeApp>["app"];

const SEED: TestSeedDuck[] = [
  {
    id: "alpha-duck",
    name: "Alpha Duck",
    category: "Debugging",
    priceCents: 1000,
    tagline: "t",
    description: "d",
    personality: ["calm"],
    stock: 3,
  },
  {
    id: "beta-duck",
    name: "Beta Duck",
    category: "Philosopher",
    priceCents: 2500,
    tagline: "t",
    description: "d",
    personality: ["wise"],
    stock: 1,
  },
];

const SHIPPING = {
  name: "Quincy Quacker",
  email: "quincy@example.com",
  address: "1 Pond Lane",
  card: "4242 mocked",
};

async function call(
  app: App,
  method: string,
  url: string,
  cookie: string,
  body?: unknown
): Promise<Response> {
  return (await app.fetch(
    new Request(`http://localhost${url}`, {
      method,
      headers: { cookie, "content-type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
  )) as Response;
}

const COOKIE = "de_session=test-session";

describe("POST /api/checkout (Story 4)", () => {
  it("creates a persisted order, decrements stock and clears the cart", async () => {
    const { app, dataFile, ordersFile } = makeApp(SEED);
    await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "alpha-duck", quantity: 2 });
    await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "beta-duck" });

    const res = await call(app, "POST", "/api/checkout", COOKIE, SHIPPING);
    expect(res.status).toBe(201);
    const order = (await res.json()) as {
      orderId: string;
      totalCents: number;
      lines: unknown[];
      createdAt: string;
    };
    expect(order.orderId).toMatch(/^ord_/);
    expect(order.totalCents).toBe(2 * 1000 + 2500);
    expect(order.lines).toHaveLength(2);
    expect(JSON.stringify(order)).not.toContain(SHIPPING.card);

    const cart = (await (await call(app, "GET", "/api/cart", COOKIE)).json()) as {
      lines: unknown[];
    };
    expect(cart.lines).toHaveLength(0);

    // Survives a restart: fresh stores read the same files.
    expect(createOrderStore(ordersFile).findById(order.orderId)).toBeDefined();
    const catalog = createCatalogStore(dataFile);
    expect(catalog.findById("alpha-duck")!.stock).toBe(1);
    expect(catalog.findById("beta-duck")!.stock).toBe(0);
    expect(fs.readFileSync(ordersFile, "utf8")).not.toContain(SHIPPING.card);
  });

  it("rejects missing fields and an invalid email", async () => {
    const { app } = makeApp(SEED);
    await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "alpha-duck" });
    const res = await call(app, "POST", "/api/checkout", COOKIE, {
      ...SHIPPING,
      name: "",
      email: "not-an-email",
    });
    expect(res.status).toBe(400);
    const body = (await res.json()) as { error: { fields: Record<string, string> } };
    expect(body.error.fields.name).toBeDefined();
    expect(body.error.fields.email).toBeDefined();
  });

  it("rejects an empty cart", async () => {
    const { app } = makeApp(SEED);
    const res = await call(app, "POST", "/api/checkout", COOKIE, SHIPPING);
    expect(res.status).toBe(400);
  });

  it("re-validates stock and changes nothing when a line is no longer available", async () => {
    const { app, catalog, orders } = makeApp(SEED);
    const other = "de_session=other-session";
    await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "alpha-duck" });
    await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "beta-duck" });
    await call(app, "POST", "/api/cart/items", other, { duckId: "beta-duck" });
    expect((await call(app, "POST", "/api/checkout", other, SHIPPING)).status).toBe(201);

    const res = await call(app, "POST", "/api/checkout", COOKIE, SHIPPING);
    expect(res.status).toBe(409);
    const body = (await res.json()) as { error: { code: string; fields: Record<string, string> } };
    expect(body.error.code).toBe("INSUFFICIENT_STOCK");
    expect(body.error.fields["beta-duck"]).toBe("sold out");
    expect(catalog.findById("alpha-duck")!.stock).toBe(3);
    expect(orders.list()).toHaveLength(1);
    const cart = (await (await call(app, "GET", "/api/cart", COOKIE)).json()) as {
      lines: unknown[];
    };
    expect(cart.lines).toHaveLength(2);
  });
});

describe("stock in cart and catalog (Stories 2 and 3)", () => {
  it("rejects adding more than the available stock", async () => {
    const { app } = makeApp(SEED);
    expect(
      (await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "alpha-duck", quantity: 3 })).status
    ).toBe(201);
    const res = await call(app, "POST", "/api/cart/items", COOKIE, { duckId: "alpha-duck" });
    expect(res.status).toBe(409);
    const patch = await call(app, "PATCH", "/api/cart/items/alpha-duck", COOKIE, { quantity: 4 });
    expect(patch.status).toBe(409);
  });

  it("exposes a human-readable stock label", async () => {
    const { app } = makeApp([
      { ...SEED[0]!, stock: 10 },
      { ...SEED[1]!, id: "low-duck", name: "Low Duck", stock: 2 },
      { ...SEED[1]!, id: "gone-duck", name: "Gone Duck", stock: 0 },
    ]);
    const labels: Record<string, string> = {};
    for (const id of ["alpha-duck", "low-duck", "gone-duck"]) {
      const res = await call(app, "GET", `/api/ducks/${id}`, COOKIE);
      labels[id] = ((await res.json()) as { stockLabel: string }).stockLabel;
    }
    expect(labels).toEqual({
      "alpha-duck": "In stock",
      "low-duck": "Only 2 left",
      "gone-duck": "Sold out",
    });
  });
});
