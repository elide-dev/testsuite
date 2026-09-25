import { test, expect } from "bun:test";
import { renderSuitePassRateSvg, renderTopPassRateSvg } from "./charts";
import type { Comparison } from "../expectations/compare";

const cmp: Comparison = {
  regressions: [{ kind: "test", id: "r", status: "fail" }],
  newPasses: [{ kind: "test", id: "n", status: "pass" }, { kind: "test", id: "m", status: "pass" }],
  observed: [],
  counts: { pass: 60, fail: 10, error: 5, skip: 25, total: 100 },
};

test("suite chart reports the overall rate over all tests and the rate vs expectations", () => {
  const svg = renderSuitePassRateSvg("node-api", cmp);
  expect(svg).toContain("60/100 pass · 60.0% overall · 99.0% vs expectations");
  expect(svg).not.toContain("80.0%"); // 60/75 (skips excluded) is no longer shown anywhere
  expect(svg).toContain("<title>skip: 25</title>"); // suppressed tests are visible in the mix
  expect(svg).toContain("99/100 at or above baseline · regressions 1 · new passes 2");
});

test("top chart draws an overall bar and a vs-expectations bar per suite", () => {
  const svg = renderTopPassRateSvg([
    { workload: "a", semver: "1", digest: "d", passRate: 0.5, expectedRate: 1, regressions: 0, newPasses: 0 },
    { workload: "b", semver: "1", digest: "d", passRate: 0.25, expectedRate: 0.9, regressions: 10, newPasses: 4 },
  ]);
  expect(svg).toContain("a overall: 50.0%");
  expect(svg).toContain("a vs expectations: 100.0%");
  expect(svg).toContain("100.0% exp<"); // clean suite: no regression note
  expect(svg).toContain("90.0% exp · 10 regr, 4 new");
  // bar widths scale with each rate over the same 380px track
  expect(svg).toContain('width="190.00" height="14"');
  expect(svg).toContain('width="342.00" height="8"');
});
