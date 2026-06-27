import { chmodSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { expect, test } from "bun:test";
import type { AdapterContext } from "./types";
import { expandManifestIncludePaths, parseJtregSummary, resolveJavaExecution, resolveJdkHome, runJavacJtreg } from "./javac-jtreg";

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
  const jdkHome = join(root, "fake-jdk");
  mkdirSync(workspacePath, { recursive: true });
  mkdirSync(join(suitePath, "test/langtools/tools/javac/diags"), { recursive: true });
  mkdirSync(join(suitePath, "test/langtools/tools/javac/launcher"), { recursive: true });
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
  expect(readFileSync(join(wrapperJdk, "release"), "utf8")).toBe("JAVA_VERSION=test\n");
  expect(lstatSync(join(wrapperJdk, "conf")).isSymbolicLink()).toBe(true);
  expect(lstatSync(join(wrapperJdk, "bin", "jar")).isSymbolicLink()).toBe(true);
  expect(readFileSync(logs.elideLog, "utf8")).toContain("javac\n--\nSample.java");
  expect(readFileSync(logs.javaLog, "utf8")).toContain("-version");
  expect(readFileSync(logs.jarLog, "utf8")).toContain("tf\nsample.jar");
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

test("preserves configured javaRunner when explicit jdkHome is used", async () => {
  const { ctx } = setupJtregFixture();

  await expect(resolveJavaExecution(ctx.settings, {}, ctx.repoRoot)).resolves.toMatchObject({
    jdkHome: String(ctx.settings.jdkHome),
    javaRunner: String(ctx.settings.javaRunner),
  });
});

test("preserves discovered javaRunner when java.home is derived from it", async () => {
  const { ctx } = setupJtregFixture();
  delete ctx.settings.jdkHome;

  await expect(resolveJavaExecution(ctx.settings, {}, ctx.repoRoot)).resolves.toMatchObject({
    javaRunner: String(ctx.settings.javaRunner),
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
