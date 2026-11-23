import { createHash } from "node:crypto";
import type { CatalogStore } from "./catalog.js";
import type { Duck } from "./duck.js";

export type DotdResult = { duck: Duck } | { empty: true };

export type DotdPicker = {
  pick(): DotdResult;
};

export type CreateDotdPickerOptions = {
  catalog: CatalogStore;
  now?: () => Date;
};

/**
 * Deterministic Duck of the Day (Story 7): hash the UTC date and use it to
 * index into the in-stock ducks sorted by id. Same day → same duck (also
 * across restarts); sold-out ducks are skipped.
 */
export function createDotdPicker(opts: CreateDotdPickerOptions): DotdPicker {
  const now = opts.now ?? (() => new Date());

  return {
    pick(): DotdResult {
      const candidates = opts.catalog
        .list()
        .filter((d) => d.stock > 0)
        .sort((a, b) => a.id.localeCompare(b.id));
      if (candidates.length === 0) return { empty: true };
      const index = dayHash(utcDay(now())) % candidates.length;
      return { duck: candidates[index]! };
    },
  };
}

export function utcDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function dayHash(day: string): number {
  return createHash("sha256").update(day).digest().readUInt32BE(0);
}
