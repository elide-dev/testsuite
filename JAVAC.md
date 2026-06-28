# Java Coverage Plan

This tracks Java compiler and runtime compliance coverage across multiple
upstream suites. OpenJDK langtools `tools/javac` is the first broad embedded
compiler suite; runtime and library suites can be added here as separate
sections as they land.

## OpenJDK Javac Langtools

Counts are expanded `.java` jtreg test files from the pinned OpenJDK checkout
`6c48f4ed707bf0b15f9b6098de30db8aae6fa40f`.

### Enabled

- [x] Diagnostics: `javac-diagnostics` - 946 files
- [x] Core language and type checking: `javac-core-language` - 1,167 files
- [x] Modern language features: `javac-modern-language` - 1,338 files
- [x] Classfile and JVM output: `javac-classfile-jvm` - 179 files
- [x] Compiler behavior and resolution: `javac-compiler-behavior` - 292 files
- [x] Options and warnings: `javac-options-warnings` - 159 files
- [x] API and tooling: `javac-api-tooling` - 223 files
- [x] Smoke files: `javac-smoke-files` - 1 file

Enabled total: 4,305 unique jtreg `.java` files.

### Intentionally Excluded

- [ ] Annotation processing: `tools/javac/processing` - 355 files
- [ ] Modules: `tools/javac/modules` - 83 files

### Not Enabled Yet

- [ ] Remaining `tools/javac` tests outside the enabled manifest and intentional
  exclusions - 811 files

The largest remaining buckets include historical regression directories,
doclint/policy/tooling areas, and assorted named bug directories. These should
be added in smaller batches after the current broad compiler surface is stable.

### Coverage Accounting

- Enabled against the current javac target surface, excluding annotation
  processing and modules: 4,305 / 5,116 = 84.1%.
- Enabled against all OpenJDK `tools/javac` `.java` tests: 4,305 / 5,554 =
  77.5%.

The current `javac-jtreg` suite pass rate should be read as pass percentage
within the enabled embedded-compiler compliance surface. Annotation processing
and modules are intentionally excluded from the default target for now.

## Future Java Suites

- [ ] OpenJDK runtime jtreg areas outside `tools/javac`, once Java execution
  compatibility is a target for this harness.
- [ ] JVM/library compatibility slices for standard library behavior that Elide
  exposes directly.
- [ ] Additional compiler-front-end suites for embedded Java compiler behavior,
  if they provide stable diagnostics or compile/run assertions.
