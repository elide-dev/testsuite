import { chmodSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, statSync, symlinkSync, writeFileSync } from "node:fs";
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

export interface ResolvedJavaExecution {
  jdkHome: string;
  javaRunner: string;
}

function compileIncludeFilters(globs: string[]): Array<(path: string) => boolean> {
  return globs.map((glob) => picomatch(glob));
}

function collectJavaFiles(rootPath: string, relativePath: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(rootPath, { withFileTypes: true })) {
    const childRoot = join(rootPath, entry.name);
    const childRelative = `${relativePath}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...collectJavaFiles(childRoot, childRelative));
      continue;
    }
    if (entry.isFile() && childRelative.endsWith(".java")) {
      files.push(childRelative);
    }
  }
  return files;
}

export function expandManifestIncludePaths(langtoolsRoot: string, manifestPaths: string[], includeGlobs: string[]): string[] {
  if (!includeGlobs.length) return manifestPaths;
  const matchers = compileIncludeFilters(includeGlobs);
  const selected: string[] = [];
  const seen = new Set<string>();
  const addPath = (path: string): void => {
    if (seen.has(path)) return;
    seen.add(path);
    selected.push(path);
  };

  for (const manifestPath of manifestPaths) {
    if (matchers.some((match) => match(manifestPath))) {
      addPath(manifestPath);
    }
    const fullPath = join(langtoolsRoot, manifestPath);
    if (!existsSync(fullPath) || !statSync(fullPath).isDirectory()) continue;
    for (const javaFile of collectJavaFiles(fullPath, manifestPath)) {
      if (matchers.some((match) => match(javaFile))) {
        addPath(javaFile);
      }
    }
  }

  return selected;
}

function validateJdkHome(jdkHome: string): string {
  const resolved = resolve(jdkHome);
  if (!existsSync(resolved) || !statSync(resolved).isDirectory()) {
    throw new Error(`javac-jtreg JDK home does not exist or is not a directory: ${resolved}`);
  }
  const realBin = join(resolved, "bin");
  if (!existsSync(realBin) || !statSync(realBin).isDirectory()) {
    throw new Error(`javac-jtreg JDK home is missing bin/: ${resolved}`);
  }
  return resolved;
}

function parseJavaHome(output: string): string | undefined {
  const match = output.match(/^\s*java\.home = (.+)$/m);
  return match?.[1]?.trim();
}

export async function resolveJdkHome(
  settings: Record<string, unknown>,
  env: NodeJS.ProcessEnv = process.env,
  cwd = process.cwd(),
): Promise<string> {
  return (await resolveJavaExecution(settings, env, cwd)).jdkHome;
}

function configuredJavaRunner(settings: Record<string, unknown>): string {
  return String(settings.javaRunner ?? "").trim() || "java";
}

export async function resolveJavaExecution(
  settings: Record<string, unknown>,
  env: NodeJS.ProcessEnv = process.env,
  cwd = process.cwd(),
): Promise<ResolvedJavaExecution> {
  const explicitJdkHome = String(settings.jdkHome ?? "").trim();
  const envJdkHome = String(env.JAVA_HOME ?? "").trim();
  if (explicitJdkHome) {
    return {
      jdkHome: validateJdkHome(explicitJdkHome),
      javaRunner: configuredJavaRunner(settings),
    };
  }

  const javaRunner = configuredJavaRunner(settings);
  if (javaRunner) {
    try {
      const result = await runProcess([javaRunner, "-XshowSettings:properties", "-version"], {
        cwd,
        env,
        timeoutMs: Number(settings.timeoutMs ?? 300_000),
        maxOutputBytes: 200_000,
      });
      const derived = parseJavaHome(`${result.stdout}\n${result.stderr}`);
      if (derived) {
        return {
          jdkHome: validateJdkHome(derived),
          javaRunner,
        };
      }
    } catch {
      // Compatibility fallback below handles missing or non-executable javaRunner values.
    }
  }

  if (envJdkHome) {
    const jdkHome = validateJdkHome(envJdkHome);
    return {
      jdkHome,
      javaRunner: join(jdkHome, "bin", "java"),
    };
  }

  throw new Error("javac-jtreg could not determine a real JDK home from settings.jdkHome, javaRunner, or JAVA_HOME");
}

function symlinkChildren(sourceDir: string, targetDir: string, skip = new Set<string>()): void {
  mkdirSync(targetDir, { recursive: true });
  for (const entry of readdirSync(sourceDir)) {
    if (skip.has(entry)) continue;
    symlinkSync(join(sourceDir, entry), join(targetDir, entry));
  }
}

export function buildWrapperJdk(wrapperJdk: string, realJdkHome: string, repoRoot: string): void {
  const realBin = join(realJdkHome, "bin");
  const wrapperBin = join(wrapperJdk, "bin");
  mkdirSync(wrapperJdk, { recursive: true });
  symlinkChildren(realJdkHome, wrapperJdk, new Set(["bin"]));
  symlinkChildren(realBin, wrapperBin, new Set(["java", "javac"]));

  writeFileSync(
    join(wrapperBin, "javac"),
    createWrapperCommand(join(repoRoot, "suites/drivers/jtreg/elide-javac-wrapper.sh")),
  );
  writeFileSync(
    join(wrapperBin, "java"),
    createWrapperCommand(join(repoRoot, "suites/drivers/jtreg/java-runner-wrapper.sh")),
  );
  chmodSync(join(wrapperBin, "javac"), 0o755);
  chmodSync(join(wrapperBin, "java"), 0o755);
}

export async function createJtregRunLayout(ctx: AdapterContext, realJdkHome?: string): Promise<JtregRunLayout> {
  mkdirSync(ctx.workspacePath, { recursive: true });
  const runRoot = mkdtempSync(join(ctx.workspacePath, "jtreg-run-"));
  const workDir = join(runRoot, "JTwork");
  const reportDir = join(runRoot, "JTreport");
  const wrapperJdk = join(runRoot, "wrapper-jdk");
  mkdirSync(workDir, { recursive: true });
  mkdirSync(reportDir, { recursive: true });
  buildWrapperJdk(wrapperJdk, realJdkHome ?? (await resolveJdkHome(ctx.settings, process.env, ctx.repoRoot)), ctx.repoRoot);

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
  const langtoolsRoot = join(ctx.suitePath, "test/langtools");
  const tests = manifest.groups.flatMap((group) => expandManifestIncludePaths(langtoolsRoot, group.include, ctx.include));
  const skip = ctx.skipGlobs.map((glob) => picomatch(glob));
  const javaExecution = await resolveJavaExecution(ctx.settings, process.env, ctx.repoRoot);
  const { workDir, reportDir, wrapperJdk } = await createJtregRunLayout(ctx, javaExecution.jdkHome);
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
        JTREG_JAVA: javaExecution.javaRunner,
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
