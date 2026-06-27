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
