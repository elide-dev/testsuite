"use strict";
const fs = require("fs");
const runtimePath = require("../runtime-path");
const ConsoleAgent = require("../ConsoleAgent");

// Box-drawing chars Elide uses to frame errors on stdout.
const BOX = /[─-╿]/;
// "SyntaxError: ...", "ReferenceError: ...", "Error: ..." after de-boxing.
const ERR = /^([A-Za-z][A-Za-z0-9]*Error)(?::\s*([\s\S]*?))?$/m;

class ElideAgent extends ConsoleAgent {
  constructor(options) {
    super(options);
    // hostPath is the elide binary; produce `elide run --quiet <file>`.
    this.args.unshift("run", "--quiet");
  }

  // Elide prints errors as a box on stdout; eshost expects errors on stderr.
  normalizeResult(result) {
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
