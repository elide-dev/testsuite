// Pure suite-status classification for the final summary table. Extracted from
// run.ts so the drift-aware decision (a coverage gain must not read as a
// regression, and an advancing floor must not read as RED) is unit-testable
// without ansi/rendering. See suite-status.test.ts.

export type SuiteStatus =
  | "ERROR" // harness/infra failure (rc >= 2 or no results)
  | "REGRESSED" // net loss: previously-passing tests now fail, and nothing outweighs them
  | "ADVANCED" // the floor moved up (new passes / fixed tests) but something still needs attention
  | "GAINED" // newly-added coverage whose failures are all new (awaiting ratchet)
  | "IMPROVED" // green run that also fixed tests or added passing coverage
  | "RED" // unbaselined failures, but no drift regression (needs ratchet)
  | "GREEN"; // clean, no regressions

export interface SuiteStatusInput {
  /** Suite process exit code: 0 green, 1 red/regressions, >=2 harness error. */
  rc: number;
  /** Whether a current-run summary exists. */
  hasCurrent: boolean;
  /** Expectation-regressions this run (fails not covered by skip/fail/ratchet). */
  expRegressions: number;
  /** Tests that passed although the expectations say they fail (the floor advanced). */
  newPasses?: number;
  /** Drift regressions vs the previous run (was passing, now failing). */
  driftRegressed: number;
  /** Tests observed in newly-added coverage this run. */
  added: number;
  /** Tests that flipped from failing to passing vs the previous run. */
  fixed: number;
  /** Whether a previous-run baseline (changes.json) was available. */
  hasChanges: boolean;
}

/**
 * How far the floor advanced this run. `newPasses` (vs the expectations) and
 * `fixed` (vs the previous run) usually describe the same tests, so take the
 * larger rather than summing.
 */
export function floorAdvance(i: Pick<SuiteStatusInput, "newPasses" | "fixed">): number {
  return Math.max(i.newPasses ?? 0, i.fixed);
}

/**
 * Classify a suite run for the summary.
 *
 * Progress is judged on net terms: tests that newly pass (vs the expectations
 * or vs the previous run) are weighed against drift regressions. A run whose
 * floor advanced is ADVANCED (or IMPROVED when it is otherwise clean), never
 * RED — the point is to reward the gain and prompt a ratchet. Drift regressions
 * that are NOT outweighed by gains are still REGRESSED: a was-passing-now-failing
 * test is a real problem, and added coverage alone never masks it.
 *
 * Failures that are merely unbaselined (a freshly-enabled slice) surface as
 * GAINED (when they're outnumbered by added coverage) or RED (needs ratchet).
 */
export function classifySuiteStatus(i: SuiteStatusInput): SuiteStatus {
  if (i.rc >= 2 || !i.hasCurrent) return "ERROR";
  const advanced = floorAdvance(i);
  if (i.driftRegressed > 0 && i.driftRegressed >= advanced) return "REGRESSED";
  if (advanced > 0) {
    const clean = i.rc === 0 && i.driftRegressed === 0 && i.expRegressions === 0;
    return clean ? "IMPROVED" : "ADVANCED";
  }
  if (i.expRegressions > 0) {
    if (i.hasChanges && i.added >= i.expRegressions) return "GAINED";
    // No baseline to prove these aren't drift → treat conservatively as a
    // regression; with a baseline (no drift) they're just unratcheted.
    return i.hasChanges ? "RED" : "REGRESSED";
  }
  if (i.rc === 0 && i.added > 0) return "IMPROVED";
  return i.rc === 1 ? "RED" : "GREEN";
}
