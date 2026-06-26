import { test, expect } from "bun:test";
import { mkdtempSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildIndexJson } from "./index";

test("buildIndexJson lists each run with counts and paths", async () => {
  const root = mkdtempSync(join(tmpdir(), "idx-"));
  const dir = join(root, "1.3.5", "abcd1234ef56");
  mkdirSync(dir, { recursive: true });
  await Bun.write(join(dir, "summary.json"), JSON.stringify({
    meta: { workload: "test262", elide: { semver: "1.3.5", digest: "abcd1234ef56" }, finishedAt: "2026-06-26T00:00:00Z" },
    counts: { pass: 90, fail: 10, skip: 0, error: 0, total: 100 },
    regressions: [], newPasses: [],
  }));
  const idx = await buildIndexJson(root) as any;
  expect(idx.runs).toHaveLength(1);
  expect(idx.runs[0]).toMatchObject({
    workload: "test262", semver: "1.3.5", digest: "abcd1234ef56",
    pass: 90, total: 100, regressions: 0,
    reportDir: "1.3.5/abcd1234ef56",
  });
});
