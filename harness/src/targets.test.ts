import { expect, test } from "bun:test";
import { resolve } from "node:path";
const root = resolve(import.meta.dir, "../..");
test("Bali target dispatches without Docker and validates suite selection", async () => {
  const run = (args: string[]) =>
    Bun.spawn([process.execPath, resolve(root, "bin/run.ts"), ...args], {
      cwd: root,
      stdout: "pipe",
      stderr: "pipe",
    });
  const help = run(["--target", "bali", "--suite", "jdk-jtreg", "--help"]);
  expect(await new Response(help.stdout).text()).toContain("jdk-jtreg");
  expect(await help.exited).toBe(0);
  const invalid = run(["--target", "bali", "--suite", "test262"]);
  expect(await new Response(invalid.stderr).text()).toContain("Bali supports --suite jdk-jtreg");
  expect(await invalid.exited).toBe(2);
});
