# Elide Compliance & Benchmark Harness — Design

**Date:** 2026-06-26
**Status:** Approved design, pending spec review
**Author:** Sam Gammon (with Claude)

## 1. Purpose

A repository that runs upstream conformance test suites — and, later, benchmark
suites — against pinned builds of [Elide](https://elide.dev), across the
languages Elide supports (JavaScript first, then TypeScript, Python, Java,
Kotlin). It produces committed Markdown reports (green checkmarks per suite per
Elide version) published via GitHub Pages, and surfaces regressions in CI.

The first milestone is **Test262** (ECMA TC39's JavaScript conformance suite)
against the current Elide nightly.

## 2. Goals & non-goals

**Goals**

- Run multiple upstream suites against a specific Elide build, selected by image
  tag, image digest, or a local binary path.
- Track per-test expected status in a checked-in baseline; a run is green iff
  actual matches expected. Surface regressions (red, fails CI) and new passes
  (suggest advancing the baseline).
- Generate human-readable Markdown reports keyed by Elide version + image
  digest, plus machine-readable results, all committed for GitHub Pages and
  cross-version archaeology.
- One-command local + Codespaces experience via a devcontainer.
- A core that is **workload-neutral**: tests today, benchmarks later, through a
  single unified interface. No assumptions baked in that a workload is a "test".

**Non-goals (YAGNI for now)**

- No generic Test262 frontmatter parser of our own — we reuse `test262-harness`.
- No per-test Markdown (Test262 is ~50k tests); summaries + compressed full
  results only.
- No web UI beyond Pages-rendered Markdown.
- No Python/Java/benchmark adapters yet — only the interface so they slot in
  later.

## 3. Key decisions (with rationale)

| Decision | Choice | Why |
|---|---|---|
| Test262 driver | Reuse `test262-harness` + `eshost` via a **custom `elide` host** | Canonical Test262 semantics for free; custom host is the idiomatic eshost extension point (see §7). |
| Orchestrator / reporting language | **Bun / TypeScript** | Same runtime as `test262-harness`/`eshost`; single toolchain; JS is the first suite. |
| Execution packaging | **Combined harness image** (pinned Elide + Bun + Node + test262-harness); repo bind-mounted | Per-test host call becomes a local `elide run` (no docker-per-test across ~50k tests); image is just the toolchain, so code/suite changes don't rebuild it. |
| Version pinning | Accept tag, digest, **or** local binary; resolve to `{semver, digest}` | Lets us trigger against a specific binary/image hash; reports never collide. |
| Failure tracking | **Checked-in expectations baseline** per suite | Per-version progress tracking; regressions vs. new-passes both surfaced. |
| Report detail | Markdown summaries + `summary.json` + gzipped full `results.json` | Pages renders Markdown; gz JSON enables per-test diffs against old versions. |
| Core shape | **Workload-neutral** (`kind: test | benchmark`) | Room for `benchmarks/` without rework; unified run/report interface. |

## 4. Repository layout

```
suites/
  test262/                      # git submodule -> tc39/test262
benchmarks/                     # (future) each a submodule; same registry/interface
harness/
  package.json  tsconfig.json  bun.lockb
  patches/eshost+*.patch        # patch-package: installs the custom elide host
  src/
    cli.ts                      # entrypoint: parse args, dispatch
    registry.ts                 # load registry.toml -> Workload[]
    elide.ts                    # resolve --elide (tag|digest|binary) -> {semver,digest,path}
    adapters/
      types.ts                  # Adapter interface (workload-neutral)
      test262.ts                # wraps test262-harness (host-type=elide), parses json
    eshost-elide/
      agent.elide.js            # custom eshost ConsoleAgent for Elide
      runtime.elide.js          # per-test runtime: $262 shim + print=console.log
    results/
      schema.ts                 # TestResult | BenchResult (+ Zod), normalized
      store.ts                  # write results.json.gz, summary.json; read prior
    expectations/
      load.ts                   # parse expectations/<suite>.toml
      compare.ts                # actual vs expected -> {regressions,newPasses,...}
    report/
      render.ts                 # markdown rendering
      index.ts                  # top-level reports/index.md (version matrix)
registry.toml                   # all workloads: id, kind, path, adapter, settings
expectations/
  test262.toml                  # checked-in baseline (skip/fail + reasons)
reports/
  <semver>/<short-digest>/
    index.md                    # per-run landing (Pages)
    test262.md                  # rollup + chapter/feature breakdown
    summary.json                # counts + regression/new-pass lists (small, machine)
    results.json.gz             # every test's status (machine, for diffs)
  index.md                      # top-level: latest run per suite + version matrix
docker/
  harness.Dockerfile           # FROM elide ref + Bun; installs test262-harness, applies patch
.devcontainer/
  devcontainer.json            # Codespaces dev env
  Dockerfile                   # dev image (see §9)
bin/
  run                          # host-side launcher: resolve ref -> docker build -> docker run
.github/workflows/
  compliance.yml               # workflow_dispatch(elide_ref) + scheduled nightly
README.md
```

## 5. Execution model (two layers)

**Host side** — `bin/run` (thin): resolves `--elide` to a concrete reference,
`docker build`s the harness image for that reference, then `docker run`s with the
repo bind-mounted, passing the resolved image digest in via env. Its only job is
Docker; it contains no test logic.

**Container side** — `harness/src/cli.ts` (all real logic): confirms identity via
`elide --version`, runs the requested workload's adapter, normalizes results,
compares against the expectations baseline, writes reports to the mounted volume,
and sets the exit code (non-zero on regressions).

```
bin/run --elide nightly --suite test262
  └─ resolve ref: tag/digest/binary -> base image (or COPY binary)
  └─ docker build -f docker/harness.Dockerfile --build-arg ELIDE_REF=<ref> -t harness:<ref>
  └─ docker run -v $PWD:/work -w /work harness:<ref> \
         bun run harness/src/cli.ts run test262 --digest <sha256>
        ├─ elide --version            -> {semver, digest}
        ├─ test262-harness --host-type elide --host-path /usr/bin/elide \
        │     --reporter json --test262-dir suites/test262 <globs>
        ├─ compare vs expectations/test262.toml
        └─ write reports/<semver>/<digest>/...   ; exit 0|1
```

Why bind-mount instead of `COPY` the repo into the image: the image carries only
the toolchain + Elide, so iterating on harness code or pulling suite updates does
not rebuild the image. Suites and reports live on the mounted volume.

## 6. Version pinning (`--elide`)

`--elide` accepts one of:

- an image **tag**: `nightly`, `1.3.5`
- an image **digest**: `ghcr.io/elide-dev/elide@sha256:…`
- a **local binary** path: `./bin/elide` or any absolute path

Resolution always yields a canonical identity `{ semver, digest }`:

- For tag/digest: `docker build --build-arg ELIDE_REF` FROM that reference;
  `semver` from `elide --version` inside; `digest` from `docker inspect`.
- For a local binary: `docker build` FROM a Bun base, `COPY` the binary in;
  `digest` = `sha256` of the binary file; `semver` from `elide --version`.

Reports are keyed `reports/<semver>/<short-digest>/`, so two different builds of
the same `semver` never collide. GitHub Actions exposes `elide_ref` as a
`workflow_dispatch` input accepting any of the three forms.

## 7. Test262 adapter & the custom eshost `elide` host

`test262-harness` drives execution through `eshost`. eshost resolves a host type
by scanning `eshost/lib/agents/*.js` (verified: `supported-hosts.js` does
`fs.readdirSync('agents')`). So we **add `agents/elide.js` + `runtimes/elide.js`
to the installed eshost package via `patch-package`** (patch checked into
`harness/patches/`, applied on `bun install`). Then the stock CLI works:

```
test262-harness --host-type elide --host-path /usr/bin/elide --reporter json …
```

### Why not the `node` host (verified by spike)

eshost's `node` agent wraps every test with `require("vm")` + `vm.createContext`.
Elide reports `Cannot load module: 'vm'`, and the node agent also depends on
Node's plain error format. The `node` host is the wrong abstraction for a
non-Node engine.

### The custom `elide` host (a `ConsoleAgent` subclass, like `d8`/`graaljs`)

- **Invocation:** `elide run --quiet <single-compiled-file>`. The compiled file
  is self-contained (eshost inlines includes); no `vm`, no `require`.
- **Runtime (`runtime.elide.js`)**, prepended to each test, provides:
  - `globalThis.print = (...a) => console.log(a.join(" "))` — verified to emit
    clean lines, including the async sentinel `Test262:AsyncTestComplete`.
  - a minimal `$262` (`global`, `evalScript`, `destroy`, `IsHTMLDDA`). Advanced
    members (`createRealm`, `detachArrayBuffer`, `agent`) throw a marker; tests
    needing them are `skip` in the baseline until Elide supports them (§11).
- **Result normalization (`agent.elide.js`):** Elide prints errors as a
  decorative box to **stdout** (not stderr; `--quiet` does not change this —
  verified). eshost keys pass/fail off stderr and discards exit codes, so the
  agent overrides `normalizeResult`/`parseError` to: detect the box in stdout,
  de-box it to `Name: message` (+ stack), and route it so eshost sees a thrown
  error. (This mirrors what the existing `graaljs`/`d8` agents already do.)

### Verified spike facts (2026-06-26, Elide `1.3.5+20260626.bfb28f6`)

- Passing sync test → empty stdout/stderr, exit 0. ✅
- `throw` → exit 1; error rendered as a box on **stdout**, stderr empty. ✅
- `print = console.log` shim → `Test262:AsyncTestComplete` clean on stdout. ✅
- Box de-boxes to `Error: boom` via line-prefix stripping. ✅
- Node globals present: `console`, `require`, `setTimeout`, `process`,
  `Reflect`, `Proxy`, `globalThis`. `print` absent. ✅

**Conclusion:** Test262 runs through the stock harness with the custom host and
**no hard upstream Elide changes**. Upstream asks (§11) are quality/coverage
upgrades, not blockers.

### Adapter output

The adapter runs `test262-harness --reporter json`, then maps each record to the
normalized `TestResult` (§8). Scenarios (default / strict mode) are distinct
results keyed by `file + scenario`.

## 8. Normalized result schema (workload-neutral)

```ts
type WorkloadKind = "test" | "benchmark";

interface RunMeta {
  workload: string;          // "test262"
  kind: WorkloadKind;
  elide: { semver: string; digest: string };
  startedAt: string; finishedAt: string;
  suiteVersion?: string;     // submodule commit
}

type TestStatus = "pass" | "fail" | "skip" | "error";
interface TestResult {
  kind: "test";
  id: string;                // file + scenario
  status: TestStatus;
  message?: string;
  durationMs?: number;
  meta?: Record<string, unknown>;   // features, flags, chapter
}

interface BenchResult {       // reserved for benchmarks/, not implemented yet
  kind: "benchmark";
  id: string;
  metric: string;            // "ops/sec", "ns/op", "wall_ms"
  value: number; unit: string;
  variance?: number; samples?: number;
}

type Result = TestResult | BenchResult;
```

Adapters return `AsyncIterable<Result>` (streaming, so 50k results don't buffer).
The comparison and report layers dispatch on `kind`: tests use the expectations
baseline (§9); benchmarks will use a perf baseline (future), but both flow through
the same store/report pipeline.

## 9. Expectations baseline & comparison

`expectations/<suite>.toml` maps globs/test-ids to expected status with a reason:

```toml
# expectations/test262.toml
[skip]
"intl402/**"                 = "Intl 402 not supported yet"
"built-ins/Atomics/**"       = "SharedArrayBuffer/agents unsupported"

[fail]
"**/tail-call-*"             = "no proper tail calls (elide-dev/elide#NNN)"
```

Comparison (`compare.ts`): match each actual result against the most specific
expectation entry. Buckets:

- **regression** — expected pass (no entry, or `[pass]`), actual fail/error → red,
  fails CI.
- **new pass** — expected fail, actual pass → green note, suggests advancing the
  baseline (the run still passes CI).
- **expected fail / skip** — matches baseline → neutral.
- **pass** — matches default expectation → green.

A run is **green iff there are no regressions**. New passes never fail CI but are
prominently listed so the baseline can be tightened.

## 10. Reports

Per run, committed under `reports/<semver>/<short-digest>/`:

- `index.md` — landing page (Pages): run identity, headline pass-rate, links.
- `test262.md` — rollup: counts, pass-rate, regression list, new-pass list, and a
  breakdown by Test262 chapter/feature.
- `summary.json` — small machine summary: counts + regression/new-pass ids.
- `results.json.gz` — every result's status, for later per-test diffs.

Top-level `reports/index.md` shows the latest run per suite and a version matrix
with green checkmarks (suite × Elide version). GitHub Pages serves `reports/`.
Estimated growth: a few hundred KB gzipped per run.

## 11. Devcontainer (Codespaces-ready)

`.devcontainer/` gives a one-click dev environment in GitHub Codespaces or local
VS Code, containing everything needed to develop and run the harness:

- Base: a Debian/Ubuntu devcontainer image.
- Features: `docker-in-docker` (so `bin/run` can build/run the harness image),
  Bun, Node LTS, GitHub CLI.
- Elide installed via its official install script (latest/nightly — dev only;
  actual runs always pin via the harness image regardless of the dev Elide).
- `postCreateCommand`: `git submodule update --init --depth 1` then
  `cd harness && bun install` (which applies the eshost patch).

The devcontainer image and the harness runtime image are intentionally separate:
the runtime image pins a specific Elide and stays minimal; the devcontainer is a
fuller dev environment. Both share the `test262-harness` + patched-eshost setup
so behavior matches.

## 12. CI (GitHub Actions, self-hosted runners)

`.github/workflows/compliance.yml`:

- Triggers: `workflow_dispatch` (input `elide_ref`: tag | digest | binary-artifact)
  and a nightly `schedule`.
- Steps: checkout (with submodules) → `bin/run --elide <ref> --suite test262` →
  on success, commit the new `reports/<semver>/<digest>/...` and refreshed
  `reports/index.md` back to the repo → upload full `results.json.gz` as an
  artifact too. Job fails if the harness exits non-zero (regressions).
- Pages: a separate job (or the same) publishes `reports/`.

## 13. Upstream Elide asks (optional; file, ship, consume)

None block Test262 with the custom host, but each improves robustness/coverage.
All three filed in `elide-dev/WHIPLASH` (related to meta #1172 and Test262 #1173):

1. **Native `print()`** (d8/Graal-style: args space-joined + newline to stdout).
   Lets us drop the `console.log` shim. *Minor.* — **WHIPLASH#1182**
2. **Scriptable error mode** — uncaught errors to **stderr** as plain
   `Name: message` (+ stack), decorative box suppressed (e.g. behind a flag/env).
   Lets us drop stdout box-parsing in `normalizeResult`. *Quality/robustness.* —
   **WHIPLASH#1183**
3. **`$262` / Realm host hooks** (`createRealm`, `evalScript`, `detachArrayBuffer`)
   and **Atomics/agents** support — to un-`skip` the realm and SharedArrayBuffer
   slices of Test262. *Coverage expanders, later.* — **WHIPLASH#1184**

## 14. Build order

1. **Repo scaffolding & submodule** — add `suites/test262` submodule, `registry.toml`,
   `harness/` package skeleton, devcontainer, `bin/run`, Dockerfile.
2. **Custom eshost `elide` host** — `agent.elide.js` + `runtime.elide.js` +
   `patch-package` patch; prove the two spike tests (one pass, one negative)
   go green through `test262-harness --host-type elide`.
3. **Adapter + schema + store** — `test262.ts` → normalized `TestResult`s →
   `results.json.gz` + `summary.json`.
4. **Expectations + comparison** — baseline load, compare, regression/new-pass.
5. **Reports** — per-run Markdown + top-level index/matrix.
6. **`bin/run` + version resolution** — tag/digest/binary → build → run.
7. **CI workflow + Pages**.
8. First full nightly run; seed `expectations/test262.toml` from observed results.

## 15. Open questions / risks

- **eshost realm-dependent tests:** tests using `$262.createRealm` /
  `detachArrayBuffer` will fail until Elide adds host hooks; seed them as `skip`
  with reasons, revisit via §11.3.
- **Throughput:** ~50k single-file `elide run` invocations. The combined image
  keeps each invocation a local process; we parallelize with
  `test262-harness --threads`. Measure on the self-hosted runner; tune threads.
- **Baseline seeding:** the first run defines the initial baseline; review it
  before committing so we don't enshrine accidental passes as expected.
```
