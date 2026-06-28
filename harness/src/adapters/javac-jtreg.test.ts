import { chmodSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { expect, test } from "bun:test";
import type { AdapterContext } from "./types";
import { createSparseLangtoolsRoot, expandManifestIncludePaths, parseJtregSummary, resolveJavaExecution, resolveJdkHome, runJavacJtreg } from "./javac-jtreg";

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

function setupJtregFixture(
  mode:
    | "summary"
    | "no-summary"
    | "summary-runner-failure"
    | "summary-test-failure"
    | "summary-test-failure-exit"
    | "streaming"
    | "unparseable-summary" = "summary",
) {
  const root = mkdtempSync(join(tmpdir(), "javac-jtreg-"));
  const workspacePath = join(root, "workspace");
  const suitePath = join(root, "suite");
  const jdkHome = join(root, "fake-jdk");
  mkdirSync(workspacePath, { recursive: true });
  mkdirSync(join(suitePath, "test/langtools/tools/javac/diags"), { recursive: true });
  mkdirSync(join(suitePath, "test/langtools/tools/javac/launcher"), { recursive: true });
  mkdirSync(join(suitePath, "test/lib"), { recursive: true });
  mkdirSync(join(suitePath, "test/jtreg-ext/requires"), { recursive: true });
  writeFileSync(
    join(suitePath, "test/langtools/TEST.ROOT"),
    [
      "groups=TEST.groups",
      "external.lib.roots = ../../",
      "requires.extraPropDefns = ../jtreg-ext/requires/VMProps.java",
      "requires.extraPropDefns.libs = ../lib/jdk/test/lib/Platform.java",
      "",
    ].join("\n"),
  );
  writeFileSync(join(suitePath, "test/langtools/TEST.groups"), "all = missing/path\n");
  writeFileSync(join(suitePath, "test/langtools/ProblemList.txt"), "");
  writeFileSync(join(suitePath, "test/jtreg-ext/requires/VMProps.java"), "// vm props\n");
  writeFileSync(join(suitePath, "test/langtools/tools/javac/diags/ExamplePass.java"), "// example pass\n");
  writeFileSync(join(suitePath, "test/langtools/tools/javac/diags/Other.java"), "// other\n");
  writeFileSync(join(suitePath, "test/langtools/tools/javac/launcher/BasicSourceLauncherTests.java"), "// smoke\n");
  mkdirSync(join(jdkHome, "bin"), { recursive: true });
  mkdirSync(join(jdkHome, "conf"), { recursive: true });
  writeFileSync(join(jdkHome, "release"), "JAVA_VERSION=test\n");
  writeExecutable(join(jdkHome, "bin", "java"), "#!/usr/bin/env bash\nexit 9\n");
  writeExecutable(join(jdkHome, "bin", "javac"), "#!/usr/bin/env bash\nexit 9\n");
  writeExecutable(
    join(jdkHome, "bin", "jar"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$@" >> ${JSON.stringify(join(root, "logs", "jar.log"))}
`,
  );

  const manifestPath = join(root, "manifest.toml");
  writeFileSync(
    manifestPath,
    [
      '[[group]]',
      'id = "javac"',
      'include = ["tools/javac/diags", "tools/javac/launcher/BasicSourceLauncherTests.java"]',
      "",
    ].join("\n"),
  );

  const logsDir = join(root, "logs");
  mkdirSync(logsDir, { recursive: true });
  const elideLog = join(logsDir, "elide.log");
  const javaLog = join(logsDir, "java.log");
  const jarLog = join(logsDir, "jar.log");
  const jtregArgsLog = join(logsDir, "jtreg.args");
  const jtregJdkLog = join(logsDir, "jtreg.jdk");
  const jtregWorkLog = join(logsDir, "jtreg.work");
  const jtregReportLog = join(logsDir, "jtreg.report");
  const jtregJavaEnvLog = join(logsDir, "jtreg.java-env");
  const continueFile = join(logsDir, "continue");

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
if [[ "$#" -ge 2 && "$1" == "-XshowSettings:properties" && "$2" == "-version" ]]; then
  printf 'Property settings:\\n'
  printf '    java.home = %s\\n' ${JSON.stringify(jdkHome)}
  exit 0
fi
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
printf '%s\n' "$JTREG_JAVA" > ${JSON.stringify(jtregJavaEnvLog)}
"$jdk/bin/java" -version
"$jdk/bin/javac" Sample.java
"$jdk/bin/jar" tf sample.jar
if [[ ${JSON.stringify(mode)} == "no-summary" ]]; then
  echo "jtreg failed" >&2
  exit 2
fi
mkdir -p "$report/text"
if [[ ${JSON.stringify(mode)} == "unparseable-summary" ]]; then
  printf 'jtreg wrote prose instead of summary rows\n' > "$report/text/summary.txt"
else
  if [[ ${JSON.stringify(mode)} == "streaming" ]]; then
    printf 'Passed: tools/javac/diags/ExamplePass.java\n'
    while [[ ! -f ${JSON.stringify(continueFile)} ]]; do sleep 0.05; done
  fi
  cat > "$report/text/summary.txt" <<'EOF'
${mode === "summary-test-failure" || mode === "summary-test-failure-exit" ? "Failed: tools/javac/diags/Other.java" : "Passed: tools/javac/diags/ExamplePass.java"}
EOF
fi
if [[ ${JSON.stringify(mode)} == "summary-runner-failure" ]]; then
  echo "jtreg infrastructure failure" >&2
  exit 4
fi
if [[ ${JSON.stringify(mode)} == "summary-test-failure-exit" ]]; then
  echo "jtreg test failure" >&2
  exit 3
fi
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
      jdkHome,
      timeoutMs: 5_000,
    },
    workspacePath,
  };

  return {
    ctx,
    logs: {
      elideLog,
      javaLog,
      jarLog,
      jtregArgsLog,
      jtregJdkLog,
      jtregWorkLog,
      jtregReportLog,
      jtregJavaEnvLog,
      continueFile,
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

test("maps jtreg uppercase FAILED summary lines", () => {
  expect(parseJtregSummary("FAILED: tools/javac/Example.java\n")).toEqual([
    expect.objectContaining({
      id: "tools/javac/Example.java",
      status: "fail",
    }),
  ]);
});

test("maps jtreg path-first summary lines", () => {
  expect(parseJtregSummary("tools/javac/IllDefinedOrderOfInit.java  Error. command line error (exit code 2)\n")).toEqual([
    expect.objectContaining({
      id: "tools/javac/IllDefinedOrderOfInit.java",
      status: "error",
      message: "command line error (exit code 2)",
    }),
  ]);
});

test("maps jtreg ignored tests to skip", () => {
  expect(parseJtregSummary("tools/javac/Paths/AbsolutePathTest.java  Error. Test ignored: 8055768 ToolBox does not close opened files\n")).toEqual([
    expect.objectContaining({
      id: "tools/javac/Paths/AbsolutePathTest.java",
      status: "skip",
      message: "Test ignored: 8055768 ToolBox does not close opened files",
    }),
  ]);
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
  expect(readFileSync(join(wrapperJdk, "release"), "utf8")).toBe("JAVA_VERSION=test\n");
  expect(lstatSync(join(wrapperJdk, "conf")).isSymbolicLink()).toBe(true);
  expect(lstatSync(join(wrapperJdk, "bin", "jar")).isSymbolicLink()).toBe(true);
  expect(readFileSync(logs.elideLog, "utf8")).toContain("javac\n--\nSample.java");
  expect(readFileSync(logs.javaLog, "utf8")).toContain("-version");
  expect(readFileSync(logs.jarLog, "utf8")).toContain("tf\nsample.jar");
});

test("uses jtreg summary output when adapter logging is enabled", async () => {
  const { ctx, logs } = setupJtregFixture();
  ctx.log = true;

  await collect(runJavacJtreg(ctx));

  expect(readFileSync(logs.jtregArgsLog, "utf8")).toContain("-verbose:summary\n");
});

test("passes adapter threads through to jtreg concurrency", async () => {
  const { ctx, logs } = setupJtregFixture();
  ctx.threads = 3;

  await collect(runJavacJtreg(ctx));

  expect(readFileSync(logs.jtregArgsLog, "utf8")).toContain("-concurrency:3\n");
});

test("passes configured jtreg timeout factor through to jtreg", async () => {
  const { ctx, logs } = setupJtregFixture();
  ctx.settings.jtregTimeoutFactor = 2;

  await collect(runJavacJtreg(ctx));

  expect(readFileSync(logs.jtregArgsLog, "utf8")).toContain("-timeoutFactor:2\n");
});

test("maps configured jtreg case timeout seconds to timeout factor", async () => {
  const { ctx, logs } = setupJtregFixture();
  delete ctx.settings.jtregTimeoutFactor;
  ctx.settings.jtregCaseTimeoutSeconds = 300;

  await collect(runJavacJtreg(ctx));

  expect(readFileSync(logs.jtregArgsLog, "utf8")).toContain("-timeoutFactor:2.5\n");
});

test("streams jtreg summary results before the process exits", async () => {
  const { ctx, logs } = setupJtregFixture("streaming");
  ctx.log = true;

  const iterator = runJavacJtreg(ctx)[Symbol.asyncIterator]();
  await expect(iterator.next()).resolves.toMatchObject({
    value: expect.objectContaining({
      id: "tools/javac/diags/ExamplePass.java",
      status: "pass",
      meta: expect.objectContaining({
        transient: true,
      }),
    }),
    done: false,
  });

  writeFileSync(logs.continueFile, "");

  await expect(iterator.next()).resolves.toMatchObject({
    value: expect.objectContaining({
      id: "tools/javac/diags/ExamplePass.java",
      status: "pass",
      meta: expect.objectContaining({
        quiet: true,
      }),
    }),
    done: false,
  });

  await expect(iterator.next()).resolves.toEqual({ value: undefined, done: true });
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

test("returns parsed per-test results plus a runner error when jtreg exits non-zero after writing a summary", async () => {
  const { ctx } = setupJtregFixture("summary-runner-failure");

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "tools/javac/diags/ExamplePass.java",
      status: "pass",
    }),
    expect.objectContaining({
      id: "javac-jtreg::<runner>",
      status: "error",
      message: "jtreg infrastructure failure\n",
      meta: {
        suite: "javac-jtreg",
        upstreamPath: "<runner>",
        category: "runner",
        runner: "jtreg",
        subtest: "<runner>",
      },
    }),
  ]);
  expect(results[1]?.durationMs).toEqual(expect.any(Number));
});

test("does not add a runner error when jtreg reports failed tests in the summary but exits cleanly", async () => {
  const { ctx } = setupJtregFixture("summary-test-failure");

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "tools/javac/diags/Other.java",
      status: "fail",
    }),
  ]);
  expect(results.find((result) => result.id === "javac-jtreg::<runner>")).toBeUndefined();
});

test("trusts failed jtreg summary results when jtreg exits with the test-error code", async () => {
  const { ctx } = setupJtregFixture("summary-test-failure-exit");

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "tools/javac/diags/Other.java",
      status: "fail",
    }),
  ]);
  expect(results.find((result) => result.id === "javac-jtreg::<runner>")).toBeUndefined();
});

test("returns a runner error when jtreg writes an unparseable summary", async () => {
  const { ctx } = setupJtregFixture("unparseable-summary");

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toHaveLength(1);
  expect(results[0]).toMatchObject({
    id: "javac-jtreg::<runner>",
    status: "error",
  });
  expect(results[0]?.message).toContain("jtreg summary contained no parseable test results");
});

test("expands directory manifest entries to matching files for include globs", () => {
  expect(
    expandManifestIncludePaths(
      "/tmp/langtools",
      ["tools/javac/diags/ExamplePass.java", "tools/javac/diags/Other.java", "tools/javac/tree/Tree.java"],
      ["tools/javac/diags/Example*.java", "tools/javac/tree/**"],
    ),
  ).toEqual(["tools/javac/diags/ExamplePass.java", "tools/javac/tree/Tree.java"]);
});

test("passes only included manifest paths to jtreg", async () => {
  const { ctx, logs } = setupJtregFixture();
  ctx.include = ["tools/javac/diags/Example*.java"];

  await collect(runJavacJtreg(ctx));

  const args = readFileSync(logs.jtregArgsLog, "utf8");
  expect(args).toContain("tools/javac/diags/ExamplePass.java");
  expect(args).not.toContain("tools/javac/diags/Other.java");
  expect(args).not.toContain("tools/javac/launcher/BasicSourceLauncherTests.java");
});

test("sparse jtreg root keeps sibling sources and OpenJDK make helpers", () => {
  const root = mkdtempSync(join(tmpdir(), "jtreg-sparse-root-"));
  const suitePath = join(root, "openjdk");
  const langtools = join(suitePath, "test/langtools");
  mkdirSync(join(langtools, "tools/javac/MethodParameters/ClassReaderTest"), { recursive: true });
  mkdirSync(join(suitePath, "make/langtools/src/classes/build/tools/symbolgenerator"), { recursive: true });
  writeFileSync(join(langtools, "TEST.ROOT"), "groups=TEST.groups\n");
  writeFileSync(join(langtools, "tools/javac/MethodParameters/ClassReaderTest/ClassReaderTest.java"), "class ClassReaderTest {}\n");
  writeFileSync(join(langtools, "tools/javac/MethodParameters/ClassReaderTest/MethodParameterProcessor.java"), "class MethodParameterProcessor {}\n");
  writeFileSync(join(suitePath, "make/langtools/src/classes/build/tools/symbolgenerator/CreateSymbols.java"), "class CreateSymbols {}\n");
  const ctx = {
    suitePath,
    workspacePath: join(root, "work"),
  } as AdapterContext;

  const patched = createSparseLangtoolsRoot(ctx, join(root, "run"), [
    "tools/javac/MethodParameters/ClassReaderTest/ClassReaderTest.java",
  ]);

  expect(existsSync(join(patched, "tools/javac/MethodParameters/ClassReaderTest/ClassReaderTest.java"))).toBe(true);
  expect(existsSync(join(patched, "tools/javac/MethodParameters/ClassReaderTest/MethodParameterProcessor.java"))).toBe(true);
  expect(lstatSync(join(root, "run/suite/make")).isSymbolicLink()).toBe(true);
});

test("returns a setup error and does not invoke jtreg when include globs match no javac tests", async () => {
  const { ctx, logs } = setupJtregFixture();
  ctx.include = ["tools/javac/does-not-exist/**/*.java"];

  const results = await collect(runJavacJtreg(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "javac-jtreg::<runner>",
      status: "error",
      message: "javac-jtreg selected no tests",
    }),
  ]);
  expect(existsSync(logs.jtregArgsLog)).toBe(false);
});

test("keeps directory manifest entries unchanged when include globs are empty", () => {
  expect(
    expandManifestIncludePaths(
      "/tmp/langtools",
      ["tools/javac/diags", "tools/javac/launcher/BasicSourceLauncherTests.java"],
      [],
    ),
  ).toEqual(["tools/javac/diags", "tools/javac/launcher/BasicSourceLauncherTests.java"]);
});

test("resolves jdkHome from explicit settings first", async () => {
  const { ctx } = setupJtregFixture();
  expect(await resolveJdkHome(ctx.settings, {}, ctx.repoRoot)).toBe(String(ctx.settings.jdkHome));
});

test("rejects explicit jdkHome values missing javac before wrapper construction", async () => {
  const { ctx } = setupJtregFixture();
  rmSync(join(String(ctx.settings.jdkHome), "bin", "javac"));

  await expect(resolveJdkHome(ctx.settings, {}, ctx.repoRoot)).rejects.toThrow(
    `javac-jtreg JDK home is missing bin/javac: ${String(ctx.settings.jdkHome)}`,
  );
});

test("derives jdkHome from the configured javaRunner when explicit settings are absent", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;

  expect(await resolveJdkHome(ctx.settings, {}, ctx.repoRoot)).toMatch(/fake-jdk$/);
});

test("falls back to JAVA_HOME when javaRunner discovery is unavailable", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;
  const missingRunner = join(dirname(String(ctx.settings.javaRunner)), "missing-java");
  ctx.settings.javaRunner = missingRunner;

  expect(await resolveJdkHome(ctx.settings, { JAVA_HOME: join(dirname(missingRunner), "fake-jdk") }, ctx.repoRoot)).toMatch(
    /fake-jdk$/,
  );
});

test("rejects JAVA_HOME fallbacks missing jar before wrapper construction", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;
  const fakeJdk = join(dirname(String(ctx.settings.javaRunner)), "fake-jdk");
  ctx.settings.javaRunner = join(dirname(String(ctx.settings.javaRunner)), "missing-java");
  rmSync(join(fakeJdk, "bin", "jar"));

  await expect(resolveJdkHome(ctx.settings, { JAVA_HOME: fakeJdk }, ctx.repoRoot)).rejects.toThrow(
    `javac-jtreg JDK home is missing bin/jar: ${fakeJdk}`,
  );
});

test("preserves configured javaRunner when explicit jdkHome is used", async () => {
  const { ctx } = setupJtregFixture();

  await expect(resolveJavaExecution(ctx.settings, {}, ctx.repoRoot)).resolves.toMatchObject({
    jdkHome: String(ctx.settings.jdkHome),
    javaRunner: String(ctx.settings.javaRunner),
  });
});

test("uses jdkHome/bin/java when explicit jdkHome is paired with bare javaRunner", async () => {
  const { ctx } = setupJtregFixture();
  ctx.settings.javaRunner = "java";

  await expect(resolveJavaExecution(ctx.settings, {}, ctx.repoRoot)).resolves.toMatchObject({
    jdkHome: String(ctx.settings.jdkHome),
    javaRunner: join(String(ctx.settings.jdkHome), "bin", "java"),
  });
});

test("preserves discovered javaRunner when java.home is derived from it", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;

  await expect(resolveJavaExecution(ctx.settings, {}, ctx.repoRoot)).resolves.toMatchObject({
    javaRunner: String(ctx.settings.javaRunner),
  });
});

test("uses discovered jdkHome/bin/java when bare javaRunner resolves through PATH", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;
  const fixtureRoot = dirname(String(ctx.settings.javaRunner));
  const fakeJdk = join(fixtureRoot, "fake-jdk");
  const binDir = join(fixtureRoot, "bin");
  mkdirSync(binDir, { recursive: true });
  writeExecutable(
    join(binDir, "java"),
    `#!/usr/bin/env bash
set -euo pipefail
if [[ "$#" -ge 2 && "$1" == "-XshowSettings:properties" && "$2" == "-version" ]]; then
  printf 'Property settings:\\n'
  printf '    java.home = %s\\n' ${JSON.stringify(fakeJdk)}
  exit 0
fi
exit 9
`,
  );
  ctx.settings.javaRunner = "java";

  await expect(
    resolveJavaExecution(ctx.settings, { PATH: `${binDir}:${process.env.PATH ?? ""}` }, ctx.repoRoot),
  ).resolves.toMatchObject({
    jdkHome: fakeJdk,
    javaRunner: join(fakeJdk, "bin", "java"),
  });
});

test("uses JAVA_HOME/bin/java when falling back from a broken javaRunner", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;
  const missingRunner = join(dirname(String(ctx.settings.javaRunner)), "missing-java");
  ctx.settings.javaRunner = missingRunner;

  await expect(
    resolveJavaExecution(ctx.settings, { JAVA_HOME: join(dirname(missingRunner), "fake-jdk") }, ctx.repoRoot),
  ).resolves.toMatchObject({
    javaRunner: join(dirname(missingRunner), "fake-jdk", "bin", "java"),
  });
});

test("passes through configured JTREG_JAVA when explicit jdkHome is set", async () => {
  const { ctx, logs } = setupJtregFixture();

  await collect(runJavacJtreg(ctx));

  expect(readFileSync(logs.jtregJavaEnvLog, "utf8").trim()).toBe(String(ctx.settings.javaRunner));
});

test("passes through configured JTREG_JAVA when javaRunner discovery succeeds", async () => {
  const { ctx, logs } = setupJtregFixture();
  delete ctx.settings.jdkHome;

  await collect(runJavacJtreg(ctx));

  expect(readFileSync(logs.jtregJavaEnvLog, "utf8").trim()).toBe(String(ctx.settings.javaRunner));
});

test("uses JAVA_HOME/bin/java for JTREG_JAVA when javaRunner discovery falls back", async () => {
  const { ctx, logs } = setupJtregFixture();
  delete ctx.settings.jdkHome;
  const originalJavaHome = process.env.JAVA_HOME;
  const fallbackJavaHome = join(dirname(String(ctx.settings.javaRunner)), "fake-jdk");
  ctx.settings.javaRunner = join(dirname(String(ctx.settings.javaRunner)), "missing-java");
  process.env.JAVA_HOME = fallbackJavaHome;

  try {
    await collect(runJavacJtreg(ctx));
  } finally {
    if (originalJavaHome === undefined) delete process.env.JAVA_HOME;
    else process.env.JAVA_HOME = originalJavaHome;
  }

  expect(readFileSync(logs.jtregJavaEnvLog, "utf8").trim()).toBe(join(fallbackJavaHome, "bin", "java"));
});

test("rejects missing JDK configuration after javaRunner discovery and JAVA_HOME fallback", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;
  const badRunner = join(dirname(String(ctx.settings.javaRunner)), "bad-java.sh");
  writeExecutable(
    badRunner,
    `#!/usr/bin/env bash
set -euo pipefail
echo "no java.home here" >&2
exit 0
`,
  );
  ctx.settings.javaRunner = badRunner;
  rmSync(join(dirname(badRunner), "fake-jdk"), { recursive: true, force: true });

  await expect(resolveJdkHome(ctx.settings, {}, ctx.repoRoot)).rejects.toThrow(
    "javac-jtreg could not determine a real JDK home from settings.jdkHome, javaRunner, or JAVA_HOME",
  );
});
