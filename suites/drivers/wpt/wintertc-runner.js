#!/usr/bin/env node
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const TEST_STATUS = {
  PASS: 0,
  FAIL: 1,
  TIMEOUT: 2,
  NOTRUN: 3,
  PRECONDITION_FAILED: 4,
};

function bridgeStatus(status) {
  switch (status) {
    case TEST_STATUS.PASS:
      return "PASS";
    case TEST_STATUS.FAIL:
      return "FAIL";
    case TEST_STATUS.NOTRUN:
    case TEST_STATUS.PRECONDITION_FAILED:
      return "SKIP";
    case TEST_STATUS.TIMEOUT:
    default:
      return "ERROR";
  }
}

function arg(name, fallback = "") {
  const i = process.argv.indexOf(name);
  const value = i >= 0 ? process.argv[i + 1] : undefined;
  return value && !value.startsWith("--") ? value : fallback;
}

const suite = arg("--suite");
const test = arg("--test");
const elide = arg("--elide", "/opt/elide/bin/elide");
if (!suite || !test) {
  console.error("usage: wintertc-runner.js --suite <wpt> --test <path> --category <id> --elide <path>");
  process.exit(2);
}
const category = arg("--category", test.split("/")[0]);

const harness = readFileSync(join(suite, "resources/testharness.js"), "utf8");
const source = readFileSync(join(suite, test), "utf8");
const out = join(mkdtempSync(join(tmpdir(), "wpt-elide-")), "case.js");

writeFileSync(out, `
globalThis.self ??= globalThis;
${harness}
const TEST_STATUS = ${JSON.stringify(TEST_STATUS)};
${bridgeStatus.toString()}
setup({ explicit_done: true });
add_completion_callback((tests) => {
  for (const t of tests) {
    const rec = {
      path: ${JSON.stringify(test)},
      subtest: t.name,
      status: bridgeStatus(t.status),
      message: t.message || undefined,
      category: ${JSON.stringify(category)}
    };
    console.log(JSON.stringify(rec));
  }
});
${source}
done();
`);

const child = spawnSync(elide, ["run", "--quiet", out], { encoding: "utf8" });
if (child.stdout) process.stdout.write(child.stdout);
if (child.stderr) process.stderr.write(child.stderr);
process.exit(child.status ?? 1);
