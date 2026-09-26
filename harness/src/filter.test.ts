import { expect, test } from "bun:test";
import { applyFilter, compileFilter, parseFilterSpecs, patternsForSuite, selectSuites, suitesNamedByFilters } from "./filter";

const SUITES = ["test262", "cpython-core", "wpt-wintertc", "node-api", "javac-jtreg"];

test("parses suite-scoped and unscoped specs", () => {
  expect(parseFilterSpecs(["cpython-core:*time*", "*Date*"], SUITES)).toEqual([
    { suite: "cpython-core", pattern: "*time*" },
    { pattern: "*Date*" },
  ]);
});

test("a colon that is not a known suite prefix stays in the pattern", () => {
  expect(parseFilterSpecs(["encodeInto.any.js :: *BigInt*"], SUITES)).toEqual([{ pattern: "encodeInto.any.js :: *BigInt*" }]);
  expect(parseFilterSpecs(["tools/javac/T1.java::runner"], SUITES)).toEqual([{ pattern: "tools/javac/T1.java::runner" }]);
});

test("rejects an empty pattern after a suite prefix", () => {
  expect(() => parseFilterSpecs(["test262:"], SUITES)).toThrow("missing pattern");
  expect(parseFilterSpecs(["", "  "], SUITES)).toEqual([]);
});

test("patternsForSuite merges unscoped with the suite's own patterns", () => {
  const filters = parseFilterSpecs(["cpython-core:*time*", "node-api:*buffer*", "*Date*"], SUITES);
  expect(patternsForSuite(filters, "cpython-core")).toEqual(["*time*", "*Date*"]);
  expect(patternsForSuite(filters, "test262")).toEqual(["*Date*"]);
  expect(suitesNamedByFilters(filters)).toEqual(["cpython-core", "node-api"]);
});

test("compileFilter matches any part of the id, case-insensitively", () => {
  const m = compileFilter(["*time*"]);
  expect(m("test/built-ins/Date/prototype/getTime/name.js")).toBe(true);
  expect(m("test_datetime")).toBe(true);
  expect(m("test/parallel/test-timers.js")).toBe(true);
  expect(m("test/parallel/test-path.js")).toBe(false);
});

test("compileFilter still honours anchored path globs and alternation", () => {
  const m = compileFilter(["test/built-ins/Date/**", "{test_json,test_re}"]);
  expect(m("test/built-ins/Date/now/name.js")).toBe(true);
  expect(m("test/language/Date-like.js")).toBe(false);
  expect(m("test_json")).toBe(true);
  expect(m("test_re")).toBe(true);
  expect(m("test_ast")).toBe(false);
});

test("empty filter matches everything and applyFilter is a no-op", () => {
  expect(compileFilter([])("anything")).toBe(true);
  expect(compileFilter(undefined)("anything")).toBe(true);
  const items = ["a", "b"];
  expect(applyFilter(items, [], (x) => x)).toBe(items);
});

test("applyFilter narrows and reports counts", () => {
  let seen: [number, number] | undefined;
  const out = applyFilter(["test_time", "test_json", "test_datetime"], ["*time*"], (x) => x, (k, t) => (seen = [k, t]));
  expect(out).toEqual(["test_time", "test_datetime"]);
  expect(seen).toEqual([2, 3]);
});

test("selectSuites: prefixed filters pick suites unless --suite/--all-suites is given", () => {
  const filters = parseFilterSpecs(["cpython-core:*time*", "node-api:*buffer*"], SUITES);
  expect(selectSuites([], undefined, filters, ["test262"])).toEqual(["cpython-core", "node-api"]);
  expect(selectSuites([], undefined, [], ["test262"])).toEqual(["test262"]);
  expect(selectSuites([], undefined, parseFilterSpecs(["*Date*"], SUITES), ["test262"])).toEqual(["test262"]);
  expect(selectSuites(["cpython-core", "node-api", "test262"], undefined, filters, ["test262"])).toEqual(["cpython-core", "node-api", "test262"]);
  expect(selectSuites([], SUITES, filters, ["test262"])).toEqual(SUITES);
  expect(() => selectSuites(["test262"], undefined, filters, ["test262"])).toThrow("names suite 'cpython-core'");
});
