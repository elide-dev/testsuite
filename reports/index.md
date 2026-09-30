# Elide compliance reports

![Latest compatibility pass rates](./pass-rate.svg)

| Suite | Version | Digest | Pass rate | vs expectations | Status |
|---|---|---|---:|---:|:--:|
| cpython-core | `1.6.0+b8edacc63` | `7aa30129531a` | 90.8% | 100.0% | ✅ |
| javac-jtreg | `1.6.0+b8edacc63` | `7aa30129531a` | 93.0% | 100.0% | ✅ |
| node-api | `1.6.0+b8edacc63` | `7aa30129531a` | 81.8% | 100.0% | ✅ |
| test262 | `1.6.0+b8edacc63` | `7aa30129531a` | 93.0% | 100.0% | ✅ |
| wpt-wintertc | `1.6.0+b8edacc63` | `7aa30129531a` | 95.5% | 100.0% | ✅ |

_Pass rate_ is over every test in the selection, including skipped/suppressed ones.
_vs expectations_ is the share of tests at or above the checked-in baseline (only regressions count against it).
⬆️ marks a run with regressions **and** new passes: the floor advanced; run with --ratchet to update the baseline.
