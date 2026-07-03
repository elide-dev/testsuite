import { test, expect } from "bun:test";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

// The agent is installed into eshost by scripts/install-elide-host.sh
// (harness postinstall); exercise the installed copy so relative requires
// against eshost internals resolve.
const { createRequire } = await import("node:module");
const require = createRequire(import.meta.url);
const ElideAgent = require("../../node_modules/eshost/lib/agents/elide.js");

function makeAgent() {
  return new ElideAgent({ hostPath: "elide", shortName: "$262" });
}

test("agent launches elide with test262-mode and plain error format", () => {
  const agent = makeAgent();
  expect(agent.args).toEqual([
    "run",
    "--quiet",
    "--error-format=plain",
    "-X",
    "polyglot.js.test262-mode=true",
  ]);
});

test("normalizeResult strips unhandled-rejection diagnostics from stderr", () => {
  const agent = makeAgent();
  const r = agent.normalizeResult({
    stdout: "sync done\n",
    stderr: "Uncaught (in promise) TypeError: Invalid module specifier: ''\n",
  });
  expect(r.stderr).toBe("");
  expect(r.stdout).toBe("sync done\n");
});

test("normalizeResult keeps real errors on stderr", () => {
  const agent = makeAgent();
  const stderr = "TypeError: boom\n    at :program (t.js:1:7)";
  const r = agent.normalizeResult({ stdout: "", stderr });
  expect(r.stderr).toBe(stderr);
  const err = agent.parseError(r.stderr);
  expect(err).toEqual({ name: "TypeError", message: "boom", stack: [] });
});

test("normalizeResult still de-boxes legacy pretty errors on stdout", () => {
  const agent = makeAgent();
  const r = agent.normalizeResult({
    stdout: "╭─ Script Error ─╮\n│ SyntaxError: nope │\n╰─╯\nkept line",
    stderr: "",
  });
  expect(r.stderr).toContain("SyntaxError: nope");
  expect(r.stdout).toBe("kept line");
});

test("_copyFixtures copies transitively referenced fixtures with real content", () => {
  const src = mkdtempSync(join(tmpdir(), "elide-agent-src-"));
  const dst = mkdtempSync(join(tmpdir(), "elide-agent-dst-"));
  writeFileSync(join(src, "a_FIXTURE.js"), "import './sub/b_FIXTURE.js'; export var x = 1;");
  mkdirSync(join(src, "sub"), { recursive: true });
  writeFileSync(join(src, "sub", "b_FIXTURE.js"), "export var y = 2;");
  writeFileSync(join(src, "text_FIXTURE"), "plain text, no extension");
  writeFileSync(join(src, "main.js"), "import.defer('./a_FIXTURE.js'); import('./text_FIXTURE');");

  const agent = makeAgent();
  agent._elideTestFile = join(src, "main.js");
  agent._elideTestSource = readFileSync(join(src, "main.js"), "utf8");
  agent._copyFixtures(dst);

  expect(readFileSync(join(dst, "a_FIXTURE.js"), "utf8")).toContain("export var x = 1;");
  expect(readFileSync(join(dst, "sub", "b_FIXTURE.js"), "utf8")).toContain("export var y = 2;");
  expect(readFileSync(join(dst, "text_FIXTURE"), "utf8")).toBe("plain text, no extension");
});

test("_copyFixtures ignores specifiers that do not name real files", () => {
  const src = mkdtempSync(join(tmpdir(), "elide-agent-src-"));
  const dst = mkdtempSync(join(tmpdir(), "elide-agent-dst-"));
  writeFileSync(join(src, "main.js"), "import('./missing_FIXTURE.js');");
  const agent = makeAgent();
  agent._elideTestFile = join(src, "main.js");
  agent._elideTestSource = readFileSync(join(src, "main.js"), "utf8");
  agent._copyFixtures(dst);
  expect(existsSync(join(dst, "missing_FIXTURE.js"))).toBe(false);
});

test("createChildProcess marks the temp dir type:module only for module tests", async () => {
  const dir = mkdtempSync(join(tmpdir(), "elide-agent-tmp-"));
  const entry = join(dir, "t.js");
  writeFileSync(entry, "// entry");
  const agent = makeAgent();
  const spawned: string[][] = [];
  // Stub the eshost spawn layer; only the filesystem effects are under test.
  const consoleAgentProto = Object.getPrototypeOf(Object.getPrototypeOf(agent));
  const original = consoleAgentProto.createChildProcess;
  consoleAgentProto.createChildProcess = async (args: string[]) => {
    spawned.push(args);
    return null;
  };
  try {
    agent._elideModule = true;
    await agent.createChildProcess([entry]);
    expect(JSON.parse(readFileSync(join(dir, "package.json"), "utf8"))).toEqual({ type: "module" });
    // Module entry runs as a `.mjs` copy.
    expect(spawned[0][0]).toBe(join(dir, "t.mjs"));

    agent._elideModule = false;
    await agent.createChildProcess([entry]);
    expect(existsSync(join(dir, "package.json"))).toBe(false);
    expect(spawned[1][0]).toBe(entry);
  } finally {
    consoleAgentProto.createChildProcess = original;
  }
});

test("runtime pre-defines a global $DONE without naming Test262Error verbatim", () => {
  const runtime = readFileSync(join(import.meta.dir, "runtime.elide.js"), "utf8");
  expect(runtime).toContain("globalThis.$DONE");
  expect(runtime).toContain("Test262:AsyncTestComplete");
  // The contiguous string would trip eshost's isMissingTest262ErrorDefinition
  // rewrite, which corrupts module tests with a duplicate ESHostError decl.
  expect(runtime).not.toContain("Test262Error");
});

test("runtime wraps the native $262 exposed by test262-mode", () => {
  const runtime = readFileSync(
    join(import.meta.dir, "runtime.elide.js"),
    "utf8",
  );
  expect(runtime).toContain('globalThis["\\x24262"]');
  for (const hook of ["createRealm", "detachArrayBuffer", "evalScript", "gc"]) {
    expect(runtime).toContain(hook);
  }
  expect(runtime).toContain("delete globalThis.arguments;");
});
