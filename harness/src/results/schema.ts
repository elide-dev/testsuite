import type { WorkloadKind } from "../registry";

export type TestStatus = "pass" | "fail" | "skip" | "error";

export interface ElideIdentity {
  semver: string;
  digest: string; // sha256 hex (no algo prefix)
}

export interface RunMeta {
  workload: string;
  kind: WorkloadKind;
  elide: ElideIdentity;
  startedAt: string;
  finishedAt: string;
  suiteVersion?: string; // submodule commit
}

export interface TestResult {
  kind: "test";
  id: string; // e.g. "language/types/number/foo.js default"
  status: TestStatus;
  message?: string;
  durationMs?: number;
  meta?: Record<string, unknown>; // features, flags, chapter
}

export interface BenchResult {
  kind: "benchmark";
  id: string;
  metric: string;
  value: number;
  unit: string;
  variance?: number;
  samples?: number;
}

export type Result = TestResult | BenchResult;

export function isTest(r: Result): r is TestResult {
  return r.kind === "test";
}
