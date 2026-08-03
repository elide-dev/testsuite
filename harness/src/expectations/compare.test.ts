import { test, expect } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseExpectations } from "./load";
import { compare, passRate, scoredTotal } from "./compare";
import type { TestResult } from "../results/schema";

test("scoredTotal and passRate exclude skipped tests", () => {
  const counts = { pass: 90, fail: 5, error: 5, skip: 100, total: 200 };
  expect(scoredTotal(counts)).toBe(100); // skip excluded
  expect(passRate(counts)).toBeCloseTo(0.9, 5); // 90 / (90+5+5), not 90/200
});

test("passRate is 0 when nothing scored (everything skipped)", () => {
  expect(passRate({ pass: 0, fail: 0, error: 0, skip: 12, total: 12 })).toBe(0);
});

const toml = `
[skip]
"intl402/**" = "Intl unsupported"
[fail]
"language/expressions/tail/**" = "no PTC"
`;
const exp = parseExpectations(toml);

const mk = (id: string, status: TestResult["status"], meta?: TestResult["meta"]): TestResult => ({
  kind: "test",
  id,
  status,
  meta,
});

test("regression: expected pass, actual fail", () => {
  const c = compare([mk("language/foo.js default", "fail")], exp);
  expect(c.regressions.map((r) => r.id)).toEqual(["language/foo.js default"]);
  expect(c.counts.fail).toBe(1);
});

test("expected fail that fails is not a regression", () => {
  const c = compare([mk("language/expressions/tail/a.js default", "fail")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.fail).toBe(1);
});

test("new pass: expected fail, actual pass", () => {
  const c = compare([mk("language/expressions/tail/a.js default", "pass")], exp);
  expect(c.newPasses.map((r) => r.id)).toEqual(["language/expressions/tail/a.js default"]);
  expect(c.counts.pass).toBe(1);
});

test("skip glob overrides status to skip", () => {
  const c = compare([mk("intl402/x.js default", "fail")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.skip).toBe(1);
});

test("actual skip results are counted as skip and never regressions", () => {
  const c = compare([mk("language/foo.js default", "skip")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.skip).toBe(1);
  expect(c.counts.fail).toBe(0);
  expect(c.counts.pass).toBe(0);
});

test("malformed result ids do not crash expectation matching", () => {
  const malformed = { kind: "test" as const, status: "pass" as const } as TestResult;
  const c = compare([malformed], exp);
  expect(c.counts.pass).toBe(1);
});

test("most specific glob wins", () => {
  const exp2 = parseExpectations(`
[skip]
"built-ins/**" = "broad"
[fail]
"built-ins/Array/specific.js" = "narrow"
`);
  // narrow ([fail]) is the longer glob and must win over broad ([skip]).
  // A passing result then classifies as a new pass, NOT a skip.
  const c = compare([mk("built-ins/Array/specific.js default", "pass")], exp2);
  expect(c.newPasses).toHaveLength(1);
  expect(c.counts.skip).toBe(0);
});

test("WPT expectation globs match result ids without subtest suffixes", () => {
  const exp2 = parseExpectations(`
[fail]
"url/**" = "tracked"
`);
  const c = compare([mk("url/urlsearchparams.any.js :: URLSearchParams constructor", "fail")], exp2);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.fail).toBe(1);
});

test("CPython module-level fail expectations match upstreamPath metadata", () => {
  const exp2 = parseExpectations(`
[fail]
"test_re" = "module failure tracked"
`);
  const c = compare(
    [mk("test_re.ReTests.test_basic_re_sub", "fail", { upstreamPath: "test_re" })],
    exp2,
  );
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.fail).toBe(1);
});

test("CPython module-level skip expectations match upstreamPath metadata", () => {
  const exp2 = parseExpectations(`
[skip]
"test_re" = "module skipped"
`);
  const c = compare(
    [mk("test_re.ReTests.test_basic_re_sub", "fail", { upstreamPath: "test_re" })],
    exp2,
  );
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.skip).toBe(1);
});

test("wpt-wintertc baseline skips unreachable tests but keeps window.js files that pass headless", () => {
  const wpt = parseExpectations(
    readFileSync(join(import.meta.dir, "../../../expectations/wpt-wintertc.toml"), "utf8"),
  );
  const mkWpt = (path: string, status: TestResult["status"]): TestResult =>
    mk(`${path} :: t`, status, {
      suite: "wpt-wintertc",
      upstreamPath: path,
      runner: "wpt",
      subtest: "t",
    });
  const c = compare(
    [
      mkWpt("url/toascii.window.js", "fail"), // browser-only, explicitly listed -> skip
      mkWpt("fetch/api/cors/cors-basic.https.any.js", "fail"), // no TLS -> skip
      mkWpt("fetch/api/redirect/redirect-upload.h2.any.js", "fail"), // no HTTP/2 -> skip
      mkWpt("fetch/fetch-later/basic.any.js", "fail"), // browser-only -> skip
      // A .window.js file that passes headless is deliberately NOT skipped, so its pass counts.
      mkWpt("encoding/single-byte-decoder.window.js", "pass"),
      mkWpt("url/urlsearchparams-constructor.any.js", "pass"),
      // encodeInto is deliberately NOT skipped: its valid-destination branch passes, so it stays scored.
      mkWpt("encoding/encodeInto.any.js", "fail"),
    ],
    wpt,
  );
  expect(c.counts.skip).toBe(4); // listed .window.js + .https + .h2 + fetch-later
  expect(c.counts.pass).toBe(2); // the headless-passing .window.js keeper and the url test are scored
  expect(c.counts.fail).toBe(1); // encodeInto stays a scored failure, not skipped
  expect(scoredTotal(c.counts)).toBe(3); // only the four unreachable tests leave the denominator
});
