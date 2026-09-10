import { expect, test } from "bun:test";
import { chmod, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  PROTOCOL,
  REFERENCE_BASELINE,
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
  markdown,
  parseJtr,
  portableReason,
  propertiesReason,
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

test("discovery parses test descriptions without mistaking ordinary javadoc for jtreg tags", () => {
  expect(hasTest(source)).toBe(true);
  expect(hasTest("# @test\n# shell test")).toBe(true);
  expect(hasTest("class Fixture {} ")).toBe(false);
  expect(
    portableReason("java/lang/Example.java", source + "\n/**\n * @throws Exception reason\n */"),
  ).toBeNull();
  for (const tag of [
    "requires vm.gc.G1",
    "library /test/lib",
    "modules java.base/jdk.internal.misc",
    "ignore broken",
    "build Helper",
    "run main -XX:+WhiteBoxAPI Example",
    "run testng Example",
    "test id=second",
  ]) {
    expect(
      portableReason("java/lang/Example.java", `/* @test\n * @${tag}\n */\n${main}`),
    ).not.toBeNull();
  }
  expect(propertiesReason("# comment\nallowSmartActionArgs=true\n")).toBeNull();
  expect(propertiesReason("modules=java.desktop\n")).not.toBeNull();
  expect(
    portableReason("java/lang/Example.java", `/* @test\n   @library /test/lib\n */\n${main}`),
  ).toBe("Unsupported @library directive");
  expect(hasTest(`/*\n  @test\n */`)).toBe(true);
  expect(
    portableReason(
      "java/lang/Example.java",
      `/* @test\n * @run main Example\n *   extraArgument\n */\n${main}`,
    ),
  ).not.toBeNull();
});

test("inventory retains unsupported tests, excludes support files, and respects inherited settings", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-compat-"));
  try {
    await mkdir(join(root, "java/lang/restricted"), { recursive: true });
    await Bun.write(join(root, "java/lang/Example.java"), source);
    await Bun.write(join(root, "java/lang/Fixture.java"), "class Fixture {}");
    await Bun.write(join(root, "java/lang/Script.sh"), "# @test\n# @run shell Script.sh\n");
    await Bun.write(join(root, "java/lang/restricted/Example.java"), source);
    await Bun.write(join(root, "java/lang/restricted/TEST.properties"), "modules=java.desktop\n");
    const rows = await discover(root);
    expect(rows.length).toBe(3);
    expect(rows[0]!.unsupported).toBeNull();
    expect(rows[1]!.unsupported).toBe("Non-Java test action");
    expect(rows[2]!.unsupported).toContain("TEST.properties");
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
    referenceIssues: 0,
    incomplete: false,
  });
  expect(markdown(data)).toContain("3 test files inventoried");
  expect(markdown(data)).toContain("not Java SE certification");
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
        "Pass.java",
        "Timeout.java",
        "Skip.java",
        "Running.java",
        "Missing.java",
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
      [{ id: "Example.java", area: "fixture", unsupported: null }],
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
    const args = await Bun.file(join(output, "command.json")).json();
    expect(args).toContain("-testjdk:" + home);
    expect(args).toContain("-compilejdk:" + ref);
    expect(args).toContain("-javaoption:-Xmx2g");
    expect(await Bun.file(join(output, "harness.log")).text()).toContain("fixture jtreg completed");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
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
  referenceInputs({ manifest: manifest as Manifest, root: ROOT, referenceVersion, inventory, platform: "linux-x64" });

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
  const base = inputsFor();
  const variants = [
    { ...base, protocol: base.protocol + 1 },
    { ...base, source: "0".repeat(64) },
    { ...base, jtreg: "0".repeat(64) },
    { ...base, execution: { ...base.execution, concurrency: base.execution.concurrency + 1 } },
    { ...base, root: base.root + "extra=1\n" },
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

    const path = join(root, REFERENCE_BASELINE);
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
