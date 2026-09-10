import { expect, test } from "bun:test";
import { mkdtemp, mkdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { baliPlan, containerArgs, harnessArgs, runBaliDocker } from "./bali-docker";

const user = ["--user", "1000:1000"];

test("Bali plan drives the shared harness with --target bali and never forwards release credentials", () => {
  const plan = baliPlan(["--ratchet", "--bali-home", "dist"], "/repo");
  const args = containerArgs(plan, "/repo", "sha256:" + "a".repeat(64), "run=fixture", "digest1", user);
  expect(args).toContain("1000:1000");
  expect(args).not.toContain("TESTSUITE_REVISION=abc");
  expect(args).toContain("linux/amd64");
  expect(args).toContain("type=bind,src=/repo/dist,dst=/opt/bali,readonly");
  expect(args).toContain("type=bind,src=/repo/expectations,dst=/work/expectations");
  expect(args).toContain("type=bind,src=/repo/registry.toml,dst=/work/registry.toml,readonly");
  expect(args.slice(args.indexOf("sha256:" + "a".repeat(64)) + 1)).toEqual(
    harnessArgs(plan, "digest1", {
      registry: "/work/registry.toml",
      repoRoot: "/work",
      baliHome: "/opt/bali",
      suiteRoot: "/work/suites",
      reports: "/work/reports/bali",
      expectations: "/work/expectations",
    }),
  );
  expect(args).toContain("--target");
  expect(args).toContain("/work/reports/bali");
  expect(args).toContain("--ratchet");
  expect(args).not.toContain("GH_TOKEN");
  expect(args).not.toContain("BALI_RELEASE_TOKEN");
  const readonly = containerArgs(
    baliPlan(["--bali-home", "dist"], "/repo"),
    "/repo",
    "sha256:" + "a".repeat(64),
    "run=fixture",
    "digest1",
    user,
  );
  expect(readonly).toContain("type=bind,src=/repo/expectations,dst=/work/expectations,readonly");
  expect(readonly).not.toContain("--ratchet");
});

test("Bali plan validates suites from the registry and accepts --ratchet anywhere", () => {
  expect(baliPlan(["--suite", "jdk-jtreg", "--ratchet", "--bali-home", "dist"], "/repo").ratchet).toBe(true);
  expect(baliPlan(["--bali-home", "--ratchet"], "/repo").ratchet).toBe(false);
  expect(() => baliPlan(["--ratchet", "--ratchet", "--bali-home", "dist"], "/repo")).toThrow();
  expect(() => baliPlan(["--suite", "test262", "--bali-home", "dist"], "/repo")).toThrow(
    "Bali supports --suite jdk-jtreg",
  );
  expect(baliPlan(["--bali-home", "dist"], "/repo", ["jdk-jtreg", "other"]).suite).toBe("jdk-jtreg");
  expect(baliPlan(["--reference-home", "/jdk", "--bali-home", "dist"], "/repo").referenceHome).toBe("/jdk");
});

test("Docker launcher rejects macOS artifacts and a host reference JDK, and propagates build errors", async () => {
  const temp = await mkdtemp(join(tmpdir(), "bali-container-"));
  try {
    const home = join(temp, "distribution");
    await mkdir(join(home, "bin"), { recursive: true });
    await mkdir(join(home, "lib"), { recursive: true });
    await Bun.write(join(home, "bin/bali"), new Uint8Array(20));
    for (const file of ["bin/java", "lib/modules", "release"]) await Bun.write(join(home, file), file);
    const commands: string[][] = [];
    const run = async (args: string[]) => {
      commands.push(args);
      return 1;
    };
    const root = resolve(import.meta.dir, "..");
    const argv = ["--bali-home", home];
    await expect(
      runBaliDocker([...argv, "--reference-home", "/jdk"], root, "test=fixture", run),
    ).rejects.toThrow("fixed in the image");
    await expect(runBaliDocker(argv, root, "test=fixture", run)).rejects.toThrow("Linux AMD64");
    expect(commands).toHaveLength(0);
    const elf = new Uint8Array(20);
    elf.set([127, 69, 76, 70, 2, 1]);
    elf[18] = 62;
    await Bun.write(join(home, "bin/bali"), elf);
    expect(await runBaliDocker(argv, root, "test=fixture", run)).toBe(2);
    expect(commands).toHaveLength(1);
    expect(commands[0]).toContain("linux/amd64");
    const successCommands: string[][] = [];
    const regression = await runBaliDocker(argv, root, "test=fixture", async (args) => {
      successCommands.push(args);
      if (args[1] === "build") {
        await Bun.write(args[args.indexOf("--iidfile") + 1]!, "sha256:" + "a".repeat(64));
        return 0;
      }
      return 1;
    });
    expect(regression).toBe(1);
    expect(successCommands).toHaveLength(2);
    expect(successCommands[1]).toContain("--rm");
    expect(successCommands[1]).toContain("--init");
    expect(successCommands[1]).toContain("jdk-jtreg");
    expect(successCommands[1]).toContain("--digest");
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
