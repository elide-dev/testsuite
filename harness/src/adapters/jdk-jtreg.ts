/**
 * RFC-0016: discover the pinned OpenJDK test/jdk inventory and measure runtime support.
 *
 * jtreg runs the corpus on a stock JDK and on Bali with the directives the tests declare —
 * `@library`, `@build`, `@modules`, `@requires`, `@key`, multiple `@test` variants, junit and
 * testng actions — exactly as it would upstream; the harness only replaces what depends on
 * HotSpot internals. The original TEST.ROOT evaluates `@requires` through WhiteBox and
 * diagnostic VM flags, so both runtimes use one portable root whose property definitions
 * (`suites/drivers/jdk-jtreg/requires/VMProps.java`) come from public APIs only. `test/lib` is
 * staged beside `test/jdk` so `@library /test/lib` resolves as upstream's `external.lib.roots`
 * intends. Files the harness does not run stay in the inventory with an explicit reason: tests
 * needing a display, printer, or audio device, manual and applet actions, files ignored upstream,
 * and areas the manifest excludes by policy. Stock javac compiles both runtime selections.
 *
 * The reference outcome is a function of the pins alone (corpus, jtreg, reference JDK,
 * portable root and property definitions, jtreg options, execution options, adapter protocol,
 * runnable inventory), so it is kept as a committed, fingerprinted baseline in expectations/ and
 * the stock JDK is only run when no matching baseline exists. `--ratchet` records a fresh
 * reference run as the baseline, like it records the ratchet.
 * Archives are verified on every use and each run gets fresh work directories.
 * Reports distinguish verified passes, Bali gaps, reference issues, and unsupported
 * files. Paired outcomes are flattened into Elide's single-status model, so the shared
 * expectations, ratchet, and report code protect previous passes without requiring all
 * known gaps to be fixed first.
 * Local binaries are identified by digest, never attributed to the current
 * source commit. No network or process work happens when imported by tests.
 */
import { $ } from "bun";
import { createHash } from "node:crypto";
import { closeSync, openSync } from "node:fs";
import { mkdir, readdir, realpath, rename, rm } from "node:fs/promises";
import { arch, availableParallelism, release } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import { reapProcessGroup, type Survivor } from "./process";
import {
  createJtregRunRoot,
  harnessSections,
  isForkFailure,
  isJtregTimeout,
  isResourceExhaustion,
  jtregCommonArgs,
} from "./jtreg";
import { buildNative, HEADER_DIRS, NATIVE_BUILD, nativeTarget } from "./jtreg-native";
import { normalizeSignature } from "../analyze/signature";
import { compileFilter } from "../filter";
import type { Result as HarnessResult, TestResult } from "../results/schema";
export const REPO = resolve(import.meta.dir, "../../..");
const HEAP_CAP = "-Xmx2g";

// Bump the protocol only when result meaning changes, not on ordinary refactors.
// 3: jtreg directives run natively; files aggregate their @test variants; filtered tests
//    ("Not run") are skips rather than missing results.
export const PROTOCOL = 3;

/** Path of the portable `@requires` definitions, relative to the run's `src/test` directory. */
export const REQUIRES_SOURCE = join(REPO, "suites/drivers/jdk-jtreg/requires/VMProps.java");
const REQUIRES_STAGED = "portable/requires/VMProps.java";

/** Upstream's `requires.properties` list; every name is answered by the portable VMProps. */
export const REQUIRES_PROPERTIES = [
  "sun.arch.data.model",
  "java.runtime.name",
  "java.enablePreview",
  "vm.flagless",
  "vm.gc.G1",
  "vm.gc.Serial",
  "vm.gc.Parallel",
  "vm.gc.Shenandoah",
  "vm.gc.Epsilon",
  "vm.gc.Z",
  "vm.graal.enabled",
  "vm.compiler1.enabled",
  "vm.compiler2.enabled",
  "vm.cds",
  "vm.cds.write.archived.java.heap",
  "vm.continuations",
  "vm.musl",
  "vm.debug",
  "vm.hasSA",
  "vm.hasJFR",
  "vm.jvmci",
  "vm.jvmci.enabled",
  "vm.jvmti",
  "vm.cpu.features",
  "container.support",
  "systemd.support",
  "release.implementor",
  "jdk.containerized",
  "jdk.foreign.linker",
  "jlink.runtime.linkable",
  "jlink.packagedModules",
  "jdk.static",
];

/** The harness's half of TEST.ROOT; `portableRoot` appends the upstream lines it preserves. */
export const ROOT =
  "requiredVersion=7.5.1+1\n" +
  "useNewOptions=true\n" +
  "useNewPatchModule=true\n" +
  // `/test/lib` and other absolute @library paths resolve against test/, as upstream declares.
  "external.lib.roots=../../\n" +
  `requires.extraPropDefns=../${REQUIRES_STAGED}\n` +
  `requires.properties=${REQUIRES_PROPERTIES.join(" ")}\n`;

/** Upstream TEST.ROOT settings carried into the portable root unchanged. */
export const PRESERVED_ROOT_KEYS = ["keys", "othervm.dirs", "exclusiveAccess.dirs", "groups"];

/** jtreg keywords naming a physical resource the measurement never has. */
export const DEVICE_KEYS = ["headful", "printer", "sound", "multimon"];
export const KEYWORD_FILTER = DEVICE_KEYS.map((key) => `!${key}`).join("&");

/** Options every jtreg invocation gets beyond the shared ones; part of the reference fingerprint. */
export const JTREG_OPTIONS = [
  "-othervm",
  // Files ignored upstream are "Not run" rather than errors.
  "-ignore:quiet",
  // The text summary then lists filtered tests too, which is how "Not run" is read back.
  "-report:all",
  `-k:${KEYWORD_FILTER}`,
];

/** manifests/bali-jdk.json: pinned corpus, jtreg build, exclusions, and fixed execution options. */
export type Manifest = {
  id: string;
  scope: string;
  source: { url: string; sha256: string; revision: string };
  jtreg: { url: string; sha256: string };
  execution: { concurrency: number; timeoutFactor: number; headless: boolean };
  /** Areas the lane does not run, each with the policy reason reports show. */
  exclude?: { glob: string; reason: string }[];
};
const ARTIFACTS = ["bin/java", "bin/bali", "lib/modules", "release"];
export type Status = "pass" | "fail" | "error" | "timeout" | "blocked" | "unsupported" | "skipped";
export type Result = { status: Status; detail: string };
/** One inventoried file; `variants` are its `@test` ids ("" for a lone unnamed description). */
export type Entry = { id: string; area: string; unsupported: string | null; variants?: string[] };
export type Row = Entry & { reference: Result; bali: Result };
export type Report = {
  schema: 2;
  suite: string;
  createdAt: string;
  metadata: Record<string, unknown>;
  exitCodes: { reference: number; bali: number };
  tests: Row[];
};
const CACHE = resolve(process.env.BALI_JTREG_CACHE ?? join(REPO, ".harness/bali/archives"));
/** Built native test support, keyed by corpus pin, platform, compiler and build table. */
const NATIVE_CACHE = resolve(
  process.env.BALI_JTREG_NATIVE_CACHE ?? join(REPO, ".harness/bali/native"),
);

const digest = (value: string) => createHash("sha256").update(value).digest("hex");
// Bun's file stream, not node:fs createReadStream: iterating the latter never completes on
// multi-hundred-megabyte files under Bun 1.3 on macOS (the Bali binary, the corpus tarball).
async function fileDigest(path: string): Promise<string> {
  const hash = createHash("sha256");
  for await (const chunk of Bun.file(path).stream()) hash.update(chunk);
  return hash.digest("hex");
}

/**
 * The process and thread ceilings the run had, recorded beside its concurrency: a report that
 * states how many JVMs it ran in parallel but not how many processes it was allowed says
 * nothing about whether it had headroom, and exhaustion then reads as a compat failure.
 * Linux-only sources; anything this platform does not publish is recorded as null, never guessed.
 */
export async function runnerLimits(): Promise<Record<string, unknown>> {
  const read = async (path: string) => {
    try {
      const file = Bun.file(path);
      return (await file.exists()) ? (await file.text()).trim() : null;
    } catch {
      return null;
    }
  };
  const processes = (await read("/proc/self/limits"))?.match(/^Max processes\s+(\S+)\s+(\S+)/m);
  return {
    cpus: availableParallelism(),
    maxProcessesSoft: processes?.[1] ?? null,
    maxProcessesHard: processes?.[2] ?? null,
    // cgroup v2; `pids.peak` is the run's high-water mark, which is the number worth keeping.
    cgroupPidsMax: await read("/sys/fs/cgroup/pids.max"),
    cgroupPidsPeak: await read("/sys/fs/cgroup/pids.peak"),
    cgroupPidsCurrent: await read("/sys/fs/cgroup/pids.current"),
  };
}

/**
 * Missing/malformed results never become passes; the result header decides the status, and the
 * body is consulted only to tell a runner that ran out of processes from a test that failed.
 */
export function parseJtr(text: string | undefined): Result {
  if (text === undefined) return { status: "blocked", detail: "No jtreg result; see harness.log" };
  const header = text.split("#-----testresult-----\n")[1]?.split("\n#section:")[0];
  const detail = header?.match(/^execStatus=(.*)$/m)?.[1];
  if (!detail) return { status: "blocked", detail: "Missing execStatus in jtreg result" };
  if (detail.startsWith("Passed. Skipped")) return { status: "skipped", detail };
  if (detail.startsWith("Passed.")) return { status: "pass", detail };
  // A fork or thread the runner refused says nothing about the runtime: the test never ran, so
  // it is blocked rather than failed. Checked before the timeout branch because a test starved
  // of processes can also run out its clock, and the ceiling is the fact worth reporting. Only
  // the header and jtreg's own sections count; a test's output is a result, not a diagnosis.
  if (
    /^Failed\.|^Error\./.test(detail) &&
    (isResourceExhaustion(detail) || isForkFailure(harnessSections(text)))
  )
    return { status: "blocked", detail };
  if (/^Failed\.|^Error\./.test(detail) && isJtregTimeout(detail))
    return { status: "timeout", detail };
  if (detail.startsWith("Failed.")) return { status: "fail", detail };
  if (detail.startsWith("Error.")) return { status: "error", detail };
  return { status: "blocked", detail };
}

/** Test-bearing files are counted once; their variants are measured together. */
export function hasTest(source: string): boolean {
  return /(?:\/\*|^[ \t]*(?:\*|#)?|<!--)[ \t]*@test\b/m.test(source);
}

export type Tag = { name: string; value: string };
export type Description = { id: string; tags: Tag[] };

/**
 * Every jtreg test description in a file, in order, with its tags and continued values.
 * Java files carry them in block comments; shell tests in runs of `#` lines. Descriptions are
 * the blocks containing an `@test` tag; a file may hold several, distinguished by `@test id=`.
 */
export function describe(id: string, source: string): Description[] {
  const blocks = id.endsWith(".sh")
    ? [...source.matchAll(/(?:^[ \t]*#.*(?:\r?\n|$))+/gm)].map((match) => match[0])
    : [...source.matchAll(/\/\*[\s\S]*?\*\//g)].map((match) => match[0].slice(2, -2));
  const descriptions: Description[] = [];
  for (const block of blocks.filter(hasTest)) {
    const tags: Tag[] = [];
    let current: Tag | undefined;
    for (const raw of block.split(/\r?\n/)) {
      const line = raw
        .trim()
        .replace(/^[*#]\s?/, "")
        .trim();
      const tag = /^@(\w+)\b(.*)$/.exec(line);
      if (tag) {
        current = { name: tag[1]!, value: tag[2]!.trim() };
        tags.push(current);
      } else if (current && line) current.value += ` ${line}`;
    }
    const test = tags.find((tag) => tag.name === "test");
    if (!test) continue;
    descriptions.push({ id: /\bid=(\S+)/.exec(test.value)?.[1] ?? "", tags });
  }
  // Ids matter only when a file holds several descriptions: jtreg then names an unnamed one
  // `idN` by its position, and a lone description is `Foo.jtr` / `path/Foo.java` in results and
  // the summary even when it declares an id.
  if (descriptions.length > 1)
    descriptions.forEach((description, index) => {
      if (!description.id) description.id = `id${index}`;
    });
  else descriptions.forEach((description) => (description.id = ""));
  return descriptions;
}

/**
 * Why the harness will not hand a file to jtreg, or null when jtreg decides.
 * Everything jtreg can evaluate itself — directives, `@requires`, `@modules`, libraries — is
 * left to it; only what can never produce a meaningful result here is withheld.
 */
export function portableReason(id: string, source: string): string | null {
  if (!/\.(java|sh)$/.test(id)) return "Unsupported test file type";
  const descriptions = describe(id, source);
  if (!descriptions.length) return "No parseable test description";
  const ids = descriptions.map((description) => description.id);
  if (new Set(ids).size !== ids.length) return "Duplicate test variant ids";
  for (const { tags } of descriptions) {
    for (const { name, value } of tags) {
      if (name === "ignore") return "Ignored upstream (@ignore)";
      if (name === "key" && value.split(/\s+/).some((key) => DEVICE_KEYS.includes(key)))
        return "Requires a display, printer, or audio device (@key)";
      if (name === "run") {
        const action = value.split(/\s+/)[0] ?? "";
        if (action.split("/")[0] === "applet") return "Applet test action";
        if (action.split("/").some((part) => part === "manual" || part.startsWith("manual=")))
          return "Manual test action";
      }
    }
  }
  return null;
}

/** The variant ids of a file, as `describe` reads them; `[""]` when it is not parsed. */
export function variantsOf(id: string, source: string): string[] {
  const ids = describe(id, source).map((description) => description.id);
  return ids.length ? ids : [""];
}

/** jtreg's result file for one variant: `Foo.jtr`, or `Foo_id.jtr` for `@test id=id`. */
export function jtrPath(id: string, variant: string): string {
  const stem = id.replace(/\.(java|sh)$/, "");
  return variant ? `${stem}_${variant}.jtr` : `${stem}.jtr`;
}

/** Upstream TEST.ROOT settings, with continuation lines joined. */
export function rootSettings(text: string): Map<string, string> {
  const settings = new Map<string, string>();
  for (const line of text.replace(/\\\r?\n\s*/g, " ").split(/\r?\n/)) {
    const match = /^\s*([\w.]+)\s*=\s*(.*)$/.exec(line);
    if (match) settings.set(match[1]!, match[2]!.trim().replace(/\s+/g, " "));
  }
  return settings;
}

/** The portable TEST.ROOT: the harness's half plus the upstream settings it preserves. */
export function portableRoot(upstream: string): string {
  const settings = rootSettings(upstream);
  return (
    ROOT +
    PRESERVED_ROOT_KEYS.filter((key) => settings.has(key))
      .map((key) => `${key}=${settings.get(key)}\n`)
      .join("")
  );
}

export type Exclusion = { glob: string; reason: string };

export function excludedReason(id: string, exclusions: Exclusion[]): string | null {
  for (const exclusion of exclusions)
    if (picomatch(exclusion.glob)(id)) return `Excluded by manifest: ${exclusion.reason}`;
  return null;
}

export async function discover(
  suite: string,
  exclusions: Exclusion[] = [],
  include: string[] = [],
  filter: string[] = [],
): Promise<Entry[]> {
  const files = [...new Bun.Glob("**/*").scanSync({ cwd: suite, onlyFiles: true })].sort();
  const filtered = compileFilter(filter);
  const nestedRoots = new Set(files.filter((id) => id.endsWith("/TEST.ROOT")));
  const included = include.length ? include.map((glob) => picomatch(glob)) : [];
  const inventory: Entry[] = [];
  for (const id of files) {
    // jtreg's source formats; fixtures without a test marker are not denominator entries.
    if (!/\.(java|sh|jasm|jcod|html)$/.test(id)) continue;
    if (included.length && !included.some((match) => match(id))) continue;
    if (!filtered(id)) continue;
    const source = await Bun.file(join(suite, id)).text();
    if (!hasTest(source)) continue;
    let unsupported = excludedReason(id, exclusions) ?? portableReason(id, source);
    let parent = dirname(id);
    while (parent !== ".") {
      if (nestedRoots.has(`${parent}/TEST.ROOT`)) unsupported = `Nested test root: ${parent}`;
      parent = dirname(parent);
    }
    inventory.push({
      id,
      area: id.split("/").slice(0, 2).join("/"),
      unsupported,
      variants: variantsOf(id, source),
    });
  }
  if (!inventory.length) throw new Error("No OpenJDK test files discovered");
  return inventory;
}

export function verifiedPass(row: Row): boolean {
  return row.unsupported === null && row.reference.status === "pass" && row.bali.status === "pass";
}

/** Per-test failures are ordinary results; only a harness abort or a missing result is incomplete. */
export function incomplete(report: Report): boolean {
  const runnable = report.tests.filter((row) => row.unsupported === null);
  return (
    !runnable.length ||
    ![0, 2, 3].includes(report.exitCodes.reference) ||
    ![0, 2, 3].includes(report.exitCodes.bali) ||
    runnable.some((row) => row.reference.status === "blocked" || row.bali.status === "blocked")
  );
}

/**
 * Why a run is incomplete, in the terms that say what to do about it. Exit codes are only one
 * of the four reasons, and the usual one — tests that never ran — leaves them at their normal
 * values, so reporting them alone describes a healthy run while aborting it.
 */
export function incompleteReason(report: Report): string {
  const runnable = report.tests.filter((row) => row.unsupported === null);
  const reasons: string[] = [];
  if (!runnable.length) reasons.push("no runnable tests in the inventory");
  for (const [runtime, code] of [
    ["reference", report.exitCodes.reference],
    ["bali", report.exitCodes.bali],
  ] as const)
    if (![0, 2, 3].includes(code)) reasons.push(`${runtime} jtreg exited ${code}`);
  for (const [runtime, result] of [
    ["reference", (row: Row) => row.reference],
    ["bali", (row: Row) => row.bali],
  ] as const) {
    const blocked = runnable.filter((row) => result(row).status === "blocked");
    if (blocked.length)
      reasons.push(
        `${blocked.length} of ${runnable.length} tests never ran on ${runtime}, e.g. ${blocked[0]!.id}: ${result(blocked[0]!).detail}`,
      );
  }
  return `incomplete jdk-jtreg run: ${reasons.join("; ")}`;
}

/**
 * Flatten paired outcomes into Elide's single-status model so the shared expectations,
 * ratchet, and report code apply unchanged: a file passes only when both runtimes pass,
 * a Bali-only failure fails, and reference issues or adapter gaps are skips. The paired
 * detail is kept in meta for the differential report.
 */
export function flatten(report: Report): TestResult[] {
  return report.tests.map((row) => {
    const meta = {
      area: row.area,
      unsupported: row.unsupported,
      reference: row.reference,
      bali: row.bali,
    };
    const result = (status: TestResult["status"], message?: string): TestResult => ({
      kind: "test",
      id: row.id,
      status,
      ...(message === undefined ? {} : { message }),
      meta,
    });
    if (row.unsupported !== null) return result("skip", row.unsupported);
    if (row.reference.status !== "pass")
      return result("skip", `Reference ${row.reference.status}: ${row.reference.detail}`);
    if (row.bali.status === "pass") return result("pass");
    if (row.bali.status === "fail" || row.bali.status === "skipped")
      return result("fail", row.bali.detail);
    return result("error", row.bali.detail);
  });
}


export function summary(report: Report) {
  const runnable = report.tests.filter((row) => row.unsupported === null);
  return {
    inventory: report.tests.length,
    runnable: runnable.length,
    unsupported: report.tests.length - runnable.length,
    verifiedPassing: runnable.filter(verifiedPass).length,
    // A blocked row is not a Bali difference: nothing was measured. Counting the two together
    // is what let a run whose tests never started read as a wall of compatibility failures.
    baliFailures: runnable.filter(
      (row) =>
        row.reference.status === "pass" &&
        row.bali.status !== "pass" &&
        row.bali.status !== "blocked",
    ).length,
    unmeasured: runnable.filter((row) => row.bali.status === "blocked").length,
    referenceIssues: runnable.filter((row) => row.reference.status !== "pass").length,
    incomplete: incomplete(report),
  };
}

export const RAW_NOTE =
  "report.json preserves every file and diagnostic status. Raw logs and jtreg reports are in the run's jtreg-run-*/reference/ and jtreg-run-*/bali/ directories.";

function referenceNote(metadata: Record<string, unknown>): string {
  const reference = metadata.reference as { source?: string; generatedAt?: string } | undefined;
  if (reference?.source === "baseline")
    return `Reference outcomes come from the committed baseline generated ${reference.generatedAt}; the stock JDK was not run.\n\n`;
  if (reference?.source === "run") return `Reference outcomes were measured by running the stock JDK in this run.\n\n`;
  return "";
}

export function markdown(report: Report): string {
  const counts = summary(report);
  const areas = [...new Set(report.tests.map((row) => row.area))].sort();
  const reasons = new Map<string, number>();
  for (const row of report.tests)
    if (row.unsupported) reasons.set(row.unsupported, (reasons.get(row.unsupported) ?? 0) + 1);
  const gaps = report.tests.filter((row) => row.unsupported === null && !verifiedPass(row));
  return (
    `# Bali OpenJDK compatibility\n\n` +
    `Suite: ${report.suite}. ${counts.inventory} test files inventoried (a file's @test variants count together).\n\n` +
    `| Outcome | Files |\n|---|---:|\n| Pass on both runtimes | ${counts.verifiedPassing} |\n| Reference passes; Bali does not | ${counts.baliFailures} |\n| Never measured (runner blocked) | ${counts.unmeasured} |\n| Reference issues | ${counts.referenceIssues} |\n| Unsupported by adapter | ${counts.unsupported} |\n\n` +
    `${counts.incomplete ? "**Incomplete harness run.**" : "Completed inventory run; known failures remain visible."}\n\n` +
    `This measures the pinned test/jdk inventory, not Java SE certification. Stock javac compiles both runtime selections.\n\n` +
    referenceNote(report.metadata) +
    `## Areas\n\n| Area | Inventory | Runnable | Pass on both |\n|---|---:|---:|---:|\n` +
    areas
      .map((area) => {
        const rows = report.tests.filter((row) => row.area === area);
        return `| ${area} | ${rows.length} | ${rows.filter((row) => row.unsupported === null).length} | ${rows.filter(verifiedPass).length} |`;
      })
      .join("\n") +
    `\n\n## Adapter gaps\n\n| Reason | Files |\n|---|---:|\n` +
    [...reasons]
      .sort((a, b) => b[1] - a[1])
      .map(([reason, count]) => `| ${reason} | ${count} |`)
      .join("\n") +
    `\n\n## Executed tests needing attention\n\n| File | Reference | Bali |\n|---|---|---|\n` +
    gaps.map((row) => `| ${row.id} | ${row.reference.status} | ${row.bali.status} |`).join("\n") +
    `\n\n${RAW_NOTE}\n`
  );
}

async function archive(name: string, pin: { url: string; sha256: string }): Promise<string> {
  await mkdir(CACHE, { recursive: true });
  const path = join(CACHE, `${pin.sha256}-${name}`);
  if (!(await Bun.file(path).exists())) {
    const partial = `${path}.${crypto.randomUUID()}.partial`;
    try {
      console.log(`Downloading ${pin.url}`);
      await $`curl --fail --location --retry 2 --connect-timeout 30 --max-time 600 ${pin.url} --output ${partial}`.quiet();
      if ((await fileDigest(partial)) !== pin.sha256)
        throw new Error(`Checksum mismatch: ${pin.url}`);
      await rename(partial, path);
    } finally {
      await rm(partial, { force: true });
    }
  }
  if ((await fileDigest(path)) !== pin.sha256)
    throw new Error(`Corrupt archive; remove and retry: ${path}`);
  return path;
}

async function prepare(manifest: Manifest) {
  // Downloads are sequential to keep diagnostics attributable and bandwidth bounded.
  const source = await archive("openjdk.tar.gz", manifest.source);
  const jtreg = await archive("jtreg.zip", manifest.jtreg);
  return { source, jtreg };
}

/** The staged corpus: `src/test/jdk` is the suite, `src/test/lib` its shared library. */
async function stage(
  out: string,
  archives: Awaited<ReturnType<typeof prepare>>,
  manifest: Manifest,
  include: string[],
  filter: string[],
  reference: string,
) {
  const src = join(out, "src");
  await mkdir(src);
  const prefix = `jdk-${manifest.source.revision}`;
  // Keep all sibling support files; don't make an incomplete fixture selection. `test/lib` is
  // what `@library /test/lib` names through `external.lib.roots`.
  await $`tar -xzf ${archives.source} -C ${src} --strip-components=1 ${`${prefix}/${manifest.scope}`} ${`${prefix}/test/lib`}`.quiet();
  await $`tar -xzf ${archives.source} -C ${src} --strip-components=1 ${`${prefix}/LICENSE`}`.quiet();
  // The native test support compiles against a few of the JDK's own headers; they are in the
  // same tarball, so they are staged beside the corpus rather than requiring a JDK build.
  const headers = HEADER_DIRS(nativeTarget().os).map((dir) => `${prefix}/src/${dir}`);
  await $`tar -xzf ${archives.source} -C ${src} --strip-components=1 ${headers}`.quiet().nothrow();
  const suite = join(src, manifest.scope);
  const requires = await Bun.file(REQUIRES_SOURCE).text();
  await Bun.write(join(src, "test", REQUIRES_STAGED), requires);
  const originalRoot = await Bun.file(join(suite, "TEST.ROOT")).text();
  await Bun.write(join(out, "UPSTREAM.TEST.ROOT"), originalRoot);
  const root = portableRoot(originalRoot);
  await Bun.write(join(suite, "TEST.ROOT"), root);
  await $`unzip -q ${archives.jtreg} -d ${join(out, "harness")}`.quiet();
  const inventory = await discover(suite, manifest.exclude ?? [], include, filter);
  const native = await buildNative({
    suite,
    srcRoot: join(src, "src"),
    javaHome: reference,
    cacheDir: NATIVE_CACHE,
    sourceDigest: manifest.source.sha256,
    scratch: out,
  });
  console.log(
    `jtreg native test support: ${native.built} artifacts${native.cached ? " (cached)" : " built"}, ${native.excluded} excluded on this platform; ${native.path}`,
  );
  console.log(
    `Discovered ${inventory.length} test files; ${inventory.filter((test) => test.unsupported === null).length} runnable`,
  );
  return { suite, jar: join(out, "harness/jtreg/lib/jtreg.jar"), inventory, root, requires, native };
}

// Keep measurement locale independent of the invoking terminal. TZ stays unset,
// so tests use the host system timezone.
export const MEASUREMENT_ENVIRONMENT = {
  LANG: "C.UTF-8",
  LC_ALL: "C.UTF-8",
  LC_CTYPE: "C.UTF-8",
  TZ: null,
} as const;

export function cleanEnv(
  javaHome: string,
  ambient: Record<string, string | undefined> = process.env,
): Record<string, string | undefined> {
  const env: Record<string, string | undefined> = {
    ...ambient,
    ...MEASUREMENT_ENVIRONMENT,
    TZ: undefined,
    JAVA_HOME: javaHome,
    PATH: `${join(javaHome, "bin")}:${ambient.PATH ?? ""}`,
  };
  for (const key of [
    "JAVA_TOOL_OPTIONS",
    "JDK_JAVA_OPTIONS",
    "_JAVA_OPTIONS",
    "CLASSPATH",
    "JTREG_JAVA_OPTIONS",
    "JTREG_JAVA_HOME",
  ])
    delete env[key];
  return env;
}

/**
 * The execution options a run uses. The manifest fixes them for CI; `BALI_JTREG_CONCURRENCY`
 * (or `--threads` above 1) raises the concurrency of a local run. The effective values are
 * part of the reference fingerprint, so a baseline always states the concurrency it was
 * measured at.
 */
export function effectiveExecution(
  manifest: Manifest,
  env: Record<string, string | undefined> = process.env,
  threads = 1,
): Manifest["execution"] {
  const override = Number(env.BALI_JTREG_CONCURRENCY ?? "");
  const concurrency =
    Number.isInteger(override) && override > 0
      ? override
      : threads > 1
        ? threads
        : manifest.execution.concurrency;
  return { ...manifest.execution, concurrency };
}

/** Progress is advisory; final results are always read again after jtreg exits. */
export async function runtimeProgress(work: string, jtrs: string[]) {
  let completed = 0;
  let passed = 0;
  let skipped = 0;
  for (const jtr of jtrs) {
    const file = Bun.file(join(work, jtr));
    if (!(await file.exists())) continue;
    const result = parseJtr(await file.text());
    if (result.status === "blocked") continue;
    completed++;
    if (result.status === "pass") passed++;
    if (result.status === "skipped") skipped++;
  }
  return { completed, passed, skipped, failed: completed - passed - skipped };
}

/** jtreg's `-report:all` text summary: `path[#id]  status`, filtered tests included. */
export function parseSummary(text: string): Map<string, string> {
  const statuses = new Map<string, string>();
  for (const line of text.split(/\r?\n/)) {
    const match = /^(\S+)\s+(.+)$/.exec(line.trim());
    if (match) statuses.set(match[1]!, match[2]!.trim());
  }
  return statuses;
}

/** The summary's name for a variant: `path#id`, or the path alone for the unnamed one. */
export const summaryKey = (id: string, variant: string) => (variant ? `${id}#${variant}` : id);

const PRECEDENCE: Status[] = ["blocked", "timeout", "error", "fail", "skipped", "unsupported", "pass"];

/** A file's outcome is its worst variant's; the detail names the variant that decided it. */
export function combine(variants: { variant: string; result: Result }[]): Result {
  let worst = variants[0]!;
  for (const candidate of variants)
    if (PRECEDENCE.indexOf(candidate.result.status) < PRECEDENCE.indexOf(worst.result.status))
      worst = candidate;
  const prefix = worst.variant && worst.result.status !== "pass" ? `#${worst.variant}: ` : "";
  return { status: worst.result.status, detail: `${prefix}${worst.result.detail}` };
}

/**
 * One variant's result: its `.jtr` when jtreg ran it, the summary's "Not run" when a keyword,
 * `@requires`, or `@ignore` filtered it (a skip, like a test that skips itself), and blocked
 * when neither says anything.
 */
export function variantResult(jtr: string | undefined, summaryStatus: string | undefined): Result {
  if (jtr !== undefined) return parseJtr(jtr);
  if (summaryStatus?.startsWith("Not run"))
    return { status: "skipped", detail: `${summaryStatus} (filtered by keywords, @requires, or @ignore)` };
  return parseJtr(undefined);
}

export async function readResults(
  out: string,
  inventory: Entry[],
): Promise<Map<string, Result>> {
  // One summary per area batch, plus the single-directory layout an unbatched run leaves.
  const statuses = new Map<string, string>();
  const summaries = new Bun.Glob("report/**/text/summary.txt");
  for await (const relative of summaries.scan({ cwd: out, absolute: true }))
    for (const [key, status] of parseSummary(await Bun.file(relative).text()))
      statuses.set(key, status);
  const results = new Map<string, Result>();
  for (const test of inventory) {
    if (test.unsupported !== null) {
      results.set(test.id, { status: "unsupported", detail: test.unsupported });
      continue;
    }
    const variants: { variant: string; result: Result }[] = [];
    for (const variant of test.variants ?? [""]) {
      const jtr = Bun.file(join(out, "work", jtrPath(test.id, variant)));
      variants.push({
        variant,
        result: variantResult(
          (await jtr.exists()) ? await jtr.text() : undefined,
          statuses.get(summaryKey(test.id, variant)),
        ),
      });
    }
    results.set(test.id, combine(variants));
  }
  return results;
}

/** How many examples of each distinct failure signature keep their diagnostics. */
export const DIAGNOSTIC_CAP = 3;
/** The most of any one file that is worth committing; a 7-hour harness log is mostly noise. */
const DIAGNOSTIC_BYTES = 2_000_000;
/** Crash reports a JVM writes on abort. Text, small, and the only record of a SIGABRT. */
const CRASH_LOG = /(?:^|\/)(?:hs_err_pid\d+|replay_pid\d+)\.log$/;
/**
 * Artifacts too large to commit but worth naming, so the published report says what exists in
 * the run workspace and how big it is. `.jfr` is listed here already: when flight recording is
 * switched on, the recordings are indexed without further change.
 */
const BULK_ARTIFACT = /(?:^|\/)(?:core(?:\.\d+)?|.*\.jfr)$/;

const truncate = (text: string, path: string) =>
  text.length <= DIAGNOSTIC_BYTES
    ? text
    : `[truncated: kept the last ${DIAGNOSTIC_BYTES} bytes of ${text.length} from ${path}]\n` +
      text.slice(-DIAGNOSTIC_BYTES);

/**
 * The diagnostics worth keeping from one runtime's run, as published path -> contents.
 *
 * A published report that says 55 tests aborted with exit 134 and keeps nothing is not
 * actionable: the abort output lives in the `.jtr` and is thrown away with the workspace. So
 * failures keep theirs — but capped at `DIAGNOSTIC_CAP` per distinct signature, because the
 * 56th identical abort adds nothing and the report directory is committed. Crash logs and the
 * harness log are kept whole; anything too big to commit is listed with its size instead.
 */
export async function collectDiagnostics(
  out: string,
  report: Report,
  side: "reference" | "bali",
): Promise<Record<string, string>> {
  const files: Record<string, string> = {};
  const prefix = `diagnostics/${side}`;
  // The reference side normally comes from the committed baseline, in which case this runtime
  // never ran and its directory does not exist. That is the common path, not an error.
  const work = join(out, "work");
  if ((await readdir(work).catch(() => null)) === null) return files;
  const kept = new Map<string, number>();
  const total = new Map<string, number>();
  const bulk: { path: string; bytes: number }[] = [];
  const failing = report.tests.filter((row) => {
    const status = side === "bali" ? row.bali.status : row.reference.status;
    return row.unsupported === null && ["fail", "error", "timeout", "blocked"].includes(status);
  });
  for (const row of failing) {
    const result = side === "bali" ? row.bali : row.reference;
    const signature = normalizeSignature(result.detail);
    total.set(signature, (total.get(signature) ?? 0) + 1);
    const seen = kept.get(signature) ?? 0;
    if (seen >= DIAGNOSTIC_CAP) continue;
    let wrote = false;
    for (const variant of row.variants ?? [""]) {
      const relative = jtrPath(row.id, variant);
      const file = Bun.file(join(work, relative));
      if (!(await file.exists())) continue;
      files[`${prefix}/${relative}`] = truncate(await file.text(), relative);
      wrote = true;
    }
    if (wrote) kept.set(signature, seen + 1);
  }
  // Crashes and bulk artifacts are found by sweeping the work tree: a JVM that aborts writes
  // its report beside the scratch directory it happened to be using, not beside the test.
  for await (const relative of new Bun.Glob("**/*").scan({ cwd: work, onlyFiles: true, throwErrorOnBrokenSymlink: false })) {
    const path = join(work, relative);
    if (CRASH_LOG.test(relative))
      files[`${prefix}/crashes/${relative}`] = truncate(await Bun.file(path).text(), relative);
    else if (BULK_ARTIFACT.test(relative)) bulk.push({ path: relative, bytes: Bun.file(path).size });
  }
  const log = Bun.file(join(out, "harness.log"));
  if (await log.exists()) files[`${prefix}/harness.log`] = truncate(await log.text(), "harness.log");
  files[`${prefix}/index.json`] = JSON.stringify(
    {
      cap: DIAGNOSTIC_CAP,
      // Every signature with how many failures shared it and how many kept diagnostics, so a
      // reader can tell a cluster of 55 from a one-off even though only 3 were retained.
      signatures: [...total]
        .map(([signature, count]) => ({ signature, failures: count, retained: kept.get(signature) ?? 0 }))
        .sort((a, b) => b.failures - a.failures),
      // Named, not kept: too large for the repository, still in the run workspace.
      bulk: bulk.sort((a, b) => b.bytes - a.bytes),
    },
    null,
    2,
  );
  return files;
}

/** Where `run` stages the files `reports` publishes, relative to the run workspace. */
export const PUBLISHED_EXTRAS = "published-extras.json";

/**
 * Leaked processes, per area, as a table a machine fix can be aimed at.
 *
 * Reaping keeps one area's leak from starving the next, but it does not stop the leaking. The
 * area and the surviving command line together name the test that needs a `finally` block or a
 * process-group kill of its own, so the report carries them rather than only the log.
 */
export function leakSection(leaks: Record<string, Leak[]> | undefined): string {
  const rows = Object.entries(leaks ?? {}).flatMap(([runtime, areas]) =>
    areas.flatMap((leak) =>
      leak.survivors.map((survivor) => ({ runtime, area: leak.area, command: survivor.command })),
    ),
  );
  if (!rows.length) return "\n## Leaked processes\n\nNone: every area's process group was empty when it finished.\n";
  const counts = new Map<string, { runtime: string; area: string; command: string; n: number }>();
  for (const row of rows) {
    const key = `${row.runtime}\u0000${row.area}\u0000${row.command}`;
    const seen = counts.get(key);
    if (seen) seen.n++;
    else counts.set(key, { ...row, n: 1 });
  }
  return (
    `\n## Leaked processes\n\n${rows.length} process(es) outlived the area that started them and were reaped. ` +
    `Each row is a test that does not clean up after itself; leaked-processes.json has the pids.\n\n` +
    `| Runtime | Area | Survivors | Command |\n|---|---|---:|---|\n` +
    [...counts.values()]
      .sort((a, b) => b.n - a.n)
      .map((row) => `| ${row.runtime} | ${row.area} | ${row.n} | \`${row.command.slice(0, 120)}\` |`)
      .join("\n") +
    "\n"
  );
}

/** A directory name for an area, so `java/net` gets its own batch directory. */
export const areaSlug = (area: string) => area.replaceAll("/", "__");

/** What one area's batch left running after jtreg exited, kept for the report. */
export type Leak = { area: string; survivors: Survivor[] };

/**
 * Run the inventory one area at a time, reaping between areas.
 *
 * jtreg could take the whole corpus in one invocation, and did; the cost was that a leaked HTTP
 * server from `java/net` was still holding processes when `java/text` ran an hour later, and the
 * areas in between recorded 1,553 tests that never started. An area is the smallest boundary at
 * which nothing of the run is legitimately still alive, so each one gets its own process group
 * and is swept when it finishes. The work directory is shared, so results read back unchanged.
 */
export async function runSuiteOnRuntime(
  out: string,
  suite: string,
  jar: string,
  reference: string,
  home: string,
  inventory: Entry[],
  execution: Manifest["execution"],
  nativePath?: string,
) {
  await mkdir(out);
  const runnable = inventory.filter((test) => test.unsupported === null);
  const batches = new Map<string, Entry[]>();
  for (const test of runnable) batches.set(test.area, [...(batches.get(test.area) ?? []), test]);
  const jtrs = runnable.flatMap((test) =>
    (test.variants ?? [""]).map((variant) => jtrPath(test.id, variant)),
  );
  const work = join(out, "work");
  const label = basename(out) === "reference" ? "Stock Java (1/2)" : "Bali (2/2)";
  const log = join(out, "harness.log");
  const started = Date.now();
  const showProgress = async () => {
    const progress = await runtimeProgress(work, jtrs);
    const seconds = Math.floor((Date.now() - started) / 1000);
    console.log(
      `${label}: ${progress.completed}/${jtrs.length} finished; ${progress.passed} passed, ${progress.failed} failed/error/timeout, ${progress.skipped} skipped; ${Math.floor(seconds / 60)}m ${seconds % 60}s elapsed`,
    );
  };
  console.log(
    `${label}: starting ${runnable.length} files, ${jtrs.length} tests in ${batches.size} areas (${execution.concurrency} concurrent)`,
  );
  console.log(`Live test results: ${work}`);
  let pending: Promise<void> | undefined;
  const timer = setInterval(() => {
    if (pending) return;
    pending = showProgress()
      .catch((error) => console.warn(`${label}: could not read progress: ${error.message}`))
      .finally(() => {
        pending = undefined;
      });
  }, 10_000);

  const commands: Record<string, string[]> = {};
  const leaks: Leak[] = [];
  const areaExits: { area: string; exitCode: number }[] = [];
  // jtreg exits 1 for no tests, 2 for failures and 3 for errors; those are ordinary per-area
  // outcomes, so the run's code is the worst of them, and anything else wins outright.
  let exitCode = 0;
  try {
    for (const [area, tests] of batches) {
      const slug = areaSlug(area);
      const selection = join(out, "selection", `${slug}.txt`);
      await Bun.write(
        selection,
        tests.map((test) => JSON.stringify(join(suite, test.id))).join("\n") + "\n",
      );
      const args = [
        join(reference, "bin/java"),
        "-jar",
        jar,
        ...JTREG_OPTIONS,
        ...jtregCommonArgs({
          concurrency: execution.concurrency,
          timeoutFactor: execution.timeoutFactor,
          workDir: work,
          // Per-area report directories: one shared directory would leave only the last area's
          // "Not run" summary, and every earlier filtered test would read back as unmeasured.
          reportDir: join(out, "report", slug),
        }),
        "-e:JAVA_HOME,PATH",
        `-testjdk:${home}`,
        `-compilejdk:${reference}`,
        `-javaoption:${HEAP_CAP}`,
        `-javaoption:-Djava.awt.headless=${execution.headless}`,
        // Tests whose @run action carries /native refuse to start without this.
        ...(nativePath ? [`-nativepath:${nativePath}`] : []),
        `@${selection}`,
      ];
      commands[area] = args;
      await Bun.write(join(out, "command.json"), JSON.stringify(commands, null, 2));
      // Write directly to disk so diagnostics survive cancellation and remain readable live.
      let descriptor: number | undefined;
      let child: ReturnType<typeof Bun.spawn> | undefined;
      try {
        descriptor = openSync(log, "a");
        child = Bun.spawn(args, {
          cwd: out,
          env: cleanEnv(home),
          stdout: descriptor,
          stderr: descriptor,
          // Its own process group, so everything this area spawns can be swept as a unit.
          detached: true,
        });
        const code = await child.exited;
        areaExits.push({ area, exitCode: code });
        // 2 (failures) and 3 (errors) are ordinary per-area outcomes, so the run takes the worst
        // of them and anything else wins outright. 1 means jtreg selected no tests in this area,
        // which a whole-corpus invocation could never return but a per-area one can; it is not
        // itself a harness failure, and if those tests should have run they read back as blocked.
        if (code === 1) console.warn(`${label}: ${area} selected no tests (jtreg exit 1)`);
        else if ([0, 2, 3].includes(code)) exitCode = Math.max(exitCode, code);
        else exitCode = code;
      } finally {
        if (descriptor !== undefined) closeSync(descriptor);
      }
      const survivors = child ? await reapProcessGroup(child.pid) : [];
      if (survivors.length) {
        leaks.push({ area, survivors });
        console.warn(
          `${label}: ${area} left ${survivors.length} process(es) running; reaped. First: ${survivors[0]!.command}`,
        );
      }
    }
  } finally {
    clearInterval(timer);
    await pending;
  }
  await Bun.write(join(out, "leaks.json"), JSON.stringify(leaks, null, 2) + "\n");
  await showProgress().catch((error) =>
    console.warn(`${label}: could not read progress: ${error.message}`),
  );
  console.log(`${basename(out)}: jtreg exited ${exitCode}; ${log}`);
  return { exitCode, leaks, batches: areaExits, results: await readResults(out, inventory) };
}

/** Everything that determines the reference outcome; kernel and runner are provenance only. */
export type ReferenceInputs = {
  protocol: number;
  manifest: string;
  source: string;
  jtreg: string;
  execution: Manifest["execution"];
  /** Version of the native test-support build; what it produces changes reference outcomes. */
  nativeBuild: number;
  root: string;
  /** Digest of the portable `@requires` definitions staged beside the corpus. */
  requires: string;
  /** jtreg options beyond the shared ones, in order. */
  options: string[];
  heap: string;
  referenceVersion: string;
  platform: string;
  /** Digest of the sorted runnable file IDs, so adapter inventory changes invalidate the baseline. */
  inventory: string;
};
export type ReferenceBaseline = {
  schema: 1;
  fingerprint: string;
  inputs: ReferenceInputs;
  generatedAt: string;
  exitCode: number;
  results: Record<string, Result>;
};
export type RuntimeRun = {
  exitCode: number;
  results: Map<string, Result>;
  /** Areas that left processes behind; absent when the run came from a committed baseline. */
  leaks?: Leak[];
  /** Each area's own jtreg exit code, so a single odd area is attributable. */
  batches?: { area: string; exitCode: number }[];
};
export const currentPlatform = () => `${process.platform}-${arch()}`;
/** One baseline per platform: CI's linux-x64 file is committed, others are local caches. */
export const referenceBaselineName = (platform = currentPlatform()) =>
  `jdk-jtreg.reference.${platform}.json`;

export function referenceInputs(args: {
  manifest: Manifest;
  root: string;
  requires: string;
  referenceVersion: string;
  inventory: Entry[];
  execution?: Manifest["execution"];
  platform?: string;
}): ReferenceInputs {
  const runnable = args.inventory
    .filter((test) => test.unsupported === null)
    .map((test) => test.id)
    .sort();
  const { concurrency, timeoutFactor, headless } = args.execution ?? args.manifest.execution;
  return {
    protocol: PROTOCOL,
    manifest: args.manifest.id,
    source: args.manifest.source.sha256,
    jtreg: args.manifest.jtreg.sha256,
    execution: { concurrency, timeoutFactor, headless },
    nativeBuild: NATIVE_BUILD,
    root: args.root,
    requires: digest(args.requires),
    options: [...JTREG_OPTIONS],
    heap: HEAP_CAP,
    referenceVersion: args.referenceVersion,
    platform: args.platform ?? currentPlatform(),
    inventory: digest(runnable.join("\n")),
  };
}

export const referenceFingerprint = (inputs: ReferenceInputs): string =>
  digest(JSON.stringify(inputs));

/** A baseline is used only when every input matches; otherwise the reason is reported. */
export async function loadReferenceBaseline(
  path: string,
  fingerprint: string,
): Promise<{ baseline: ReferenceBaseline } | { reason: string }> {
  const file = Bun.file(path);
  if (!(await file.exists())) return { reason: `no reference baseline at ${path}` };
  let baseline: ReferenceBaseline;
  try {
    baseline = (await file.json()) as ReferenceBaseline;
  } catch (error) {
    return { reason: `unreadable reference baseline ${path}: ${(error as Error).message}` };
  }
  if (baseline?.schema !== 1 || typeof baseline.results !== "object" || !baseline.results)
    return { reason: `malformed reference baseline ${path}` };
  if (baseline.fingerprint !== fingerprint)
    return {
      reason: `stale reference baseline ${path} (fingerprint ${baseline.fingerprint.slice(0, 12)}, run needs ${fingerprint.slice(0, 12)})`,
    };
  return { baseline };
}

/** Reference results for the current inventory from a matching baseline. */
export function baselineResults(baseline: ReferenceBaseline, inventory: Entry[]): RuntimeRun {
  const results = new Map<string, Result>();
  for (const test of inventory) {
    if (test.unsupported !== null) {
      results.set(test.id, { status: "unsupported", detail: test.unsupported });
      continue;
    }
    results.set(
      test.id,
      baseline.results[test.id] ?? { status: "blocked", detail: "Missing from reference baseline" },
    );
  }
  return { exitCode: baseline.exitCode, results };
}

/** Only a complete reference run may become the baseline; blocked results never do. */
export function referenceComplete(run: RuntimeRun, inventory: Entry[]): boolean {
  const runnable = inventory.filter((test) => test.unsupported === null);
  return (
    runnable.length > 0 &&
    [0, 2, 3].includes(run.exitCode) &&
    runnable.every((test) => {
      const status = run.results.get(test.id)?.status;
      return status !== undefined && status !== "blocked";
    })
  );
}

/**
 * The baseline caches deterministic facts, so any run may refresh a missing or stale one.
 * Docker mounts expectations/ read-only unless --ratchet, which is what keeps ordinary CI
 * runs from writing; native runs record it for their own platform on first use.
 */
export async function recordReferenceBaseline(
  path: string,
  baseline: ReferenceBaseline,
): Promise<{ written: boolean; message: string }> {
  try {
    await Bun.write(path, JSON.stringify(baseline, null, 2) + "\n");
    return {
      written: true,
      message: `Recorded the reference baseline at ${path}; later runs on this platform skip the stock JDK`,
    };
  } catch (error) {
    return {
      written: false,
      message: `Could not record the reference baseline at ${path} (${(error as Error).message}); run with --ratchet to write it`,
    };
  }
}

export function buildReferenceBaseline(
  inputs: ReferenceInputs,
  run: RuntimeRun,
  inventory: Entry[],
  generatedAt = new Date().toISOString(),
): ReferenceBaseline {
  const results: Record<string, Result> = {};
  for (const test of [...inventory].sort((a, b) => (a.id < b.id ? -1 : 1)))
    if (test.unsupported === null) results[test.id] = run.results.get(test.id)!;
  return {
    schema: 1,
    fingerprint: referenceFingerprint(inputs),
    inputs,
    generatedAt,
    exitCode: run.exitCode,
    results,
  };
}

/** Digest of the files that identify a Bali build; the launcher passes it as --digest. */
export async function artifactDigest(home: string): Promise<string> {
  const artifacts: Record<string, string> = {};
  for (const file of ARTIFACTS) artifacts[file] = await fileDigest(join(home, file));
  return digest(JSON.stringify(artifacts));
}

export async function loadManifest(path: string): Promise<Manifest> {
  if (!path) throw new Error("jdk-jtreg needs settings.manifest (manifests/bali-jdk.json)");
  return (await Bun.file(path).json()) as Manifest;
}

/** Rebuild paired rows from flattened results; their meta keeps both outcomes. */
export function unflatten(results: HarnessResult[]): Row[] {
  return results
    .filter((r): r is TestResult => r.kind === "test")
    .map((r) => {
      const meta = (r.meta ?? {}) as Partial<Omit<Row, "id">>;
      return {
        id: r.id,
        area: meta.area ?? r.id.split("/").slice(0, 2).join("/"),
        unsupported: meta.unsupported ?? null,
        reference: meta.reference ?? { status: "pass", detail: "" },
        bali: meta.bali ?? {
          status: r.status === "pass" ? "pass" : "fail",
          detail: r.message ?? "",
        },
      };
    });
}

const xml = (text: string) =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");

export function coverageChart(counts: ReturnType<typeof summary>): string {
  const segments = [
    ["Verified passes", counts.verifiedPassing, "#198754"],
    ["Bali differences", counts.baliFailures, "#dc3545"],
    ["Never measured", counts.unmeasured, "#6f42c1"],
    ["Reference issues", counts.referenceIssues, "#d29922"],
    ["Runner unsupported", counts.unsupported, "#8c959f"],
  ] as const;
  const rows = segments.map(([name, count, color], i) => {
    const y = 55 + i * 35;
    const width = (400 * count) / Math.max(1, counts.inventory);
    return `<text x="20" y="${y + 14}">${xml(name)}</text><rect x="190" y="${y}" width="${width}" height="18" fill="${color}"/><text x="610" y="${y + 14}">${count}</text>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="740" height="220" viewBox="0 0 740 220" role="img" aria-label="Bali OpenJDK coverage"><rect width="740" height="220" fill="white"/><g font-family="system-ui,sans-serif" font-size="14" fill="#24292f"><text x="20" y="28">${counts.runnable}/${counts.inventory} runnable; ${counts.verifiedPassing} verified passes</text>${rows.join("")}<text x="20" y="210">OpenJDK regression tests; not a Java SE conformance percentage</text></g></svg>\n`;
}

const versionText = (result: { stdout: Buffer; stderr: Buffer }) =>
  `${result.stdout}${result.stderr}`.trim();

/**
 * Harness adapter: runs the inventory on the reference JDK and on Bali (ctx.elidePath is
 * the Bali home), keeps the paired report in the workspace, and yields Elide-shaped
 * results so the shared expectations, ratchet, and report pipeline apply unchanged.
 */
export async function* runJdkJtreg(ctx: AdapterContext): AsyncIterable<HarnessResult> {
  const manifest = await loadManifest(String(ctx.settings.manifest ?? ""));
  const bali = await realpath(ctx.elidePath);
  const referencePath = String(ctx.settings.referenceHome ?? process.env.JAVA_HOME ?? "");
  if (!referencePath) throw new Error("Set JAVA_HOME or settings.referenceHome to a stock JDK 25");
  const reference = await realpath(resolve(referencePath));
  if (reference === bali) throw new Error("Reference and Bali homes must differ");
  const refVersion = await $`${join(reference, "bin/java")} -version`
    .env(cleanEnv(reference))
    .quiet();
  const baliVersion = await $`${join(bali, "bin/java")} -version`.env(cleanEnv(bali)).quiet();
  if (!/version "25[."]/.test(versionText(refVersion)) || /BaliVM/.test(versionText(refVersion)))
    throw new Error("Reference must be stock JDK 25");
  if (!/BaliVM/.test(versionText(baliVersion)))
    throw new Error("Bali bin/java did not identify itself as BaliVM");
  const artifacts: Record<string, string> = {};
  for (const file of ARTIFACTS) artifacts[file] = await fileDigest(join(bali, file));
  const archives = await prepare(manifest);
  // Like Elide's javac adapter: a fresh scratch directory per run inside the workspace so
  // stale .jtr files never count; workspace-level report files are overwritten each run.
  const scratch = createJtregRunRoot(ctx.workspacePath);
  const { suite, jar, inventory, root, requires, native } = await stage(
    scratch,
    archives,
    manifest,
    ctx.include,
    ctx.filter ?? [],
    reference,
  );
  await Bun.write(
    join(ctx.workspacePath, "inventory.json"),
    JSON.stringify(inventory, null, 2) + "\n",
  );
  const jtregVersion = await $`${join(reference, "bin/java")} -jar ${jar} -version`
    .env(cleanEnv(reference))
    .quiet();
  const execution = effectiveExecution(manifest, process.env, ctx.threads);
  const inputs = referenceInputs({
    manifest,
    root,
    requires,
    referenceVersion: versionText(refVersion),
    inventory,
    execution,
  });
  const fingerprint = referenceFingerprint(inputs);
  const baselineName = referenceBaselineName(inputs.platform);
  const baselinePath = ctx.expectationsDir ? join(ctx.expectationsDir, baselineName) : undefined;
  const loaded = baselinePath
    ? await loadReferenceBaseline(baselinePath, fingerprint)
    : { reason: "no expectations directory for a reference baseline" };
  let referenceRun: RuntimeRun;
  const referenceSource: Record<string, unknown> = { fingerprint };
  if ("baseline" in loaded) {
    console.log(
      `Stock Java (1/2): using the committed reference baseline (generated ${loaded.baseline.generatedAt}); not running the stock JDK`,
    );
    referenceRun = baselineResults(loaded.baseline, inventory);
    Object.assign(referenceSource, {
      source: "baseline",
      path: baselineName,
      generatedAt: loaded.baseline.generatedAt,
    });
  } else {
    console.log(`Stock Java (1/2): ${loaded.reason}; running the stock JDK`);
    referenceRun = await runSuiteOnRuntime(
      join(scratch, "reference"),
      suite,
      jar,
      reference,
      reference,
      inventory,
      execution,
      native.path,
    );
    referenceSource.source = "run";
    // Only a complete reference run is worth keeping.
    if (baselinePath && referenceComplete(referenceRun, inventory)) {
      const outcome = await recordReferenceBaseline(
        baselinePath,
        buildReferenceBaseline(inputs, referenceRun, inventory),
      );
      referenceSource.written = outcome.written;
      console.log(outcome.message);
    } else if (baselinePath) {
      console.warn("Reference run incomplete; the reference baseline was not updated");
    }
  }
  const baliRun = await runSuiteOnRuntime(
    join(scratch, "bali"),
    suite,
    jar,
    reference,
    bali,
    inventory,
    execution,
    native.path,
  );
  const metadata = {
    reference: referenceSource,
    target: {
      name: "bali",
      version: versionText(baliVersion).match(/BaliVM (\S+)/)?.[1] ?? "unknown",
      artifactDigest: digest(JSON.stringify(artifacts)),
      platform: `${process.platform}-${arch()}`,
    },
    artifacts,
    baliHome: bali,
    referenceHome: reference,
    baliVersion: versionText(baliVersion),
    referenceVersion: versionText(refVersion),
    referenceRelease: await Bun.file(join(reference, "release")).text(),
    jtregVersion: versionText(jtregVersion),
    source: manifest.source,
    jtreg: manifest.jtreg,
    platform: process.platform,
    arch: arch(),
    osRelease: release(),
    heap: HEAP_CAP,
    mode: "othervm",
    execution,
    native: { path: native.path, artifacts: native.built, excluded: native.excluded },
    limits: await runnerLimits(),
    leaks: { reference: referenceRun.leaks ?? [], bali: baliRun.leaks ?? [] },
    batches: { reference: referenceRun.batches ?? [], bali: baliRun.batches ?? [] },
    jtregOptions: JTREG_OPTIONS,
    include: ctx.include,
    compiler: "stock reference JDK",
    rawResults: basename(scratch),
    root,
  };
  const report: Report = {
    schema: 2,
    suite: manifest.id,
    createdAt: new Date().toISOString(),
    metadata,
    exitCodes: { reference: referenceRun.exitCode, bali: baliRun.exitCode },
    tests: inventory.map((test) => ({
      ...test,
      reference: referenceRun.results.get(test.id)!,
      bali: baliRun.results.get(test.id)!,
    })),
  };
  // The paired report stays with the raw jtreg output for CI artifacts and humans; the
  // committed report directory receives the differential view through the reports hook.
  for (const dir of [scratch, ctx.workspacePath]) {
    await Bun.write(join(dir, "report.json"), JSON.stringify(report, null, 2) + "\n");
    await Bun.write(join(dir, "report.md"), markdown(report));
  }
  // The reports hook runs later and only sees ctx and results, so what it needs to publish is
  // staged at a fixed place in the workspace rather than threaded through the result stream.
  // Best effort, always: these files are a convenience for reading the report afterwards, and
  // a run that measured 7,000 tests must never be thrown away because one of them could not be
  // gathered. Anything that goes wrong here is reported and the results still stand.
  try {
    await Bun.write(
      join(ctx.workspacePath, PUBLISHED_EXTRAS),
      JSON.stringify({
        ...(await collectDiagnostics(join(scratch, "reference"), report, "reference")),
        ...(await collectDiagnostics(join(scratch, "bali"), report, "bali")),
        "leaked-processes.json": JSON.stringify(metadata.leaks, null, 2) + "\n",
      }),
    );
  } catch (error) {
    console.warn(
      `${ctx.logPrefix ?? ""}could not collect run diagnostics (results are unaffected): ${error instanceof Error ? error.message : String(error)}`,
    );
  }
  console.log(`${ctx.logPrefix ?? ""}${JSON.stringify(summary(report))}`);
  console.log(`${ctx.logPrefix ?? ""}raw jtreg results: ${scratch}`);
  // Like any harness error: an incomplete run exits 2 and publishes nothing.
  if (incomplete(report)) throw new Error(`${incompleteReason(report)}; see ${scratch}`);
  yield* flatten(report);
}

export const jdkJtregAdapter: Adapter = {
  id: "jdk-jtreg",
  kind: "test",
  run: runJdkJtreg,
  async reports(ctx, results) {
    const report: Report = {
      schema: 2,
      suite: "jdk-jtreg",
      createdAt: new Date().toISOString(),
      metadata: {},
      exitCodes: { reference: 0, bali: 0 },
      tests: unflatten(results),
    };
    const staged = Bun.file(join(ctx.workspacePath ?? "", PUBLISHED_EXTRAS));
    const extras: Record<string, string> = (await staged.exists()) ? await staged.json() : {};
    const leaks = extras["leaked-processes.json"];
    return {
      ...extras,
      "differential.md":
        markdown(report).replace(
          RAW_NOTE,
          "results.json.gz keeps every file's paired outcome in its meta. diagnostics/ keeps the .jtr and crash logs for up to " +
            `${DIAGNOSTIC_CAP} examples of each distinct failure signature; diagnostics/*/index.json lists every signature and anything too large to commit.`,
        ) + leakSection(leaks ? (JSON.parse(leaks) as Record<string, Leak[]>) : undefined),
      "coverage.svg": coverageChart(summary(report)),
    };
  },
};
