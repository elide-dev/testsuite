import { test, expect } from "bun:test";
import { parseExpectations } from "./load";
import { compare } from "./compare";
import type { TestResult } from "../results/schema";

const toml = `
[skip]
"intl402/**" = "Intl unsupported"
[fail]
"language/expressions/tail/**" = "no PTC"
`;
const exp = parseExpectations(toml);

const mk = (id: string, status: TestResult["status"]): TestResult => ({
  kind: "test",
  id,
  status,
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

test("most specific glob wins", () => {
  const exp2 = parseExpectations(`
[fail]
"built-ins/**" = "broad"
"built-ins/Array/specific.js" = "narrow"
`);
  // narrow entry is the longer glob -> still a [fail]; passing => new pass
  const c = compare([mk("built-ins/Array/specific.js default", "pass")], exp2);
  expect(c.newPasses).toHaveLength(1);
});
