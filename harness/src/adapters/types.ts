import type { ElideIdentity, Result } from "../results/schema";
import type { WorkloadKind } from "../registry";

export interface AdapterContext {
  elide: ElideIdentity;
  elidePath: string; // runtime under test: the elide binary, or the Bali home for target "bali"
  target?: "elide" | "bali";
  repoRoot: string; // absolute path to the repository root
  suitePath: string; // absolute path to the suite root (e.g. /work/suites/test262)
  include: string[]; // globs relative to suitePath, from registry
  skipGlobs: string[]; // file-path globs to exclude, from expectations [skip]
  threads: number;
  log?: boolean;
  verbose?: boolean;
  logPrefix?: string;
  settings: Record<string, unknown>;
  workspacePath: string;
  expectationsDir?: string; // where <workload>.toml, the ratchet, and adapter baselines live
  ratchet?: boolean; // this run may regenerate files under expectationsDir
}

export interface Adapter {
  id: string;
  kind: WorkloadKind;
  run(ctx: AdapterContext): AsyncIterable<Result>;
  /** Optional suite-specific files for the run's report directory, as name -> content. */
  reports?(ctx: AdapterContext, results: Result[]): Promise<Record<string, string>>;
}
