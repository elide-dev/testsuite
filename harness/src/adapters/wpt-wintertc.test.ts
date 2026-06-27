import { test, expect } from "bun:test";
import { filterIncludedPaths, parseWptLine, parseWptLines } from "./wpt-wintertc";

const fixture = await Bun.file(`${import.meta.dir}/../../fixtures/wpt-wintertc.ndjson`).text();

test("maps WPT bridge JSON lines to TestResult records", () => {
  const out = parseWptLines(fixture);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "url/urlsearchparams.any.js :: URLSearchParams constructor",
    status: "pass",
    durationMs: 12,
    meta: {
      suite: "wpt-wintertc",
      upstreamPath: "url/urlsearchparams.any.js",
      category: "url",
      runner: "wpt",
      subtest: "URLSearchParams constructor",
    },
  });
  expect(out[1]).toMatchObject({
    id: "encoding/textdecoder.any.js :: fatal flag",
    status: "fail",
    message: "assert_equals: expected true got false",
  });
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});

test("ignores blank WPT lines", () => {
  expect(parseWptLine("")).toBeNull();
});

test("filters manifest paths by include globs", () => {
  expect(
    filterIncludedPaths(
      ["url/urlsearchparams.any.js", "encoding/textdecoder.any.js", "streams/readable-streams/general.any.js"],
      ["encoding/**", "streams/**"],
    ),
  ).toEqual(["encoding/textdecoder.any.js", "streams/readable-streams/general.any.js"]);
});
