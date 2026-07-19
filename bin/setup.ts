#!/usr/bin/env bun
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface SuiteSetup {
  id: string;
  aliases: string[];
  path: string;
  sparse?: string[];
  sparseCone?: boolean;
  required: string[];
  filterBlobNone?: boolean;
}

interface Options {
  suites: string[];
  skipInstall: boolean;
  check: boolean;
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const SUITES: SuiteSetup[] = [
  {
    id: "test262",
    aliases: ["test262"],
    path: "suites/test262",
    required: ["test", "harness"],
  },
  {
    id: "node-api",
    aliases: ["node", "node-api"],
    path: "suites/node",
    sparse: ["test/common", "test/fixtures", "test/parallel"],
    required: ["test/common", "test/fixtures", "test/parallel"],
    filterBlobNone: true,
  },
  {
    id: "wpt-wintertc",
    aliases: ["wpt", "wpt-wintertc"],
    path: "suites/wpt",
    // `tools` carries wptserve (`wpt serve`) + its vendored deps, needed to serve fetch/ tests
    // against a real WPT server (see harness/src/adapters/wpt-server.ts).
    sparse: ["resources", "url", "encoding", "fetch", "tools"],
    required: ["resources", "url", "encoding", "fetch", "tools/serve/serve.py"],
    filterBlobNone: true,
  },
  {
    id: "cpython-core",
    aliases: ["cpython", "cpython-core", "python"],
    path: "suites/cpython",
    sparse: ["Lib/test"],
    sparseCone: false,
    required: ["Lib/test", "Lib/test/test_re.py", "Lib/test/test_json"],
    filterBlobNone: true,
  },
  {
    id: "javac-jtreg",
    aliases: ["openjdk", "javac", "javac-jtreg", "jtreg"],
    path: "suites/openjdk",
    sparse: [
      "make/langtools/src/classes/build/tools/symbolgenerator",
      "test/langtools/tools/javac",
      "test/langtools/tools/lib",
      "test/langtools/lib",
      "test/lib",
      "test/jtreg-ext",
    ],
    required: [
      "make/langtools/src/classes/build/tools/symbolgenerator",
      "test/langtools/tools/javac",
      "test/langtools/tools/lib",
      "test/langtools/lib",
      "test/lib",
      "test/jtreg-ext",
    ],
    filterBlobNone: true,
  },
];

function log(message: string): void {
  process.stderr.write(`[bin/setup] ${message}\n`);
}

function usageError(message: string): never {
  log(message);
  process.exit(2);
}

function parseArgs(argv: string[]): Options {
  const options: Options = {
    suites: [],
    skipInstall: false,
    check: false,
  };

  for (let i = 0; i < argv.length;) {
    const arg = argv[i++];
    const value = (flag: string): string => {
      const next = argv[i++];
      if (!next) usageError(`${flag} requires a value`);
      return next;
    };
    switch (arg) {
      case "--suite":
        options.suites.push(...value(arg).split(",").map((suite) => suite.trim()).filter(Boolean));
        break;
      case "--all-suites":
        options.suites = [];
        break;
      case "--skip-install":
        options.skipInstall = true;
        break;
      case "--check":
        options.check = true;
        options.skipInstall = true;
        break;
      case "-h":
      case "--help":
        process.stdout.write([
          "usage: bun ./bin/setup.ts [--suite id[,id...]] [--skip-install] [--check]",
          "",
          "Prepares Bun dependencies and upstream suite submodules for the compliance runner.",
          "Known suites: test262, node-api, wpt-wintertc, cpython-core, javac-jtreg",
          "",
        ].join("\n"));
        process.exit(0);
      default:
        usageError(`unknown arg: ${arg}`);
    }
  }

  return options;
}

function resolveSuites(requested: string[]): SuiteSetup[] {
  if (requested.length === 0) return SUITES;
  const out: SuiteSetup[] = [];
  for (const name of requested) {
    const suite = SUITES.find((candidate) => candidate.aliases.includes(name));
    if (!suite) usageError(`unknown suite '${name}'`);
    if (!out.includes(suite)) out.push(suite);
  }
  return out;
}

async function run(args: string[], label: string): Promise<void> {
  log(label);
  const proc = Bun.spawn(args, {
    cwd: ROOT,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });
  const rc = await proc.exited;
  if (rc !== 0) {
    throw new Error(`${label} failed with exit ${rc}`);
  }
}

function exists(path: string): boolean {
  return existsSync(path);
}

function isGitCheckout(path: string): boolean {
  return exists(resolve(path, ".git"));
}

function missingRequiredPaths(suite: SuiteSetup): string[] {
  return suite.required.filter((required) => {
    const fullPath = resolve(ROOT, suite.path, required);
    return !exists(fullPath);
  });
}

function assertSuiteReady(suite: SuiteSetup): void {
  const checkout = resolve(ROOT, suite.path);
  if (!exists(checkout) || !statSync(checkout).isDirectory()) {
    throw new Error(`${suite.id}: missing checkout at ${suite.path}`);
  }
  if (!isGitCheckout(checkout)) {
    throw new Error(`${suite.id}: ${suite.path} is not an initialized git submodule`);
  }
  const missing = missingRequiredPaths(suite);
  if (missing.length) {
    throw new Error(`${suite.id}: missing required path(s): ${missing.join(", ")}`);
  }
  if (suite.id === "wpt-wintertc") {
    assertWptServePatched(checkout);
  }
}

async function prepareSuite(suite: SuiteSetup): Promise<void> {
  await run(["git", "submodule", "sync", "--recursive", "--", suite.path], `syncing submodule metadata for ${suite.id}`);
  const updateArgs = [
    "git",
    "submodule",
    "update",
    "--init",
    "--depth",
    "1",
    "--recommend-shallow",
    ...(suite.filterBlobNone ? ["--filter=blob:none"] : []),
    "--",
    suite.path,
  ];
  await run(updateArgs, `checking out ${suite.id} submodule`);

  if (suite.sparse?.length) {
    const cone = suite.sparseCone !== false;
    await run(["git", "-C", suite.path, "sparse-checkout", "init", cone ? "--cone" : "--no-cone"], `initializing sparse checkout for ${suite.id}`);
    await run([
      "git",
      "-C",
      suite.path,
      "sparse-checkout",
      "set",
      ...(cone ? [] : ["--no-cone"]),
      ...suite.sparse,
    ], `populating sparse paths for ${suite.id}`);
  }

  if (suite.id === "wpt-wintertc") {
    patchWptServe(resolve(ROOT, suite.path));
  }

  assertSuiteReady(suite);
}

/**
 * Make the vendored `wpt serve` runnable offline inside the harness container. Two in-place edits
 * to the (submodule-local, uncommitted) checkout, mirroring cloudflare/workerd's WPT patch:
 *   1. `tools/serve/commands.json`: `virtualenv: false` — run against the system Python + WPT's
 *      vendored `tools/third_party/` deps, with no per-invocation venv/pip step (needs network).
 *   2. `tools/wpt/paths`: drop the `docs/` line so the CLI's command loader does not require
 *      `docs/commands.json`, which the sparse checkout deliberately omits.
 * Idempotent: re-running leaves an already-patched checkout unchanged (the paths edit normalizes to
 * a single trailing newline so a second pass is a no-op). `assertWptServePatched` verifies the
 * result, so a re-vendored submodule that reset these files is caught by `setup --check`.
 */
interface ServeCommands {
  serve?: { virtualenv?: boolean; conditional_requirements?: unknown };
}

/** Parse `tools/serve/commands.json`, or return null if absent. Throws a clear error on bad JSON. */
function readServeCommands(commandsPath: string): ServeCommands | null {
  if (!existsSync(commandsPath)) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(commandsPath, "utf8"));
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    throw new Error(`wpt serve patch: ${commandsPath} is not valid JSON (${detail})`);
  }
  if (typeof parsed !== "object" || parsed === null) {
    throw new Error(`wpt serve patch: ${commandsPath} is not a JSON object`);
  }
  return parsed as ServeCommands;
}

function patchWptServe(suitePath: string): void {
  const commandsPath = resolve(suitePath, "tools/serve/commands.json");
  const commands = readServeCommands(commandsPath);
  if (commands) {
    const serve = commands.serve;
    if (!serve) {
      throw new Error(`wpt serve patch: ${commandsPath} has no "serve" command entry (WPT layout changed?)`);
    }
    if (serve.virtualenv !== false) {
      serve.virtualenv = false;
      delete serve.conditional_requirements;
      writeFileSync(commandsPath, `${JSON.stringify(commands, null, 2)}\n`);
    }
  }
  const pathsFile = resolve(suitePath, "tools/wpt/paths");
  if (existsSync(pathsFile)) {
    const original = readFileSync(pathsFile, "utf8");
    const kept = original.split("\n").filter((l: string) => l.trim() !== "docs/");
    const next = `${kept.join("\n").replace(/\n+$/, "")}\n`;
    if (next !== original) writeFileSync(pathsFile, next);
  }
}

/**
 * Confirm the wpt serve checkout carries the offline patch (see {@link patchWptServe}). Content-based
 * rather than a marker file, so a re-vendored/updated submodule that silently reset these files is
 * caught here (by `setup --check`) instead of failing opaquely at server start; `prepareSuite`
 * re-applies the patch unconditionally, so a plain `setup` self-heals.
 */
function assertWptServePatched(suitePath: string): void {
  const commandsPath = resolve(suitePath, "tools/serve/commands.json");
  const commands = readServeCommands(commandsPath);
  if (commands && commands.serve?.virtualenv !== false) {
    throw new Error(
      `wpt-wintertc: ${commandsPath} not patched for offline serve (serve.virtualenv must be false) — re-run setup`,
    );
  }
  const pathsFile = resolve(suitePath, "tools/wpt/paths");
  if (existsSync(pathsFile) && readFileSync(pathsFile, "utf8").split("\n").some((l) => l.trim() === "docs/")) {
    throw new Error(`wpt-wintertc: ${pathsFile} still lists docs/ (unpatched) — re-run setup`);
  }
}

async function main(): Promise<number> {
  process.chdir(ROOT);
  const options = parseArgs(Bun.argv.slice(2));
  const suites = resolveSuites(options.suites);

  if (!options.skipInstall) {
    await run(["bun", "install"], "installing root Bun dependencies");
    await run(["bun", "install", "--cwd", "harness"], "installing harness Bun dependencies");
  }

  if (options.check) {
    for (const suite of suites) assertSuiteReady(suite);
    log(`ready: ${suites.map((suite) => suite.id).join(", ")}`);
    return 0;
  }

  for (const suite of suites) {
    await prepareSuite(suite);
  }
  log(`ready: ${suites.map((suite) => suite.id).join(", ")}`);
  return 0;
}

try {
  process.exit(await main());
} catch (err) {
  log(`ERROR: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(2);
}
