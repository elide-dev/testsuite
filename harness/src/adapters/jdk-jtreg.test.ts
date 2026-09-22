import { expect, test } from "bun:test";
import { chmod, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  PROTOCOL,
  recordReferenceBaseline,
  referenceBaselineName,
  ROOT,
  baselineResults,
  buildReferenceBaseline,
  cleanEnv,
  loadReferenceBaseline,
  MEASUREMENT_ENVIRONMENT,
  referenceComplete,
  referenceFingerprint,
  referenceInputs,
  discover,
  flatten,
  jdkJtregAdapter,
  hasTest,
  incomplete,
  incompleteReason,
  markdown,
  parseJtr,
  portableReason,
  portableRoot,
  describe,
  variantsOf,
  jtrPath,
  combine,
  variantResult,
  parseSummary,
  effectiveExecution,
  excludedReason,
  JTREG_OPTIONS,
  KEYWORD_FILTER,
  REQUIRES_PROPERTIES,
  areaSlug,
  collectDiagnostics,
  DIAGNOSTIC_CAP,
  leakSection,
  runSuiteOnRuntime,
  runtimeProgress,
  summary,
  unflatten,
  type Entry,
  type Manifest,
  type Report,
  type Result,
  type Status,
} from "./jdk-jtreg";
import { normalizeSignature } from "../analyze/signature";
import { compare as compareExpectations } from "../expectations/compare";
import { parseExpectations, type Expectations } from "../expectations/load";
import { ratchetCandidates } from "../expectations/ratchet";
import manifest from "../../../manifests/bali-jdk.json";

const none = (): Expectations => ({ entries: [], ratchet: new Set() });
// The harness exits 2 for an incomplete run (the adapter throws), else 1 iff regressions.
const code = (r: Report) =>
  incomplete(r) ? 2 : compareExpectations(flatten(r), none()).regressions.length ? 1 : 0;

const jtr = (status: string) =>
  `#Test Results (version 2)\n#-----testresult-----\nexecStatus=${status}\n#section:main\nexecStatus=Passed. Fake output\n`;
const report = (statuses: Status[]): Report => ({
  schema: 2,
  suite: "fixture",
  createdAt: "2026-09-07T00:00:00Z",
  metadata: {},
  exitCodes: {
    reference: 0,
    bali: statuses.every((status) => status === "pass" || status === "unsupported") ? 0 : 2,
  },
  tests: statuses.map((status, index) => ({
    id: `java/lang/${index}.java`,
    area: "java/lang",
    unsupported: status === "unsupported" ? "Unsupported @library directive" : null,
    reference: { status: status === "unsupported" ? "unsupported" : "pass", detail: "reference" },
    bali: { status, detail: status },
  })),
});
const main = "public static void main(String[] args) {}";
const source = `/* @test\n * @run main/othervm Example\n */\n${main}`;

test("jtr parsing uses the result header, never guest output or missing results", () => {
  expect(parseJtr(jtr("Passed. Execution successful")).status).toBe("pass");
  expect(parseJtr(jtr("Passed. Skipped: Windows only")).status).toBe("skipped");
  expect(parseJtr(jtr("Failed. main threw exception")).status).toBe("fail");
  expect(parseJtr(jtr("Error. Cannot compile")).status).toBe("error");
  expect(parseJtr(jtr("Error. Program timed out")).status).toBe("timeout");
  expect(parseJtr(jtr("Not run. Filtered")).status).toBe("blocked");
  expect(parseJtr(undefined).status).toBe("blocked");
  expect(parseJtr("#section:main\nexecStatus=Passed. Fake output").status).toBe("blocked");
});

test("a runner that ran out of processes is blocked; a test that exhausts its own is not", () => {
  // Strings kept verbatim from the 2026-09-20 linux-x64 run; jtreg escapes `:` as `\\:`.
  const spawn =
    "Error. Error invoking program `/opt/reference-jdk/bin/javac'\\: java.io.IOException\\: " +
    'Cannot run program "/opt/reference-jdk/bin/javac"\\: posix_spawn failed, error\\: 11 ' +
    "(Resource temporarily unavailable)";
  expect(parseJtr(jtr(spawn)).status).toBe("blocked");
  const helper = "Error. Error invoking program\\: Failed to exec spawn helper\\: pid\\: 1, exit code\\: 1";
  expect(parseJtr(jtr(helper)).status).toBe("blocked");
  // jtreg's own harness thread could not be created, so the test never ran.
  const harness =
    "Error. Unexpected error caught from test java/math/BigInteger/StringConstructor.java\\: " +
    "java.lang.OutOfMemoryError\\: unable to create native thread\\: possibly out of memory or process/resource limits reached";
  expect(parseJtr(jtr(harness)).status).toBe("blocked");

  // A build action that could not fork says only "Compilation failed" in its header; the cause
  // is in its own section, which is why jtreg's sections are searched.
  const section = (name: string, body: string) => `#section:${name}\n${body}\n`;
  const result = (status: string, ...sections: string[]) =>
    `#Test Results (version 2)\n#-----testresult-----\nexecStatus=${status}\n${sections.join("")}`;
  const forked =
    'Cannot run program "javac"\\: posix_spawn failed, error\\: 11 (Resource temporarily unavailable)';
  expect(
    parseJtr(result("Failed. Compilation failed\\: Compilation failed", section("build", forked))).status,
  ).toBe("blocked");
  // A genuine compile failure with the same header stays a failure; it was measured.
  expect(parseJtr(jtr("Failed. Compilation failed\\: Compilation failed")).status).toBe("fail");

  // The discriminator is whose thread failed, and where it was reported. These four shapes are
  // the virtual-thread and concurrency stress tests, whose whole subject is exhausting threads:
  // the words appear in their own output, and a scan of the whole file mistook every one of
  // them for a starved runner. Verified against the .jtr files of the 2026-09-21 darwin run.
  const oome = "java.lang.OutOfMemoryError: Unable to create native thread: possibly out of memory or process/resource limits reached";
  // The test's own main threw it — that is a result, and for these tests it is the result.
  expect(
    parseJtr(jtr(`Failed. Execution failed\\: \`main' threw exception\\: ${oome.replaceAll(":", "\\:")}`)).status,
  ).toBe("fail");
  // A timeout whose output mentions it stays a timeout.
  expect(parseJtr(result("Error. Program `bin/java' timed out", section("main", oome))).status).toBe("timeout");
  // A JUnit failure whose output mentions it stays a failure.
  expect(
    parseJtr(result("Failed. Execution failed\\: `main' threw exception\\: java.lang.Exception\\: JUnit test failure", section("junit", oome))).status,
  ).toBe("fail");
  // Even a test that prints the launch-refusal text itself is reporting, not diagnosing.
  expect(parseJtr(result("Failed. main threw exception", section("main", forked))).status).toBe("fail");
});

test("discovery parses test descriptions without mistaking ordinary javadoc for jtreg tags", () => {
  expect(hasTest(source)).toBe(true);
  expect(hasTest("# @test\n# shell test")).toBe(true);
  expect(hasTest("class Fixture {} ")).toBe(false);
  expect(
    portableReason("java/lang/Example.java", source + "\n/**\n * @throws Exception reason\n */"),
  ).toBeNull();
  // jtreg evaluates its own directives; only what can never produce a result here is withheld.
  for (const tag of [
    "requires vm.gc.G1",
    "library /test/lib",
    "modules java.base/jdk.internal.misc",
    "build Helper",
    "run main -XX:+WhiteBoxAPI Example",
    "run testng Example",
    "run junit Example",
    "run driver Example",
    "key randomness intermittent",
    "enablePreview",
    "compile Helper.java",
  ]) {
    expect(portableReason("java/lang/Example.java", `/* @test\n * @${tag}\n */\n${main}`)).toBeNull();
  }
  expect(portableReason("java/lang/Example.java", `/* @test\n * @ignore 8000000 broken\n */\n${main}`)).toBe(
    "Ignored upstream (@ignore)",
  );
  for (const key of ["headful", "printer", "sound", "multimon", "i18n headful"]) {
    expect(portableReason("java/lang/Example.java", `/* @test\n * @key ${key}\n */\n${main}`)).toBe(
      "Requires a display, printer, or audio device (@key)",
    );
  }
  expect(portableReason("java/lang/Example.java", `/* @test\n * @run main/manual Example\n */\n${main}`)).toBe(
    "Manual test action",
  );
  expect(portableReason("java/lang/Example.java", `/* @test\n * @run main/othervm/manual=yesno Example\n */\n${main}`)).toBe(
    "Manual test action",
  );
  expect(portableReason("java/lang/Example.java", `/* @test\n * @run applet Example.html\n */\n${main}`)).toBe(
    "Applet test action",
  );
  expect(portableReason("java/lang/Example.html", "<!-- @test -->")).toBe("Unsupported test file type");
  expect(portableReason("java/lang/Example.jasm", "// @test")).toBe("Unsupported test file type");
  expect(portableReason("java/lang/Script.sh", "# @test\n# @run shell Script.sh\n")).toBeNull();
  expect(hasTest(`/*\n  @test\n */`)).toBe(true);
  // Continued tag values belong to the tag above them.
  expect(
    describe("java/lang/Example.java", `/* @test\n * @run main Example\n *   extraArgument\n */\n${main}`)[0]!.tags,
  ).toContainEqual({ name: "run", value: "main Example extraArgument" });
});

test("a file's @test variants are measured together and map to jtreg's per-variant results", () => {
  const variants = `/* @test id=one\n * @run main Example one\n */\n/* @test id=two\n * @run main/othervm -ea Example two\n */\n${main}`;
  expect(describe("java/lang/Example.java", variants).map((d) => d.id)).toEqual(["one", "two"]);
  expect(variantsOf("java/lang/Example.java", variants)).toEqual(["one", "two"]);
  expect(variantsOf("java/lang/Example.java", source)).toEqual([""]);
  // A lone description keeps no id in jtreg's result names, even when it declares one.
  expect(variantsOf("java/lang/Example.java", `/* @test id=only\n * @run main Example\n */\n${main}`)).toEqual([""]);
  expect(portableReason("java/lang/Example.java", variants)).toBeNull();
  // Unnamed descriptions in a multi-description file take jtreg's positional ids.
  const unnamed = `/* @test\n * @run main Example\n */\n/* @test id=named\n * @run main Example\n */\n/* @test\n * @run main Example\n */\n${main}`;
  expect(variantsOf("java/lang/Example.java", unnamed)).toEqual(["id0", "named", "id2"]);
  expect(portableReason("java/lang/Example.java", unnamed)).toBeNull();
  expect(
    portableReason("java/lang/Example.java", `/* @test id=x\n * @run main Example\n */\n/* @test id=x\n * @run main Example\n */\n${main}`),
  ).toBe("Duplicate test variant ids");
  expect(describe("java/lang/Script.sh", "# @test id=a\n# @run shell Script.sh\n\n# @test id=b\n# @run shell Script.sh b\n").map((d) => d.id)).toEqual(["a", "b"]);
  expect(jtrPath("java/lang/Example.java", "")).toBe("java/lang/Example.jtr");
  expect(jtrPath("java/lang/Example.java", "two")).toBe("java/lang/Example_two.jtr");
  expect(jtrPath("java/lang/Script.sh", "")).toBe("java/lang/Script.jtr");
  const pass: Result = { status: "pass", detail: "Passed. Execution successful" };
  const fail: Result = { status: "fail", detail: "Failed. main threw exception" };
  expect(combine([{ variant: "one", result: pass }, { variant: "two", result: pass }])).toEqual(pass);
  expect(combine([{ variant: "one", result: pass }, { variant: "two", result: fail }])).toEqual({
    status: "fail",
    detail: "#two: Failed. main threw exception",
  });
  expect(combine([{ variant: "", result: fail }])).toEqual(fail);
  // The worst variant decides: a missing result outranks a failure, a timeout outranks an error.
  expect(
    combine([
      { variant: "a", result: fail },
      { variant: "b", result: { status: "blocked", detail: "No jtreg result; see harness.log" } },
    ]).status,
  ).toBe("blocked");
  expect(
    combine([
      { variant: "a", result: { status: "error", detail: "Error. x" } },
      { variant: "b", result: { status: "timeout", detail: "Error. Program timed out" } },
    ]).status,
  ).toBe("timeout");
});

test("filtered tests are read from jtreg's full summary as skips, never as missing results", () => {
  const summaryText =
    "java/lang/A.java      Passed. Execution successful\njava/lang/B.java#two  Not run.\njava/lang/C.java      Not run.\n";
  const statuses = parseSummary(summaryText);
  expect(statuses.get("java/lang/B.java#two")).toBe("Not run.");
  expect(variantResult(jtr("Passed. Execution successful"), "Passed. Execution successful").status).toBe("pass");
  expect(variantResult(undefined, "Not run.")).toEqual({
    status: "skipped",
    detail: "Not run. (filtered by keywords, @requires, or @ignore)",
  });
  expect(variantResult(undefined, undefined).status).toBe("blocked");
  // A reference "Not run" is a skip (unscored); a Bali "Not run" under a passing reference is a failure.
  const filtered = report(["skipped"]);
  expect(flatten(filtered)[0]!.status).toBe("fail");
  filtered.tests[0]!.reference = { status: "skipped", detail: "Not run." };
  expect(flatten(filtered)[0]!.status).toBe("skip");
  expect(JTREG_OPTIONS).toContain("-report:all");
  expect(JTREG_OPTIONS).toContain("-ignore:quiet");
  expect(JTREG_OPTIONS).toContain("-othervm");
  expect(KEYWORD_FILTER).toBe("!headful&!printer&!sound&!multimon");
});

test("the portable root keeps upstream keywords and directory policies and replaces the HotSpot probes", () => {
  const upstream =
    "# comment\nkeys=headful sound printer multimon \\\n     i18n intermittent randomness cgroups\n" +
    "othervm.dirs=java/awt java/beans\nexclusiveAccess.dirs=java/math/BigInteger/largeMemory \\\njava/rmi/Naming\n" +
    "groups=TEST.groups\nrequires.extraPropDefns = ../jtreg-ext/requires/VMProps.java\n" +
    "requires.extraPropDefns.bootlibs = ../lib/jdk/test/whitebox\nrequires.properties= \\\n    sun.arch.data.model \\\n    vm.flagless\n" +
    "requiredVersion=7.5.1+1\nexternal.lib.roots = ../../\nuseNewOptions=true\n";
  const root = portableRoot(upstream);
  expect(root.startsWith(ROOT)).toBe(true);
  expect(root).toContain("keys=headful sound printer multimon i18n intermittent randomness cgroups\n");
  expect(root).toContain("othervm.dirs=java/awt java/beans\n");
  expect(root).toContain("exclusiveAccess.dirs=java/math/BigInteger/largeMemory java/rmi/Naming\n");
  expect(root).toContain("groups=TEST.groups\n");
  expect(root).not.toContain("whitebox");
  expect(root).not.toContain("jtreg-ext");
  expect(root.match(/^requires\.extraPropDefns=/gm)).toHaveLength(1);
  expect(root).toContain("requires.extraPropDefns=../portable/requires/VMProps.java\n");
  expect(root).toContain("external.lib.roots=../../\n");
  for (const property of ["vm.flagless", "vm.gc.G1", "vm.hasJFR", "jdk.foreign.linker", "release.implementor"])
    expect(REQUIRES_PROPERTIES).toContain(property);
  expect(portableRoot("")).toBe(ROOT);
});

test("manifest exclusions and --include scoping act on the inventory by path", () => {
  const exclusions = [{ glob: "java/awt/**", reason: "desktop APIs are out of scope" }];
  expect(excludedReason("java/awt/Frame/Test.java", exclusions)).toBe("Excluded by manifest: desktop APIs are out of scope");
  expect(excludedReason("java/lang/Test.java", exclusions)).toBeNull();
  for (const exclusion of manifest.exclude) {
    expect(exclusion.glob).toMatch(/^[\w/.-]+\*\*$/);
    expect(exclusion.reason.length).toBeGreaterThan(10);
  }
  expect(effectiveExecution(manifest as Manifest, {}, 1)).toEqual(manifest.execution);
  expect(effectiveExecution(manifest as Manifest, { BALI_JTREG_CONCURRENCY: "8" }, 1).concurrency).toBe(8);
  expect(effectiveExecution(manifest as Manifest, {}, 6).concurrency).toBe(6);
  expect(effectiveExecution(manifest as Manifest, { BALI_JTREG_CONCURRENCY: "nope" }, 1).concurrency).toBe(
    manifest.execution.concurrency,
  );
});

test("inventory retains unsupported tests, excludes support files, and honours exclusions and scoping", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-compat-"));
  try {
    await mkdir(join(root, "java/lang/restricted"), { recursive: true });
    await mkdir(join(root, "java/awt"), { recursive: true });
    await mkdir(join(root, "jdk/nested"), { recursive: true });
    await Bun.write(join(root, "java/lang/Example.java"), source);
    await Bun.write(join(root, "java/lang/Fixture.java"), "class Fixture {}");
    await Bun.write(join(root, "java/lang/Script.sh"), "# @test\n# @run shell Script.sh\n");
    await Bun.write(join(root, "java/lang/restricted/Example.java"), source);
    await Bun.write(join(root, "java/lang/restricted/TEST.properties"), "modules=java.desktop\n");
    await Bun.write(join(root, "java/awt/Frame.java"), source);
    await Bun.write(join(root, "jdk/nested/TEST.ROOT"), "keys=x\n");
    await Bun.write(join(root, "jdk/nested/Inner.java"), source);
    const rows = await discover(root, [{ glob: "java/awt/**", reason: "desktop" }]);
    expect(rows.map((row) => row.id)).toEqual([
      "java/awt/Frame.java",
      "java/lang/Example.java",
      "java/lang/Script.sh",
      "java/lang/restricted/Example.java",
      "jdk/nested/Inner.java",
    ]);
    expect(rows[0]!.unsupported).toBe("Excluded by manifest: desktop");
    expect(rows[1]!.unsupported).toBeNull();
    expect(rows[1]!.variants).toEqual([""]);
    expect(rows[2]!.unsupported).toBeNull();
    // Inherited TEST.properties are jtreg's to apply; only a nested TEST.ROOT is withheld.
    expect(rows[3]!.unsupported).toBeNull();
    expect(rows[4]!.unsupported).toBe("Nested test root: jdk/nested");
    const scoped = await discover(root, [], ["java/lang/**"]);
    expect(scoped.map((row) => row.id)).toEqual([
      "java/lang/Example.java",
      "java/lang/Script.sh",
      "java/lang/restricted/Example.java",
    ]);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("manifest declares a pinned inventory scope rather than a handpicked passing list", () => {
  expect(manifest.scope).toBe("test/jdk");
  expect(manifest).not.toHaveProperty("tests");
  expect(manifest.source.revision).toMatch(/^[a-f0-9]{40}$/);
  for (const pin of [manifest.source, manifest.jtreg]) expect(pin.sha256).toMatch(/^[a-f0-9]{64}$/);
});

test("only harness aborts or missing results are incomplete; failures are ordinary results", () => {
  expect(code(report(["pass", "unsupported"]))).toBe(0);
  expect(code(report(["fail"]))).toBe(1);
  expect(code(report(["timeout"]))).toBe(1);
  expect(code(report(["blocked"]))).toBe(2);
  expect(code(report([]))).toBe(2);
  const referenceIssue = report(["pass"]);
  referenceIssue.tests[0]!.reference.status = "fail";
  referenceIssue.exitCodes.reference = 2;
  // A reference problem is not a Bali regression: it is skipped, not scored.
  expect(code(referenceIssue)).toBe(0);
  expect(incomplete(referenceIssue)).toBe(false);
  expect(summary(referenceIssue).verifiedPassing).toBe(0);
  expect(summary(referenceIssue).referenceIssues).toBe(1);
  const badHarness = report(["pass"]);
  for (const exit of [1, 4, 5, 6]) {
    badHarness.exitCodes.bali = exit;
    expect(incomplete(badHarness)).toBe(true);
    expect(code(badHarness)).toBe(2);
  }
  const testError = report(["error"]);
  testError.exitCodes.bali = 3;
  expect(code(testError)).toBe(1);
});

test("flattening keeps both-pass as pass, Bali-only failures as failures, and other outcomes as skips", () => {
  const flat = flatten(report(["pass", "fail", "timeout", "skipped", "unsupported"]));
  expect(flat.map((t) => t.status)).toEqual(["pass", "fail", "error", "fail", "skip"]);
  expect(flat[1]!.meta).toMatchObject({ area: "java/lang", bali: { status: "fail" } });
  expect(flat[4]!.message).toBe("Unsupported @library directive");
  expect(flat[3]!.status).toBe("fail");
  const referenceIssue = report(["pass"]);
  referenceIssue.tests[0]!.reference.status = "fail";
  expect(flatten(referenceIssue)[0]).toMatchObject({
    status: "skip",
    message: "Reference fail: reference",
  });
  // Reclassifying a passing file as unsupported loses its pass rather than hiding it.
  const reclassified = report(["pass"]);
  reclassified.tests[0]!.unsupported = "Unsupported directive";
  expect(flatten(reclassified)[0]!.status).toBe("skip");
  expect(summary(reclassified).verifiedPassing).toBe(0);
});

test("expectations and ratchet apply to flattened results exactly like Elide suites", () => {
  const tests = flatten(report(["pass", "fail", "error"]));
  const exp = parseExpectations('[fail]\n"java/lang/1.java" = "known"\n');
  expect(compareExpectations(tests, exp).regressions.map((t) => t.id)).toEqual(["java/lang/2.java"]);
  expect(ratchetCandidates(tests, exp)).toEqual(["java/lang/2.java"]);
  exp.ratchet.add("java/lang/2.java");
  expect(compareExpectations(tests, exp).regressions).toEqual([]);
  const fixed = compareExpectations(flatten(report(["pass", "pass", "pass"])), exp);
  expect(fixed.newPasses.map((t) => t.id)).toEqual(["java/lang/1.java", "java/lang/2.java"]);
  const muted = parseExpectations('[skip]\n"java/lang/**" = "muted"\n');
  expect(compareExpectations(tests, muted).counts).toMatchObject({ skip: 3, pass: 0 });
});

test("summary exposes reference problems and adapter gaps in the fixed inventory", () => {
  const data = report(["pass", "unsupported", "fail"]);
  expect(summary(data)).toEqual({
    inventory: 3,
    runnable: 2,
    unsupported: 1,
    verifiedPassing: 1,
    baliFailures: 1,
    unmeasured: 0,
    referenceIssues: 0,
    incomplete: false,
  });
  expect(markdown(data)).toContain("3 test files inventoried");
  expect(markdown(data)).toContain("not Java SE certification");

  // A test the runner never started is counted apart from tests Bali got wrong, so the
  // report cannot present an unmeasured corpus as a wall of compatibility failures.
  const starved = report(["pass", "fail", "blocked"]);
  expect(summary(starved)).toMatchObject({ baliFailures: 1, unmeasured: 1, incomplete: true });
  expect(markdown(starved)).toContain("| Never measured (runner blocked) | 1 |");
  expect(incompleteReason(starved)).toContain("1 of 3 tests never ran on bali");
  // The usual cause leaves jtreg's own exit codes healthy, so the reason must not be about them.
  expect(incompleteReason(starved)).not.toContain("exited");
  const crashed = { ...report(["pass"]), exitCodes: { reference: 0, bali: 137 } };
  expect(incompleteReason(crashed)).toContain("bali jtreg exited 137");
});

test("measurement environment ignores terminal locale and uses fixed settings", async () => {
  const ambient = {
    LANG: "cs_CZ.UTF-8",
    LC_ALL: "",
    LC_CTYPE: "UTF-8",
    TZ: "Pacific/Honolulu",
    PATH: "/usr/bin",
    JAVA_TOOL_OPTIONS: "-Xmx1g",
  };
  const env = cleanEnv("/jdk", ambient);
  expect(env.LANG).toBe("C.UTF-8");
  expect(env.LC_ALL).toBe("C.UTF-8");
  expect(env.LC_CTYPE).toBe("C.UTF-8");
  expect(env.TZ).toBeUndefined();
  expect(env.JAVA_TOOL_OPTIONS).toBeUndefined();
  expect(env.JAVA_HOME).toBe("/jdk");
  expect(env.PATH).toBe("/jdk/bin:/usr/bin");
  expect(ambient.TZ).toBe("Pacific/Honolulu");
  expect(MEASUREMENT_ENVIRONMENT).toEqual({
    LANG: "C.UTF-8",
    LC_ALL: "C.UTF-8",
    LC_CTYPE: "C.UTF-8",
    TZ: null,
  });
});

test("runtime progress counts only completed results, including timeouts and skips", async () => {
  const work = await mkdtemp(join(tmpdir(), "bali-compat-progress-"));
  try {
    await Bun.write(join(work, "Pass.jtr"), jtr("Passed. Execution successful"));
    await Bun.write(join(work, "Timeout.jtr"), jtr("Error. Program timed out"));
    await Bun.write(join(work, "Skip.jtr"), jtr("Passed. Skipped: unsupported platform"));
    await Bun.write(join(work, "Running.jtr"), "#Test Results (version 2)\n");
    expect(
      await runtimeProgress(work, [
        "Pass.jtr",
        "Timeout.jtr",
        "Skip.jtr",
        "Running.jtr",
        "Missing.jtr",
      ]),
    ).toEqual({ completed: 3, passed: 1, failed: 1, skipped: 1 });
  } finally {
    await rm(work, { recursive: true, force: true });
  }
});

test("native adapter invokes jtreg with selected runtime and stock compiler and reads fresh results", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-native-adapter-"));
  try {
    const ref = join(root, "reference-jdk");
    await mkdir(join(ref, "bin"), { recursive: true });
    const java = join(ref, "bin/java");
    await Bun.write(
      java,
      `#!/bin/sh
exec '${process.execPath.replaceAll("'", "'\\''")}' '${join(root, "fake-jtreg.ts")}' "$@"
`,
    );
    await chmod(java, 0o755);
    await Bun.write(
      join(root, "fake-jtreg.ts"),
      `
const args = process.argv.slice(2);
const work = args.find(a => a.startsWith("-w:"))!.slice(3);
await Bun.write(work + "/Example.jtr", "#-----testresult-----\\nexecStatus=Passed. Execution successful\\n#section:main\\n");
await Bun.write(work + "/Variants_a.jtr", "#-----testresult-----\\nexecStatus=Passed. Execution successful\\n#section:main\\n");
const report = args.find(a => a.startsWith("-r:"))!.slice(3);
await Bun.write(report + "/text/summary.txt", "Example.java  Passed. Execution successful\\nVariants.java#a  Passed. Execution successful\\nVariants.java#b  Not run.\\nFiltered.java  Not run.\\n");
console.log("fixture jtreg started");
console.error("fixture jtreg diagnostic");
while (!(await Bun.file(${JSON.stringify(join(root, "release"))}).exists())) await Bun.sleep(10);
console.log("fixture jtreg completed");
`,
    );
    const home = join(root, "bali-jdk");
    const output = join(root, "bali");
    const running = runSuiteOnRuntime(
      output,
      join(root, "suite"),
      "/fixture/jtreg.jar",
      ref,
      home,
      [
        { id: "Example.java", area: "fixture", unsupported: null },
        { id: "Variants.java", area: "fixture", unsupported: null, variants: ["a", "b"] },
        { id: "Filtered.java", area: "fixture", unsupported: null },
      ],
      manifest.execution,
    );
    try {
      const deadline = Date.now() + 3000;
      let live = "";
      while (Date.now() < deadline) {
        const file = Bun.file(join(output, "harness.log"));
        if (await file.exists()) live = await file.text();
        if (live.includes("fixture jtreg diagnostic")) break;
        await Bun.sleep(10);
      }
      expect(live).toContain("fixture jtreg started");
      expect(live).toContain("fixture jtreg diagnostic");
      expect(live).not.toContain("fixture jtreg completed");
    } finally {
      await Bun.write(join(root, "release"), "release");
      await running;
    }
    const result = await running;
    expect(result.exitCode).toBe(0);
    expect(result.results.get("Example.java")?.status).toBe("pass");
    expect(result.results.get("Variants.java")).toEqual({
      status: "skipped",
      detail: "#b: Not run. (filtered by keywords, @requires, or @ignore)",
    });
    expect(result.results.get("Filtered.java")?.status).toBe("skipped");
    // One invocation per area, each recorded under the area it ran.
    const commands = await Bun.file(join(output, "command.json")).json();
    expect(Object.keys(commands)).toEqual(["fixture"]);
    const args = commands.fixture as string[];
    for (const option of JTREG_OPTIONS) expect(args).toContain(option);
    expect(args).toContain("-r:" + join(output, "report", "fixture"));
    // Nothing leaked, so the reaper recorded nothing.
    expect(await Bun.file(join(output, "leaks.json")).json()).toEqual([]);
    expect(args).toContain("-testjdk:" + home);
    expect(args).toContain("-compilejdk:" + ref);
    expect(args).toContain("-javaoption:-Xmx2g");
    expect(await Bun.file(join(output, "harness.log")).text()).toContain("fixture jtreg completed");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("each area runs in its own process group and leaked processes are reaped and recorded", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-reap-"));
  try {
    const ref = join(root, "reference-jdk");
    await mkdir(join(ref, "bin"), { recursive: true });
    await Bun.write(
      join(ref, "bin/java"),
      `#!/bin/sh\nexec '${process.execPath.replaceAll("'", "'\\''")}' '${join(root, "fake-jtreg.ts")}' "$@"\n`,
    );
    await chmod(join(ref, "bin/java"), 0o755);
    // Leaks a grandchild that outlives it, exactly as an -othervm test's HTTP server does.
    await Bun.write(
      join(root, "fake-jtreg.ts"),
      `
const args = process.argv.slice(2);
const work = args.find(a => a.startsWith("-w:")).slice(3);
const selection = args.find(a => a.startsWith("@")).slice(1);
const suite = args.find(a => a.startsWith("-testjdk:")) && ${JSON.stringify(join(root, "suite"))};
for (const line of (await Bun.file(selection).text()).trim().split("\\n")) {
  const id = JSON.parse(line).slice(suite.length + 1).replace(/\\.java$/, "");
  await Bun.write(work + "/" + id + ".jtr", "#-----testresult-----\\nexecStatus=Passed. Execution successful\\n#section:main\\n");
}
// unref so this process can exit while the helper keeps running: that is the leak.
Bun.spawn(["sleep", "300"], { stdio: ["ignore", "ignore", "ignore"] }).unref();
`,
    );
    const output = join(root, "bali");
    const { exitCode, leaks } = await runSuiteOnRuntime(
      output,
      join(root, "suite"),
      "/fixture/jtreg.jar",
      ref,
      join(root, "bali-jdk"),
      [
        { id: "java/net/Alpha.java", area: "java/net", unsupported: null },
        { id: "java/text/Beta.java", area: "java/text", unsupported: null },
      ],
      manifest.execution,
    );
    expect(exitCode).toBe(0);

    // One invocation per area, each with its own report directory.
    expect(Object.keys(await Bun.file(join(output, "command.json")).json())).toEqual([
      "java/net",
      "java/text",
    ]);
    expect(areaSlug("java/net")).toBe("java__net");

    // Both areas leaked, and both were caught — the point being that java/net's leak is gone
    // before java/text starts, which is what stops the starvation cascading across areas.
    expect(leaks.map((leak) => leak.area)).toEqual(["java/net", "java/text"]);
    for (const leak of leaks) {
      expect(leak.survivors.length).toBeGreaterThan(0);
      expect(leak.survivors.some((s) => s.command.includes("sleep"))).toBe(true);
      // Reaped: signalling the recorded pid now fails because nothing is there.
      for (const survivor of leak.survivors)
        expect(() => process.kill(survivor.pid, 0)).toThrow();
    }
    expect(await Bun.file(join(output, "leaks.json")).json()).toEqual(leaks);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}, 30_000);

test("failure diagnostics are retained per signature, with crashes kept whole", async () => {
  const out = await mkdtemp(join(tmpdir(), "bali-diagnostics-"));
  try {
    // Five tests aborting identically, plus one distinct failure: the shape of the real run,
    // where 55 of javax/management/remote exited 134 the same way.
    const aborts = [0, 1, 2, 3, 4].map((n) => ({
      id: `javax/management/remote/Abort${n}.java`,
      area: "javax/management",
      unsupported: null,
      reference: { status: "pass", detail: "Passed. Execution successful" } as Result,
      bali: { status: "error", detail: "Error. Exit code 134" } as Result,
    }));
    const data: Report = {
      ...report([]),
      tests: [
        ...aborts,
        {
          id: "java/lang/Solo.java",
          area: "java/lang",
          unsupported: null,
          reference: { status: "pass", detail: "Passed. Execution successful" },
          bali: { status: "fail", detail: "Failed. main threw exception" },
        },
        {
          id: "java/lang/Fine.java",
          area: "java/lang",
          unsupported: null,
          reference: { status: "pass", detail: "Passed. Execution successful" },
          bali: { status: "pass", detail: "Passed. Execution successful" },
        },
      ],
    };
    for (const row of data.tests)
      await Bun.write(join(out, "work", jtrPath(row.id, "")), `jtr for ${row.id}`);
    await Bun.write(join(out, "work", "scratch/3/hs_err_pid99.log"), "SIGSEGV in libjvm");
    await Bun.write(join(out, "work", "scratch/3/core.99"), "not really a core");
    await Bun.write(join(out, "harness.log"), "jtreg said things");

    const files = await collectDiagnostics(out, data, "bali");
    // Capped: the five identical aborts keep three examples between them.
    const retained = Object.keys(files).filter((name) => name.endsWith(".jtr"));
    expect(retained.filter((name) => name.includes("Abort")).length).toBe(DIAGNOSTIC_CAP);
    // The one-off failure is kept, and a passing test contributes nothing.
    expect(retained).toContain("diagnostics/bali/java/lang/Solo.jtr");
    expect(retained.some((name) => name.includes("Fine"))).toBe(false);
    // A crash log is a crash log; it is never subject to the cap.
    expect(files["diagnostics/bali/crashes/scratch/3/hs_err_pid99.log"]).toBe("SIGSEGV in libjvm");
    expect(files["diagnostics/bali/harness.log"]).toBe("jtreg said things");

    const index = JSON.parse(files["diagnostics/bali/index.json"]!);
    // The index still states the true size of the cluster the three examples came from, so a
    // capped report cannot understate how many tests share one root cause.
    expect(index.signatures[0]).toEqual({
      signature: normalizeSignature("Error. Exit code 134"),
      failures: 5,
      retained: DIAGNOSTIC_CAP,
    });
    // Too big to commit, so named rather than kept.
    expect(index.bulk.map((entry: { path: string }) => entry.path)).toEqual(["scratch/3/core.99"]);

    // The reference side usually comes from the committed baseline, so its directory never
    // exists. Collecting from it yields nothing and must not throw: a finished run is not
    // thrown away because there were no diagnostics to gather.
    expect(await collectDiagnostics(join(out, "never-ran"), data, "reference")).toEqual({});
  } finally {
    await rm(out, { recursive: true, force: true });
  }
});

test("leaked processes are reported per area so the leaking test can be fixed", () => {
  expect(leakSection({ bali: [], reference: [] })).toContain("None");
  const section = leakSection({
    bali: [
      {
        area: "java/net",
        survivors: [
          { pid: 11, command: "java HttpServerHelper" },
          { pid: 12, command: "java HttpServerHelper" },
        ],
      },
      { area: "java/rmi", survivors: [{ pid: 13, command: "rmiregistry" }] },
    ],
  });
  // Identical survivors collapse into one row with a count, so the table names distinct leaks.
  expect(section).toContain("| bali | java/net | 2 | `java HttpServerHelper` |");
  expect(section).toContain("| bali | java/rmi | 1 | `rmiregistry` |");
  expect(section).toContain("3 process(es) outlived");
});

test("flattened results rebuild the paired report for the differential files", async () => {
  const original = report(["pass", "fail", "timeout", "unsupported"]);
  const rows = unflatten(flatten(original));
  expect(rows).toEqual(original.tests);
  const files = await jdkJtregAdapter.reports!({} as never, flatten(original));
  expect(Object.keys(files).sort()).toEqual(["coverage.svg", "differential.md"]);
  expect(files["differential.md"]).toContain("4 test files inventoried");
  expect(files["differential.md"]).toContain("results.json.gz");
  expect(files["coverage.svg"]).toContain("3/4 runnable; 1 verified passes");
});

const referenceInventory: Entry[] = [
  { id: "java/lang/A.java", area: "java/lang", unsupported: null },
  { id: "java/lang/B.java", area: "java/lang", unsupported: "Unsupported @library directive" },
];
const inputsFor = (inventory: Entry[] = referenceInventory, referenceVersion = 'openjdk version "25.0.2"') =>
  referenceInputs({
    manifest: manifest as Manifest,
    root: ROOT,
    requires: "class VMProps {}",
    referenceVersion,
    inventory,
    platform: "linux-x64",
  });

test("reference fingerprint covers exactly the inputs that determine stock-JDK outcomes", () => {
  const fingerprint = referenceFingerprint(inputsFor());
  expect(referenceFingerprint(inputsFor())).toBe(fingerprint);
  expect(inputsFor().protocol).toBe(PROTOCOL);
  // Only the runnable set matters, not how an unsupported file is described.
  const reworded = referenceInventory.map((test) =>
    test.unsupported ? { ...test, unsupported: "Unsupported @modules directive" } : test,
  );
  expect(referenceFingerprint(inputsFor(reworded))).toBe(fingerprint);
  const grown = [...referenceInventory, { id: "java/lang/C.java", area: "java/lang", unsupported: null }];
  expect(referenceFingerprint(inputsFor(grown))).not.toBe(fingerprint);
  expect(referenceFingerprint(inputsFor(referenceInventory, 'openjdk version "25.0.3"'))).not.toBe(fingerprint);
  // The effective concurrency of the run is what the baseline records, not the manifest's alone.
  const faster = referenceInputs({
    manifest: manifest as Manifest,
    root: ROOT,
    requires: "class VMProps {}",
    referenceVersion: 'openjdk version "25.0.2"',
    inventory: referenceInventory,
    execution: { ...manifest.execution, concurrency: 8 },
    platform: "linux-x64",
  });
  expect(faster.execution.concurrency).toBe(8);
  expect(referenceFingerprint(faster)).not.toBe(fingerprint);
  const base = inputsFor();
  const variants = [
    { ...base, protocol: base.protocol + 1 },
    { ...base, source: "0".repeat(64) },
    { ...base, jtreg: "0".repeat(64) },
    { ...base, execution: { ...base.execution, concurrency: base.execution.concurrency + 1 } },
    { ...base, root: base.root + "extra=1\n" },
    { ...base, requires: "0".repeat(64) },
    { ...base, options: [...base.options, "-agentvm"] },
    { ...base, heap: "-Xmx1g" },
    { ...base, platform: "darwin-arm64" },
  ];
  for (const variant of variants) expect(referenceFingerprint(variant)).not.toBe(fingerprint);
});

test("a matching committed baseline replaces the stock-JDK run; missing, stale, or malformed ones do not", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-reference-baseline-"));
  try {
    const pass: Result = { status: "pass", detail: "Passed. Execution successful" };
    const run = {
      exitCode: 2,
      results: new Map<string, Result>([
        ["java/lang/A.java", pass],
        ["java/lang/B.java", { status: "unsupported", detail: "Unsupported @library directive" }],
      ]),
    };
    expect(referenceComplete(run, referenceInventory)).toBe(true);
    expect(referenceComplete({ ...run, exitCode: 4 }, referenceInventory)).toBe(false);
    expect(
      referenceComplete(
        { exitCode: 0, results: new Map([["java/lang/A.java", { status: "blocked", detail: "" }]]) },
        referenceInventory,
      ),
    ).toBe(false);
    expect(referenceComplete({ exitCode: 0, results: new Map() }, referenceInventory)).toBe(false);

    const inputs = inputsFor();
    const baseline = buildReferenceBaseline(inputs, run, referenceInventory, "2026-09-10T09:23:55.252Z");
    expect(baseline.fingerprint).toBe(referenceFingerprint(inputs));
    expect(Object.keys(baseline.results)).toEqual(["java/lang/A.java"]);

    const path = join(root, referenceBaselineName("linux-x64"));
    expect(await loadReferenceBaseline(path, baseline.fingerprint)).toMatchObject({
      reason: expect.stringContaining("no reference baseline"),
    });
    await Bun.write(path, JSON.stringify(baseline));
    const loaded = await loadReferenceBaseline(path, baseline.fingerprint);
    if (!("baseline" in loaded)) throw new Error(loaded.reason);
    const restored = baselineResults(loaded.baseline, referenceInventory);
    expect(restored.exitCode).toBe(2);
    expect(restored.results.get("java/lang/A.java")).toEqual(pass);
    expect(restored.results.get("java/lang/B.java")?.status).toBe("unsupported");
    // A newly runnable file has no baseline entry: blocked, so the run is incomplete, never a pass.
    const grown = [...referenceInventory, { id: "java/lang/C.java", area: "java/lang", unsupported: null }];
    expect(baselineResults(loaded.baseline, grown).results.get("java/lang/C.java")?.status).toBe("blocked");

    expect(await loadReferenceBaseline(path, "f".repeat(64))).toMatchObject({
      reason: expect.stringContaining("stale"),
    });
    await Bun.write(path, JSON.stringify({ schema: 1, fingerprint: baseline.fingerprint }));
    expect(await loadReferenceBaseline(path, baseline.fingerprint)).toMatchObject({
      reason: expect.stringContaining("malformed"),
    });
    await Bun.write(path, "{not json");
    expect(await loadReferenceBaseline(path, baseline.fingerprint)).toMatchObject({
      reason: expect.stringContaining("unreadable"),
    });
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("reports state whether the reference came from the baseline or from this run", () => {
  const fromBaseline = { ...report(["pass"]), metadata: { reference: { source: "baseline", generatedAt: "2026-09-10T09:23:55.252Z" } } };
  expect(markdown(fromBaseline)).toContain("committed baseline generated 2026-09-10T09:23:55.252Z");
  const fromRun = { ...report(["pass"]), metadata: { reference: { source: "run" } } };
  expect(markdown(fromRun)).toContain("measured by running the stock JDK");
  expect(markdown(report(["pass"]))).not.toContain("Reference outcomes");
});

test("baselines are per platform and are recorded only where the expectations directory is writable", async () => {
  expect(referenceBaselineName("linux-x64")).toBe("jdk-jtreg.reference.linux-x64.json");
  expect(referenceBaselineName("darwin-arm64")).not.toBe(referenceBaselineName("linux-x64"));
  expect(referenceBaselineName()).toContain(process.platform);
  const root = await mkdtemp(join(tmpdir(), "bali-reference-record-"));
  try {
    const baseline = buildReferenceBaseline(
      inputsFor(),
      { exitCode: 0, results: new Map([["java/lang/A.java", { status: "pass", detail: "Passed." }]]) },
      referenceInventory,
      "2026-09-10T09:23:55.252Z",
    );
    const writable = join(root, "rw");
    await mkdir(writable);
    const ok = await recordReferenceBaseline(join(writable, referenceBaselineName("linux-x64")), baseline);
    expect(ok.written).toBe(true);
    expect(await loadReferenceBaseline(join(writable, referenceBaselineName("linux-x64")), baseline.fingerprint)).toHaveProperty("baseline");
    // Docker mounts expectations/ read-only unless --ratchet: the run continues, nothing is written.
    const readonly = join(root, "ro");
    await mkdir(readonly);
    await chmod(readonly, 0o500);
    const denied = await recordReferenceBaseline(join(readonly, referenceBaselineName("linux-x64")), baseline);
    expect(denied.written).toBe(false);
    expect(denied.message).toContain("--ratchet");
    await chmod(readonly, 0o700);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
