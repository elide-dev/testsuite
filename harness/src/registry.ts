import { readFileSync } from "node:fs";
import { parse } from "smol-toml";

export type WorkloadKind = "test" | "benchmark";
export type TargetName = "elide" | "bali";

export interface Workload {
  id: string;
  kind: WorkloadKind;
  adapter: string;
  path: string;
  target: TargetName; // runtime under test; the Elide launcher only runs "elide" workloads
  settings: Record<string, unknown>;
}

export function loadRegistry(path: string): Workload[] {
  const raw = parse(readFileSync(path, "utf8")) as {
    workload?: Array<Record<string, unknown>>;
  };
  return (raw.workload ?? []).map((w) => ({
    id: String(w.id),
    kind: w.kind as WorkloadKind,
    adapter: String(w.adapter),
    path: String(w.path),
    target: (w.target as TargetName | undefined) ?? "elide",
    settings: (w.settings as Record<string, unknown>) ?? {},
  }));
}
