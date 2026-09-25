# Elide compliance reports

![Latest compatibility pass rates](./pass-rate.svg)

| Suite | Version | Digest | Pass rate | vs expectations | Status |
|---|---|---|---:|---:|:--:|
| cpython-core | `1.6.0+dd7116a51` | `2cccc16871e1` | 86.8% | 97.3% | 🔵 |
| javac-jtreg | `1.4.99+8b374d579` | `4094eb2fb1ff` | 93.0% | 100.0% | ✅ |
| node-api | `1.6.0+dd7116a51` | `2cccc16871e1` | 56.7% | 99.9% | 🔵 |
| test262 | `1.4.99+8b374d579` | `4094eb2fb1ff` | 92.9% | 100.0% | ✅ |
| wpt-wintertc | `1.6.0+dd7116a51` | `2cccc16871e1` | 80.5% | 99.2% | 🔵 |

_Pass rate_ is over every test in the selection, including skipped/suppressed ones.
_vs expectations_ is the share of tests at or above the checked-in baseline (only regressions count against it).
🔵 marks a run with regressions **and** new passes: the floor advanced, ratchet to lock it in.
