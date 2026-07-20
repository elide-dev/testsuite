# Changes — `1.4.0+edea5ebd9` → `1.4.0+801fbbc34`

- From: `1.4.0+edea5ebd9` (`d0a092aa83f7f1588c9e5053a564166d8fed8a3e389e30c30b25b593ddbdad14`)
- To: `1.4.0+801fbbc34` (`6c16d765505117657d8e4748b5b8cd63395a6f93530ca88df069278d547a007f`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 4 | 14 | 0 | 0 | 218 |

## ❌ Regressed (4)

- `test/built-ins/Atomics/wait/bigint/cannot-suspend-throws.js default`
- `test/built-ins/Atomics/wait/bigint/cannot-suspend-throws.js strict mode`
- `test/built-ins/Atomics/wait/cannot-suspend-throws.js default`
- `test/built-ins/Atomics/wait/cannot-suspend-throws.js strict mode`

## ✅ Fixed (14)

- `test/built-ins/Atomics/wait/bigint/false-for-timeout.js default`
- `test/built-ins/Atomics/wait/bigint/false-for-timeout.js strict mode`
- `test/built-ins/Atomics/wait/bigint/negative-timeout.js default`
- `test/built-ins/Atomics/wait/bigint/negative-timeout.js strict mode`
- `test/built-ins/Atomics/wait/false-for-timeout.js default`
- `test/built-ins/Atomics/wait/false-for-timeout.js strict mode`
- `test/built-ins/Atomics/wait/negative-timeout.js default`
- `test/built-ins/Atomics/wait/negative-timeout.js strict mode`
- `test/built-ins/Atomics/wait/null-for-timeout.js default`
- `test/built-ins/Atomics/wait/null-for-timeout.js strict mode`
- `test/built-ins/Atomics/wait/object-for-timeout.js default`
- `test/built-ins/Atomics/wait/object-for-timeout.js strict mode`
- `test/built-ins/Atomics/wait/true-for-timeout.js default`
- `test/built-ins/Atomics/wait/true-for-timeout.js strict mode`
