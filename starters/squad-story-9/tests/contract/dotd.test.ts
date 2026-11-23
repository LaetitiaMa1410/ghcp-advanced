import { describe, expect, it } from "vitest";
import { makeApp, RICH_SEED } from "../_helpers/app.js";

async function dotd(
  app: ReturnType<typeof makeApp>["app"]
): Promise<{ duck: { id: string } | null; message?: string }> {
  const res = (await app.fetch(
    new Request("http://localhost/api/duck-of-the-day")
  )) as Response;
  expect(res.status).toBe(200);
  return (await res.json()) as { duck: { id: string } | null; message?: string };
}

function fixedClock(iso: string): () => Date {
  return () => new Date(iso);
}

describe("GET /api/duck-of-the-day (US7)", () => {
  it("returns the same duck on 100 sequential calls within the same UTC day", async () => {
    const { app } = makeApp(undefined, {
      now: fixedClock("2025-06-15T10:00:00Z"),
    });
    const first = (await app.fetch(
      new Request("http://localhost/api/duck-of-the-day")
    )) as Response;
    expect(first.status).toBe(200);
    const firstBody = (await first.json()) as {
      duck: { id: string };
      detailUrl: string;
    };
    expect(firstBody.duck).not.toBeNull();
    expect(firstBody.detailUrl).toBe(`/#/ducks/${firstBody.duck.id}`);

    for (let i = 0; i < 99; i++) {
      const res = (await app.fetch(
        new Request("http://localhost/api/duck-of-the-day")
      )) as Response;
      expect(res.status).toBe(200);
      const body = (await res.json()) as { duck: { id: string } };
      expect(body.duck.id).toBe(firstBody.duck.id);
    }
  });

  it("picks a different duck on a different day", async () => {
    let current = new Date("2025-06-15T12:00:00Z");
    const { app } = makeApp(RICH_SEED, { now: () => current });
    const seen = new Set<string>();
    for (let day = 15; day <= 21; day++) {
      current = new Date(`2025-06-${day}T12:00:00Z`);
      seen.add((await dotd(app)).duck!.id);
    }
    expect(seen.size).toBeGreaterThan(1);
  });

  it("is deterministic across app instances (survives restarts)", async () => {
    const now = fixedClock("2025-06-15T10:00:00Z");
    const a = await dotd(makeApp(RICH_SEED, { now }).app);
    const b = await dotd(makeApp(RICH_SEED, { now }).app);
    expect(a.duck!.id).toBe(b.duck!.id);
  });

  it("skips sold-out ducks", async () => {
    const seed = RICH_SEED.map((d) => ({
      ...d,
      stock: d.id === "yoga-duck" ? 3 : 0,
    }));
    for (let day = 10; day <= 20; day++) {
      const { app } = makeApp(seed, {
        now: fixedClock(`2025-06-${day}T10:00:00Z`),
      });
      expect((await dotd(app)).duck!.id).toBe("yoga-duck");
    }
  });

  it("returns the friendly fallback when every duck is sold out", async () => {
    const seed = RICH_SEED.map((d) => ({ ...d, stock: 0 }));
    const { app } = makeApp(seed);
    const body = await dotd(app);
    expect(body.duck).toBeNull();
    expect(body.message).toBe("The pond is empty today, come back tomorrow.");
  });

  it("returns null duck with a graceful message when the catalog is empty", async () => {
    const { app } = makeApp([]);
    const res = (await app.fetch(
      new Request("http://localhost/api/duck-of-the-day")
    )) as Response;
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      duck: null;
      message: string;
    };
    expect(body.duck).toBeNull();
    expect(body.message.length).toBeGreaterThan(0);
  });
});
