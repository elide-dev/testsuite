import { join } from "node:path";
import type { ElideIdentity } from "./results/schema";
import type { TargetName } from "./registry";
import { resolveIdentity as resolveElideIdentity } from "./elide";

export function parseBaliVersion(text: string): string {
  return text.match(/BaliVM (\S+)/)?.[1] ?? "unknown";
}

/** Identity of the runtime under test: Elide's binary, or a Bali distribution home. */
export async function resolveTargetIdentity(
  target: TargetName,
  path: string,
  digest: string,
): Promise<ElideIdentity> {
  if (target === "elide") return resolveElideIdentity(path, digest);
  const proc = Bun.spawn([join(path, "bin/java"), "-version"], { stdout: "pipe", stderr: "pipe" });
  const text = (await new Response(proc.stdout).text()) + (await new Response(proc.stderr).text());
  const code = await proc.exited;
  const semver = parseBaliVersion(text);
  if (code !== 0 || semver === "unknown")
    throw new Error(`Bali bin/java -version did not identify BaliVM (exit ${code}): ${text.trim()}`);
  return { semver, digest };
}
