# Impact-ordered failures

## By root-cause signature

### 218 × `java.lang.IllegalStateException: Creating threads is not allowed. at :program (<loc>)`

distinct messages:
- `java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573144-27-n1r1i2.byzi.js:562:3)`
- `java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573141-27-fm4egn.unler.js:565:3)`
- `java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573146-27-1nww6m2.gad7.js:563:3)`
- `java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573137-27-1jhnulz.yx3h.js:564:3)`
- `java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573231-27-400tc5.mfnns.js:554:1)`
example test: `test/built-ins/Atomics/notify/count-defaults-to-infinity-undefined.js default`

### 4 × `Expected a TypeError to be thrown but no exception was thrown at all`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown at all`
example test: `test/built-ins/Atomics/wait/cannot-suspend-throws.js default`

## By feature

| count | feature |
|---:|---|
| 222 | Atomics |
| 216 | SharedArrayBuffer |
| 216 | TypedArray |
| 100 | Atomics.waitAsync |
| 96 | arrow-function |
| 96 | async-functions |
| 86 | BigInt |
| 18 | Symbol |
| 18 | Symbol.toPrimitive |
