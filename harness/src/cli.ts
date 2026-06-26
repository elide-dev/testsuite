import { join, resolve } from "node:path";
import { mkdirSync } from "node:fs";
import { loadRegistry } from "./registry";
import { resolveIdentity } from "./elide";
import { loadExpectations, skipGlobs } from "./expectations/load";
import { compare } from "./expectations/compare";
import { writeResults } from "./results/store";
import { test262Adapter } from "./adapters/test262";
import type { Adapter } from "./adapters/types";
import type { Result, RunMeta, TestResult } from "./results/schema";
import { renderSuiteReport, renderRunIndex } from "./report/render";
import { writeSummaryJson, rebuildTopIndex } from "./report/index";

export interface CliOptions {
  command: string;
  workload: string;
  elidePath: string;
  digest: string;
  suiteRoot: string;
  reportsDir: string;
  expectationsDir: string;
  threads: number;
  log: boolean;
  include?: string; // comma-separated glob override (else registry settings.include)
}

const ADAPTERS: Record<string, Adapter> = { test262: test262Adapter };

export function parseArgs(argv: string[]): CliOptions {
  const [command, workload, ...rest] = argv;
  const get = (flag: string, dflt: string): string => {
    const i = rest.indexOf(flag);
    return i >= 0 ? rest[i + 1] : dflt;
  };
  return {
    command,
    workload,
    elidePath: get("--elide-path", "/opt/elide/bin/elide"),
    digest: get("--digest", "local"),
    suiteRoot: get("--suite-root", resolve("suites")),
    reportsDir: get("--reports", resolve("reports")),
    expectationsDir: get("--expectations", resolve("expectations")),
    threads: parseInt(get("--threads", "1"), 10),
    log: rest.includes("--log"),
    include: get("--include", "") || undefined,
  };
}

const MARK: Record<string, string> = {
  pass: "✅",
  fail: "❌",
  error: "🛑",
  skip: "⊘",
};

export async function main(o: CliOptions): Promise<number> {
  const registry = loadRegistry(resolve("registry.toml"));
  const wl = registry.find((w) => w.id === o.workload);
  if (!wl) throw new Error(`unknown workload: ${o.workload}`);
  const adapter = ADAPTERS[wl.adapter];
  if (!adapter) throw new Error(`no adapter for: ${wl.adapter}`);

  const identity = await resolveIdentity(o.elidePath, o.digest);
  const exp = loadExpectations(join(o.expectationsDir, `${wl.id}.toml`));
  const startedAt = new Date().toISOString();

  const ctx = {
    elide: identity,
    elidePath: o.elidePath,
    suitePath: join(o.suiteRoot, wl.id.replace(/^.*\//, "")),
    include: o.include
      ? o.include.split(",").map((s) => s.trim()).filter(Boolean)
      : (wl.settings.include as string[]) ?? ["test/**/*.js"],
    skipGlobs: skipGlobs(exp),
    threads: o.threads,
  };

  const results: Result[] = [];
  for await (const r of adapter.run(ctx)) {
    results.push(r);
    if (o.log && r.kind === "test") {
      // Live per-test marks go to stderr so stdout stays clean for the summary.
      const tail = r.status === "fail" || r.status === "error" ? `  — ${r.message ?? ""}` : "";
      process.stderr.write(`${MARK[r.status] ?? "?"} ${r.id}${tail}\n`);
    }
  }
  const finishedAt = new Date().toISOString();

  const tests = results.filter((r): r is TestResult => r.kind === "test");
  const cmp = compare(tests, exp);

  const meta: RunMeta = {
    workload: wl.id,
    kind: wl.kind,
    elide: identity,
    startedAt,
    finishedAt,
  };

  const shortDigest = identity.digest.slice(0, 12) || "local";
  const outDir = join(o.reportsDir, identity.semver, shortDigest);
  mkdirSync(outDir, { recursive: true });
  await writeResults(outDir, meta, results);
  await writeSummaryJson(outDir, meta, cmp);
  await Bun.write(join(outDir, `${wl.id}.md`), renderSuiteReport(meta, cmp));
  await Bun.write(join(outDir, "index.md"), renderRunIndex(meta, cmp));
  await Bun.write(join(o.reportsDir, "index.md"), await rebuildTopIndex(o.reportsDir));

  const green = cmp.regressions.length === 0;
  console.log(
    `${wl.id} @ ${identity.semver}: ${cmp.counts.pass}/${cmp.counts.total} pass, ` +
      `${cmp.regressions.length} regressions, ${cmp.newPasses.length} new passes — ${green ? "GREEN" : "RED"}`,
  );
  return green ? 0 : 1;
}

if (import.meta.main) {
  const o = parseArgs(Bun.argv.slice(2));
  if (o.command !== "run") {
    console.error("usage: cli.ts run <workload> [options]");
    process.exit(2);
  }
  process.exit(await main(o));
}
