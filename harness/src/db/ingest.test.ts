import { test, expect } from "bun:test";
import { Database } from "bun:sqlite";
import { applySchema } from "./schema";
import { ingestRun } from "./ingest";
import type { StoredRun } from "../results/store";

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
