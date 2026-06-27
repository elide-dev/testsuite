import { test, expect } from "bun:test";
import { mkdirSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { diffRuns, findPreviousRunDir, renderDiffMd, type RunResults } from "./diff";
import { compare } from "../expectations/compare";
import { writeSummaryJson } from "../report/index";
import type { RunMeta, TestResult } from "../results/schema";

const a: RunResults = {
  ref: { semver: "1.0.0", digest: "aaa" },
  statuses: new Map([
    ["x default", "pass"],
    ["y default", "fail"],
    ["z default", "fail"],
    ["gone default", "pass"],
  ]),
};
const b: RunResults = {
  ref: { semver: "1.1.0", digest: "bbb" },
  statuses: new Map([
    ["x default", "fail"], // regressed
    ["y default", "pass"], // fixed
    ["z default", "error"], // still failing
    ["new default", "pass"], // added
  ]),
};

test("buckets fixed/regressed/added/removed/stillFailing", () => {
  const d = diffRuns(a, b);
  expect(d.regressed).toEqual(["x default"]);
  expect(d.fixed).toEqual(["y default"]);
  expect(d.stillFailing).toBe(1); // z
  expect(d.added).toBe(1); // new
  expect(d.removed).toBe(1); // gone
});

test("renders markdown with the version refs and counts", () => {
  const md = renderDiffMd(diffRuns(a, b));
  expect(md).toContain("1.0.0");
  expect(md).toContain("1.1.0");
  expect(md).toContain("Regressed (1)");
  expect(md).toContain("Fixed (1)");
});

test("findPreviousRunDir uses workload-scoped report directories", async () => {
  const root = mkdtempSync(join(tmpdir(), "prev-run-"));
  const tests: TestResult[] = [{ kind: "test", id: "case default", status: "pass" }];
  const previousMeta: RunMeta = {
    workload: "test262",
    kind: "test",
    elide: { semver: "1.0.0", digest: "aaaabbbbccccdddd" },
    startedAt: "2026-06-26T00:00:00Z",
    finishedAt: "2026-06-26T00:01:00Z",
  };
  const currentMeta: RunMeta = {
    ...previousMeta,
    elide: { semver: "1.1.0", digest: "ddddccccbbbbaaaa" },
    finishedAt: "2026-06-26T00:02:00Z",
  };
  for (const meta of [previousMeta, currentMeta]) {
    const digest = meta.elide.digest.slice(0, 12);
    const dir = join(root, meta.elide.semver, digest, meta.workload);
    mkdirSync(dir, { recursive: true });
    await writeSummaryJson(dir, meta, compare(tests, { entries: [], ratchet: new Set() }));
  }

  expect(await findPreviousRunDir(root, "test262", currentMeta.elide)).toBe(
    join(root, "1.0.0", "aaaabbbbcccc", "test262"),
  );
});
