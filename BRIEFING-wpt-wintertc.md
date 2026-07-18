# Briefing: `wpt-wintertc` compat work (WPT / WinterTC suite)

_Self-contained handoff doc. Generated 2026-07-17 from the latest committed run._

## Context

This repo (`elide-dev` conformance testsuite) runs upstream conformance suites
against pinned [Elide](https://elide.dev) builds and publishes versioned
reports. The `wpt-wintertc` suite is a sparse Web Platform Tests slice covering
WinterTC / ECMA-429 JavaScript-facing APIs: **encoding** (40 files), **url**
(28 files), and **fetch** (245 files). The manifest is
`manifests/wintertc-wpt-2025.toml`; the WPT checkout is a sparse submodule
under `suites/wpt`.

**This suite has the single largest and most concentrated compat wins across
all five suites in the repo.**

## Current state (Elide `1.4.1+20260716.b8b6531`, digest `3d3ea83ed640`)

| pass | fail | error | skip | total | pass rate (excl. skips) |
|---:|---:|---:|---:|---:|---:|
| 10,480 | 3,422 | 12 | 661 | 14,575 | **75.3%** |

Counts are WPT *subtests* (`file :: subtest name`). Latest reports:

- `reports/1.4.1+20260716.b8b6531/3d3ea83ed640/wpt-wintertc/impact.md` — failures clustered by root-cause signature, largest first
- `.../wpt-wintertc/impact.json` — same data, machine-readable (`bySignature`)
- `.../wpt-wintertc/wpt-wintertc.md` — full run report
- `expectations/wpt-wintertc.ratchet.toml` — the known-failure baseline (3,438 lines)

## How to run

```bash
bun run setup                       # once: deps + submodules + sparse checkouts
# smoke (seconds):
bun run testsuite --elide nightly --suite wpt-wintertc --include 'url/urlsearchparams-constructor.any.js' --log
# a target area:
bun run testsuite --elide nightly --suite wpt-wintertc --include 'encoding/textdecoder-fatal-single-byte.any.js' --log
# full suite (~12s of harness runtime inside Docker):
bun run testsuite --elide nightly --suite wpt-wintertc --threads 8
# after fixes land in an Elide nightly, re-baseline:
bun run testsuite --elide nightly --suite wpt-wintertc --ratchet
```

Green = zero regressions vs the expectations baseline; new passes show up in
`changes.md` and are locked in by `--ratchet`.

## Failure analysis (3,434 failing subtests, top-down)

Failures are extremely concentrated. Directory rollup:

| failing | where | root cause |
|---:|---|---|
| 1,158 | `fetch/api/**` | no WPT server: relative URLs fail (`Failed to parse URL: ../resources/...`), promise_test unhandled rejections |
| 1,092 | `encoding/textdecoder-fatal-single-byte.any.js` | missing WHATWG single-byte encodings + wrong fatal-mode behavior |
| 342 | `encoding/legacy-mb-schinese/**` | gbk/gb18030 decoder tables wrong/missing |
| 136 | `fetch/fetch-later/**` | `fetchLater` not defined (browser-only API; also needs window/iframe) |
| 136 | `fetch/http-cache/**` | needs WPT server |
| 105 | `url/url-setters-stripping.any.js` | URL setters don't strip U+0000/tab/newline per spec |
| 66 | `encoding/encodeInto.any.js` | SharedArrayBuffer ctor missing; detached-buffer handling |
| 51 | `encoding/textdecoder-mistakes.any.js` | decoder error-recovery divergences |
| ~350 | rest of `encoding/*`, `url/*`, `fetch/*` | mixed, mostly encoding-related |

Signature-level highlights (see `impact.md` for the full list):

- `TextDecoder: encoding ISO-8859-10 / -14 not available on this JVM` — 524
- `TextDecoder: encoding macintosh not available on this JVM` — 262
- `TextDecoder: encoding ISO-8859-8-I not available on this JVM` — 226
- `decoding error (fatal mode): UNMAPPABLE[n]` (should NOT throw) — 68
- throws `RangeError` where spec wants `TypeError` (fatal-flag tests) — 47
- `sabConstructor is not a constructor` (no SharedArrayBuffer) — 71
- URL: `assert_equals: property expected "https:" but got "http:"` etc. — 80; `Invalid URL port` — 24

**Root cause for the encoding mass:** Elide's `TextDecoder` delegates to JVM
`Charset`. The JVM lacks several WHATWG-required encodings (ISO-8859-10,
ISO-8859-14, ISO-8859-8-I, macintosh, x-mac-cyrillic, x-user-defined; label
aliases like `unicode11utf8`) and diverges from the Encoding Standard on
error handling (fatal mode, replacement-character emission, ISO-2022-JP state
machine).

## Ranked work items

1. **WHATWG single-byte encodings (Elide runtime)** — unlocks **~1,400
   subtests**, complexity **low-medium**. Implement the Encoding Standard's
   single-byte decoders directly from its index tables (128 entries each;
   https://encoding.spec.whatwg.org/indexes.json) instead of JVM `Charset`.
   Include the full label→encoding table and correct fatal/replacement
   behavior. Verify with `encoding/textdecoder-fatal-single-byte.any.js`
   (1,092 failing), `textdecoder-labels.any.js`, `single-byte-decoder.window.js`.
2. **URL setter stripping (Elide runtime)** — unlocks **~130 subtests**,
   complexity **low-medium**. URL component setters must strip tab/newline and
   handle U+0000 per the URL Standard; port setter must ignore invalid input
   rather than throw. Verify with `url/url-setters-stripping.any.js`.
3. **Legacy multi-byte decoders: gbk/gb18030, ISO-2022-JP (Elide runtime)** —
   unlocks **~450 subtests**, complexity **medium** (stateful decoders, larger
   index tables). Natural follow-on to item 1 once the index-table
   infrastructure exists.
4. **WPT server support in the harness (THIS repo, not Elide)** — un-gates up
   to **~1,300 subtests** (`fetch/api`, `fetch/http-cache`, …), complexity
   **medium-high**. The runner executes `.any.js` files without a wptserve
   instance or base URL, so anything fetching a relative resource dies in
   setup. Standing up wptserve (or a minimal substitute honoring WPT's
   `{{host}}`/`{{ports}}` substitution) inside the Docker run converts these
   from permanently-failing into a real fetch-conformance signal. Expect real
   fetch bugs to surface after; that's the point.
5. **Park / skip candidates**: `fetch/fetch-later` (136 — browser-only,
   needs window/iframe/BFCache), `.window.js` tests requiring `document`/
   `XMLHttpRequest` (~90). Consider adding these to `[skip]` in
   `expectations/wpt-wintertc.toml` with a comment, so the pass-rate
   denominator reflects reachable tests.

Items 1–3 alone should move the suite from 75.3% to roughly **88–90%**.

## Notes for the implementer

- Elide fixes happen in the Elide runtime repo; this repo only pins nightlies
  and measures. Use `--elide nightly` to pick up a fresh build.
- Failure text like `not available on this JVM` comes from Elide's own error
  messages — grep the Elide codebase for it to find the TextDecoder impl fast.
- The suite runs in ~12s, so iterate with `--include 'encoding/**' --log`.
- After a fix lands: run full suite → check `changes.md` for new passes and no
  regressions → `--ratchet` → commit reports + expectations together.
