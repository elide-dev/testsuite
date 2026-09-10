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
    let isAsync = !!options.async;
    this._elideTestFile = null;
    if (typeof code === "object" && code && code.contents) {
      const flags = (code.attrs && code.attrs.flags) || {};
      isModule = isModule || !!flags.module;
      isAsync = isAsync || !!flags.async;
      if (code.file) {
        this._elideTestFile = path.resolve(String(code.file));
        this._elideTestSource = String(code.contents);
      }
    }
    this._elideModule = isModule;
    this._elideAsync = isAsync;
    return super.evalScript(code, options);
  }

  // Module-flagged async tests compile the doneprintHandle include into
  // module scope, so its `function $DONE` never becomes a global property
  // and asyncTest's `hasOwn(globalThis, "$DONE")` guard trips. For async
  // tests only (harness self-tests assert its absence otherwise), pre-set a
  // global $DONE speaking the same protocol; the include's identical
  // definition shadows it wherever the test actually calls $DONE. Inserted
  // after the directive prologue so "use strict" stays a directive. The
  // 'Test262''Error' token is split: contiguous, it would trip eshost's
  // ESHostError rewrite and corrupt the compiled test.
  compile(code, options) {
    code = super.compile(code, options);
    if (this._elideAsync) {
      const shim =
        'globalThis.$DONE = function (error) { var p = function (m) { (globalThis.print || console.log)(m); };' +
        ' if (error) { if (typeof error === "object" && error !== null && "name" in error)' +
        ' { p("Test262:AsyncTestFailure:" + error.name + ": " + error.message); }' +
        ' else { p("Test262:AsyncTestFailure:" + "Test262" + "Error: " + String(error)); } }' +
        ' else { p("Test262:AsyncTestComplete"); } };\n';
      const prologue = code.match(
        /^("[^\r\n"]*"|'[^\r\n']*'|[\s\r\n;]*|\/\*[\w\W]*?\*\/|\/\/[^\n]*\n)*/,
      );
      code = prologue
        ? prologue[0] + shim + code.slice(prologue[0].length)
        : shim + code;
    }
    return code;
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
      // module-flagged tests, whose `.js` entry then parses as ESM; remove the
      // marker for script tests, whose `.js` entry must keep evaluating as a
      // classic global script.
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
      // A module-flagged `.js` entry runs as ESM via the `{"type":"module"}`
      // marker written above — no `.mjs` copy needed. Copying to `.mjs` would
      // give the entry a distinct file identity from any self/cyclic import that
      // names the original `.js` (e.g. instn-*_FIXTURE re-exports), splitting one
      // module into two instances and breaking TDZ/binding-identity tests. Run
      // the `.js` in place so those imports dedupe to the single entry record.
    }
    // ELIDE_JS_TEST262 gates host-side test262 affordances the -X option can't
    // reach (e.g. allowCreateThread for $262.agent worker threads).
    options.env = { ...process.env, ...options.env, ELIDE_JS_TEST262: "1" };
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
