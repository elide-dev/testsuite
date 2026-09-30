import { readFileSync, existsSync } from "node:fs";
import { parse } from "smol-toml";

export type ExpectedStatus = "pass" | "fail" | "skip" | "exclude";

export interface ExpectationEntry {
  glob: string;
  expected: ExpectedStatus;
  reason: string;
}

/** A runtime skip whose message matches `pattern` is out of scope and leaves the denominator. */
export interface ExcludedSkip {
  pattern: RegExp;
  reason: string;
}

export interface Expectations {
  entries: ExpectationEntry[];
  ratchet: Set<string>;
  // `[exclude-skipped]`: message patterns for skips the suite itself reports as not applicable to
  // this runtime (e.g. CPython implementation details, other platforms).
  excludedSkips?: ExcludedSkip[];
  // `[exclude-ids]`: patterns over the full test id (subtest included) for tests out of scope in any
  // outcome, where a file glob would be too coarse (e.g. DOM-only subtests of a mixed WPT file).
  excludedIds?: ExcludedSkip[];
}

export function parseExpectations(toml: string): Expectations {
  const raw = parse(toml) as {
    skip?: Record<string, string>;
    fail?: Record<string, string>;
    exclude?: Record<string, string>;
    "exclude-skipped"?: Record<string, string>;
    "exclude-ids"?: Record<string, string>;
  };
  const entries: ExpectationEntry[] = [];
  for (const [glob, reason] of Object.entries(raw.skip ?? {})) {
    entries.push({ glob, expected: "skip", reason });
  }
  for (const [glob, reason] of Object.entries(raw.fail ?? {})) {
    entries.push({ glob, expected: "fail", reason });
  }
  for (const [glob, reason] of Object.entries(raw.exclude ?? {})) {
    entries.push({ glob, expected: "exclude", reason });
  }
  const excludedSkips = Object.entries(raw["exclude-skipped"] ?? {}).map(([pattern, reason]) => ({
    pattern: new RegExp(pattern, "i"),
    reason,
  }));
  const excludedIds = Object.entries(raw["exclude-ids"] ?? {}).map(([pattern, reason]) => ({
    pattern: new RegExp(pattern),
    reason,
  }));
  return { entries, ratchet: new Set<string>(), excludedSkips, excludedIds };
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

/** Globs the adapter should not run: suppressed (`[skip]`) and out-of-scope (`[exclude]`) tests. */
export function skipGlobs(exp: Expectations): string[] {
  return exp.entries.filter((e) => e.expected === "skip" || e.expected === "exclude").map((e) => e.glob);
}
