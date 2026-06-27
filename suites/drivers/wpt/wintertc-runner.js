#!/usr/bin/env node
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

function arg(name, fallback = "") {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

const suite = arg("--suite");
const test = arg("--test");
const category = arg("--category", test.split("/")[0]);
const elide = arg("--elide", "/opt/elide/bin/elide");
if (!suite || !test) {
  console.error("usage: wintertc-runner.js --suite <wpt> --test <path> --category <id> --elide <path>");
  process.exit(2);
}

const harness = readFileSync(join(suite, "resources/testharness.js"), "utf8");
const source = readFileSync(join(suite, test), "utf8");
const out = join(mkdtempSync(join(tmpdir(), "wpt-elide-")), "case.js");

writeFileSync(out, `
${harness}
setup({ explicit_done: true });
add_completion_callback((tests) => {
  for (const t of tests) {
    const rec = {
      path: ${JSON.stringify(test)},
      subtest: t.name,
      status: t.status === 0 ? "PASS" : "FAIL",
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
