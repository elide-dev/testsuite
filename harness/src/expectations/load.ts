import { readFileSync, existsSync } from "node:fs";
import { parse } from "smol-toml";

export type ExpectedStatus = "pass" | "fail" | "skip";

export interface ExpectationEntry {
  glob: string;
  expected: ExpectedStatus;
  reason: string;
}

export interface Expectations {
  entries: ExpectationEntry[];
  ratchet: Set<string>;
}

export function parseExpectations(toml: string): Expectations {
  const raw = parse(toml) as {
    skip?: Record<string, string>;
    fail?: Record<string, string>;
  };
  const entries: ExpectationEntry[] = [];
  for (const [glob, reason] of Object.entries(raw.skip ?? {})) {
    entries.push({ glob, expected: "skip", reason });
  }
  for (const [glob, reason] of Object.entries(raw.fail ?? {})) {
    entries.push({ glob, expected: "fail", reason });
  }
  return { entries, ratchet: new Set<string>() };
}

export function loadExpectations(path: string): Expectations {
  const exp = parseExpectations(readFileSync(path, "utf8"));
  const ratchetFile = path.replace(/\.toml$/, ".ratchet.toml");
  if (existsSync(ratchetFile)) {
    const raw = parse(readFileSync(ratchetFile, "utf8")) as { fail?: Record<string, string> };
    for (const id of Object.keys(raw.fail ?? {})) exp.ratchet.add(id);
  }
  return exp;
}

export function skipGlobs(exp: Expectations): string[] {
  return exp.entries.filter((e) => e.expected === "skip").map((e) => e.glob);
}
