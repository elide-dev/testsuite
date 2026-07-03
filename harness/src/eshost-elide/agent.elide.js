"use strict";
const fs = require("fs");
const path = require("path");
const runtimePath = require("../runtime-path");
const ConsoleAgent = require("../ConsoleAgent");

// Box-drawing chars Elide uses to frame errors on stdout (legacy fallback;
// the agent passes --error-format=plain so errors normally arrive on stderr).
const BOX = /[─-╿]/;
// "SyntaxError: ...", "ReferenceError: ...", "Error: ..." after de-boxing.
const ERR = /^([A-Za-z][A-Za-z0-9]*Error)(?::\s*([\s\S]*?))?$/m;
// Relative specifiers naming test262 fixture files (any extension, incl. none).
const FIXTURE = /['"](\.{1,2}\/[^'"\n]*_FIXTURE[^'"\n]*)['"]/g;

class ElideAgent extends ConsoleAgent {
  constructor(options) {
    super(options);
    // hostPath is the elide binary; produce:
    //   elide run --quiet --error-format=plain -X polyglot.js.test262-mode=true <file>
    // test262-mode exposes graal-js's native $262 (createRealm,
    // detachArrayBuffer, evalScript, gc) to the runtime prologue.
    this.args.unshift(
      "run",
      "--quiet",
      "--error-format=plain",
      "-X",
      "polyglot.js.test262-mode=true",
    );
  }

  // eshost's ConsoleAgent always writes the temp file with a `.js` extension,
  // even for module-flagged tests. Elide selects ESM vs. classic script purely
  // by extension, so a module written as `.js` fails to parse (top-level
  // export/import/await). Detect module-ness here and, at spawn time,
  // materialize a `.mjs` copy that Elide runs as an ES module. We copy rather
  // than rename so relative/self imports that reference the original `.js`
  // name still resolve.
  //
  // Also remember the original test file: eshost's fixture-dependency scanner
  // caches sources by basename (collides across directories) and misses
  // `import.defer(...)` / `import.source(...)` / extensionless specifiers, so
  // createChildProcess re-copies the real fixture files before spawning.
  async evalScript(code, options = {}) {
    let isModule = !!options.module;
    this._elideTestFile = null;
    if (typeof code === "object" && code && code.contents) {
      const flags = (code.attrs && code.attrs.flags) || {};
      isModule = isModule || !!flags.module;
      if (code.file) {
        this._elideTestFile = path.resolve(String(code.file));
        this._elideTestSource = String(code.contents);
      }
    }
    this._elideModule = isModule;
    return super.evalScript(code, options);
  }

  // Copy every `*_FIXTURE*` file the test (transitively) references from its
  // original suite directory into the temp directory, preserving relative
  // layout. This runs after eshost's own dependency writes, so correct
  // fixture content always wins over eshost's basename-keyed source cache.
  _copyFixtures(tempDir) {
    const srcDir = path.dirname(this._elideTestFile);
    const queue = [[this._elideTestSource, srcDir, tempDir]];
    const seen = new Set();
    while (queue.length) {
      const [source, fromDir, toDir] = queue.shift();
      for (const m of source.matchAll(FIXTURE)) {
        const spec = m[1];
        const from = path.resolve(fromDir, spec);
        if (seen.has(from)) continue;
        seen.add(from);
        let contents;
        try {
          contents = fs.readFileSync(from, "utf8");
        } catch {
          continue; // specifier does not name a real file; nothing to copy
        }
        const to = path.resolve(toDir, spec);
        try {
          fs.mkdirSync(path.dirname(to), { recursive: true });
          fs.writeFileSync(to, contents);
        } catch {
          continue;
        }
        queue.push([contents, path.dirname(from), path.dirname(to)]);
      }
    }
  }

  async createChildProcess(args = [], options = {}) {
    if (args.length && typeof args[0] === "string") {
      // test262 fixture files are ES modules by suite convention, but Elide
      // (Node-style) treats imported `.js` as CommonJS unless the enclosing
      // package declares `type: module`. Mark the temp dir accordingly for
      // module-flagged tests (whose entry runs as `.mjs`, unaffected by the
      // package type); remove the marker for script tests, whose `.js` entry
      // must keep evaluating as a classic global script.
      const pkg = path.join(path.dirname(args[0]), "package.json");
      try {
        if (this._elideModule) {
          fs.writeFileSync(pkg, '{"type":"module"}\n');
        } else {
          fs.rmSync(pkg, { force: true });
        }
      } catch {
        // Best-effort; without it only module-fixture tests misbehave.
      }
      if (this._elideTestFile && this._elideTestSource) {
        try {
          this._copyFixtures(path.dirname(args[0]));
        } catch {
          // Fixture copying is best-effort; the test itself still runs.
        }
      }
      if (this._elideModule && args[0].endsWith(".js")) {
        const mjs = `${args[0].slice(0, -3)}.mjs`;
        try {
          fs.copyFileSync(args[0], mjs);
          args = [mjs, ...args.slice(1)];
        } catch {
          // Fall back to the original `.js` file if the copy fails.
        }
      }
    }
    return super.createChildProcess(args, options);
  }

  // Elide reports unhandled promise rejections on stderr (Node-style
  // diagnostics) without failing the process. test262 treats unhandled
  // rejections as non-observable for sync tests (async tests report via
  // $DONE on stdout), so strip those diagnostic lines; a genuinely broken
  // async test still fails (it never prints Test262:AsyncTestComplete).
  // Also de-box legacy pretty-format errors if any appear on stdout.
  normalizeResult(result) {
    if (result.stderr) {
      const kept = result.stderr
        .split(/\r?\n/)
        .filter((line) => !/^Uncaught \(in promise\)/.test(line));
      result.stderr = kept.join("\n").trim() === "" ? "" : kept.join("\n");
    }
    if (!BOX.test(result.stdout)) return result;
    const kept = [];
    const deboxed = [];
    for (const line of result.stdout.split(/\r?\n/)) {
      if (BOX.test(line)) {
        const s = line.replace(/[─-╿]/g, " ").trim();
        if (s) deboxed.push(s);
      } else {
        kept.push(line);
      }
    }
    const joined = deboxed.join("\n");
    const m = joined.match(ERR);
    result.stderr = m ? (m[2] ? `${m[1]}: ${m[2]}` : m[1]) : joined;
    result.stdout = kept.join("\n");
    return result;
  }

  parseError(str) {
    const m = str.match(ERR);
    if (!m) return null;
    return { name: m[1], message: (m[2] || "").trim(), stack: [] };
  }
}

ElideAgent.runtime = fs.readFileSync(runtimePath.for("elide"), "utf8");
module.exports = ElideAgent;
