import { join } from "node:path";
import type { Result, RunMeta } from "./schema";

export interface StoredRun {
  meta: RunMeta;
  results: Result[];
}

export async function writeResults(
  dir: string,
  meta: RunMeta,
  results: Result[],
): Promise<void> {
  const payload: StoredRun = { meta, results };
  const json = JSON.stringify(payload);
  const gz = Bun.gzipSync(new TextEncoder().encode(json));
  await Bun.write(join(dir, "results.json.gz"), gz);
}

export async function readResults(dir: string): Promise<StoredRun> {
  const gz = await Bun.file(join(dir, "results.json.gz")).arrayBuffer();
  const json = new TextDecoder().decode(Bun.gunzipSync(new Uint8Array(gz)));
  return JSON.parse(json) as StoredRun;
}
