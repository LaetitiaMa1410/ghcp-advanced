# Rubber Duck Emporium - Squad starter (Stories 1-8 done, Story 9 open)

This is the starting point for the **Chapter 3 bonus: build Story 9 with Squad** in the [GitHub Copilot Advanced workshop](../../docs/workshop.md#34-bonus-build-story-9-with-squad).

It contains a finished JSON API for [Stories 1-8](../../user-stories/README.md) and **no frontend**. `GET /` returns `404` on purpose: [Story 9 - Web frontend](../../user-stories/09-web-frontend.md) is the task you hand to your Squad team.

## Run it

Requires Node.js 20+.

```bash
npm install
cp .env.example .env              # then set ADMIN_SECRET to any non-empty value
ADMIN_SECRET=change-me npm run dev # http://localhost:3000
npm test                           # vitest, API contract + unit tests
npm run typecheck
```

On Windows PowerShell, set the secret with `$env:ADMIN_SECRET="change-me"; npm run dev`.

On first start the catalog is copied from `data/catalog.seed.json` to `data/catalog.json` (git-ignored). Orders are written to `data/orders.json`. Delete both files to reset the shop.

## Stack

- TypeScript, Node.js, ES modules, [Hono](https://hono.dev/) on `@hono/node-server`, `zod` validation, `vitest`.
- JSON-file storage with atomic writes (`src/domain/catalog.ts`, `src/domain/orders.ts`).
- Cart is in memory, scoped to an HttpOnly `de_session` cookie. Browsers send it automatically with same-origin `fetch`.
- Static files in `public/` are already served at `/` (`/` maps to `public/index.html`). Story 9 needs **no backend changes**: put the SPA in `public/`.

## API overview

All responses are JSON. Errors use one envelope:

```json
{ "error": { "code": "VALIDATION_FAILED", "message": "validation failed", "fields": { "email": "must be a valid email address" } } }
```

| Code | Status | When |
| --- | --- | --- |
| `VALIDATION_FAILED` | 400 | Bad input, empty cart at checkout |
| `UNAUTHORIZED` | 401 | Missing or wrong admin secret |
| `NOT_FOUND` | 404 | Unknown duck or cart line |
| `DUPLICATE_NAME` | 409 | Curator adds a duck whose name exists |
| `INSUFFICIENT_STOCK` | 409 | Cart or checkout asks for more than is in stock |
| `CATALOG_EMPTY` / `INTERNAL` | 503 / 500 | Server-side problem |

### Catalog (Stories 1, 2, 5)

| Method | Path | Notes |
| --- | --- | --- |
| `GET` | `/api/ducks` | `{ ducks: Duck[], total }`. Optional filters, all combinable: `q` (free text), `category` (repeatable), `minPriceCents`, `maxPriceCents` |
| `GET` | `/api/ducks/:id` | A single `Duck`, or `404` |

```ts
type Duck = {
  id: string;            // slug, e.g. "socrates-duck"
  name: string;
  category: string;      // Debugging | Philosopher | Maritime | Wellness | Limited Edition
  priceCents: number;    // 1499 = 14.99
  tagline: string;
  description: string;
  personality: string[];
  stock: number;
  stockLabel: string;    // "In stock" | "Only 2 left" | "Sold out"
};
```

### Cart (Story 3)

| Method | Path | Body |
| --- | --- | --- |
| `GET` | `/api/cart` | - |
| `POST` | `/api/cart/items` | `{ duckId, quantity? }` (default 1, adds to the existing line) |
| `PATCH` | `/api/cart/items/:duckId` | `{ quantity }` |
| `DELETE` | `/api/cart/items/:duckId` | - |

Every cart call returns `{ lines: [{ duckId, name, quantity, priceCents, lineTotalCents }], totalCents }`.

### Checkout (Story 4)

`POST /api/checkout` with `{ name, email, address, card }`. Payment is mocked: any non-empty `card` string is accepted and never stored. Stock is re-checked and decremented for all lines at once, the order is persisted, and the cart is cleared.

```json
{ "orderId": "ord_…", "createdAt": "2026-…", "lines": [ … ], "totalCents": 3798, "shipping": { "name": "Quincy" } }
```

### Curator (Story 6)

`POST /api/admin/ducks` with header `x-admin-secret: <ADMIN_SECRET>` and `{ name, category, priceCents, tagline, description, personality, stock }`. Returns `201` with the new `Duck`. Story 9 excludes an admin UI, so the frontend does not need this.

### Duck of the Day (Story 7)

`GET /api/duck-of-the-day` returns `{ duck, detailUrl }`, or `{ duck: null, message: "The pond is empty today, come back tomorrow." }` when everything is sold out. The pick is deterministic per UTC day and skips sold-out ducks. `detailUrl` uses the hash route `/#/ducks/:id`.

### Personality quiz (Story 8)

| Method | Path | Notes |
| --- | --- | --- |
| `GET` | `/api/quiz` | `{ questions: [{ id, prompt, answers: [{ id, label, weights }] }] }` |
| `POST` | `/api/quiz` | `{ answers: { [questionId]: answerId } }` for every question → `{ duck, message, detailUrl }` |

The quiz never changes server state. See `src/domain/quiz.ts` for the questions and the tie-break rule.
