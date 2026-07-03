#!/usr/bin/env node
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, posix } from "node:path";
import { pathToFileURL } from "node:url";
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

// Shims for WPT helper scripts absent from the vendored tree, keyed by
// suite-root-relative path. Shapes replicate upstream WPT as closely as the
// harness environment allows (static host/ports in place of wptserve
// substitutions).
const VIRTUAL_SCRIPTS = {
  // Faithful copy of upstream WPT common/sab.js.
  "/common/sab.js": `
const createBuffer = (() => {
  // See https://github.com/whatwg/html/issues/5380 for why not \`new SharedArrayBuffer()\`
  let sabConstructor;
  try {
    sabConstructor = new WebAssembly.Memory({ shared:true, initial:0, maximum:0 }).buffer.constructor;
  } catch(e) {
    sabConstructor = null;
  }
  return (type, length, opts) => {
    if (type === "ArrayBuffer") {
      return new ArrayBuffer(length, opts);
    } else if (type === "SharedArrayBuffer") {
      if (sabConstructor && sabConstructor.name !== "SharedArrayBuffer") {
        throw new Error("WebAssembly.Memory does not support shared:true");
      }
      return new sabConstructor(length, opts);
    } else {
      throw new Error("type has to be ArrayBuffer or SharedArrayBuffer");
    }
  }
})();
`,
  // Upstream common/utils.js token()/rand_int()/to_hex() helpers.
  "/common/utils.js": `
function rand_int(bits) {
  if (bits < 1 || bits > 53) {
    throw new TypeError();
  } else {
    if (bits >= 1 && bits <= 30) {
      return 0 | ((1 << bits) * Math.random());
    } else {
      var high = (0 | ((1 << (bits - 30)) * Math.random())) * (1 << 30);
      var low = 0 | ((1 << 30) * Math.random());
      return high + low;
    }
  }
}
function to_hex(x, length) {
  var rv = x.toString(16);
  while (rv.length < length) {
    rv = "0" + rv;
  }
  return rv;
}
function token() {
  var uuid = [to_hex(rand_int(32), 8),
              to_hex(rand_int(16), 4),
              to_hex(0x4000 | rand_int(12), 4),
              to_hex(0x8000 | rand_int(14), 4),
              to_hex(rand_int(48), 12)].join("-");
  return uuid;
}
`,
  // Upstream common/get-host-info.sub.js with static substitutions
  // (host: web-platform.test, ports: 80/81/443/444).
  "/common/get-host-info.sub.js": `
function get_host_info() {
  var HTTP_PORT = '80';
  var HTTP_PORT2 = '81';
  var HTTPS_PORT = '443';
  var HTTPS_PORT2 = '444';
  var PROTOCOL = self.location.protocol;
  var IS_HTTPS = (PROTOCOL == "https:");
  var PORT = IS_HTTPS ? HTTPS_PORT : HTTP_PORT;
  var PORT2 = IS_HTTPS ? HTTPS_PORT2 : HTTP_PORT2;
  var HTTP_PORT_ELIDED = HTTP_PORT == "80" ? "" : (":" + HTTP_PORT);
  var HTTP_PORT2_ELIDED = HTTP_PORT2 == "80" ? "" : (":" + HTTP_PORT2);
  var HTTPS_PORT_ELIDED = HTTPS_PORT == "443" ? "" : (":" + HTTPS_PORT);
  var PORT_ELIDED = IS_HTTPS ? HTTPS_PORT_ELIDED : HTTP_PORT_ELIDED;
  var ORIGINAL_HOST = 'web-platform.test';
  var REMOTE_HOST = (ORIGINAL_HOST === 'localhost') ? '127.0.0.1' : ('www1.' + ORIGINAL_HOST);
  var OTHER_HOST = 'www2.web-platform.test';
  var NOTSAMESITE_HOST = (ORIGINAL_HOST === 'localhost') ? '127.0.0.1' : ('not-' + ORIGINAL_HOST);
  return {
    HTTP_PORT: HTTP_PORT,
    HTTP_PORT2: HTTP_PORT2,
    HTTPS_PORT: HTTPS_PORT,
    HTTPS_PORT2: HTTPS_PORT2,
    PORT: PORT,
    PORT2: PORT2,
    ORIGINAL_HOST: ORIGINAL_HOST,
    REMOTE_HOST: REMOTE_HOST,
    OTHER_HOST: OTHER_HOST,
    NOTSAMESITE_HOST: NOTSAMESITE_HOST,
    ORIGIN: PROTOCOL + '//' + ORIGINAL_HOST + PORT_ELIDED,
    HTTP_ORIGIN: 'http://' + ORIGINAL_HOST + HTTP_PORT_ELIDED,
    HTTP_ORIGIN_WITH_DIFFERENT_PORT: 'http://' + ORIGINAL_HOST + HTTP_PORT2_ELIDED,
    HTTP_REMOTE_ORIGIN: 'http://' + REMOTE_HOST + HTTP_PORT_ELIDED,
    HTTP_REMOTE_ORIGIN_WITH_DIFFERENT_PORT: 'http://' + REMOTE_HOST + HTTP_PORT2_ELIDED,
    HTTP_NOTSAMESITE_ORIGIN: 'http://' + NOTSAMESITE_HOST + HTTP_PORT_ELIDED,
    HTTPS_ORIGIN: 'https://' + ORIGINAL_HOST + HTTPS_PORT_ELIDED,
    HTTPS_NOTSAMESITE_ORIGIN: 'https://' + NOTSAMESITE_HOST + HTTPS_PORT_ELIDED,
    REMOTE_ORIGIN: PROTOCOL + '//' + REMOTE_HOST + PORT_ELIDED,
    OTHER_ORIGIN: PROTOCOL + '//' + OTHER_HOST + PORT_ELIDED,
    UNAUTHENTICATED_ORIGIN: 'http://' + ORIGINAL_HOST + HTTP_PORT_ELIDED,
    AUTHENTICATED_ORIGIN: 'https://' + ORIGINAL_HOST + HTTPS_PORT_ELIDED
  };
}
`,
  // Upstream common/subset-tests-by-key.js, sans location.search variant
  // selection (the harness always runs every subtest).
  "/common/subset-tests-by-key.js": `
(function() {
  function shouldRunSubTest(key) { return true; }
  function subsetTestByKey(key, testFunc, ...args) { return testFunc(...args); }
  self.shouldRunSubTest = shouldRunSubTest;
  self.subsetTestByKey = subsetTestByKey;
})();
`,
  // Upstream common/subset-tests.js, sans ?start/?end variant selection.
  "/common/subset-tests.js": `
(function() {
  function subsetTest(testFunc, ...args) { return testFunc(...args); }
  self.subsetTest = subsetTest;
})();
`,
};

// Parse `// META: script=...` directives from the leading comment block.
export function parseMetaScripts(source) {
  const scripts = [];
  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("//")) {
      const m = /^\/\/\s*META:\s*script=(\S+)/.exec(trimmed);
      if (m) scripts.push(m[1]);
      continue;
    }
    break;
  }
  return scripts;
}

// Resolve a META script path: `/`-rooted paths resolve against the wpt suite
// root, relative paths against the test file's directory. Returns the pair of
// filesystem path and suite-root-relative key (used for virtual shim lookup).
export function resolveMetaScript(suiteRoot, testRel, script) {
  const testDir = posix.dirname(testRel);
  const rel = script.startsWith("/")
    ? posix.normalize(script)
    : posix.normalize(posix.join("/", testDir, script));
  return { path: join(suiteRoot, rel.slice(1)), key: rel };
}

// Inline META scripts (in declaration order) ahead of the test source.
export function buildMetaPreamble(suiteRoot, testRel, source) {
  const chunks = [];
  const seen = new Set();
  for (const script of parseMetaScripts(source)) {
    const { path, key } = resolveMetaScript(suiteRoot, testRel, script);
    if (seen.has(key)) continue;
    seen.add(key);
    if (existsSync(path)) {
      chunks.push(`// wintertc-runner: inlined META script ${script}\n${readFileSync(path, "utf8")}`);
    } else if (VIRTUAL_SCRIPTS[key]) {
      chunks.push(`// wintertc-runner: shimmed META script ${script}\n${VIRTUAL_SCRIPTS[key]}`);
    } else {
      chunks.push(`// wintertc-runner: missing META script ${script}`);
    }
  }
  return chunks.join("\n");
}

// Synthetic browser-ish globals: a location rooted at the test's directory
// under http://web-platform.test/, and (post-harness, so testharness still
// selects its shell environment) a minimal document stub.
export function buildEnvPreamble(testRel) {
  const dir = posix.dirname(testRel);
  const pathname = dir === "." ? "/" : `/${dir}/`;
  const origin = "http://web-platform.test";
  const location = {
    href: origin + pathname,
    protocol: "http:",
    host: "web-platform.test",
    hostname: "web-platform.test",
    port: "",
    pathname,
    origin,
    search: "",
    hash: "",
  };
  return `
globalThis.self ??= globalThis;
globalThis.GLOBAL ??= { isWindow: () => false, isWorker: () => false, isShadowRealm: () => false };
globalThis.location ??= { ...${JSON.stringify(location)}, toString() { return this.href; } };
`;
}

// Minimal document stub; injected after testharness.js loads so environment
// detection is unaffected. No real DOM — just enough for feature detection
// and simple property reads.
const DOCUMENT_STUB = `
globalThis.document ??= {
  baseURI: globalThis.location.href,
  URL: globalThis.location.href,
  documentURI: globalThis.location.href,
  title: "",
  getElementsByTagName: () => [],
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => ({ style: {} }),
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
};
`;

function main() {
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
${buildEnvPreamble(test)}
${harness}
${DOCUMENT_STUB}
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
${buildMetaPreamble(suite, test, source)}
${source}
done();
`);

  const child = spawnSync(elide, ["run", "--quiet", out], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
  if (child.stdout) process.stdout.write(child.stdout);
  if (child.stderr) process.stderr.write(child.stderr);
  // process.exit() would drop un-drained pipe output (truncates large results at 64KiB);
  // set exitCode and let stdout flush naturally.
  process.exitCode = child.status ?? 1;
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main();
}
