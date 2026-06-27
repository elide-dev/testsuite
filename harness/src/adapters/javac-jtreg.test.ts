import { test, expect } from "bun:test";
import { parseJtregSummary } from "./javac-jtreg";

const summary = await Bun.file(`${import.meta.dir}/../../fixtures/jtreg/JTreport/text/summary.txt`).text();

test("maps jtreg summary lines to TestResult records", () => {
  const out = parseJtregSummary(summary);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "tools/javac/diags/ExamplePass.java",
    status: "pass",
    meta: {
      suite: "javac-jtreg",
      upstreamPath: "tools/javac/diags/ExamplePass.java",
      category: "tools/javac/diags",
      runner: "jtreg",
      subtest: "tools/javac/diags/ExamplePass.java",
    },
  });
  expect(out[1].status).toBe("fail");
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});
