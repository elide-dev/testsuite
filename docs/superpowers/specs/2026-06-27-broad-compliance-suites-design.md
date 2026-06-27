# Broad Compliance Suites - Design

**Date:** 2026-06-27
**Status:** Approved design, pending spec review
**Author:** Sam Gammon (with Codex)
**Builds on:** `2026-06-26-compliance-harness-design.md` and `2026-06-26-results-db-and-analysis-design.md`

## 1. Purpose

Extend the Elide compliance harness beyond Test262 with broad external coverage
for runtime APIs and embedded compilers. The rollout order is:

1. **WinterTC / WPT subset** for web-interoperable runtime API compliance.
2. **CPython pure-core subset** for Python language and pure standard-library
   compliance.
3. **OpenJDK langtools / javac via jtreg** for embedded Java compiler
   compliance.

This phase optimizes for conformance signal, regression detection, and stable
reporting. Benchmarks remain supported by the core model but are not the focus
of this phase.

## 2. Goals & Non-Goals

**Goals**

- Add the three suites as first-class harness workloads with separate adapters,
  expectation baselines, report files, and suite version metadata.
- Keep the existing one-command local/CI model: `./bin/run --elide <ref>
  --suite <id>`.
- Normalize all suite output into the current `TestResult` schema so comparison,
  ratchet, impact clustering, diffing, and published reports continue to work.
- Start each suite with a conservative subset that is likely to produce useful
  signal quickly, then expand by changing registry include lists and expectation
  files rather than rewriting adapters.
- Use upstream runners where practical instead of reimplementing suite semantics.

**Non-goals**

- No Java SE certification claim. The Java TCK/JCK is separately licensed; jtreg
  langtools is public regression/compiler coverage, not certification.
- No full WPT browser automation. The WinterTC scope targets server-runtime
  APIs that can run in an ECMAScript runtime without a browser window.
- No full CPython regression run at first. OS, network, subprocess, SSL,
  multiprocessing, locale, and platform-sensitive tests are deferred.
- No Kotlin adapter in this phase. Kotlin remains a next candidate after the
  three agreed suites.
- No benchmark adapters in this phase.

## 3. External Suite Basis

### WinterTC / WPT

The WinterTC Minimum Common Web API defines the 2025 snapshot of web platform
APIs expected of web-interoperable server runtimes. Its conformance language
requires listed interfaces/properties and ECMA-262 conformance. WinterTC meeting
minutes state that the WinterTC test suite is a subset of Web Platform Tests for
the Minimum Common Web API and that needed changes should be upstreamed to WPT.
WPT itself is the canonical shared test suite for web platform specifications.

Sources:

- WinterTC Minimum Common Web API: https://min-common-api.proposal.wintertc.org/
- W3C WinterTC minutes, 2025-11-12: https://www.w3.org/2025/11/12-wintertc-minutes.html
- Web Platform Tests: https://github.com/web-platform-tests/wpt

### CPython Pure Core

CPython's `test` package contains Python's regression tests and `test.regrtest`
drives the suite. The first Elide subset should use CPython as upstream source
material but avoid tests that assume CPython internals or host-platform services
outside Elide's initial Python target.

Source:

- Python `test` package docs: https://docs.python.org/3/library/test.html

### OpenJDK langtools / jtreg

`jtreg` is OpenJDK's regression test harness and is suited to positive and
negative compiler tests. OpenJDK identifies `test/langtools` as the most
important freely available tests for the langtools family, including javac.

Sources:

- jtreg: https://openjdk.org/jtreg/
- OpenJDK langtools test guidelines: https://openjdk.org/groups/compiler/tests.html

## 4. Architecture

Use **suite-specific adapters** over a small shared process-runner layer.

The existing Test262 adapter is tightly coupled to `test262-harness` JSON output.
The new suites have different runners and result semantics:

- WPT emits subtest-level results through its own runner or a custom
  testharness.js bridge.
- CPython `regrtest` reports module-level and test-case-level outcomes with
  skip/resource semantics.
- jtreg emits test result files and summaries under a work/report directory.

A single generic adapter would either hide important suite-specific behavior or
become a complicated abstraction. Instead, add shared primitives for command
execution and parsing, then keep one explicit adapter per suite.

```
harness/src/adapters/
  process.ts             # shared spawn, timeout, line collection, exit mapping
  wpt-wintertc.ts         # WPT/testharness subset -> TestResult
  cpython-core.ts         # python -m test / regrtest subset -> TestResult
  javac-jtreg.ts          # jtreg langtools subset -> TestResult
  test262.ts              # existing adapter
```

The CLI adapter registry expands from a hardcoded `test262` entry to a map with
the four adapters. The result schema does not need a new kind; all three new
workloads are `kind = "test"`.

## 5. Repository Layout

```
suites/
  test262/                         # existing
  wpt/                             # sparse checkout of web-platform-tests
  cpython/                         # CPython 3.12 source checkout
  openjdk/                         # shallow upstream OpenJDK checkout

harness/src/adapters/
  process.ts
  wpt-wintertc.ts
  cpython-core.ts
  javac-jtreg.ts

expectations/
  test262.toml                     # existing
  wpt-wintertc.toml
  cpython-core.toml
  javac-jtreg.toml

manifests/
  wintertc-wpt-2025.toml           # curated WPT paths/features for ECMA-429
  cpython-core.toml                # curated regrtest module list
  javac-langtools.toml             # curated jtreg groups/paths
```

`registry.toml` remains the top-level workload catalog. Suite-specific manifests
hold large or curated include lists so `registry.toml` stays readable.

Example registry shape:

```toml
[[workload]]
id = "wpt-wintertc"
kind = "test"
adapter = "wpt-wintertc"
path = "suites/wpt"

  [workload.settings]
  manifest = "manifests/wintertc-wpt-2025.toml"

[[workload]]
id = "cpython-core"
kind = "test"
adapter = "cpython-core"
path = "suites/cpython"

  [workload.settings]
  manifest = "manifests/cpython-core.toml"

[[workload]]
id = "javac-jtreg"
kind = "test"
adapter = "javac-jtreg"
path = "suites/openjdk"

  [workload.settings]
  manifest = "manifests/javac-langtools.toml"
```

## 6. Adapter Contracts

Every adapter yields `TestResult` records with stable ids:

```ts
interface TestResult {
  kind: "test";
  id: string;
  status: "pass" | "fail" | "skip" | "error";
  message?: string;
  durationMs?: number;
  meta?: Record<string, unknown>;
}
```

Status mapping is intentionally conservative:

- `pass`: upstream runner reports success.
- `fail`: test assertion or expected compiler diagnostic mismatch.
- `skip`: selected by expectations `[skip]`, upstream unsupported resource skip,
  or manifest-level exclusion.
- `error`: harness crash, runner infrastructure failure, timeout, parse failure,
  or unexpected compiler/runtime crash.

Adapters must include enough metadata to make reports useful:

- `suite`: upstream suite name.
- `upstreamPath`: source-relative path.
- `category`: WPT feature, CPython module, or jtreg area.
- `runner`: command family (`wpt`, `regrtest`, `jtreg`).
- `subtest`: where the upstream runner has subtests.

## 7. WinterTC / WPT Subset

### Scope

Add `wpt-wintertc` as the first new suite. It should cover the Minimum Common Web
API surfaces that can run without browser-only globals:

- DOM basics: `DOMException`, `Event`, `EventTarget`, `AbortController`,
  `AbortSignal`.
- URL: `URL`, `URLSearchParams`, `URLPattern`.
- Encoding: `TextEncoder`, `TextDecoder`, encoder/decoder streams when usable.
- Streams: readable, writable, transform streams and queuing strategies.
- File API: `Blob`, `File`.
- WebCrypto: `crypto`, `Crypto`, `CryptoKey`, `SubtleCrypto`.
- Timers and task APIs: `setTimeout`, `clearTimeout`, `setInterval`,
  `clearInterval`, `queueMicrotask`.
- Structured clone and `atob`/`btoa`.
- WebAssembly JS/Web APIs where Elide exposes them.
- Console and performance basics where WPT tests are server-runtime compatible.

Fetch-related APIs are intentionally a second slice. The first WPT adapter
should prove pure in-process API execution before adding `Headers`, `Request`,
`Response`, `FormData`, and `fetch` tests that need server-runtime URL, request,
and networking semantics.

### Runner Strategy

Prefer a minimal WPT testharness bridge for JavaScript-only tests:

1. Select `.any.js` and other runtime-compatible `testharness.js` files from
   the WinterTC manifest.
2. Build a small wrapper that loads WPT's `testharness.js` and
   `testharnessreport.js` in Elide.
3. Execute each selected test file with `elide run`.
4. Emit one normalized result per WPT subtest when available; otherwise emit one
   file-level result.

This avoids browser automation and keeps the execution model close to Test262:
many independent Elide subprocesses, parallelized by the harness.

If the bridge cannot faithfully run an area, that area is skipped with a reason
until either WPT has a runtime-friendly version or Elide adds needed host hooks.

### Result IDs

Use stable subtest ids:

```
<wpt-relative-path> :: <subtest-name>
```

For file-level setup failures:

```
<wpt-relative-path> :: <file>
```

### Initial Manifest

The first manifest should include only files that are:

- tied to ECMA-429 / Minimum Common API surfaces;
- JavaScript-only or `.any.js` style tests;
- not dependent on DOM document/window layout, navigation, cookies, permissions,
  browser UI, or cross-origin browser machinery;
- deterministic in a server runtime.

The manifest should group entries by API area so reports can show WinterTC
coverage by surface, not only by path.

The repository should use a sparse WPT checkout for now. Include only the WPT
directories needed by the curated manifest plus shared harness files such as
`resources/testharness.js` and `resources/testharnessreport.js`.

## 8. CPython Pure-Core Subset

### Scope

Add `cpython-core` after the WPT adapter is reporting cleanly. Start with
language/runtime and pure standard-library modules from CPython 3.12, matching
the Python version Elide currently implements. Candidate areas:

- Syntax, parser, compiler, `ast`, `dis`, `inspect` where supported.
- Builtins, exceptions, warnings, context managers, descriptors.
- Core data structures and algorithms: `collections`, `itertools`, `functools`,
  `operator`, `copy`, `weakref` if supported.
- Numeric and text: `math`, `cmath`, `decimal`, `fractions`, `statistics`,
  `re`, `string`, `unicodedata` if available.
- Serialization and data formats without external I/O: `json`, `base64`,
  `binascii`, `csv`, `pickle` if supported.
- Import machinery only where Elide's Python module loading semantics are meant
  to match CPython.

Avoid initially:

- `test_socket`, `test_ssl`, `test_asyncio` network-dependent slices;
- `test_subprocess`, `test_multiprocessing`, `test_venv`;
- platform and locale-sensitive tests;
- tests requiring CPython C-extension internals;
- destructive filesystem/resource tests unless isolated in a temp dir.

### Runner Strategy

Use CPython's own runner where possible:

```
elide run -m test --json-lines <selected modules>
```

If Elide cannot run `-m test` directly yet, add a thin checked-in Python driver
that imports selected `test.test_*` modules and runs `unittest` suites while
emitting JSON lines. The adapter should not parse decorative terminal output if a
structured output path is possible.

### Result IDs

Prefer unittest case ids:

```
test_<module>.<ClassName>.<method>
```

If only module-level results are available at first:

```
test_<module>
```

Module-level results are acceptable for the first smoke integration, but the
adapter should evolve toward test-case-level ids to make ratchets and impact
analysis precise.

## 9. javac / jtreg Subset

### Scope

Add `javac-jtreg` third. The suite targets Elide's embedded Java compiler, not
the complete JDK runtime. Start with OpenJDK `test/langtools/tools/javac` slices
from a shallow upstream OpenJDK checkout:

- parser and syntax diagnostics;
- type attribution and overload resolution;
- generics, lambdas, records, sealed classes, pattern matching, modules, and
  current language-level features Elide claims to support;
- annotation processing only if Elide embeds the required processing surface;
- negative tests that validate diagnostic behavior and exit status;
- tests that compile and run generated Java programs, with execution performed
  by a configurable Java runner.

Defer:

- tests requiring a full JDK image layout;
- tests requiring tools other than javac unless they directly validate compiler
  behavior;
- GUI, shell, or platform-specific jtreg tests.

### Runner Strategy

Use upstream `jtreg` and keep the compiler command and Java runner independently
configurable. The initial compiler under test is Elide's embedded javac. The
initial Java runner is a regular host JDK `java`, but the adapter must make this
replaceable so a future run can execute compiled programs with Elide too.

There are two viable command-injection modes:

1. **Wrapper JDK mode:** create a temporary fake JDK/toolchain directory where
   `bin/javac` is a script invoking `elide`'s embedded Java compiler, while
   `bin/java` delegates to the configured Java runner. For the first
   implementation, that runner is a regular JDK.
2. **jtreg option mode:** use jtreg's javac/JVM option hooks if they can direct
   compile actions through the Elide compiler and execution actions through the
   configured Java runner without confusing tests that inspect JDK paths.

Use wrapper JDK mode unless a spike proves option mode is cleaner. It makes the
boundary explicit: jtreg infrastructure runs on a real host JDK; the compiler
under test is Elide's javac; the Java execution command is configurable.

### Result IDs

Use jtreg test names:

```
tools/javac/<path>/<test-file>
```

When jtreg exposes named subcases, append:

```
tools/javac/<path>/<test-file> :: <subcase>
```

## 10. Harness Changes

### Adapter Registry

Replace the hardcoded adapter map in `harness/src/cli.ts` with an exported map:

```ts
export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
  "cpython-core": cpythonCoreAdapter,
  "javac-jtreg": javacJtregAdapter,
};
```

### Adapter Context

Extend `AdapterContext` without breaking existing adapters:

```ts
export interface AdapterContext {
  elide: ElideIdentity;
  elidePath: string;
  suitePath: string;
  include: string[];
  skipGlobs: string[];
  threads: number;
  settings: Record<string, unknown>;
  workspacePath: string; // writable temp/work path inside the container
}
```

`settings` carries manifest paths and runner-specific options. `workspacePath`
is needed for WPT generated wrappers, CPython temp output, and jtreg work/report
directories.

### Manifest Loading

Add a small manifest loader under `harness/src/manifest.ts`:

- resolves manifest paths relative to repo root;
- parses TOML;
- returns grouped include entries with optional tags and reasons;
- validates that ids are stable strings and paths are relative.

Adapters own interpretation of manifest entries, but the loader handles common
parsing and error messages.

### Process Runner

Add `harness/src/adapters/process.ts` for:

- spawning subprocesses with a timeout;
- collecting stdout/stderr with byte caps;
- returning `{ command, exitCode, signal, stdout, stderr, durationMs }`;
- distinguishing runner error from assertion failure.

The process runner must not know suite semantics.

## 11. Expectations and Reporting

Each suite gets its own expectation files:

- `expectations/wpt-wintertc.toml`
- `expectations/cpython-core.toml`
- `expectations/javac-jtreg.toml`

Use existing `[skip]`, `[fail]`, and ratchet behavior. Reasons should link to
Elide issues when the failure is an Elide gap and to upstream notes when the
test is not applicable to a server-runtime or embedded-compiler context.

Reports should add suite-specific breakdowns through `meta.category`:

- WinterTC: API surface (`url`, `streams`, `fetch`, `webcrypto`, etc.).
- CPython: module (`test_re`, `test_json`, etc.).
- javac: langtools area or language feature.

No report-format redesign is required. The current suite report can display
counts, regressions, new passes, and impact clusters; richer per-category tables
can be added after the adapters land.

## 12. CI and Runtime Image

The harness image needs additional tools:

- WPT: Python dependencies required by WPT tooling only if using WPT's runner;
  the preferred bridge path needs mostly Node/Bun plus the WPT source tree.
- CPython: no separate CPython interpreter for execution under test, but a host
  Python may be useful for setup scripts and manifest validation.
- jtreg: a host JDK and jtreg distribution. The host JDK runs jtreg; Elide's
  compiler is the system under test.

CI should initially run the new suites on demand or nightly, not on every harness
unit-test run. Full runs may be expensive, and first baselines will need review.

Suggested command pattern:

```bash
./bin/run --elide nightly --suite wpt-wintertc --threads 8
./bin/run --elide nightly --suite cpython-core --threads 8
./bin/run --elide nightly --suite javac-jtreg --threads 4
```

Thread defaults may differ by suite. jtreg parallelism should be conservative
until temp/work directories and compiler wrapper isolation are proven.

## 13. Build Order

1. **Harness plumbing**
   - Add adapter registry expansion, `settings`, `workspacePath`, manifest
     loader, and process runner.
   - Keep Test262 green.

2. **WinterTC / WPT subset**
   - Add sparse WPT checkout.
   - Add `manifests/wintertc-wpt-2025.toml`.
   - Build the WPT testharness bridge and `wpt-wintertc` adapter.
   - Start with pure in-process APIs; add fetch-related tests after the bridge
     is stable.
   - Seed expectations from a reviewed first run.

3. **CPython pure-core subset**
   - Add CPython 3.12 source.
   - Add `manifests/cpython-core.toml`.
   - Build structured `regrtest`/unittest adapter.
   - Seed expectations from a reviewed first run.

4. **javac / jtreg subset**
   - Add shallow upstream OpenJDK checkout.
   - Add jtreg to the harness image.
   - Build configurable javac/java wrapper and `javac-jtreg` adapter. Use Elide
     for javac and a regular JDK for java initially.
   - Seed expectations from a reviewed first run.

5. **Report polish**
   - Add per-category breakdowns once all three adapters produce stable
     `meta.category` values.

## 14. Risks

- **WPT host assumptions:** Some tests that look API-only may still assume
  browser globals or WPT server behavior. Mitigation: start with a curated
  manifest and mark non-server-runtime tests as structural skips with reasons.
- **WinterTC moving target:** The Minimum Common API is expected to publish
  snapshots. Mitigation: name manifests by snapshot year and keep suite versions
  in run metadata.
- **CPython implementation assumptions:** CPython tests can validate CPython
  internals, not just Python semantics. Mitigation: initial pure-core manifest,
  explicit skips for CPython-specific internals, and case-level ids where
  possible.
- **jtreg toolchain boundary:** jtreg normally tests a JDK, not just a compiler.
  Mitigation: wrapper JDK mode, a langtools-only manifest, and separate
  configuration for the compiler under test and the runner used for compiled
  programs.
- **Runtime cost:** These suites can be large. Mitigation: include manifests,
  suite-specific thread defaults, and ratchet baselines.
- **Report overload:** Broad suites can produce noisy first reports. Mitigation:
  impact clustering and category breakdowns before expanding coverage.

## 15. Resolved Decisions

- WPT uses a sparse checkout for now, limited to selected API directories and
  shared WPT harness resources.
- WinterTC starts with pure in-process APIs. Fetch-related coverage is the next
  WPT slice after the bridge is stable.
- CPython pins to Python 3.12, matching Elide's current Python target.
- CPython should emit unittest case-level ids when feasible; module-level ids
  are acceptable only for the first smoke spike.
- OpenJDK uses a shallow upstream checkout for traceability.
- jtreg should cover compile/diagnostics and tests that run compiled programs.
  The run command is configurable: use a regular JDK initially, with an Elide
  drop-in path preserved for later.
