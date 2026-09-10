// Shared Docker launcher primitives for the Elide (bin/run.ts) and Bali (bin/bali-docker.ts)
// targets: process running with interrupt cleanup, user mapping, and writable-mount checks.
import { createHash, randomUUID } from "node:crypto";
import { closeSync, openSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const RUN_LABEL_KEY = "elide.testsuite.run";
const RUN_ID = `${Date.now()}-${process.pid}-${randomUUID()}`;
/** Label applied to every container of this launcher process, so interrupts can clean up. */
export const RUN_LABEL = `${RUN_LABEL_KEY}=${RUN_ID}`;
const activeProcesses = new Set<ReturnType<typeof Bun.spawn>>();
let handlingSignal = false;

export function log(message: string): void {
  process.stderr.write(`[bin/run] ${message}\n`);
}

export function usageError(message: string): never {
  log(message);
  process.exit(2);
}

function cleanupContainersSync(): void {
  const listed = Bun.spawnSync(["docker", "ps", "-aq", "--filter", `label=${RUN_LABEL}`], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const ids = new TextDecoder().decode(listed.stdout).trim().split(/\s+/).filter(Boolean);
  if (ids.length === 0) return;
  log(`cleaning up ${ids.length} running container(s) for interrupted run`);
  Bun.spawnSync(["docker", "rm", "-f", ...ids], {
    stdout: "ignore",
    stderr: "ignore",
  });
}

function interrupt(signal: NodeJS.Signals): never {
  if (handlingSignal) process.exit(130);
  handlingSignal = true;
  log(`received ${signal}; stopping active command and cleaning up containers`);
  for (const proc of activeProcesses) {
    try {
      proc.kill("SIGINT");
    } catch {
      // Best effort: labelled containers are forcibly removed below.
    }
  }
  cleanupContainersSync();
  process.exit(signal === "SIGTERM" ? 143 : 130);
}

process.on("SIGINT", () => interrupt("SIGINT"));
process.on("SIGTERM", () => interrupt("SIGTERM"));

export async function run(args: string[], opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): Promise<number> {
  const proc = Bun.spawn(args, {
    cwd: opts.cwd ?? ROOT,
    env: opts.env ?? process.env,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });
  activeProcesses.add(proc);
  try {
    return await proc.exited;
  } finally {
    activeProcesses.delete(proc);
  }
}

export async function runWithHeartbeat(args: string[], label: string, opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): Promise<number> {
  log(`${label}...`);
  const started = performance.now();
  const timer = setInterval(() => {
    const seconds = Math.round((performance.now() - started) / 1000);
    log(`${label} still running (${seconds}s)...`);
  }, 5_000);
  try {
    const rc = await run(args, opts);
    const seconds = Math.round((performance.now() - started) / 1000);
    log(`${label} ${rc === 0 ? "done" : `exited ${rc}`} (${seconds}s).`);
    return rc;
  } finally {
    clearInterval(timer);
  }
}

export async function capture(args: string[], opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): Promise<{
  exitCode: number;
  stdout: string;
  stderr: string;
}> {
  const proc = Bun.spawn(args, {
    cwd: opts.cwd ?? ROOT,
    env: opts.env ?? process.env,
    stdout: "pipe",
    stderr: "pipe",
  });
  activeProcesses.add(proc);
  try {
    const [stdout, stderr, exitCode] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
      proc.exited,
    ]);
    return { exitCode, stdout, stderr };
  } finally {
    activeProcesses.delete(proc);
  }
}

export async function requireDocker(): Promise<void> {
  const result = await capture(["docker", "--version"]);
  if (result.exitCode !== 0) usageError("docker not found on PATH");
}

export function platformArgs(platform: string): string[] {
  return platform ? ["--platform", platform] : [];
}

/** Run as the invoking user so bind-mounted output stays owned by them. */
export function userArgs(uid: string, gid: string, containerPath?: string): string[] {
  return [
    "--user",
    `${uid}:${gid}`,
    "-e",
    "HOME=/work/.harness",
    ...(containerPath ? ["-e", `PATH=${containerPath}`] : []),
  ];
}

export function sha256File(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

/** Fail early with a diagnostic when a previous root-owned container left mounts unwritable. */
export function assertWritableMountSources(dirs: string[], files: string[] = []): void {
  for (const dir of dirs) {
    const target = resolve(ROOT, dir, `.write-test-${process.pid}`);
    try {
      writeFileSync(target, "");
      unlinkSync(target);
    } catch (err) {
      usageError(
        `${dir}/ is not writable by the current user (${err instanceof Error ? err.message : String(err)}). ` +
          "Run once with --repair-ownership to fix stale root-owned files.",
      );
    }
  }
  for (const file of files) {
    try {
      closeSync(openSync(resolve(ROOT, file), "a"));
    } catch (err) {
      usageError(
        `${file} is not writable by the current user (${err instanceof Error ? err.message : String(err)}). ` +
          "Run once with --repair-ownership to fix stale ownership.",
      );
    }
  }
}

export async function fixHostOwnership(
  image: string,
  plat: string[],
  uid: string,
  gid: string,
  label: string,
  paths: string[],
): Promise<void> {
  await runWithHeartbeat(
    [
      "docker",
      "run",
      "--rm",
      "--label",
      RUN_LABEL,
      ...plat,
      "--entrypoint",
      "chown",
      ...paths.flatMap((path) => ["-v", `${ROOT}/${path}:/target/${path}`]),
      image,
      "-R",
      `${uid}:${gid}`,
      ...paths.map((path) => `/target/${path}`),
    ],
    label,
  );
}
