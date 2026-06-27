import { test, expect } from "bun:test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeRatchet, loadRatchet, ratchetCandidates } from "./ratchet";
import { parseExpectations } from "./load";
import { compare } from "./compare";
import type { TestResult } from "../results/schema";

const mk = (id: string, status: TestResult["status"], meta?: TestResult["meta"]): TestResult => ({
  kind: "test",
  id,
  status,
  meta,
});

test("writeRatchet then loadRatchet round-trips exact ids", () => {
  const dir = mkdtempSync(join(tmpdir(), "ratchet-"));
  const p = join(dir, "test262.ratchet.toml");
  writeRatchet(p, ["test/a.js default", "test/b.js strict mode"], "# header");
  const set = loadRatchet(p);
  expect(set.has("test/a.js default")).toBe(true);
  expect(set.has("test/b.js strict mode")).toBe(true);
});

test("writeRatchet handles WPT-style ids with quotes and backslashes", () => {
  const dir = mkdtempSync(join(tmpdir(), "ratchet-"));
  const p = join(dir, "wpt.ratchet.toml");
  const id = 'url/a.any.js :: name "with" slash \\\\';
  writeRatchet(p, [id], "# header");
  const set = loadRatchet(p);
  expect(set.has(id)).toBe(true);
});

test("ratchetCandidates = failing ids not covered by skip/[fail] globs", () => {
  const exp = parseExpectations(`
[skip]
"test/skipme/**" = "x"
[fail]
"test/known/**" = "y"
`);
  const tests = [
    mk("test/new/a.js default", "fail"), // candidate
    mk("test/known/b.js default", "fail"), // covered by [fail]
    mk("test/skipme/c.js default", "fail"), // covered by skip
    mk("test/ok/d.js default", "pass"), // passing
  ];
  expect(ratchetCandidates(tests, exp)).toEqual(["test/new/a.js default"]);
});

test("ratchetCandidates respects CPython module-level fail expectations via upstreamPath", () => {
  const exp = parseExpectations(`
[fail]
"test_re" = "tracked module"
`);
  expect(
    ratchetCandidates([mk("test_re.ReTests.test_basic_re_sub", "fail", { upstreamPath: "test_re" })], exp),
  ).toEqual([]);
});

test("a ratcheted failing id is expected (not a regression)", () => {
  const exp = parseExpectations("");
  exp.ratchet.add("test/new/a.js default");
  const c = compare([mk("test/new/a.js default", "fail")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.fail).toBe(1);
});

test("a ratcheted id that now passes surfaces as a new pass", () => {
  const exp = parseExpectations("");
  exp.ratchet.add("test/new/a.js default");
  const c = compare([mk("test/new/a.js default", "pass")], exp);
  expect(c.newPasses.map((r) => r.id)).toEqual(["test/new/a.js default"]);
});
