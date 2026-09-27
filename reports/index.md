# Elide compliance reports

![Latest compatibility pass rates](./pass-rate.svg)

| Suite | Version | Digest | Pass rate | vs expectations | Status |
|---|---|---|---:|---:|:--:|
| cpython-core | `1.6.0+834e9f50f` | `3cd8cc55c963` | 90.0% | 100.0% | ✅ |
| javac-jtreg | `1.6.0+834e9f50f` | `3cd8cc55c963` | 93.0% | 100.0% | ✅ |
| node-api | `1.6.0+834e9f50f` | `3cd8cc55c963` | 81.8% | 100.0% | ✅ |
| test262 | `1.6.0+834e9f50f` | `3cd8cc55c963` | 93.0% | 100.0% | ✅ |
| wpt-wintertc | `1.6.0+834e9f50f` | `3cd8cc55c963` | 95.1% | 100.0% | ✅ |

_Pass rate_ is over every test in the selection, including skipped/suppressed ones.
_vs expectations_ is the share of tests at or above the checked-in baseline (only regressions count against it).
⬆️ marks a run with regressions **and** new passes: the floor advanced; run with --ratchet to update the baseline.
