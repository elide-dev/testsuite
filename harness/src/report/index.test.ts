import { test, expect } from "bun:test";
import { mkdtempSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildIndexJson, latestRunSummariesFromIndex } from "./index";

test("buildIndexJson lists workload-scoped runs with counts and paths", async () => {
  const root = mkdtempSync(join(tmpdir(), "idx-"));
  const dir = join(root, "1.3.5", "abcd1234ef56", "test262");
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
    reportDir: "1.3.5/abcd1234ef56/test262",
  });
});

test("buildIndexJson reads digest from summary metadata", async () => {
  const root = mkdtempSync(join(tmpdir(), "idx-"));
  const dir = join(root, "1.3.5", "ghcr.io", "elid");
  mkdirSync(dir, { recursive: true });
  await Bun.write(join(dir, "summary.json"), JSON.stringify({
    meta: { workload: "test262", elide: { semver: "1.3.5", digest: "ghcr.io/elide-dev/elide:nightly" }, finishedAt: "2026-06-26T00:00:00Z" },
    counts: { pass: 90, fail: 10, skip: 0, error: 0, total: 100 },
    regressions: [], newPasses: [],
  }));

  const idx = await buildIndexJson(root) as any;

  expect(idx.runs[0]).toMatchObject({
    digest: "ghcr.io/elid",
    reportDir: "1.3.5/ghcr.io/elid",
  });
});

test("latestRunSummariesFromIndex keeps the newest run per workload", () => {
  const latest = latestRunSummariesFromIndex({
    runs: [
      {
        workload: "alpha",
        semver: "1.1.0",
        digest: "bbbbbbbbbbbb",
        pass: 8,
        total: 10,
        regressions: 1,
        finishedAt: "2026-01-02T00:00:00.000Z",
        reportDir: "1.1.0/bbbbbbbbbbbb/alpha",
      },
      {
        workload: "alpha",
        semver: "1.0.0",
        digest: "aaaaaaaaaaaa",
        pass: 1,
        total: 10,
        regressions: 9,
        finishedAt: "2026-01-01T00:00:00.000Z",
        reportDir: "1.0.0/aaaaaaaaaaaa/alpha",
      },
    ],
  });

  expect(latest).toEqual([
    expect.objectContaining({
      workload: "alpha",
      semver: "1.1.0",
      passRate: 0.8,
      regressions: 1,
    }),
  ]);
});
