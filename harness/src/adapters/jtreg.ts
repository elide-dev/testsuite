// jtreg mechanics shared by the javac (Elide) and jdk (Bali) adapters. Each adapter keeps
// only what differs: how the runtime under test is wired in and how results are read.
import { mkdirSync, mkdtempSync } from "node:fs";
import { join } from "node:path";

export type JtregOutcome = "pass" | "fail" | "error" | "skip";

/** Map a jtreg status name ("Passed", "Failed", "Error", "Not run") to a harness status. */
export function jtregOutcome(statusName: string): JtregOutcome | undefined {
  switch (statusName.toLowerCase()) {
    case "passed":
      return "pass";
    case "failed":
      return "fail";
    case "error":
      return "error";
    case "not run":
      return "skip";
    default:
      return undefined;
  }
}

export function isJtregTimeout(detail: string): boolean {
  return /timed?\s*out|timeout/i.test(detail);
}

/** A fresh per-run root under the workspace, so stale results from earlier runs never count. */
export function createJtregRunRoot(workspacePath: string): string {
  mkdirSync(workspacePath, { recursive: true });
  return mkdtempSync(join(workspacePath, "jtreg-run-"));
}

/** Flags every jtreg invocation shares. Option order is not significant to jtreg. */
export function jtregCommonArgs(options: {
  concurrency: number;
  timeoutFactor?: number;
  workDir: string;
  reportDir: string;
}): string[] {
  return [
    "-verbose:summary",
    `-concurrency:${options.concurrency}`,
    ...(options.timeoutFactor !== undefined ? [`-timeoutFactor:${options.timeoutFactor}`] : []),
    `-w:${options.workDir}`,
    `-r:${options.reportDir}`,
  ];
}

/** jtreg exits 1 for no tests, 2 for failures, and 3 for errors; those carry per-test outcomes. */
export function isJtregRunnerExit(exitCode: number): boolean {
  return ![0, 1, 2, 3].includes(exitCode);
}
