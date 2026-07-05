import { test, expect } from "bun:test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeRatchet, loadRatchet, ratchetCandidates, mergeRatchet } from "./ratchet";
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

test("writeRatchet dedupes repeated ids before writing TOML", () => {
  const dir = mkdtempSync(join(tmpdir(), "ratchet-"));
  const p = join(dir, "cpython-core.ratchet.toml");
  const id = "test_json.test_tool.TestTool.test_ensure_ascii_default";
  writeRatchet(p, [id, id], "# header");
  expect(loadRatchet(p)).toEqual(new Set([id]));
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

test("ratchetCandidates dedupes repeated failing ids", () => {
  const exp = parseExpectations("");
  expect(ratchetCandidates([mk("test_json.duplicate", "error"), mk("test_json.duplicate", "fail")], exp)).toEqual([
    "test_json.duplicate",
  ]);
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

test("mergeRatchet retains unobserved prior entries (scoped --include run)", () => {
  const prior = new Set(["test/full/a.js default", "test/full/b.js default", "test/slice/c.js default"]);
  const observed = new Set(["test/slice/c.js default", "test/slice/d.js default"]);
  const candidates = ["test/slice/d.js default"]; // c now passes, d fails
  expect(mergeRatchet(prior, observed, candidates)).toEqual([
    "test/full/a.js default", // unobserved: retained
    "test/full/b.js default", // unobserved: retained
    "test/slice/d.js default", // observed still failing: kept
  ]); // test/slice/c.js: observed passing -> pruned
});

test("mergeRatchet on a full run reduces to the candidates", () => {
  const prior = new Set(["test/a.js default"]);
  const observed = new Set(["test/a.js default", "test/b.js default"]);
  expect(mergeRatchet(prior, observed, ["test/b.js default"])).toEqual(["test/b.js default"]);
});
