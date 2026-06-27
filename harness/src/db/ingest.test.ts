import { test, expect } from "bun:test";
import { Database } from "bun:sqlite";
import { mkdirSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { applySchema } from "./schema";
import { ingestAll, ingestRun } from "./ingest";
import { writeResults, type StoredRun } from "../results/store";
import type { TestResult } from "../results/schema";
import { writeSummaryJson } from "../report/index";
import { compare } from "../expectations/compare";

function mkDb(): Database {
  const db = new Database(":memory:");
  applySchema(db);
  return db;
}

const run: StoredRun = {
  meta: {
    workload: "test262",
    kind: "test",
    elide: { semver: "1.3.5", digest: "abcd1234" },
    startedAt: "2026-06-26T00:00:00Z",
    finishedAt: "2026-06-26T00:01:00Z",
  },
  results: [
    { kind: "test", id: "test/a.js default", status: "pass" },
    { kind: "test", id: "test/b.js default", status: "fail", message: "TypeError: Cannot load module: 'vm'", meta: { features: ["modules"] } },
  ],
};

test("ingests a run and its results with signature + features", () => {
  const db = mkDb();
  const id = ingestRun(db, run);
  const runRow = db.query("SELECT * FROM runs WHERE id = ?").get(id) as any;
  expect(runRow.workload).toBe("test262");
  const fail = db.query("SELECT * FROM results WHERE status = 'fail'").get() as any;
  expect(fail.test_id).toBe("test/b.js default");
  expect(fail.signature).toBe("TypeError: Cannot load module: <str>");
  expect(fail.features).toBe("modules");
  const pass = db.query("SELECT signature FROM results WHERE status = 'pass'").get() as any;
  expect(pass.signature).toBeNull();
});

test("re-ingesting the same run id replaces, not duplicates", () => {
  const db = mkDb();
  ingestRun(db, run);
  ingestRun(db, run);
  expect((db.query("SELECT COUNT(*) c FROM runs").get() as any).c).toBe(1);
  expect((db.query("SELECT COUNT(*) c FROM results").get() as any).c).toBe(2);
});

test("ingestAll reads workload-scoped report directories", async () => {
  const root = mkdtempSync(join(tmpdir(), "ingest-all-"));
  const dir = join(root, "1.3.5", "abcd1234ef56", "test262");
  mkdirSync(dir, { recursive: true });
  const comparison = compare(run.results.filter((r): r is TestResult => r.kind === "test"), { entries: [], ratchet: new Set() });
  await writeResults(dir, run.meta, run.results);
  await writeSummaryJson(dir, run.meta, comparison);

  const db = mkDb();
  expect(await ingestAll(db, root)).toBe(1);
  expect((db.query("SELECT COUNT(*) c FROM runs").get() as any).c).toBe(1);
  expect((db.query("SELECT COUNT(*) c FROM results").get() as any).c).toBe(2);
});
