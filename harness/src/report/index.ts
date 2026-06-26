import { join } from "node:path";
import { readdirSync, existsSync } from "node:fs";
import type { RunMeta } from "../results/schema";
import type { Comparison } from "../expectations/compare";
import { renderTopIndex, type RunSummary } from "./render";

export async function writeSummaryJson(dir: string, meta: RunMeta, c: Comparison): Promise<void> {
  const summary = {
    meta,
    counts: c.counts,
    regressions: c.regressions.map((r) => r.id),
    newPasses: c.newPasses.map((r) => r.id),
  };
  await Bun.write(join(dir, "summary.json"), JSON.stringify(summary, null, 2));
}

export interface IndexEntry {
  workload: string; semver: string; digest: string;
  pass: number; total: number; regressions: number;
  finishedAt: string; reportDir: string;
}

export async function buildIndexJson(reportsDir: string): Promise<{ runs: IndexEntry[] }> {
  const runs: IndexEntry[] = [];
  if (existsSync(reportsDir)) {
    for (const semver of readdirSync(reportsDir)) {
      const verDir = join(reportsDir, semver);
      let digests: string[] = [];
      try { digests = readdirSync(verDir); } catch { continue; }
      for (const digest of digests) {
        const sp = join(verDir, digest, "summary.json");
        if (!existsSync(sp)) continue;
        const s = JSON.parse(await Bun.file(sp).text());
        runs.push({
          workload: s.meta.workload,
          semver: s.meta.elide.semver,
          digest,
          pass: s.counts.pass,
          total: s.counts.total,
          regressions: s.regressions.length,
          finishedAt: s.meta.finishedAt,
          reportDir: `${semver}/${digest}`,
        });
      }
    }
  }
  runs.sort((a, b) => b.finishedAt.localeCompare(a.finishedAt));
  return { runs };
}

// Walk reports/<semver>/<digest>/summary.json, keep the newest run per workload.
export async function rebuildTopIndex(reportsDir: string): Promise<string> {
  const latest = new Map<string, RunSummary & { finishedAt: string }>();
  if (existsSync(reportsDir)) {
    for (const semver of readdirSync(reportsDir)) {
      const verDir = join(reportsDir, semver);
      let digests: string[] = [];
      try { digests = readdirSync(verDir); } catch { continue; }
      for (const digest of digests) {
        const sp = join(verDir, digest, "summary.json");
        if (!existsSync(sp)) continue;
        const s = JSON.parse(await Bun.file(sp).text());
        const total = s.counts.total || 1;
        const cur: RunSummary & { finishedAt: string } = {
          workload: s.meta.workload,
          semver: s.meta.elide.semver,
          digest: digest.slice(0, 12),
          passRate: s.counts.pass / total,
          regressions: s.regressions.length,
          finishedAt: s.meta.finishedAt,
        };
        const prev = latest.get(s.meta.workload);
        if (!prev || cur.finishedAt > prev.finishedAt) latest.set(s.meta.workload, cur);
      }
    }
  }
  return renderTopIndex([...latest.values()]);
}
