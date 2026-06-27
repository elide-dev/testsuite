import { chmodSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { expect, test } from "bun:test";
import type { AdapterContext } from "./types";
import { parseJtregSummary, runJavacJtreg } from "./javac-jtreg";

const fixtureSummary = await Bun.file(`${import.meta.dir}/../../fixtures/jtreg/JTreport/text/summary.txt`).text();

function repoRoot(): string {
  return resolve(import.meta.dir, "../..", "..");
}

function collect<T>(items: AsyncIterable<T>): Promise<T[]> {
  return Array.fromAsync(items);
}

function writeExecutable(path: string, body: string): string {
  writeFileSync(path, body);
  chmodSync(path, 0o755);
  return path;
}

function setupJtregFixture(mode: "summary" | "no-summary" = "summary") {
  const root = mkdtempSync(join(tmpdir(), "javac-jtreg-"));
  const workspacePath = join(root, "workspace");
  const suitePath = join(root, "suite");
  mkdirSync(workspacePath, { recursive: true });
  mkdirSync(join(suitePath, "test/langtools/tools/javac/diags"), { recursive: true });

  const manifestPath = join(root, "manifest.toml");
  writeFileSync(
    manifestPath,
    [
      '[[group]]',
      'id = "javac"',
      'include = ["tools/javac/diags/ExamplePass.java"]',
      "",
    ].join("\n"),
  );

  const logsDir = join(root, "logs");
  mkdirSync(logsDir, { recursive: true });
  const elideLog = join(logsDir, "elide.log");
  const javaLog = join(logsDir, "java.log");
  const jtregArgsLog = join(logsDir, "jtreg.args");
  const jtregJdkLog = join(logsDir, "jtreg.jdk");
  const jtregWorkLog = join(logsDir, "jtreg.work");
  const jtregReportLog = join(logsDir, "jtreg.report");

  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$@" >> ${JSON.stringify(elideLog)}
`,
  );

  const javaRunner = writeExecutable(
    join(root, "fake-java.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$@" >> ${JSON.stringify(javaLog)}
`,
  );

  const jtregPath = writeExecutable(
    join(root, "fake-jtreg.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
jdk=""
work=""
report=""
printf '%s\n' "$@" > ${JSON.stringify(jtregArgsLog)}
for arg in "$@"; do
  case "$arg" in
    -jdk:*) jdk="\${arg#-jdk:}" ;;
    -w:*) work="\${arg#-w:}" ;;
    -r:*) report="\${arg#-r:}" ;;
  esac
done
printf '%s\n' "$jdk" > ${JSON.stringify(jtregJdkLog)}
printf '%s\n' "$work" > ${JSON.stringify(jtregWorkLog)}
printf '%s\n' "$report" > ${JSON.stringify(jtregReportLog)}
"$jdk/bin/java" -version
"$jdk/bin/javac" Sample.java
if [[ ${JSON.stringify(mode)} == "no-summary" ]]; then
  echo "jtreg failed" >&2
  exit 2
fi
mkdir -p "$report/text"
cat > "$report/text/summary.txt" <<'EOF'
Passed: tools/javac/diags/ExamplePass.java
EOF
`,
  );

  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: repoRoot(),
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    settings: {
      manifest: manifestPath,
      jtregPath,
      javaRunner,
      timeoutMs: 5_000,
    },
    workspacePath,
  };

  return {
    ctx,
    logs: {
      elideLog,
      javaLog,
      jtregArgsLog,
      jtregJdkLog,
      jtregWorkLog,
      jtregReportLog,
    },
  };
}

test("maps jtreg summary lines to TestResult records", () => {
  const out = parseJtregSummary(fixtureSummary);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "tools/javac/diags/ExamplePass.java",
    status: "pass",
    meta: {
      suite: "javac-jtreg",
      upstreamPath: "tools/javac/diags/ExamplePass.java",
      category: "tools/javac/diags",
      runner: "jtreg",
      subtest: "tools/javac/diags/ExamplePass.java",
    },
  });
  expect(out[1].status).toBe("fail");
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});

test("runs jtreg with a generated wrapper JDK and delegates to configured java/elide wrappers", async () => {
  const { ctx, logs } = setupJtregFixture();

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toHaveLength(1);
  expect(results[0]).toMatchObject({
    id: "tools/javac/diags/ExamplePass.java",
    status: "pass",
  });

  const wrapperJdk = readFileSync(logs.jtregJdkLog, "utf8").trim();
  const workDir = readFileSync(logs.jtregWorkLog, "utf8").trim();
  const reportDir = readFileSync(logs.jtregReportLog, "utf8").trim();
  expect(readFileSync(logs.jtregArgsLog, "utf8")).toContain(`-jdk:${wrapperJdk}`);
  expect(wrapperJdk).toContain(`${ctx.workspacePath}/jtreg-run-`);
  expect(workDir).toContain(`${ctx.workspacePath}/jtreg-run-`);
  expect(reportDir).toContain(`${ctx.workspacePath}/jtreg-run-`);
  expect(wrapperJdk).toEndWith("/wrapper-jdk");
  expect(workDir).toEndWith("/JTwork");
  expect(reportDir).toEndWith("/JTreport");
  expect(readFileSync(logs.elideLog, "utf8")).toContain("javac\n--\nSample.java");
  expect(readFileSync(logs.javaLog, "utf8")).toContain("-version");
});

test("creates fresh jtreg work/report directories for each run", async () => {
  const { ctx, logs } = setupJtregFixture();

  await collect(runJavacJtreg(ctx));
  const firstWork = readFileSync(logs.jtregWorkLog, "utf8").trim();
  const firstReport = readFileSync(logs.jtregReportLog, "utf8").trim();

  await collect(runJavacJtreg(ctx));
  const secondWork = readFileSync(logs.jtregWorkLog, "utf8").trim();
  const secondReport = readFileSync(logs.jtregReportLog, "utf8").trim();

  expect(secondWork).not.toBe(firstWork);
  expect(secondReport).not.toBe(firstReport);
});

test("returns a runner error when the current jtreg run produces no summary", async () => {
  const { ctx } = setupJtregFixture("no-summary");
  const staleSummary = join(ctx.workspacePath, "JTreport/text/summary.txt");
  mkdirSync(join(ctx.workspacePath, "JTreport/text"), { recursive: true });
  writeFileSync(staleSummary, "Passed: tools/javac/diags/Stale.java\n");

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "javac-jtreg::<runner>",
      status: "error",
      message: "jtreg failed\n",
    }),
  ]);
});
