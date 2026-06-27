import { test, expect } from "bun:test";
import { parseCpythonLines } from "./cpython-core";

const fixture = await Bun.file(`${import.meta.dir}/../../fixtures/cpython-core.ndjson`).text();

test("maps CPython driver JSON lines to TestResult records", () => {
  const out = parseCpythonLines(fixture);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "test_re.ReTests.test_basic_re_sub",
    status: "pass",
    meta: {
      suite: "cpython-core",
      upstreamPath: "test_re",
      category: "test_re",
      runner: "regrtest",
      subtest: "test_re.ReTests.test_basic_re_sub",
    },
  });
  expect(out[1]).toMatchObject({
    id: "test_json.TestDecode.test_failures",
    status: "fail",
    message: "AssertionError: bad decode",
  });
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});
