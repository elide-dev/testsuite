import type { ElideIdentity } from "./results/schema";

const SEMVER_RE = /\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.+-]+)?/;

export function parseElideVersion(stdout: string): string {
  const m = stdout.match(SEMVER_RE);
  return m ? m[0] : "unknown";
}

export async function resolveIdentity(
  elidePath: string,
  digest: string,
): Promise<ElideIdentity> {
  const proc = Bun.spawn([elidePath, "--version"], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const out = await new Response(proc.stdout).text();
  const err = await new Response(proc.stderr).text();
  const code = await proc.exited;
  const semver = parseElideVersion(out);
  if (code !== 0 || semver === "unknown") {
    throw new Error(`elide --version failed (exit ${code}): ${(err || out).trim()}`);
  }
  return { semver, digest };
}
