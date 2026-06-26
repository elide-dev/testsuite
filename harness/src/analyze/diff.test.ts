import { test, expect } from "bun:test";
import { diffRuns, renderDiffMd, type RunResults } from "./diff";

const a: RunResults = {
  ref: { semver: "1.0.0", digest: "aaa" },
  statuses: new Map([
    ["x default", "pass"],
    ["y default", "fail"],
    ["z default", "fail"],
    ["gone default", "pass"],
  ]),
};
const b: RunResults = {
  ref: { semver: "1.1.0", digest: "bbb" },
  statuses: new Map([
    ["x default", "fail"], // regressed
    ["y default", "pass"], // fixed
    ["z default", "error"], // still failing
    ["new default", "pass"], // added
  ]),
};

test("buckets fixed/regressed/added/removed/stillFailing", () => {
  const d = diffRuns(a, b);
  expect(d.regressed).toEqual(["x default"]);
  expect(d.fixed).toEqual(["y default"]);
  expect(d.stillFailing).toBe(1); // z
  expect(d.added).toBe(1); // new
  expect(d.removed).toBe(1); // gone
});

test("renders markdown with the version refs and counts", () => {
  const md = renderDiffMd(diffRuns(a, b));
  expect(md).toContain("1.0.0");
  expect(md).toContain("1.1.0");
  expect(md).toContain("Regressed (1)");
  expect(md).toContain("Fixed (1)");
});
