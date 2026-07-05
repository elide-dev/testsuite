import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse } from "smol-toml";
import type { Expectations } from "./load";
import { expectedFor, expectationKeysOf } from "./compare";
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
  const out = new Set<string>();
  for (const t of tests) {
    if (t.status !== "fail" && t.status !== "error") continue;
    if (expectedFor(exp, expectationKeysOf(t)) === "pass") out.add(t.id);
  }
  return [...out].sort();
}

/**
 * Merge semantics for --ratchet: prior entries for tests NOT observed in this
 * run are retained (a scoped --include run must not clobber the full-suite
 * baseline); observed entries survive only if still failing (candidates).
 */
export function mergeRatchet(prior: Set<string>, observedIds: Set<string>, candidates: string[]): string[] {
  const retained = [...prior].filter((id) => !observedIds.has(id));
  return [...new Set([...retained, ...candidates])].sort();
}

function tomlBasicString(value: string): string {
  return JSON.stringify(value);
}

export function writeRatchet(path: string, ids: string[], header: string): void {
  const lines = [header, "", "[fail]"];
  for (const id of [...new Set(ids)].sort()) lines.push(`${tomlBasicString(id)} = ${tomlBasicString("")}`);
  writeFileSync(path, lines.join("\n") + "\n", "utf8");
}
