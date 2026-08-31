import { test, expect } from "bun:test";
import { runProcess } from "./process";

test("captures stdout, stderr, exit code, and duration", async () => {
  const r = await runProcess(
    [process.execPath, "-e", "console.log('out'); console.error('err')"],
    { cwd: process.cwd(), timeoutMs: 5000 },
  );
  expect(r.exitCode).toBe(0);
  expect(r.stdout.trim()).toBe("out");
  expect(r.stderr.trim()).toBe("err");
  expect(r.durationMs).toBeGreaterThanOrEqual(0);
  expect(r.timedOut).toBe(false);
});

test("marks timeout and kills process", async () => {
  const r = await runProcess(
    [process.execPath, "-e", "setTimeout(() => {}, 10000)"],
    { cwd: process.cwd(), timeoutMs: 20 },
  );
  expect(r.timedOut).toBe(true);
  expect(r.exitCode).not.toBe(0);
});

test("streams stdout and stderr lines while retaining captured output", async () => {
  const stdoutLines: string[] = [];
  const stderrLines: string[] = [];
  const r = await runProcess(
    [process.execPath, "-e", "console.log('out1'); console.error('err1'); console.log('out2')"],
    {
      cwd: process.cwd(),
      timeoutMs: 5000,
      onStdoutLine: (line) => stdoutLines.push(line),
      onStderrLine: (line) => stderrLines.push(line),
    },
  );

  expect(r.exitCode).toBe(0);
  expect(stdoutLines).toEqual(["out1", "out2"]);
  expect(stderrLines).toEqual(["err1"]);
  expect(r.stdout).toContain("out1");
  expect(r.stderr).toContain("err1");
});

test("does not wedge when a leaked grandchild holds the output pipes open", async () => {
  // Mirrors test/parallel/test-vm-sigint.js: the child spawns a helper that
  // inherits the stdout/stderr pipes and spins forever. Killing only the direct
  // child leaves the pipe write-ends open, so the readers never see EOF.
  const script = [
    'const { spawn } = require("child_process");',
    'spawn(process.execPath, ["-e", "while(true){}"], { stdio: [null, "inherit", "inherit"] });',
    "setTimeout(() => {}, 100000);",
  ].join("\n");

  const started = performance.now();
  const r = await runProcess([process.execPath, "-e", script], {
    cwd: process.cwd(),
    timeoutMs: 200,
  });
  const elapsed = performance.now() - started;

  expect(r.timedOut).toBe(true);
  expect(elapsed).toBeLessThan(10_000);
});

test("kills the whole process group on timeout", async () => {
  const marker = `spin-marker-${process.pid}-${Date.now()}`;
  const script = [
    'const { spawn } = require("child_process");',
    `spawn(process.execPath, ["-e", "/* ${marker} */ while(true){}"], { stdio: [null, "inherit", "inherit"] });`,
    "setTimeout(() => {}, 100000);",
  ].join("\n");

  const r = await runProcess([process.execPath, "-e", script], {
    cwd: process.cwd(),
    timeoutMs: 200,
  });
  expect(r.timedOut).toBe(true);

  // Give the kernel a moment to reap the group, then assert no spinner survived.
  await Bun.sleep(500);
  const survivors = await runProcess(["pgrep", "-f", marker], { cwd: process.cwd(), timeoutMs: 5000 });
  expect(survivors.stdout.trim()).toBe("");
});
