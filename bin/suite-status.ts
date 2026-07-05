// Pure suite-status classification for the final summary table. Extracted from
// run.ts so the drift-aware decision (a coverage gain must not read as a
// regression) is unit-testable without ansi/rendering. See suite-status.test.ts.

export type SuiteStatus =
  | "ERROR" // harness/infra failure (rc >= 2 or no results)
  | "REGRESSED" // a previously-passing test now fails (true drift regression)
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
 * Classify a suite run for the summary. Drift (vs the previous run) is
 * authoritative: a was-passing-now-failing test is a real REGRESSED. Failures
 * that are merely unbaselined (a freshly-enabled slice) surface as GAINED (when
 * they're outnumbered by added coverage) or RED (needs ratchet), never as a
 * regression — that was the bug this classifier fixes.
 */
export function classifySuiteStatus(i: SuiteStatusInput): SuiteStatus {
  if (i.rc >= 2 || !i.hasCurrent) return "ERROR";
  if (i.driftRegressed > 0) return "REGRESSED";
  if (i.expRegressions > 0) {
    if (i.hasChanges && i.added >= i.expRegressions) return "GAINED";
    // No baseline to prove these aren't drift → treat conservatively as a
    // regression; with a baseline (no drift) they're just unratcheted.
    return i.hasChanges ? "RED" : "REGRESSED";
  }
  if (i.rc === 0 && (i.fixed > 0 || i.added > 0)) return "IMPROVED";
  return i.rc === 1 ? "RED" : "GREEN";
}
