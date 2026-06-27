import { mkdirSync } from "node:fs";
import { isAbsolute, join, relative, resolve } from "node:path";
import { ADAPTERS } from "./adapters";
import type { AdapterContext } from "./adapters/types";
import { loadRegistry } from "./registry";
import { resolveIdentity } from "./elide";
import { loadExpectations, skipGlobs } from "./expectations/load";
import type { Expectations } from "./expectations/load";
import { compare } from "./expectations/compare";
import { ratchetCandidates, writeRatchet, ratchetPath } from "./expectations/ratchet";
import { writeResults, readResults } from "./results/store";
import { diffRuns, renderDiffMd, toRunResults, findPreviousRunDir, loadRunResultsFromDb } from "./analyze/diff";
import type { Result, RunMeta, TestResult } from "./results/schema";
import { renderSuiteReport, renderRunIndex, renderTopIndex } from "./report/render";
import { writeSummaryJson, buildIndexJson, latestRunSummariesFromIndex } from "./report/index";
import { renderSuitePassRateSvg, renderTopPassRateSvg } from "./report/charts";
import { updateReadmeCompatSummary } from "./report/readme";
import { Database } from "bun:sqlite";
import { openDb } from "./db/open";
import { resetDb } from "./db/schema";
import { ingestAll } from "./db/ingest";
import { computeImpact, renderImpactMd } from "./analyze/impact";

export interface CliOptions {
  command: string;
  workload: string;
  registryPath: string;
  repoRoot: string;
  elidePath: string;
  digest: string;
  suiteRoot: string;
  reportsDir: string;
  expectationsDir: string;
  threads: number;
  log: boolean;
  verbose: boolean;
  failureOutput: "show" | "hide";
  include?: string; // comma-separated glob override (else registry settings.include)
  suiteVersion?: string;
  ratchet: boolean;
  updateSummaries: boolean;
}

export const REPO_ROOT = resolve(import.meta.dir, "../..");
export const REGISTRY_PATH = resolve(REPO_ROOT, "registry.toml");
export const REPORTS_DIR = resolve(REPO_ROOT, "reports");
export const WORK_DIR = resolve(REPO_ROOT, ".harness/work");

export function parseArgs(argv: string[]): CliOptions {
  const [command, workload, ...rest] = argv;
  const get = (flag: string, dflt: string): string => {
    const i = rest.indexOf(flag);
    return i >= 0 ? rest[i + 1] : dflt;
  };
  const failureOutputValue = get("--failure-output", rest.includes("--hide-failure-output") ? "hide" : "show");
  if (failureOutputValue !== "show" && failureOutputValue !== "hide") {
    throw new Error("--failure-output must be 'show' or 'hide'");
  }
  return {
    command,
    workload,
    registryPath: get("--registry", REGISTRY_PATH),
    repoRoot: get("--repo-root", REPO_ROOT),
    elidePath: get("--elide-path", "/opt/elide/bin/elide"),
    digest: get("--digest", "local"),
    suiteRoot: get("--suite-root", resolve(REPO_ROOT, "suites")),
    reportsDir: get("--reports", REPORTS_DIR),
    expectationsDir: get("--expectations", resolve(REPO_ROOT, "expectations")),
    threads: parseInt(get("--threads", "1"), 10),
    log: rest.includes("--log"),
    verbose: rest.includes("--verbose"),
    failureOutput: rest.includes("--show-failure-output") ? "show" : failureOutputValue,
    include: get("--include", "") || undefined,
    suiteVersion: get("--suite-version", "") || undefined,
    ratchet: rest.includes("--ratchet"),
    updateSummaries: rest.includes("--update-summaries"),
  };
}

const DB_PATH = resolve(REPO_ROOT, ".harness/results.sqlite");

export async function dbBuild(reportsDir = REPORTS_DIR): Promise<number> {
  const db = openDb(DB_PATH);
  resetDb(db);
  const n = await ingestAll(db, reportsDir, { force: true });
  console.log(`db build: ingested ${n} run(s) into ${DB_PATH}`);
  return 0;
}

interface RunRow {
  id: number;
  semver: string;
  digest: string;
}

function knownWorkloads(db: Database): Set<string> {
  const rows = db.query("SELECT DISTINCT workload FROM runs").all() as { workload: string }[];
  return new Set(rows.map((row) => row.workload));
}

function resolveAdHocWorkload(db: Database, args: string[], fallback = "test262"): { workload: string; refs: string[] } {
  const workloads = knownWorkloads(db);
  const [first, ...rest] = args;
  if (!first) return { workload: fallback, refs: [] };
  if (workloads.has(first)) return { workload: first, refs: rest };
  if (workloads.has(fallback)) return { workload: fallback, refs: args };
  return { workload: first, refs: rest };
}

function pickRun(rows: RunRow[], ref?: string): RunRow | undefined {
  if (!ref) return undefined;
  return rows.find((row) => row.semver === ref || `${row.semver}/${row.digest}` === ref || row.digest.startsWith(ref));
}

export async function runAdHocDiff(db: Database, reportsDir: string, args: string[]): Promise<string> {
  await ingestAll(db, reportsDir);
  const { workload, refs } = resolveAdHocWorkload(db, args);
  const rows = db
    .query(`SELECT id, semver, digest FROM runs WHERE workload = ? ORDER BY finished_at DESC`)
    .all(workload) as RunRow[];
  const b = pickRun(rows, refs[0]) ?? rows[0];
  const a = pickRun(rows, refs[1]) ?? rows[1];
  if (!a || !b) throw new Error(`need two ${workload} runs to diff (run \`db build\` first)`);
  const ra = loadRunResultsFromDb(db, a.id, { semver: a.semver, digest: a.digest });
  const rb = loadRunResultsFromDb(db, b.id, { semver: b.semver, digest: b.digest });
  return renderDiffMd(diffRuns(ra, rb));
}

export async function runAdHocImpact(db: Database, reportsDir: string, args: string[]): Promise<string> {
  await ingestAll(db, reportsDir);
  const { workload, refs } = resolveAdHocWorkload(db, args);
  const where = refs[0]
    ? "WHERE workload = ? AND semver = ?" + (refs[1] ? " AND digest LIKE ?||'%'" : "")
    : "WHERE workload = ?";
  const params = refs[0] ? (refs[1] ? [workload, refs[0], refs[1]] : [workload, refs[0]]) : [workload];
  const run = db
    .query(`SELECT id FROM runs ${where} ORDER BY finished_at DESC LIMIT 1`)
    .get(...params) as { id: number } | undefined;
  if (!run) throw new Error(`no matching ${workload} run (run \`db build\` first)`);
  const rows = db
    .query("SELECT test_id, status, message, features FROM results WHERE run_id = ? AND status IN ('fail','error')")
    .all(run.id) as { test_id: string; status: string; message: string | null; features: string | null }[];
  const failRows = rows.map((row) => ({
    id: row.test_id,
    status: row.status,
    message: row.message ?? undefined,
    features: row.features ? row.features.split(",") : [],
  }));
  return renderImpactMd(computeImpact(failRows));
}

const MARK: Record<string, string> = {
  pass: "✅",
  fail: "❌",
  error: "🛑",
  skip: "⊘",
};

export function suitePathForWorkload(repoRoot: string, suiteRoot: string, workloadPath: string): string {
  const suiteBase = resolve(repoRoot, "suites");
  const absWorkloadPath = isAbsolute(workloadPath) ? workloadPath : resolve(repoRoot, workloadPath);
  return resolve(suiteRoot, relative(suiteBase, absWorkloadPath));
}

export function buildAdapterContext(
  o: CliOptions,
  wl: Pick<{ id: string; path: string; settings: Record<string, unknown> }, "id" | "path" | "settings">,
  identity: Awaited<ReturnType<typeof resolveIdentity>>,
  exp: Expectations,
  workspacePath = resolve(WORK_DIR, wl.id),
): AdapterContext {
  const settings = { ...wl.settings };
  if (typeof settings.manifest === "string" && !isAbsolute(settings.manifest)) {
    settings.manifest = resolve(o.repoRoot, settings.manifest);
  }
  return {
    elide: identity,
    elidePath: o.elidePath,
    repoRoot: o.repoRoot,
    suitePath: suitePathForWorkload(o.repoRoot, o.suiteRoot, wl.path),
    include: o.include
      ? o.include.split(",").map((s) => s.trim()).filter(Boolean)
      : Array.isArray(wl.settings.include) ? (wl.settings.include as string[]) : [],
    skipGlobs: skipGlobs(exp),
    threads: o.threads,
    log: o.log,
    verbose: o.verbose,
    settings,
    workspacePath,
  };
}

export async function main(o: CliOptions): Promise<number> {
  const registry = loadRegistry(o.registryPath);
  const wl = registry.find((w) => w.id === o.workload);
  if (!wl) throw new Error(`unknown workload: ${o.workload}`);
  const adapter = ADAPTERS[wl.adapter];
  if (!adapter) throw new Error(`no adapter for: ${wl.adapter}`);

  const identity = await resolveIdentity(o.elidePath, o.digest);
  const exp = loadExpectations(join(o.expectationsDir, `${wl.id}.toml`));
  const startedAt = new Date().toISOString();

  const workspacePath = resolve(o.repoRoot, ".harness/work", wl.id);
  mkdirSync(workspacePath, { recursive: true });
  const ctx = buildAdapterContext(o, wl, identity, exp, workspacePath);

  const results: Result[] = [];
  for await (const r of adapter.run(ctx)) {
    results.push(r);
    if (o.log && r.kind === "test") {
      // Live per-test marks go to stderr so stdout stays clean for the summary.
      const shouldPrintFailureOutput = o.failureOutput === "show" && (r.status === "fail" || r.status === "error");
      const tail = shouldPrintFailureOutput ? `  — ${r.message ?? ""}` : "";
      process.stderr.write(`${MARK[r.status] ?? "?"} ${r.id}${tail}\n`);
    }
  }
  const finishedAt = new Date().toISOString();

  const tests = results.filter((r): r is TestResult => r.kind === "test");
  if (tests.length === 0) {
    throw new Error(`no test results emitted for workload '${wl.id}'`);
  }
  const cmp = compare(tests, exp);
  let comparison = cmp;
  if (o.ratchet) {
    const ids = ratchetCandidates(tests, exp);
    const header =
      `# AUTO-GENERATED by \`run --ratchet\`. Do not edit by hand.\n` +
      `# Generated for elide ${identity.semver} (sha ${identity.digest.slice(0, 12)}) on ${finishedAt}.`;
    writeRatchet(ratchetPath(o.expectationsDir, wl.id), ids, header);
    for (const id of ids) exp.ratchet.add(id);
    comparison = compare(tests, exp); // re-evaluate: ratcheted fails are now expected
  }

  const meta: RunMeta = {
    workload: wl.id,
    kind: wl.kind,
    elide: identity,
    startedAt,
    finishedAt,
    suiteVersion: o.suiteVersion,
  };

  // Keep the digest path component safe (no '/' or ':' from a stray tag ref).
  const shortDigest = identity.digest.replace(/[^0-9a-zA-Z]/g, "").slice(0, 12) || "local";
  const outDir = join(o.reportsDir, identity.semver, shortDigest, wl.id);
  mkdirSync(outDir, { recursive: true });
  await writeResults(outDir, meta, results);
  await writeSummaryJson(outDir, meta, comparison);
  await Bun.write(join(outDir, "pass-rate.svg"), renderSuitePassRateSvg(wl.id, comparison));
  await Bun.write(join(outDir, `${wl.id}.md`), renderSuiteReport(meta, comparison));
  await Bun.write(join(outDir, "index.md"), renderRunIndex(meta, comparison));
  const index = await buildIndexJson(o.reportsDir);
  const latest = latestRunSummariesFromIndex(index);
  await Bun.write(join(o.reportsDir, "pass-rate.svg"), renderTopPassRateSvg(latest));
  await Bun.write(join(o.reportsDir, "index.md"), renderTopIndex(latest));
  await Bun.write(join(o.reportsDir, "index.json"), JSON.stringify(index, null, 2));
  if (o.updateSummaries) {
    await updateReadmeCompatSummary(join(o.repoRoot, "README.md"), index);
  }

  // Per-version changelog vs the previous run of this workload.
  const prevDir = await findPreviousRunDir(o.reportsDir, wl.id, identity);
  if (prevDir) {
    const prev = toRunResults(await readResults(prevDir));
    const diff = diffRuns(prev, toRunResults({ meta, results }));
    await Bun.write(join(outDir, "changes.json"), JSON.stringify(diff, null, 2));
    await Bun.write(join(outDir, "changes.md"), renderDiffMd(diff));
  }

  // Impact-ordered failure clustering for this run.
  const failRows = tests
    .filter((t) => t.status === "fail" || t.status === "error")
    .map((t) => ({
      id: t.id,
      status: t.status,
      message: t.message,
      features: (t.meta?.features as string[]) ?? [],
    }));
  const impact = computeImpact(failRows);
  await Bun.write(join(outDir, "impact.json"), JSON.stringify(impact, null, 2));
  await Bun.write(join(outDir, "impact.md"), renderImpactMd(impact));

  const green = comparison.regressions.length === 0;
  console.log(
    `${wl.id} @ ${identity.semver}: ${comparison.counts.pass}/${comparison.counts.total} pass, ` +
      `${comparison.regressions.length} regressions, ${comparison.newPasses.length} new passes — ${green ? "GREEN" : "RED"}`,
  );
  return green ? 0 : 1;
}

if (import.meta.main) {
  const argv = Bun.argv.slice(2);
  const command = argv[0];
  let code = 0;
  try {
  switch (command) {
    case "run":
      code = await main(parseArgs(argv));
      break;
    case "db":
      if (argv[1] !== "build") {
        console.error("usage: cli.ts db build");
        code = 2;
      } else {
        code = await dbBuild();
      }
      break;
    case "diff": {
      const db = openDb(DB_PATH);
      console.log(await runAdHocDiff(db, REPORTS_DIR, argv.slice(1)));
      break;
    }
    case "impact": {
      const db = openDb(DB_PATH);
      console.log(await runAdHocImpact(db, REPORTS_DIR, argv.slice(1)));
      break;
    }
    case "query": {
      const sql = argv[1] ?? "";
      // Fast, friendly rejection of obvious writes...
      if (!/^\s*(select|with)\b/i.test(sql)) {
        console.error("query: only read-only SELECT/WITH statements are allowed");
        code = 2; break;
      }
      // ...but the real guard is SQLite itself: ingest with a writable handle,
      // then run the user's SQL on a READ-ONLY connection so any write is
      // rejected at the engine level regardless of statement shape (defeats
      // multi-statement / `WITH ... DELETE` allowlist escapes).
      const wdb = openDb(DB_PATH);
      await ingestAll(wdb, REPORTS_DIR);
      wdb.close();
      const ro = new Database(DB_PATH, { readonly: true });
      try {
        console.log(JSON.stringify(ro.query(sql).all(), null, 2));
      } finally {
        ro.close();
      }
      break;
    }
    default:
      console.error("usage: cli.ts <run|db build|diff|impact|query> …");
      code = 2;
  }
  } catch (err) {
    // Distinct from exit 1 (regressions): a thrown setup/runtime error.
    console.error(
      `harness error: ${err instanceof Error ? (err.stack ?? err.message) : String(err)}`,
    );
    code = 2;
  }
  process.exit(code);
}
