import { test, expect } from "bun:test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeResults, readResults } from "./store";
import type { RunMeta, TestResult } from "./schema";

const meta: RunMeta = {
  workload: "test262",
  kind: "test",
  elide: { semver: "1.3.5", digest: "abcd1234ef56" },
  startedAt: "2026-06-26T00:00:00Z",
  finishedAt: "2026-06-26T00:01:00Z",
};

test("round-trips results through gzip", async () => {
  const dir = mkdtempSync(join(tmpdir(), "store-"));
  const results: TestResult[] = [
    { kind: "test", id: "a.js default", status: "pass" },
    { kind: "test", id: "b.js strict mode", status: "fail", message: "boom" },
  ];
  await writeResults(dir, meta, results);
  const back = await readResults(dir);
  expect(back.meta.workload).toBe("test262");
  expect(back.results).toHaveLength(2);
  expect(back.results[1]).toMatchObject({ id: "b.js strict mode", status: "fail" });
});
