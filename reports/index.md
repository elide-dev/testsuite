# Elide compliance reports

![Latest compatibility pass rates](./pass-rate.svg)

| Suite | Version | Digest | Pass rate | vs expectations | Status |
|---|---|---|---:|---:|:--:|
| cpython-core | `1.6.0+516b45d9c` | `d17352817568` | 90.9% | 98.0% | ⬆️ |
| javac-jtreg | `1.4.99+8b374d579` | `4094eb2fb1ff` | 93.0% | 100.0% | ✅ |
| node-api | `1.6.0+83f5b7e6d` | `a58da60db199` | 70.4% | 96.9% | ⬆️ |
| test262 | `1.4.99+8b374d579` | `4094eb2fb1ff` | 92.9% | 100.0% | ✅ |
| wpt-wintertc | `1.6.0+83f5b7e6d` | `a58da60db199` | 79.9% | 99.4% | ⬆️ |

_Pass rate_ is over every test in the selection, including skipped/suppressed ones.
_vs expectations_ is the share of tests at or above the checked-in baseline (only regressions count against it).
⬆️ marks a run with regressions **and** new passes: the floor advanced; run with --ratchet to update the baseline.
