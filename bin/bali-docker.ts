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

export interface BaliPlan {
  baliHome: string;
  referenceHome?: string;
  suite: string;
  ratchet: boolean;
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
      !["--bali-home", "--reference-home", "--suite"].includes(args[i]!) ||
      !args[i + 1] ||
      options.has(args[i]!)
    )
      throw new Error(
        `Bali runs accept --bali-home <distribution> [--reference-home <jdk25>] [--ratchet] [--suite ${suites.join("|")}].`,
      );
    options.set(args[i]!, args[i + 1]!);
  }
  const suite = options.get("--suite") ?? suites[0]!;
  if (!suites.includes(suite)) throw new Error(`Bali supports --suite ${suites.join(", ")}`);
  if (!options.has("--bali-home"))
    throw new Error("Bali runs require --bali-home pointing to a packaged distribution");
  return {
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
  // Reject macOS binaries before spending time building a Linux image.
  const magic = new Uint8Array(
    await Bun.file(join(plan.baliHome, "bin/bali")).slice(0, 20).arrayBuffer(),
  );
  if (
    magic[0] !== 0x7f ||
    magic[1] !== 0x45 ||
    magic[2] !== 0x4c ||
    magic[3] !== 0x46 ||
    magic[4] !== 2 ||
    magic[5] !== 1 ||
    magic[18] !== 62 ||
    magic[19] !== 0
  )
    throw new Error(
      "Docker tests need the Linux AMD64 Bali release, not a macOS/ARM64 distribution. Use --execution native for native platform testing.",
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
