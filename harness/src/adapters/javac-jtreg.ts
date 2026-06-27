import { existsSync, readFileSync } from "node:fs";
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

async function* runJavacJtreg(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("javac-jtreg requires settings.manifest");
  const manifest = loadManifest(resolve(manifestPath));
  const tests = manifest.groups.flatMap((group) => group.include);
  const skip = ctx.skipGlobs.map((glob) => picomatch(glob));
  const workDir = join(ctx.workspacePath, "JTwork");
  const reportDir = join(ctx.workspacePath, "JTreport");
  const javacWrapper = join(ctx.repoRoot, "suites/drivers/jtreg/elide-javac-wrapper.sh");
  const javaWrapper = join(ctx.repoRoot, "suites/drivers/jtreg/java-runner-wrapper.sh");
  const jtreg = String(ctx.settings.jtregPath ?? "jtreg");

  const result = await runProcess(
    [
      jtreg,
      "-verbose:summary",
      "-retain:fail,error",
      `-w:${workDir}`,
      `-r:${reportDir}`,
      `-javacoption:-J-Delide.javac.wrapper=${javacWrapper}`,
      `-javaoption:-Delide.java.wrapper=${javaWrapper}`,
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
