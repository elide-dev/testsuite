import { test, expect } from "bun:test";
import { readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
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

test("reaps a child that outlives the timed-out process instead of waiting on its pipes", async () => {
  const pidFile = join(tmpdir(), `harness-process-test-${process.pid}.pid`);
  rmSync(pidFile, { force: true });
  const script = `
    const { spawn } = require("node:child_process");
    const { writeFileSync } = require("node:fs");
    const child = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "inherit" });
    writeFileSync(${JSON.stringify(pidFile)}, String(child.pid));
    setInterval(() => {}, 1000);
  `;

  const r = await runProcess([process.execPath, "-e", script], { cwd: process.cwd(), timeoutMs: 300 });

  expect(r.timedOut).toBe(true);
  const childPid = Number(readFileSync(pidFile, "utf8"));
  rmSync(pidFile, { force: true });
  expect(() => process.kill(childPid, 0)).toThrow();
});

test("returns when a child escapes the process group and holds the pipes open", async () => {
  const pidFile = join(tmpdir(), `harness-process-escapee-${process.pid}.pid`);
  rmSync(pidFile, { force: true });
  const script = `
    const { spawn } = require("node:child_process");
    const { writeFileSync } = require("node:fs");
    const child = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], {
      stdio: "inherit",
      detached: true,
    });
    writeFileSync(${JSON.stringify(pidFile)}, String(child.pid));
    setInterval(() => {}, 1000);
  `;

  const r = await runProcess([process.execPath, "-e", script], { cwd: process.cwd(), timeoutMs: 300 });

  expect(r.timedOut).toBe(true);
  const escapee = Number(readFileSync(pidFile, "utf8"));
  rmSync(pidFile, { force: true });
  process.kill(escapee, "SIGKILL");
}, 15_000);

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
