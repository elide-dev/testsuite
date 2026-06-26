import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Database } from "bun:sqlite";
import { readResults, type StoredRun } from "../results/store";

export interface RunRef { semver: string; digest: string }
export interface RunResults { ref: RunRef; statuses: Map<string, string> }
export interface DiffResult {
  from: RunRef;
  to: RunRef;
  fixed: string[];
  regressed: string[];
  added: number;
  removed: number;
  stillFailing: number;
}

const isFail = (s: string | undefined): boolean => s === "fail" || s === "error";

export function diffRuns(a: RunResults, b: RunResults): DiffResult {
  const d: DiffResult = {
    from: a.ref, to: b.ref,
    fixed: [], regressed: [], added: 0, removed: 0, stillFailing: 0,
  };
  for (const [id, bs] of b.statuses) {
    const as = a.statuses.get(id);
    if (as === undefined) { d.added++; continue; }
    if (isFail(as) && bs === "pass") d.fixed.push(id);
    else if (as === "pass" && isFail(bs)) d.regressed.push(id);
    else if (isFail(as) && isFail(bs)) d.stillFailing++;
  }
  for (const id of a.statuses.keys()) if (!b.statuses.has(id)) d.removed++;
  d.fixed.sort();
  d.regressed.sort();
  return d;
}

export function renderDiffMd(d: DiffResult): string {
  const lines: string[] = [];
  lines.push(`# Changes — \`${d.from.semver}\` → \`${d.to.semver}\``, "");
  lines.push(`- From: \`${d.from.semver}\` (\`${d.from.digest}\`)`);
  lines.push(`- To: \`${d.to.semver}\` (\`${d.to.digest}\`)`, "");
  lines.push(`| regressed | fixed | added | removed | still failing |`);
  lines.push(`|---:|---:|---:|---:|---:|`);
  lines.push(`| ${d.regressed.length} | ${d.fixed.length} | ${d.added} | ${d.removed} | ${d.stillFailing} |`, "");
  if (d.regressed.length) {
    lines.push(`## ❌ Regressed (${d.regressed.length})`, "");
    for (const id of d.regressed.slice(0, 200)) lines.push(`- \`${id}\``);
    if (d.regressed.length > 200) lines.push(`- …and ${d.regressed.length - 200} more`);
    lines.push("");
  }
  if (d.fixed.length) {
    lines.push(`## ✅ Fixed (${d.fixed.length})`, "");
    for (const id of d.fixed.slice(0, 200)) lines.push(`- \`${id}\``);
    if (d.fixed.length > 200) lines.push(`- …and ${d.fixed.length - 200} more`);
    lines.push("");
  }
  return lines.join("\n");
}

export function toRunResults(run: StoredRun): RunResults {
  const statuses = new Map<string, string>();
  for (const r of run.results) if (r.kind === "test") statuses.set(r.id, r.status);
  return { ref: { semver: run.meta.elide.semver, digest: run.meta.elide.digest }, statuses };
}

// Find the most recent OTHER run dir for this workload (by finished_at), or null.
export async function findPreviousRunDir(
  reportsDir: string,
  workload: string,
  current: RunRef,
): Promise<string | null> {
  if (!existsSync(reportsDir)) return null;
  let best: { dir: string; finishedAt: string } | null = null;
  for (const semver of readdirSync(reportsDir)) {
    const verDir = join(reportsDir, semver);
    let digests: string[] = [];
    try { digests = readdirSync(verDir); } catch { continue; }
    for (const digest of digests) {
      const dir = join(verDir, digest);
      const sp = join(dir, "summary.json");
      if (!existsSync(sp)) continue;
      const s = JSON.parse(await Bun.file(sp).text());
      if (s.meta.workload !== workload) continue;
      if (s.meta.elide.semver === current.semver && digest.startsWith(current.digest.slice(0, 12))) continue;
      const finishedAt = s.meta.finishedAt as string;
      if (!best || finishedAt > best.finishedAt) best = { dir, finishedAt };
    }
  }
  return best?.dir ?? null;
}

// Load a run's per-test statuses from the DB by run id.
export function loadRunResultsFromDb(db: Database, runId: number, ref: RunRef): RunResults {
  const rows = db.query("SELECT test_id, status FROM results WHERE run_id = ?").all(runId) as
    { test_id: string; status: string }[];
  const statuses = new Map<string, string>();
  for (const row of rows) statuses.set(row.test_id, row.status);
  return { ref, statuses };
}
