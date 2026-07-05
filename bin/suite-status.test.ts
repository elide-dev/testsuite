import { expect, test } from "bun:test";
import { classifySuiteStatus, type SuiteStatusInput } from "./suite-status";

const base: SuiteStatusInput = {
  rc: 0,
  hasCurrent: true,
  expRegressions: 0,
  driftRegressed: 0,
  added: 0,
  fixed: 0,
  hasChanges: true,
};

test("clean run is GREEN", () => {
  expect(classifySuiteStatus({ ...base, hasChanges: false })).toBe("GREEN");
});

test("harness failure (rc>=2) is ERROR regardless of counts", () => {
  expect(classifySuiteStatus({ ...base, rc: 2, fixed: 5 })).toBe("ERROR");
});

test("missing current summary is ERROR", () => {
  expect(classifySuiteStatus({ ...base, hasCurrent: false })).toBe("ERROR");
});

test("a drift regression is REGRESSED even amid a coverage gain", () => {
  // The bug this fixes: added coverage must not mask a real was-pass-now-fail.
  expect(
    classifySuiteStatus({ ...base, rc: 1, driftRegressed: 1, added: 500, expRegressions: 500 }),
  ).toBe("REGRESSED");
});

test("newly-enabled slice whose failures are outnumbered by adds is GAINED", () => {
  // e.g. Atomics: 218 unbaselined fails, 218+ added, no drift → GAINED, not REGRESSED.
  expect(
    classifySuiteStatus({ ...base, rc: 1, expRegressions: 218, added: 780, driftRegressed: 0 }),
  ).toBe("GAINED");
});

test("unbaselined fails with a baseline but no coverage gain is RED (needs ratchet)", () => {
  expect(
    classifySuiteStatus({ ...base, rc: 1, expRegressions: 4, added: 0, driftRegressed: 0 }),
  ).toBe("RED");
});

test("unbaselined fails with NO baseline are conservatively REGRESSED", () => {
  expect(
    classifySuiteStatus({ ...base, rc: 1, expRegressions: 4, hasChanges: false }),
  ).toBe("REGRESSED");
});

test("green run that fixed tests is IMPROVED", () => {
  expect(classifySuiteStatus({ ...base, rc: 0, fixed: 3 })).toBe("IMPROVED");
});

test("green run that added passing coverage is IMPROVED", () => {
  expect(classifySuiteStatus({ ...base, rc: 0, added: 10 })).toBe("IMPROVED");
});

test("rc=1 with no expectation regressions and no baseline is RED", () => {
  expect(classifySuiteStatus({ ...base, rc: 1, hasChanges: false })).toBe("RED");
});
