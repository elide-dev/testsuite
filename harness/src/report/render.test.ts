import { test, expect } from "bun:test";
import { renderSuiteReport, renderTopIndex } from "./render";
import type { RunMeta, TestResult } from "../results/schema";
import { compare, type Comparison } from "../expectations/compare";

const meta: RunMeta = {
  workload: "test262",
  kind: "test",
  elide: { semver: "1.3.5+abc", digest: "abcd1234ef56" },
  startedAt: "2026-06-26T00:00:00Z",
  finishedAt: "2026-06-26T00:05:00Z",
};
const cmp: Comparison = {
  regressions: [{ kind: "test", id: "language/r.js default", status: "fail", message: "x" }],
  newPasses: [{ kind: "test", id: "built-ins/n.js default", status: "pass" }],
  observed: [
    { kind: "test", id: "language/r.js default", status: "fail", message: "x" },
    { kind: "test", id: "built-ins/n.js default", status: "pass" },
  ],
  counts: { pass: 90, fail: 5, skip: 5, error: 0, total: 100 },
};

test("suite report includes pass rate, regressions, new passes", () => {
  const md = renderSuiteReport(meta, cmp);
  expect(md).toContain("test262");
  expect(md).toContain("1.3.5+abc");
  expect(md).toContain("90/100");
  expect(md).toContain("94.74%"); // 90 / (90+5+0 scored); the 5 skips are excluded from the rate
  expect(md).toContain("pass-rate.svg");
  expect(md).toContain("language/r.js default");
  expect(md).toContain("built-ins/n.js default");
});

test("renders non-test262 suite reports with normalized counts", () => {
  const meta: RunMeta = {
    workload: "wpt-wintertc",
    kind: "test",
    elide: { semver: "1.0.0", digest: "abc123" },
    startedAt: "2026-06-27T00:00:00.000Z",
    finishedAt: "2026-06-27T00:01:00.000Z",
    suiteVersion: "wpt-sparse",
  };
  const tests: TestResult[] = [
    { kind: "test", id: "url/a.any.js :: a", status: "pass", meta: { category: "url" } },
    { kind: "test", id: "encoding/b.any.js :: b", status: "fail", message: "bad", meta: { category: "encoding" } },
  ];
  const md = renderSuiteReport(meta, compare(tests, { entries: [], ratchet: new Set() }));
  expect(md).toContain("# wpt-wintertc");
  expect(md).toContain("Pass rate: 1/2");
  expect(md).toContain("url/a.any.js :: a");
});

test("top index renders a version matrix with a checkmark when no regressions", () => {
  const md = renderTopIndex([
    { workload: "test262", semver: "1.3.5", digest: "abcd12", passRate: 1, regressions: 0 },
  ]);
  expect(md).toContain("test262");
  expect(md).toContain("pass-rate.svg");
  expect(md).toContain("✅");
});
