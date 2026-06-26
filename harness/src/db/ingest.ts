import type { Database } from "bun:sqlite";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { normalizeSignature } from "../analyze/signature";
import { readResults, type StoredRun } from "../results/store";

export function ingestRun(db: Database, run: StoredRun): number {
  const tx = db.transaction((r: StoredRun) => {
    db.query(
      "DELETE FROM runs WHERE workload = ? AND semver = ? AND digest = ?",
    ).run(r.meta.workload, r.meta.elide.semver, r.meta.elide.digest);
    const info = db
      .query(
        `INSERT INTO runs (workload, semver, digest, suite_version, started_at, finished_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        r.meta.workload,
        r.meta.elide.semver,
        r.meta.elide.digest,
        r.meta.suiteVersion ?? null,
        r.meta.startedAt,
        r.meta.finishedAt,
      );
    const runId = Number(info.lastInsertRowid);
    const ins = db.query(
      `INSERT INTO results (run_id, test_id, status, message, signature, features)
       VALUES (?, ?, ?, ?, ?, ?)`,
    );
    for (const res of r.results) {
      if (res.kind !== "test") continue;
      const failing = res.status === "fail" || res.status === "error";
      const sig = failing ? normalizeSignature(res.message) : null;
      const features = ((res.meta?.features as string[]) ?? []).join(",") || null;
      ins.run(runId, res.id, res.status, res.message ?? null, sig, features);
    }
    return runId;
  });
  return tx(run);
}

// Ingest every committed run under reportsDir/<semver>/<digest>/results.json.gz.
// Idempotent: skips runs already present (by workload/semver/digest) unless force.
export async function ingestAll(
  db: Database,
  reportsDir: string,
  opts: { force?: boolean } = {},
): Promise<number> {
  if (!existsSync(reportsDir)) return 0;
  let n = 0;
  for (const semver of readdirSync(reportsDir)) {
    const verDir = join(reportsDir, semver);
    let digests: string[] = [];
    try { digests = readdirSync(verDir); } catch { continue; }
    for (const digest of digests) {
      const dir = join(verDir, digest);
      if (!existsSync(join(dir, "results.json.gz"))) continue;
      const stored = await readResults(dir);
      if (!opts.force) {
        const present = db
          .query("SELECT 1 FROM runs WHERE workload = ? AND semver = ? AND digest = ?")
          .get(stored.meta.workload, stored.meta.elide.semver, stored.meta.elide.digest);
        if (present) continue;
      }
      ingestRun(db, stored);
      n++;
    }
  }
  return n;
}
