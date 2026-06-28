import picomatch from "picomatch";
import type { Expectations, ExpectationEntry, ExpectedStatus } from "./load";
import type { TestResult } from "../results/schema";

export interface Comparison {
  regressions: TestResult[]; // expected pass, actual fail/error
  newPasses: TestResult[]; // expected fail, actual pass
  observed: TestResult[]; // non-skipped tests seen during the run
  counts: { pass: number; fail: number; skip: number; error: number; total: number };
}

// Normalize result ids to the path segment used by expectation globs.
export function filePathOf(id: string): string {
  id = String(id ?? "");
  const wptSep = id.indexOf(" :: ");
  if (wptSep >= 0) return id.slice(0, wptSep);
  return id.replace(/ (default|strict mode)$/, "");
}

export function expectationKeysOf(result: Pick<TestResult, "id" | "meta">): string[] {
  const keys = [filePathOf(result.id)].filter(Boolean);
  const upstreamPath = String(result.meta?.upstreamPath ?? "").trim();
  if (upstreamPath && !keys.includes(upstreamPath)) keys.push(upstreamPath);
  return keys;
}

interface CompiledEntry extends ExpectationEntry {
  isMatch: (p: string) => boolean;
}

function compile(exp: Expectations): CompiledEntry[] {
  return exp.entries
    .map((e) => ({ ...e, isMatch: picomatch(e.glob) }))
    // most specific (longest glob string) first
    .sort((a, b) => b.glob.length - a.glob.length);
}

function expectedForEntries(entries: CompiledEntry[], keys: string[]): ExpectedStatus {
  for (const e of entries) {
    if (keys.some((key) => e.isMatch(key))) return e.expected;
  }
  return "pass";
}

export function expectedFor(exp: Expectations, filePathOrKeys: string | string[]): ExpectedStatus {
  const keys = Array.isArray(filePathOrKeys) ? filePathOrKeys : [filePathOrKeys];
  return expectedForEntries(compile(exp), keys);
}

export function compare(results: TestResult[], exp: Expectations): Comparison {
  const entries = compile(exp);
  const c: Comparison = {
    regressions: [],
    newPasses: [],
    observed: [],
    counts: { pass: 0, fail: 0, skip: 0, error: 0, total: 0 },
  };
  for (const r of results) {
    c.counts.total++;
    if (r.status === "skip") {
      c.counts.skip++;
      continue;
    }
    const globExpected = expectedForEntries(entries, expectationKeysOf(r));
    if (globExpected === "skip") {
      c.counts.skip++;
      continue;
    }
    c.observed.push(r);
    const expected: ExpectedStatus =
      globExpected === "fail" || exp.ratchet.has(r.id) ? "fail" : "pass";
    if (r.status === "pass") {
      c.counts.pass++;
      if (expected === "fail") c.newPasses.push(r);
    } else {
      // fail or error
      if (r.status === "error") c.counts.error++;
      else c.counts.fail++;
      if (expected !== "fail") c.regressions.push(r);
    }
  }
  return c;
}
