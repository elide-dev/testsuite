import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, statSync, symlinkSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess, type ProcessRunResult } from "./process";

const STATUS: Record<string, TestResult["status"]> = {
  passed: "pass",
  failed: "fail",
  error: "error",
  "not run": "skip",
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
  for (const tool of ["java", "javac", "jar"]) {
    const toolPath = join(realBin, tool);
    if (!existsSync(toolPath) || !statSync(toolPath).isFile()) {
      throw new Error(`javac-jtreg JDK home is missing bin/${tool}: ${resolved}`);
    }
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

function normalizeJavaRunner(jdkHome: string, javaRunner: string): string {
  if (javaRunner === "java") return join(jdkHome, "bin", "java");
  return javaRunner;
}

export async function resolveJavaExecution(
  settings: Record<string, unknown>,
  env: NodeJS.ProcessEnv = process.env,
  cwd = process.cwd(),
): Promise<ResolvedJavaExecution> {
  const explicitJdkHome = String(settings.jdkHome ?? "").trim();
  const envJdkHome = String(env.JAVA_HOME ?? "").trim();
  if (explicitJdkHome) {
    const jdkHome = validateJdkHome(explicitJdkHome);
    return {
      jdkHome,
      javaRunner: normalizeJavaRunner(jdkHome, configuredJavaRunner(settings)),
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
        const jdkHome = validateJdkHome(derived);
        return {
          jdkHome,
          javaRunner: normalizeJavaRunner(jdkHome, javaRunner),
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

function copyTestRootWithoutGroups(source: string, target: string): void {
  const content = readFileSync(source, "utf8")
    .split(/\r?\n/)
    .map((line) => line.replace(/^groups\s*=.*$/, "# groups disabled for sparse harness runs"))
    .join("\n");
  writeFileSync(target, content);
}

function symlinkIfPresent(source: string, target: string): void {
  if (!existsSync(source)) return;
  symlinkSync(source, target);
}

function copySelectedLangtoolsPaths(sourceLangtoolsRoot: string, patchedLangtoolsRoot: string, tests: string[]): void {
  for (const test of tests) {
    const source = join(sourceLangtoolsRoot, test);
    const target = join(patchedLangtoolsRoot, test);
    mkdirSync(dirname(target), { recursive: true });
    cpSync(source, target, { recursive: true });
  }
}

export function createSparseLangtoolsRoot(ctx: AdapterContext, runRoot: string, tests: string[]): string {
  const sourceLangtoolsRoot = join(ctx.suitePath, "test/langtools");
  const patchedTestRoot = join(runRoot, "suite/test");
  const patchedLangtoolsRoot = join(patchedTestRoot, "langtools");
  mkdirSync(patchedLangtoolsRoot, { recursive: true });

  copyTestRootWithoutGroups(join(sourceLangtoolsRoot, "TEST.ROOT"), join(patchedLangtoolsRoot, "TEST.ROOT"));
  symlinkIfPresent(join(sourceLangtoolsRoot, "ProblemList.txt"), join(patchedLangtoolsRoot, "ProblemList.txt"));
  copySelectedLangtoolsPaths(sourceLangtoolsRoot, patchedLangtoolsRoot, tests);
  symlinkIfPresent(join(ctx.suitePath, "test/lib"), join(patchedTestRoot, "lib"));
  symlinkIfPresent(join(ctx.suitePath, "test/jtreg-ext"), join(patchedTestRoot, "jtreg-ext"));

  return patchedLangtoolsRoot;
}

export function parseJtregSummary(text: string): TestResult[] {
  const results: TestResult[] = [];
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    const statusFirst = /^(Passed|Failed|Error|Not run):\s+(.+)$/i.exec(trimmed);
    const pathFirst = /^(.+?)\s+(Passed|Failed|Error|Not run)\.\s*(.*)$/i.exec(trimmed);
    const statusName = statusFirst?.[1] ?? pathFirst?.[2];
    const path = statusFirst?.[2] ?? pathFirst?.[1];
    const message = pathFirst?.[3]?.trim();
    if (!statusName || !path) continue;
    const status = STATUS[statusName.toLowerCase()];
    if (!status) continue;
    results.push({
      kind: "test",
      id: path,
      status,
      ...(message ? { message } : {}),
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

function runnerFailureMessage(result: ProcessRunResult): string {
  if (result.timedOut) return "jtreg timed out";
  return result.stderr || result.stdout || `jtreg exited with code ${result.exitCode}`;
}

function runnerErrorResult(message: string, durationMs = 0): TestResult {
  return {
    kind: "test",
    id: "javac-jtreg::<runner>",
    status: "error",
    message,
    durationMs,
    meta: {
      suite: "javac-jtreg",
      upstreamPath: "<runner>",
      category: "runner",
      runner: "jtreg",
      subtest: "<runner>",
    },
  };
}

function runnerFailureResult(result: ProcessRunResult): TestResult {
  return runnerErrorResult(runnerFailureMessage(result), result.durationMs);
}

function isJtregRunnerFailure(result: ProcessRunResult): boolean {
  if (result.timedOut) return true;
  // jtreg uses 1 for no tests, 2 for failed tests, and 3 for errored tests.
  // When a parseable summary exists, those outcomes are carried per test.
  return result.exitCode !== 0 && result.exitCode !== 1 && result.exitCode !== 2 && result.exitCode !== 3;
}

function appendCapped(output: string, text: string, cap: number): string {
  return output.length < cap ? output + text.slice(0, cap - output.length) : output;
}

async function* readStreamLines(
  stream: ReadableStream<Uint8Array>,
  onText: (text: string) => void,
): AsyncIterable<string> {
  const decoder = new TextDecoder();
  let pending = "";
  for await (const chunk of stream) {
    const text = decoder.decode(chunk, { stream: true });
    onText(text);
    pending += text;
    let newline = pending.search(/\r?\n/);
    while (newline >= 0) {
      const line = pending.slice(0, newline);
      pending = pending.slice(pending[newline] === "\r" && pending[newline + 1] === "\n" ? newline + 2 : newline + 1);
      yield line;
      newline = pending.search(/\r?\n/);
    }
  }
  const rest = decoder.decode();
  if (rest) {
    onText(rest);
    pending += rest;
  }
  if (pending) yield pending;
}

async function readStreamText(
  stream: ReadableStream<Uint8Array>,
  cap: number,
  onLine?: (line: string) => void,
): Promise<string> {
  let output = "";
  for await (const line of readStreamLines(stream, (text) => {
    output = appendCapped(output, text, cap);
  })) {
    onLine?.(line);
  }
  return output;
}

export async function* runJavacJtreg(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("javac-jtreg requires settings.manifest");
  const manifest = loadManifest(resolve(manifestPath));
  const langtoolsRoot = join(ctx.suitePath, "test/langtools");
  const tests = manifest.groups.flatMap((group) => expandManifestIncludePaths(langtoolsRoot, group.include, ctx.include));
  const skip = ctx.skipGlobs.map((glob) => picomatch(glob));
  if (tests.length === 0) {
    yield runnerErrorResult("javac-jtreg selected no tests");
    return;
  }
  const javaExecution = await resolveJavaExecution(ctx.settings, process.env, ctx.repoRoot);
  const { runRoot, workDir, reportDir, wrapperJdk } = await createJtregRunLayout(ctx, javaExecution.jdkHome);
  const jtregLangtoolsRoot = createSparseLangtoolsRoot(ctx, runRoot, tests);
  const jtreg = String(ctx.settings.jtregPath ?? "jtreg");
  const argv = [
    jtreg,
    "-verbose:summary",
    "-retain:fail,error",
    `-jdk:${wrapperJdk}`,
    `-w:${workDir}`,
    `-r:${reportDir}`,
    ...tests.map((test) => join(jtregLangtoolsRoot, test)),
  ];
  const emitted = new Set<string>();
  let result: ProcessRunResult;
  if (ctx.log || ctx.verbose) {
    const started = performance.now();
    const proc = Bun.spawn(argv, {
      cwd: jtregLangtoolsRoot,
      env: {
        ...process.env,
        ELIDE_JAVAC: ctx.elidePath,
        JTREG_JAVA: javaExecution.javaRunner,
      },
      stdout: "pipe",
      stderr: "pipe",
    });
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      proc.kill("SIGKILL");
    }, Number(ctx.settings.timeoutMs ?? 300_000));
    let stdout = "";
    const stderrPromise = readStreamText(proc.stderr as ReadableStream<Uint8Array>, 1_000_000, ctx.verbose
      ? (line) => {
          if (line.trim()) process.stderr.write(`[jtreg:stderr] ${line}\n`);
        }
      : undefined);

    for await (const line of readStreamLines(proc.stdout as ReadableStream<Uint8Array>, (text) => {
      stdout = appendCapped(stdout, text, 1_000_000);
    })) {
      if (ctx.verbose && line.trim()) process.stderr.write(`[jtreg:stdout] ${line}\n`);
      for (const parsed of parseJtregSummary(line)) {
        if (emitted.has(parsed.id)) continue;
        emitted.add(parsed.id);
        yield skip.some((match) => match(String(parsed.meta?.upstreamPath))) ? { ...parsed, status: "skip" } : parsed;
      }
    }

    const [exitCode, stderr] = await Promise.all([proc.exited, stderrPromise]);
    clearTimeout(timer);
    result = {
      command: argv,
      exitCode,
      stdout,
      stderr,
      durationMs: Math.round(performance.now() - started),
      timedOut,
    };
  } else {
    result = await runProcess(argv, {
      cwd: jtregLangtoolsRoot,
      timeoutMs: Number(ctx.settings.timeoutMs ?? 300_000),
      env: {
        ELIDE_JAVAC: ctx.elidePath,
        JTREG_JAVA: javaExecution.javaRunner,
      },
    });
  }

  const summaryPath = join(reportDir, "text/summary.txt");
  if (!existsSync(summaryPath)) {
    yield runnerFailureResult(result);
    return;
  }

  const parsedSummary = parseJtregSummary(readFileSync(summaryPath, "utf8"));
  if (parsedSummary.length === 0 && emitted.size === 0) {
    const summarySnippet = readFileSync(summaryPath, "utf8").trim().split(/\r?\n/).slice(0, 20).join("\n");
    yield runnerErrorResult(
      `jtreg summary contained no parseable test results${summarySnippet ? `:\n${summarySnippet}` : ""}`,
      result.durationMs,
    );
    return;
  }

  for (const parsed of parsedSummary) {
    if (emitted.has(parsed.id)) continue;
    yield skip.some((match) => match(String(parsed.meta?.upstreamPath))) ? { ...parsed, status: "skip" } : parsed;
  }

  if (isJtregRunnerFailure(result)) {
    yield runnerFailureResult(result);
  }
}

export const javacJtregAdapter: Adapter = {
  id: "javac-jtreg",
  kind: "test",
  run: runJavacJtreg,
};
