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

export interface ReportRunDir {
  semver: string;
  digest: string;
  workload: string;
  dir: string;
  summaryPath: string;
}

// Walk reports/<semver>/<short-digest>/<workload>/summary.json.
export function findReportRunDirs(reportsDir: string): ReportRunDir[] {
  const runs: ReportRunDir[] = [];
  if (!existsSync(reportsDir)) return runs;
  for (const semver of readdirSync(reportsDir)) {
    const verDir = join(reportsDir, semver);
    let digests: string[] = [];
    try { digests = readdirSync(verDir); } catch { continue; }
    for (const digest of digests) {
      const digestDir = join(verDir, digest);
      let workloads: string[] = [];
      try { workloads = readdirSync(digestDir); } catch { continue; }
      for (const workload of workloads) {
        const dir = join(digestDir, workload);
        const summaryPath = join(dir, "summary.json");
        if (!existsSync(summaryPath)) continue;
        runs.push({ semver, digest, workload, dir, summaryPath });
      }
    }
  }
  return runs;
}

export async function buildIndexJson(reportsDir: string): Promise<{ runs: IndexEntry[] }> {
  const runs: IndexEntry[] = [];
  for (const run of findReportRunDirs(reportsDir)) {
    const s = JSON.parse(await Bun.file(run.summaryPath).text());
    runs.push({
      workload: s.meta.workload,
      semver: s.meta.elide.semver,
      digest: run.digest,
      pass: s.counts.pass,
      total: s.counts.total,
      regressions: s.regressions.length,
      finishedAt: s.meta.finishedAt,
      reportDir: `${run.semver}/${run.digest}/${run.workload}`,
    });
  }
  runs.sort((a, b) => b.finishedAt.localeCompare(a.finishedAt));
  return { runs };
}

export function latestRunSummariesFromIndex(index: { runs: IndexEntry[] }): RunSummary[] {
  const latest = new Map<string, RunSummary & { finishedAt: string }>();
  for (const run of index.runs) {
    const total = run.total || 1;
    const cur: RunSummary & { finishedAt: string } = {
      workload: run.workload,
      semver: run.semver,
      digest: run.digest.slice(0, 12),
      passRate: run.pass / total,
      regressions: run.regressions,
      finishedAt: run.finishedAt,
    };
    const prev = latest.get(run.workload);
    if (!prev || cur.finishedAt > prev.finishedAt) latest.set(run.workload, cur);
  }
  return [...latest.values()].sort((a, b) => a.workload.localeCompare(b.workload));
}

// Walk reports/<semver>/<short-digest>/<workload>/summary.json, keep the newest run per workload.
export async function rebuildTopIndex(reportsDir: string): Promise<string> {
  return renderTopIndex(latestRunSummariesFromIndex(await buildIndexJson(reportsDir)));
}
