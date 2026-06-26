import type { ElideIdentity, Result } from "../results/schema";
import type { WorkloadKind } from "../registry";

export interface AdapterContext {
  elide: ElideIdentity;
  elidePath: string; // path to elide binary inside the container
  suitePath: string; // absolute path to the suite root (e.g. /work/suites/test262)
  include: string[]; // globs relative to suitePath, from registry
  skipGlobs: string[]; // file-path globs to exclude, from expectations [skip]
  threads: number;
}

export interface Adapter {
  id: string;
  kind: WorkloadKind;
  run(ctx: AdapterContext): AsyncIterable<Result>;
}
