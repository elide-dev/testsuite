import picomatch from "picomatch";
import type { Expectations, ExpectationEntry, ExpectedStatus } from "./load";
import type { TestResult } from "../results/schema";

export interface Comparison {
  regressions: TestResult[]; // expected pass, actual fail/error
  newPasses: TestResult[]; // expected fail, actual pass
  counts: { pass: number; fail: number; skip: number; error: number; total: number };
}

// Normalize result ids to the path segment used by expectation globs.
export function filePathOf(id: string): string {
  const wptSep = id.indexOf(" :: ");
  if (wptSep >= 0) return id.slice(0, wptSep);
  return id.replace(/ (default|strict mode)$/, "");
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

function expectedForEntries(entries: CompiledEntry[], filePath: string): ExpectedStatus {
  for (const e of entries) if (e.isMatch(filePath)) return e.expected;
  return "pass";
}

export function expectedFor(exp: Expectations, filePath: string): ExpectedStatus {
  return expectedForEntries(compile(exp), filePath);
}

export function compare(results: TestResult[], exp: Expectations): Comparison {
  const entries = compile(exp);
  const c: Comparison = {
    regressions: [],
    newPasses: [],
    counts: { pass: 0, fail: 0, skip: 0, error: 0, total: 0 },
  };
  for (const r of results) {
    c.counts.total++;
    if (r.status === "skip") {
      c.counts.skip++;
      continue;
    }
    const globExpected = expectedForEntries(entries, filePathOf(r.id));
    if (globExpected === "skip") {
      c.counts.skip++;
      continue;
    }
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
