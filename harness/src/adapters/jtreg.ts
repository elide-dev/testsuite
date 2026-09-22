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

/**
 * jtreg could not launch a program at all: the fork was refused. Always the runner, never the
 * runtime — a test that never started says nothing about compatibility.
 */
const LAUNCH_REFUSED = /posix_spawn failed|Failed to exec spawn helper|Resource temporarily unavailable/;

/**
 * Whether an `execStatus` shows the harness itself ran out of processes or threads.
 *
 * The distinction that matters is whose thread failed. `Error. Unexpected error caught from
 * test X: ...OutOfMemoryError: unable to create native thread` is jtreg's own harness thread,
 * so the test never ran. `Failed. Execution failed: 'main' threw exception: ...OutOfMemoryError`
 * is the test's own throw, which is a result — and for the virtual-thread stress tests, whose
 * entire subject is exhausting threads, it is the result being measured.
 */
export function isResourceExhaustion(detail: string): boolean {
  if (LAUNCH_REFUSED.test(detail)) return true;
  return /^Error\./.test(detail) && /Unexpected error caught from test/.test(detail) && /unable to create native thread/i.test(detail);
}

/**
 * Whether a build or compile action failed because it could not fork.
 *
 * A build action that cannot start `javac` reports a bare "Compilation failed" in the result
 * header and keeps the `IOException` in its own section, so the header alone cannot tell that
 * apart from code that does not compile. Only jtreg's own sections are searched: a test's
 * stdout may legitimately contain any of these words, and several exist to produce them.
 */
export function isForkFailure(sectionOutput: string): boolean {
  return /Cannot run program/.test(sectionOutput) && LAUNCH_REFUSED.test(sectionOutput);
}

/** jtreg sections that are the harness's own work rather than the test's output. */
export const HARNESS_SECTIONS = new Set(["build", "compile"]);

/** The output of the harness's own sections, which is where infrastructure failures surface. */
export function harnessSections(text: string): string {
  return text
    .split("\n#section:")
    .slice(1)
    .filter((section) => HARNESS_SECTIONS.has(section.split(/\r?\n/, 1)[0]!.trim()))
    .join("\n");
}
