#!/usr/bin/env bun
import { existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface SuiteSetup {
  id: string;
  aliases: string[];
  path: string;
  sparse?: string[];
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
    id: "wpt-wintertc",
    aliases: ["wpt", "wpt-wintertc"],
    path: "suites/wpt",
    sparse: ["resources", "url", "encoding"],
    required: ["resources", "url", "encoding"],
    filterBlobNone: true,
  },
  {
    id: "cpython-core",
    aliases: ["cpython", "cpython-core", "python"],
    path: "suites/cpython",
    required: ["Lib/test", "Lib/test/test_re.py", "Lib/test/test_json"],
  },
  {
    id: "javac-jtreg",
    aliases: ["openjdk", "javac", "javac-jtreg", "jtreg"],
    path: "suites/openjdk",
    sparse: [
      "test/langtools/tools/javac",
      "test/langtools/tools/lib",
      "test/langtools/lib",
      "test/lib",
      "test/jtreg-ext",
    ],
    required: [
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
          "Known suites: test262, wpt-wintertc, cpython-core, javac-jtreg",
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
    await run(["git", "-C", suite.path, "sparse-checkout", "init", "--cone"], `initializing sparse checkout for ${suite.id}`);
    await run(["git", "-C", suite.path, "sparse-checkout", "set", ...suite.sparse], `populating sparse paths for ${suite.id}`);
  }

  assertSuiteReady(suite);
}

async function main(): Promise<number> {
  process.chdir(ROOT);
  const options = parseArgs(Bun.argv.slice(2));
  const suites = resolveSuites(options.suites);

  if (!options.skipInstall) {
    await run(["bun", "install"], "installing root Bun dependencies");
    await run(["bun", "--cwd", "harness", "install"], "installing harness Bun dependencies");
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
