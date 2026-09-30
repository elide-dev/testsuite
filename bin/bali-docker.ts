// Bali target launcher: runs the shared harness (harness/src/cli.ts) for workloads whose
// registry `target` is "bali", in Linux AMD64 Docker by default or natively on request.
// Docker primitives are shared with the Elide launcher through ./docker.
import { randomUUID } from "node:crypto";
import { mkdir, realpath, rm } from "node:fs/promises";
import { resolve, join } from "node:path";
import { artifactDigest } from "../harness/src/adapters/jdk-jtreg";
import {
  assertWritableMountSources,
  platformArgs,
  requireDocker,
  run as runCommand,
  userArgs,
} from "./docker";

const PLATFORM = "linux/amd64";

/**
 * The container's task ceiling.
 *
 * cgroup v2 counts tasks, so every JVM thread spends one. A healthy run's steady state is the
 * jtreg JVM plus `concurrency` test JVMs plus whatever helpers those tests fork — on the order
 * of a thousand tasks at concurrency 4, which this leaves roomy headroom over. What it buys is
 * the other end: a leak that would otherwise climb until it hit the machine's ~30k default and
 * starve unrelated areas an hour later now hits a wall inside the container, while the run is
 * still attributable to the area that caused it. Bounding it is the point; the number is
 * deliberately generous, and `metadata.limits.cgroupPidsPeak` reports each run's high-water
 * mark so it can be tightened from evidence rather than guessed again.
 */
export const PIDS_LIMIT = 4096;

/** Mach-O headers, thin and universal, in both byte orders: a macOS executable. */
const MACH_O = new Set([0xfeedface, 0xcefaedfe, 0xfeedfacf, 0xcffaedfe, 0xcafebabe, 0xbebafeca]);

/**
 * The platform a distribution's launcher was built for, read from its executable header, or
 * null when the header is neither ELF nor Mach-O.
 *
 * Handing the wrong build to a run fails as `ENOEXEC` from `posix_spawn` somewhere deep in
 * target identification, which names neither the cause nor the fix. The header says outright
 * what the binary is, so both launchers check it before spending anything.
 */
export function distributionPlatform(magic: Uint8Array): string | null {
  if (magic[0] === 0x7f && magic[1] === 0x45 && magic[2] === 0x4c && magic[3] === 0x46) {
    if (magic[4] !== 2 || magic[5] !== 1) return "linux-unknown";
    const machine = magic[18]! | (magic[19]! << 8);
    return machine === 62 ? "linux-amd64" : machine === 183 ? "linux-arm64" : "linux-unknown";
  }
  const little = (magic[0]! | (magic[1]! << 8) | (magic[2]! << 16) | (magic[3]! << 24)) >>> 0;
  const big = ((magic[0]! << 24) | (magic[1]! << 16) | (magic[2]! << 8) | magic[3]!) >>> 0;
  return MACH_O.has(little) || MACH_O.has(big) ? "darwin" : null;
}

/** What this host can execute directly, in the same vocabulary. */
export const hostPlatform = () =>
  process.platform === "darwin" ? "darwin" : `linux-${process.arch === "x64" ? "amd64" : process.arch}`;

/** The launcher's first bytes; enough for any executable header. */
async function distributionMagic(baliHome: string): Promise<Uint8Array> {
  return new Uint8Array(await Bun.file(join(baliHome, "bin/java")).slice(0, 20).arrayBuffer());
}

export interface BaliPlan {
  baliHome: string;
  referenceHome?: string;
  suite: string;
  ratchet: boolean;
  /** Comma-separated file globs over the inventory; a scoped run observes only that slice. */
  include?: string;
  filter?: string;
  /** jtreg concurrency above the manifest's, for local runs on larger machines. */
  threads?: number;
}
export function baliPlan(argv: string[], cwd: string, suites: string[] = ["jdk-jtreg"]): BaliPlan {
  const args = [...argv];
  let ratchet = false;
  const options = new Map<string, string>();
  for (let i = 0; i < args.length; i += 2) {
    if (args[i] === "--ratchet" && !ratchet) {
      ratchet = true;
      i--;
      continue;
    }
    if (
      !["--bali-home", "--reference-home", "--suite", "--include", "--filter", "--threads"].includes(args[i]!) ||
      !args[i + 1] ||
      options.has(args[i]!)
    )
      throw new Error(
        `Bali runs accept --bali-home <distribution> [--reference-home <jdk25>] [--ratchet] [--suite ${suites.join("|")}] [--include <globs>] [--filter <pattern>] [--threads <n>].`,
      );
    options.set(args[i]!, args[i + 1]!);
  }
  const suite = options.get("--suite") ?? suites[0]!;
  if (!suites.includes(suite)) throw new Error(`Bali supports --suite ${suites.join(", ")}`);
  if (!options.has("--bali-home"))
    throw new Error("Bali runs require --bali-home pointing to a packaged distribution");
  const threads = options.has("--threads") ? Number(options.get("--threads")) : undefined;
  if (threads !== undefined && (!Number.isInteger(threads) || threads < 1))
    throw new Error("--threads takes a positive integer");
  return {
    ...(options.has("--include") ? { include: options.get("--include")! } : {}),
    ...(options.has("--filter") ? { filter: options.get("--filter")! } : {}),
    ...(threads !== undefined ? { threads } : {}),
    baliHome: resolve(cwd, options.get("--bali-home")!),
    referenceHome: options.has("--reference-home")
      ? resolve(cwd, options.get("--reference-home")!)
      : undefined,
    suite,
    ratchet,
  };
}
export interface HarnessPaths {
  registry: string;
  repoRoot: string;
  baliHome: string;
  suiteRoot: string;
  reports: string;
  expectations: string;
}
/** The same cli.ts invocation the Elide launcher builds, with --target bali. */
export function harnessArgs(plan: BaliPlan, digest: string, paths: HarnessPaths): string[] {
  return [
    "run",
    plan.suite,
    "--target",
    "bali",
    "--registry",
    paths.registry,
    "--repo-root",
    paths.repoRoot,
    "--elide-path",
    paths.baliHome,
    "--digest",
    digest,
    "--suite-root",
    paths.suiteRoot,
    "--reports",
    paths.reports,
    "--expectations",
    paths.expectations,
    "--log-prefix",
    `[${plan.suite}] `,
    "--log",
    "--failure-output",
    "hide",
    ...(plan.ratchet ? ["--ratchet"] : []),
    ...(plan.include ? ["--include", plan.include] : []),
    ...(plan.filter ? ["--filter", plan.filter] : []),
    ...(plan.threads ? ["--threads", String(plan.threads)] : []),
  ];
}
export function containerArgs(
  plan: BaliPlan,
  root: string,
  image: string,
  label: string,
  digest: string,
  user: string[],
): string[] {
  return [
    "docker",
    "run",
    "--rm",
    "--init",
    // Make exhaustion a loud, attributable container-level failure instead of a silent one that
    // reads as a wall of compatibility failures. BALI_PIDS_LIMIT tunes it for an unusual runner.
    "--pids-limit",
    process.env.BALI_PIDS_LIMIT ?? String(PIDS_LIMIT),
    ...platformArgs(PLATFORM),
    "--label",
    label,
    ...user,
    "--mount",
    `type=bind,src=${plan.baliHome},dst=/opt/bali,readonly`,
    "--mount",
    `type=bind,src=${join(root, ".harness")},dst=/work/.harness`,
    "--mount",
    `type=bind,src=${join(root, "reports")},dst=/work/reports`,
    // Expectations are mounted like Elide's: read-only unless this run ratchets them.
    "--mount",
    `type=bind,src=${join(root, "expectations")},dst=/work/expectations${plan.ratchet ? "" : ",readonly"}`,
    "--mount",
    `type=bind,src=${join(root, "registry.toml")},dst=/work/registry.toml,readonly`,
    "--mount",
    `type=bind,src=${join(root, "manifests")},dst=/work/manifests,readonly`,
    // The suites tree comes from the image; the jdk-jtreg drivers (the portable `@requires`
    // VMProps source the adapter stages) live in this repository and are mounted over it.
    "--mount",
    `type=bind,src=${join(root, "suites/drivers")},dst=/work/suites/drivers,readonly`,
    image,
    ...harnessArgs(plan, digest, {
      registry: "/work/registry.toml",
      repoRoot: "/work",
      baliHome: "/opt/bali",
      suiteRoot: "/work/suites",
      reports: "/work/reports/bali",
      expectations: "/work/expectations",
    }),
  ];
}
async function prepareRoot(root: string): Promise<void> {
  await mkdir(join(root, ".harness"), { recursive: true });
  await mkdir(join(root, "reports/bali"), { recursive: true });
  await mkdir(join(root, "expectations"), { recursive: true });
}
export async function runBaliDocker(
  argv: string[],
  root: string,
  label: string,
  run: (args: string[]) => Promise<number> = runCommand,
  suites?: string[],
): Promise<number> {
  const plan = baliPlan(argv, process.cwd(), suites);
  if (plan.referenceHome)
    throw new Error(
      "--reference-home is not accepted for Docker runs: the reference JDK is fixed in the image. Use --execution native.",
    );
  plan.baliHome = await realpath(plan.baliHome);
  // Reject a foreign build before spending time building a Linux image.
  const built = distributionPlatform(
    new Uint8Array(await Bun.file(join(plan.baliHome, "bin/bali")).slice(0, 20).arrayBuffer()),
  );
  if (built !== "linux-amd64")
    throw new Error(
      `Docker tests need the Linux AMD64 Bali release; ${plan.baliHome} holds a ${built ?? "unrecognized"} build. ` +
        "Use --execution native for native platform testing.",
    );
  const digest = await artifactDigest(plan.baliHome);
  await prepareRoot(root);
  assertWritableMountSources(["reports", "expectations", ".harness"]);
  if (run === runCommand) await requireDocker();
  const user = userArgs(String(process.getuid?.() ?? 1000), String(process.getgid?.() ?? 1000));
  const dockerfile = join(root, "docker/bali.Dockerfile");
  const iid = join(root, ".harness", `bali-image-${randomUUID()}.txt`);
  console.log(`Building Bali test environment (${PLATFORM})...`);
  try {
    const built = await run([
      "docker",
      "build",
      ...platformArgs(PLATFORM),
      "--iidfile",
      iid,
      "-f",
      dockerfile,
      root,
    ]);
    if (built !== 0) return 2;
    const image = (await Bun.file(iid).text()).trim();
    if (!/^sha256:[a-f0-9]{64}$/.test(image))
      throw new Error("Docker did not return a valid image identity");
    console.log(`Running ${plan.suite} in ${image}; workspace: ${join(root, ".harness/work", plan.suite)}`);
    return await run(containerArgs(plan, root, image, label, digest, user));
  } finally {
    await rm(iid, { force: true });
  }
}
/** Native host run through the same harness entry point, with JAVA_HOME as the reference. */
export async function runBaliNative(argv: string[], root: string, suites?: string[]): Promise<number> {
  const plan = baliPlan(argv, process.cwd(), suites);
  const baliHome = await realpath(plan.baliHome);
  // A native run execs the distribution directly, so a build for another platform cannot work.
  // .harness/distribution is where the Docker path stages the Linux release, so pointing a
  // native run at it is the easy mistake; say so rather than leaving an ENOEXEC to decode.
  const built = distributionPlatform(await distributionMagic(baliHome));
  if (built !== null && built !== hostPlatform())
    throw new Error(
      `${baliHome} holds a ${built} Bali build, which this ${hostPlatform()} host cannot execute. ` +
        "Point --bali-home at a distribution for this platform, or use --execution docker to run the Linux build.",
    );
  if (plan.referenceHome) process.env.JAVA_HOME = plan.referenceHome;
  await prepareRoot(root);
  const { main, parseArgs } = await import("../harness/src/cli");
  return main(
    parseArgs(
      harnessArgs(plan, await artifactDigest(baliHome), {
        registry: join(root, "registry.toml"),
        repoRoot: root,
        baliHome,
        suiteRoot: join(root, "suites"),
        reports: join(root, "reports/bali"),
        expectations: join(root, "expectations"),
      }),
    ),
  );
}
