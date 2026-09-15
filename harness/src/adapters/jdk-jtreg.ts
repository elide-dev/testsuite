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
import { mkdir, realpath, rename, rm } from "node:fs/promises";
import { arch, release } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import { createJtregRunRoot, isJtregTimeout, jtregCommonArgs } from "./jtreg";
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

const digest = (value: string) => createHash("sha256").update(value).digest("hex");
// Bun's file stream, not node:fs createReadStream: iterating the latter never completes on
// multi-hundred-megabyte files under Bun 1.3 on macOS (the Bali binary, the corpus tarball).
async function fileDigest(path: string): Promise<string> {
  const hash = createHash("sha256");
  for await (const chunk of Bun.file(path).stream()) hash.update(chunk);
  return hash.digest("hex");
}

/** Missing/malformed results never become passes; only the result header counts. */
export function parseJtr(text: string | undefined): Result {
  if (text === undefined) return { status: "blocked", detail: "No jtreg result; see harness.log" };
  const header = text.split("#-----testresult-----\n")[1]?.split("\n#section:")[0];
  const detail = header?.match(/^execStatus=(.*)$/m)?.[1];
  if (!detail) return { status: "blocked", detail: "Missing execStatus in jtreg result" };
  if (detail.startsWith("Passed. Skipped")) return { status: "skipped", detail };
  if (detail.startsWith("Passed.")) return { status: "pass", detail };
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
): Promise<Entry[]> {
  const files = [...new Bun.Glob("**/*").scanSync({ cwd: suite, onlyFiles: true })].sort();
  const nestedRoots = new Set(files.filter((id) => id.endsWith("/TEST.ROOT")));
  const included = include.length ? include.map((glob) => picomatch(glob)) : [];
  const inventory: Entry[] = [];
  for (const id of files) {
    // jtreg's source formats; fixtures without a test marker are not denominator entries.
    if (!/\.(java|sh|jasm|jcod|html)$/.test(id)) continue;
    if (included.length && !included.some((match) => match(id))) continue;
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
    baliFailures: runnable.filter(
      (row) => row.reference.status === "pass" && row.bali.status !== "pass",
    ).length,
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
    `| Outcome | Files |\n|---|---:|\n| Pass on both runtimes | ${counts.verifiedPassing} |\n| Reference passes; Bali does not | ${counts.baliFailures} |\n| Reference issues | ${counts.referenceIssues} |\n| Unsupported by adapter | ${counts.unsupported} |\n\n` +
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
) {
  const src = join(out, "src");
  await mkdir(src);
  const prefix = `jdk-${manifest.source.revision}`;
  // Keep all sibling support files; don't make an incomplete fixture selection. `test/lib` is
  // what `@library /test/lib` names through `external.lib.roots`.
  await $`tar -xzf ${archives.source} -C ${src} --strip-components=1 ${`${prefix}/${manifest.scope}`} ${`${prefix}/test/lib`}`.quiet();
  await $`tar -xzf ${archives.source} -C ${src} --strip-components=1 ${`${prefix}/LICENSE`}`.quiet();
  const suite = join(src, manifest.scope);
  const requires = await Bun.file(REQUIRES_SOURCE).text();
  await Bun.write(join(src, "test", REQUIRES_STAGED), requires);
  const originalRoot = await Bun.file(join(suite, "TEST.ROOT")).text();
  await Bun.write(join(out, "UPSTREAM.TEST.ROOT"), originalRoot);
  const root = portableRoot(originalRoot);
  await Bun.write(join(suite, "TEST.ROOT"), root);
  await $`unzip -q ${archives.jtreg} -d ${join(out, "harness")}`.quiet();
  const inventory = await discover(suite, manifest.exclude ?? [], include);
  console.log(
    `Discovered ${inventory.length} test files; ${inventory.filter((test) => test.unsupported === null).length} runnable`,
  );
  return { suite, jar: join(out, "harness/jtreg/lib/jtreg.jar"), inventory, root, requires };
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
  const summaryFile = Bun.file(join(out, "report/text/summary.txt"));
  const statuses = (await summaryFile.exists()) ? parseSummary(await summaryFile.text()) : new Map();
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

export async function runSuiteOnRuntime(
  out: string,
  suite: string,
  jar: string,
  reference: string,
  home: string,
  inventory: Entry[],
  execution: Manifest["execution"],
) {
  await mkdir(out);
  const selection = join(out, "selection.txt");
  await Bun.write(
    selection,
    inventory
      .filter((test) => test.unsupported === null)
      .map((test) => JSON.stringify(join(suite, test.id)))
      .join("\n") + "\n",
  );
  const args = [
    join(reference, "bin/java"),
    "-jar",
    jar,
    ...JTREG_OPTIONS,
    ...jtregCommonArgs({
      concurrency: execution.concurrency,
      timeoutFactor: execution.timeoutFactor,
      workDir: join(out, "work"),
      reportDir: join(out, "report"),
    }),
    "-e:JAVA_HOME,PATH",
    `-testjdk:${home}`,
    `-compilejdk:${reference}`,
    `-javaoption:${HEAP_CAP}`,
    `-javaoption:-Djava.awt.headless=${execution.headless}`,
    `@${selection}`,
  ];
  await Bun.write(join(out, "command.json"), JSON.stringify(args, null, 2));
  const log = join(out, "harness.log");
  const label = basename(out) === "reference" ? "Stock Java (1/2)" : "Bali (2/2)";
  const runnable = inventory.filter((test) => test.unsupported === null);
  const jtrs = runnable.flatMap((test) =>
    (test.variants ?? [""]).map((variant) => jtrPath(test.id, variant)),
  );
  const started = Date.now();
  const showProgress = async () => {
    const progress = await runtimeProgress(join(out, "work"), jtrs);
    const seconds = Math.floor((Date.now() - started) / 1000);
    console.log(
      `${label}: ${progress.completed}/${jtrs.length} finished; ${progress.passed} passed, ${progress.failed} failed/error/timeout, ${progress.skipped} skipped; ${Math.floor(seconds / 60)}m ${seconds % 60}s elapsed`,
    );
  };
  console.log(
    `${label}: starting ${runnable.length} files, ${jtrs.length} tests (${execution.concurrency} concurrent)`,
  );
  console.log(`Live test results: ${join(out, "work")}`);
  let pending: Promise<void> | undefined;
  const timer = setInterval(() => {
    if (pending) return;
    pending = showProgress()
      .catch((error) => console.warn(`${label}: could not read progress: ${error.message}`))
      .finally(() => {
        pending = undefined;
      });
  }, 10_000);
  // Write directly to disk so diagnostics survive cancellation and remain readable live.
  let descriptor: number | undefined;
  let exitCode: number;
  try {
    descriptor = openSync(log, "w");
    const child = Bun.spawn(args, {
      cwd: out,
      env: cleanEnv(home),
      stdout: descriptor,
      stderr: descriptor,
    });
    exitCode = await child.exited;
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
    clearInterval(timer);
    await pending;
  }
  await showProgress().catch((error) =>
    console.warn(`${label}: could not read progress: ${error.message}`),
  );
  console.log(`${basename(out)}: jtreg exited ${exitCode}; ${log}`);
  return { exitCode, results: await readResults(out, inventory) };
}

/** Everything that determines the reference outcome; kernel and runner are provenance only. */
export type ReferenceInputs = {
  protocol: number;
  manifest: string;
  source: string;
  jtreg: string;
  execution: Manifest["execution"];
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
export type RuntimeRun = { exitCode: number; results: Map<string, Result> };
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
  const { suite, jar, inventory, root, requires } = await stage(scratch, archives, manifest, ctx.include);
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
  console.log(`${ctx.logPrefix ?? ""}${JSON.stringify(summary(report))}`);
  console.log(`${ctx.logPrefix ?? ""}raw jtreg results: ${scratch}`);
  // Like any harness error: an incomplete run exits 2 and publishes nothing.
  if (incomplete(report))
    throw new Error(
      `incomplete jdk-jtreg run (jtreg exit codes reference=${report.exitCodes.reference}, bali=${report.exitCodes.bali}); see ${scratch}`,
    );
  yield* flatten(report);
}

export const jdkJtregAdapter: Adapter = {
  id: "jdk-jtreg",
  kind: "test",
  run: runJdkJtreg,
  async reports(_ctx, results) {
    const report: Report = {
      schema: 2,
      suite: "jdk-jtreg",
      createdAt: new Date().toISOString(),
      metadata: {},
      exitCodes: { reference: 0, bali: 0 },
      tests: unflatten(results),
    };
    return {
      "differential.md": markdown(report).replace(
        RAW_NOTE,
        "results.json.gz keeps every file's paired outcome in its meta. Raw jtreg diagnostics remain in the run workspace or CI artifact.",
      ),
      "coverage.svg": coverageChart(summary(report)),
    };
  },
};
