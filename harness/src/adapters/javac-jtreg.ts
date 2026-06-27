import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";

const STATUS: Record<string, TestResult["status"]> = {
  Passed: "pass",
  Failed: "fail",
  Error: "error",
  "Not run": "skip",
};

function categoryOf(path: string): string {
  return path.split("/").slice(0, 3).join("/");
}

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", `'\\''`)}'`;
}

function createWrapperCommand(path: string): string {
  return [
    "#!/usr/bin/env bash",
    "set -euo pipefail",
    `exec ${shellQuote(path)} \"$@\"`,
    "",
  ].join("\n");
}

export interface JtregRunLayout {
  runRoot: string;
  workDir: string;
  reportDir: string;
  wrapperJdk: string;
}

export function createJtregRunLayout(ctx: AdapterContext): JtregRunLayout {
  mkdirSync(ctx.workspacePath, { recursive: true });
  const runRoot = mkdtempSync(join(ctx.workspacePath, "jtreg-run-"));
  const workDir = join(runRoot, "JTwork");
  const reportDir = join(runRoot, "JTreport");
  const wrapperJdk = join(runRoot, "wrapper-jdk");
  const wrapperBin = join(wrapperJdk, "bin");
  mkdirSync(workDir, { recursive: true });
  mkdirSync(reportDir, { recursive: true });
  mkdirSync(wrapperBin, { recursive: true });

  writeFileSync(
    join(wrapperBin, "javac"),
    createWrapperCommand(join(ctx.repoRoot, "suites/drivers/jtreg/elide-javac-wrapper.sh")),
  );
  writeFileSync(
    join(wrapperBin, "java"),
    createWrapperCommand(join(ctx.repoRoot, "suites/drivers/jtreg/java-runner-wrapper.sh")),
  );
  chmodSync(join(wrapperBin, "javac"), 0o755);
  chmodSync(join(wrapperBin, "java"), 0o755);

  return { runRoot, workDir, reportDir, wrapperJdk };
}

export function parseJtregSummary(text: string): TestResult[] {
  const results: TestResult[] = [];
  for (const line of text.split(/\r?\n/)) {
    const match = /^(Passed|Failed|Error|Not run):\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const path = match[2];
    results.push({
      kind: "test",
      id: path,
      status: STATUS[match[1]],
      meta: {
        suite: "javac-jtreg",
        upstreamPath: path,
        category: categoryOf(path),
        runner: "jtreg",
        subtest: path,
      },
    });
  }
  return results;
}

export async function* runJavacJtreg(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("javac-jtreg requires settings.manifest");
  const manifest = loadManifest(resolve(manifestPath));
  const tests = manifest.groups.flatMap((group) => group.include);
  const skip = ctx.skipGlobs.map((glob) => picomatch(glob));
  const { workDir, reportDir, wrapperJdk } = createJtregRunLayout(ctx);
  const jtreg = String(ctx.settings.jtregPath ?? "jtreg");

  const result = await runProcess(
    [
      jtreg,
      "-verbose:summary",
      "-retain:fail,error",
      `-jdk:${wrapperJdk}`,
      `-w:${workDir}`,
      `-r:${reportDir}`,
      ...tests.map((test) => join(ctx.suitePath, "test/langtools", test)),
    ],
    {
      cwd: ctx.suitePath,
      timeoutMs: Number(ctx.settings.timeoutMs ?? 300_000),
      env: {
        ELIDE_JAVAC: ctx.elidePath,
        JTREG_JAVA: String(ctx.settings.javaRunner ?? "java"),
      },
    },
  );

  const summaryPath = join(reportDir, "text/summary.txt");
  if (!existsSync(summaryPath)) {
    yield {
      kind: "test",
      id: "javac-jtreg::<runner>",
      status: "error",
      message: result.timedOut ? "jtreg timed out" : result.stderr || result.stdout,
      durationMs: result.durationMs,
      meta: {
        suite: "javac-jtreg",
        upstreamPath: "<runner>",
        category: "runner",
        runner: "jtreg",
        subtest: "<runner>",
      },
    };
    return;
  }

  for (const parsed of parseJtregSummary(readFileSync(summaryPath, "utf8"))) {
    yield skip.some((match) => match(String(parsed.meta?.upstreamPath))) ? { ...parsed, status: "skip" } : parsed;
  }
}

export const javacJtregAdapter: Adapter = {
  id: "javac-jtreg",
  kind: "test",
  run: runJavacJtreg,
};
