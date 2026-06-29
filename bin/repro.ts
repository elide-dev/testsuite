#!/usr/bin/env bun
import { chmodSync, cpSync, existsSync, mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadRegistry } from "../harness/src/registry.ts";

interface Options {
  suite: string;
  cases: string[];
  name?: string;
  outDir: string;
  rcloneDest?: string;
  publicBase?: string;
  r2Case?: string;
  r2Suite?: string;
}

interface CasePlan {
  id: string;
  include: string;
  sourceRoots: string[];
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_OUT = resolve(ROOT, "artifacts/repros");

function usageError(message: string): never {
  process.stderr.write(`[bin/repro] ${message}\n`);
  process.exit(2);
}

function parseArgs(argv: string[]): Options {
  const options: Options = { suite: "", cases: [], outDir: DEFAULT_OUT };
  for (let i = 0; i < argv.length;) {
    const arg = argv[i++];
    const value = (flag: string): string => {
      const next = argv[i++];
      if (!next) usageError(`${flag} requires a value`);
      return next;
    };
    switch (arg) {
      case "--suite":
        options.suite = value(arg);
        break;
      case "--case":
        options.cases.push(...value(arg).split(",").map((item) => item.trim()).filter(Boolean));
        break;
      case "--name":
        options.name = value(arg);
        break;
      case "--out":
        options.outDir = resolve(value(arg));
        break;
      case "--rclone-dest":
        options.rcloneDest = value(arg).replace(/\/+$/, "");
        break;
      case "--public-base":
        options.publicBase = value(arg).replace(/\/+$/, "");
        break;
      case "--r2-case":
        options.r2Case = slug(value(arg));
        break;
      case "--r2-suite":
        options.r2Suite = slug(value(arg));
        break;
      case "-h":
      case "--help":
        process.stdout.write([
          "usage: bun run repro --suite <id> --case <case>[,<case>...] [--name slug] [--out dir]",
          "",
          "Creates a zip with upstream test sources, metadata, and a repro.sh script.",
          "Use --r2-case slug to upload to r2:elide-tools/testsuites/<suite>/case/<slug>/",
          "Use --rclone-dest r2:bucket/path and --public-base https://host/path to upload and print a URL.",
          "Known suites come from registry.toml.",
          "",
        ].join("\n"));
        process.exit(0);
      default:
        usageError(`unknown arg: ${arg}`);
    }
  }
  if (!options.suite) usageError("--suite is required");
  if (options.cases.length === 0) usageError("--case is required");
  return options;
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96) || "repro";
}

function copyIfPresent(source: string, root: string, targetRoot: string): void {
  if (!existsSync(source)) return;
  const target = join(targetRoot, relative(root, source));
  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target, { recursive: true });
}

function sourceRootForCase(suiteId: string, suitePath: string, id: string): CasePlan {
  if (suiteId === "javac-jtreg") {
    const rel = id.replace(/^\/*/, "");
    const testRoot = join(suitePath, "test/langtools");
    const source = join(testRoot, rel);
    const sourceRoot = existsSync(source) && statSync(source).isDirectory() ? source : dirname(source);
    return { id, include: rel, sourceRoots: [sourceRoot] };
  }
  if (suiteId === "cpython-core") {
    const moduleName = id.split(".")[0] ?? id;
    const file = join(suitePath, `Lib/test/${moduleName}.py`);
    const directory = join(suitePath, `Lib/test/${moduleName}`);
    return { id, include: moduleName, sourceRoots: [existsSync(file) ? file : directory] };
  }
  if (suiteId === "wpt-wintertc") {
    const rel = id.split(" :: ")[0] ?? id;
    return { id, include: rel, sourceRoots: [join(suitePath, rel)] };
  }
  if (suiteId === "test262") {
    const rel = id.match(/^(.*?\.js)(?:\s|$)/)?.[1] ?? id;
    return { id, include: rel, sourceRoots: [join(suitePath, rel)] };
  }
  const rel = id.split(" :: ")[0] ?? id;
  return { id, include: rel, sourceRoots: [join(suitePath, rel)] };
}

function suiteSupportRoots(suiteId: string, suitePath: string): string[] {
  switch (suiteId) {
    case "javac-jtreg":
      return [
        join(suitePath, "test/langtools/TEST.ROOT"),
        join(suitePath, "test/langtools/ProblemList.txt"),
        join(suitePath, "test/langtools/lib"),
        join(suitePath, "test/langtools/tools/lib"),
        join(suitePath, "test/langtools/tools/javac/lib"),
        join(suitePath, "test/lib"),
        join(suitePath, "test/jtreg-ext"),
        join(suitePath, "make/langtools/src/classes/build/tools/symbolgenerator"),
      ];
    case "test262":
      return [join(suitePath, "harness")];
    case "wpt-wintertc":
      return [join(suitePath, "resources")];
    case "cpython-core":
      return [join(suitePath, "Lib/test/support")];
    case "node-api":
      return [join(suitePath, "test/common"), join(suitePath, "test/fixtures")];
    default:
      return [];
  }
}

function reproScript(suiteId: string, includes: string[]): string {
  const includeArg = includes.join(",");
  return [
    "#!/usr/bin/env bash",
    "set -euo pipefail",
    "",
    'root="${TESTSUITE_ROOT:-}"',
    'if [[ -z "$root" ]]; then',
    '  root="$(cd "$(dirname "$0")" && pwd)"',
    '  if [[ ! -f "$root/package.json" ]]; then',
    '    echo "Set TESTSUITE_ROOT=/path/to/elide testsuite checkout." >&2',
    "    exit 2",
    "  fi",
    "fi",
    'elide_ref="${ELIDE_REF:-nightly}"',
    'threads="${THREADS:-1}"',
    'cd "$root"',
    `exec bun run testsuite --elide "$elide_ref" --suite ${suiteId} --include ${JSON.stringify(includeArg)} --threads "$threads" --log --failure-output show`,
    "",
  ].join("\n");
}

function baselineScript(suiteId: string, includes: string[]): string {
  if (suiteId === "javac-jtreg") {
    const paths = includes.map((include) => `suites/openjdk/test/langtools/${include}`);
    return [
      "#!/usr/bin/env bash",
      "set -euo pipefail",
      "",
      'root="${TESTSUITE_ROOT:-}"',
      'if [[ -z "$root" ]]; then',
      '  root="$(cd "$(dirname "$0")" && pwd)"',
      '  if [[ ! -f "$root/package.json" ]]; then',
      '    echo "Set TESTSUITE_ROOT=/path/to/elide testsuite checkout." >&2',
      "    exit 2",
      "  fi",
      "fi",
      'jdk="${JDK25_HOME:-${JAVA_HOME:-}}"',
      'if [[ -z "$jdk" ]]; then',
      '  echo "Set JDK25_HOME=/path/to/Oracle GraalVM JDK 25.0.3 or JAVA_HOME." >&2',
      "  exit 2",
      "fi",
      'work="${JTREG_BASELINE_WORK:-$root/.harness/baseline/jtreg}"',
      'mkdir -p "$work"',
      'cd "$root"',
      "exec jtreg -verbose:summary -concurrency:1 " +
        '-jdk:"$jdk" -w:"$work/JTwork" -r:"$work/JTreport" ' +
        paths.map((path) => JSON.stringify(path)).join(" "),
      "",
    ].join("\n");
  }
  if (suiteId === "cpython-core") {
    return [
      "#!/usr/bin/env bash",
      "set -euo pipefail",
      "",
      'root="${TESTSUITE_ROOT:-}"',
      'if [[ -z "$root" ]]; then',
      '  root="$(cd "$(dirname "$0")" && pwd)"',
      '  if [[ ! -f "$root/package.json" ]]; then',
      '    echo "Set TESTSUITE_ROOT=/path/to/elide testsuite checkout." >&2',
      "    exit 2",
      "  fi",
      "fi",
      'python="${PYTHON312:-python3.12}"',
      'cd "$root"',
      `exec "$python" suites/drivers/python/elide_regrtest_driver.py --cpython-root suites/cpython ${includes.map((include) => JSON.stringify(include)).join(" ")}`,
      "",
    ].join("\n");
  }
  if (suiteId === "node-api") {
    const tests = includes.map((include) => JSON.stringify(include));
    return [
      "#!/usr/bin/env bash",
      "set -euo pipefail",
      "",
      'root="${TESTSUITE_ROOT:-}"',
      'if [[ -z "$root" ]]; then',
      '  root="$(cd "$(dirname "$0")" && pwd)"',
      '  if [[ ! -f "$root/package.json" ]]; then',
      '    echo "Set TESTSUITE_ROOT=/path/to/elide testsuite checkout." >&2',
      "    exit 2",
      "  fi",
      "fi",
      'node_bin="${NODE_BIN:-node}"',
      'work="${NODE_BASELINE_WORK:-$root/.harness/baseline/node-api}"',
      'rm -rf "$work"',
      'mkdir -p "$work/node-test"',
      'cp -R "$root/suites/node/test" "$work/test"',
      `printf '{"type":"commonjs"}\\n' > "$work/package.json"`,
      'export NODE_TEST_KNOWN_GLOBALS="${NODE_TEST_KNOWN_GLOBALS:-0}"',
      'export NODE_SKIP_FLAG_CHECK="${NODE_SKIP_FLAG_CHECK:-1}"',
      'export NODE_TEST_DIR="${NODE_TEST_DIR:-$work/node-test}"',
      'cd "$work"',
      "run_node_test() {",
      "  local test_file=\"$1\"",
      "  local flags=()",
      "  local line flag_text flag",
      "  while IFS= read -r line; do",
      "    case \"$line\" in",
      "      '// Flags: '*)",
      "        flag_text=\"${line#// Flags: }\"",
      "        for flag in $flag_text; do flags+=(\"$flag\"); done",
      "        ;;",
      "    esac",
      "  done < <(head -n 50 \"$test_file\")",
      '  "$node_bin" ${flags[@]+"${flags[@]}"} "$test_file"',
      "}",
      ...tests.map((test) => `run_node_test ${test}`),
      "",
    ].join("\n");
  }
  return [
    "#!/usr/bin/env bash",
    "set -euo pipefail",
    'echo "No automated baseline command is defined for this suite yet." >&2',
    "exit 2",
    "",
  ].join("\n");
}

function baselineReadmeSnippet(suiteId: string, name: string): string {
  if (suiteId === "javac-jtreg") {
    return `TESTSUITE_ROOT=/path/to/testsuite JDK25_HOME=/path/to/graalvm-jdk-25.0.3 ./${name}/baseline.sh`;
  }
  if (suiteId === "cpython-core") {
    return `TESTSUITE_ROOT=/path/to/testsuite PYTHON312=python3.12 ./${name}/baseline.sh`;
  }
  if (suiteId === "node-api") {
    return `TESTSUITE_ROOT=/path/to/testsuite NODE_BIN=node ./${name}/baseline.sh`;
  }
  return `TESTSUITE_ROOT=/path/to/testsuite ./${name}/baseline.sh`;
}

async function zipDirectory(sourceDir: string, zipPath: string): Promise<void> {
  const zip = Bun.spawn(["zip", "-qry", zipPath, basename(sourceDir)], {
    cwd: dirname(sourceDir),
    stdout: "inherit",
    stderr: "inherit",
  });
  const rc = await zip.exited;
  if (rc !== 0) throw new Error(`zip failed with exit ${rc}`);
}

async function uploadZip(zipPath: string, dest: string): Promise<void> {
  const remotePath = `${dest}/${basename(zipPath)}`;
  const proc = Bun.spawn(["rclone", "copyto", zipPath, remotePath], {
    stdout: "inherit",
    stderr: "inherit",
  });
  const rc = await proc.exited;
  if (rc !== 0) throw new Error(`rclone upload failed with exit ${rc}`);
}

async function main(): Promise<number> {
  const options = parseArgs(Bun.argv.slice(2));
  const workload = loadRegistry(resolve(ROOT, "registry.toml")).find((entry) => entry.id === options.suite);
  if (!workload) usageError(`unknown suite: ${options.suite}`);

  const suitePath = resolve(ROOT, workload.path);
  const plans = options.cases.map((id) => sourceRootForCase(options.suite, suitePath, id));
  const name = slug(options.name ?? `${options.suite}-${plans[0]?.include ?? "repro"}`);
  const publicSuite = options.r2Suite ?? (options.suite === "javac-jtreg" ? "jtreg" : slug(options.suite));
  if (options.r2Case) {
    options.rcloneDest ??= `r2:elide-tools/testsuites/${publicSuite}/case/${options.r2Case}`;
    options.publicBase ??= `https://repro.elide.dev/testsuites/${publicSuite}/case/${options.r2Case}`;
  }
  const packageDir = join(options.outDir, name);
  const casesDir = join(packageDir, "cases");
  rmSync(packageDir, { recursive: true, force: true });
  mkdirSync(casesDir, { recursive: true });

  for (const plan of plans) {
    for (const source of plan.sourceRoots) copyIfPresent(source, suitePath, casesDir);
  }
  for (const source of suiteSupportRoots(options.suite, suitePath)) copyIfPresent(source, suitePath, casesDir);

  const metadata = {
    suite: options.suite,
    cases: plans.map((plan) => ({ id: plan.id, include: plan.include })),
    generatedAt: new Date().toISOString(),
  };
  writeFileSync(join(packageDir, "manifest.json"), `${JSON.stringify(metadata, null, 2)}\n`);
  writeFileSync(
    join(packageDir, "README.md"),
    [
      `# ${name}`,
      "",
      "This package captures upstream compliance test sources and a runner command for an Elide failure.",
      "",
      "Run from a checkout of this testsuite repo:",
      "",
      "```bash",
      `TESTSUITE_ROOT=/path/to/testsuite ELIDE_REF=nightly ./${name}/repro.sh`,
      "```",
      "",
      "Compare against the baseline runtime/compiler:",
      "",
      "```bash",
      baselineReadmeSnippet(options.suite, name),
      "```",
      "",
      "The script uses the testsuite harness so the invocation matches CI and local reports.",
      "",
    ].join("\n"),
  );
  writeFileSync(join(packageDir, "repro.sh"), reproScript(options.suite, plans.map((plan) => plan.include)));
  writeFileSync(join(packageDir, "baseline.sh"), baselineScript(options.suite, plans.map((plan) => plan.include)));
  chmodSync(join(packageDir, "repro.sh"), 0o755);
  chmodSync(join(packageDir, "baseline.sh"), 0o755);

  mkdirSync(options.outDir, { recursive: true });
  const zipPath = join(options.outDir, `${name}.zip`);
  rmSync(zipPath, { force: true });
  await zipDirectory(packageDir, zipPath);
  if (options.rcloneDest) await uploadZip(zipPath, options.rcloneDest);
  const publicUrl = options.publicBase ? `${options.publicBase}/${basename(zipPath)}` : undefined;
  process.stdout.write(publicUrl ? `${publicUrl}\n${zipPath}\n` : `${zipPath}\n`);
  return 0;
}

main().then((code) => process.exit(code)).catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.stack ?? error.message : String(error)}\n`);
  process.exit(2);
});
