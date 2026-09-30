import { expect, test } from "bun:test";
import { classifySuiteStatus, floorAdvance, type SuiteStatusInput } from "./suite-status";

const base: SuiteStatusInput = {
  rc: 0,
  hasCurrent: true,
  expRegressions: 0,
  newPasses: 0,
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
  expect(classifySuiteStatus({ ...base, rc: 0, newPasses: 3, hasChanges: false })).toBe("IMPROVED");
});

test("new passes with unratcheted failures is ADVANCED, not RED", () => {
  // e.g. node-api: 35 tests now beat the baseline, 1 unbaselined fail → reward the advance.
  expect(
    classifySuiteStatus({ ...base, rc: 1, expRegressions: 1, newPasses: 35, fixed: 35 }),
  ).toBe("ADVANCED");
  // Same without a previous-run baseline: the new passes are proof of progress.
  expect(
    classifySuiteStatus({ ...base, rc: 1, expRegressions: 1, newPasses: 35, hasChanges: false }),
  ).toBe("ADVANCED");
});

test("drift regressions outweighed by fixes is ADVANCED (regressions still listed in changes)", () => {
  // e.g. wpt-wintertc: 5 regressed vs 371 fixed.
  expect(
    classifySuiteStatus({ ...base, rc: 1, expRegressions: 172, driftRegressed: 5, fixed: 371, newPasses: 371, added: 5974 }),
  ).toBe("ADVANCED");
});

test("drift regressions that match or exceed the gains are REGRESSED", () => {
  expect(classifySuiteStatus({ ...base, rc: 1, driftRegressed: 3, fixed: 3, newPasses: 3 })).toBe("REGRESSED");
  expect(classifySuiteStatus({ ...base, rc: 1, driftRegressed: 4, fixed: 1 })).toBe("REGRESSED");
});

test("floorAdvance takes the larger of newPasses and fixed", () => {
  expect(floorAdvance({ newPasses: 2, fixed: 5 })).toBe(5);
  expect(floorAdvance({ fixed: 0 })).toBe(0);
});

test("green run that added passing coverage is IMPROVED", () => {
  expect(classifySuiteStatus({ ...base, rc: 0, added: 10 })).toBe("IMPROVED");
});

test("rc=1 with no expectation regressions and no baseline is RED", () => {
  expect(classifySuiteStatus({ ...base, rc: 1, hasChanges: false })).toBe("RED");
});
