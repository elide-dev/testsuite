import { readFileSync } from "node:fs";
import { parse } from "smol-toml";

export type ExpectedStatus = "pass" | "fail" | "skip";

export interface ExpectationEntry {
  glob: string;
  expected: ExpectedStatus;
  reason: string;
}

export interface Expectations {
  entries: ExpectationEntry[];
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
  return { entries };
}

export function loadExpectations(path: string): Expectations {
  return parseExpectations(readFileSync(path, "utf8"));
}

export function skipGlobs(exp: Expectations): string[] {
  return exp.entries.filter((e) => e.expected === "skip").map((e) => e.glob);
}
