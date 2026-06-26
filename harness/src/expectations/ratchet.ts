import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse } from "smol-toml";
import type { Expectations } from "./load";
import { expectedFor, filePathOf } from "./compare";
import type { TestResult } from "../results/schema";

export function ratchetPath(expectationsDir: string, suite: string): string {
  return join(expectationsDir, `${suite}.ratchet.toml`);
}

export function loadRatchet(path: string): Set<string> {
  if (!existsSync(path)) return new Set();
  const raw = parse(readFileSync(path, "utf8")) as { fail?: Record<string, string> };
  return new Set(Object.keys(raw.fail ?? {}));
}

// Failing test ids not already covered by hand-curated [skip]/[fail] globs.
export function ratchetCandidates(tests: TestResult[], exp: Expectations): string[] {
  const out: string[] = [];
  for (const t of tests) {
    if (t.status !== "fail" && t.status !== "error") continue;
    if (expectedFor(exp, filePathOf(t.id)) === "pass") out.push(t.id);
  }
  return out.sort();
}

export function writeRatchet(path: string, ids: string[], header: string): void {
  const lines = [header, "", "[fail]"];
  // smol-toml quotes are double-quotes; ids contain no double-quotes in test262.
  for (const id of [...ids].sort()) lines.push(`"${id}" = ""`);
  writeFileSync(path, lines.join("\n") + "\n", "utf8");
}
