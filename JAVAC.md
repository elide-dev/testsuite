# Java Coverage Plan

This tracks Java compiler and runtime compliance coverage across multiple
upstream suites. OpenJDK langtools `tools/javac` is the first broad embedded
compiler suite; runtime and library suites can be added here as separate
sections as they land.

## OpenJDK Javac Langtools

Counts are expanded `.java` jtreg test files from the pinned OpenJDK checkout
`6c48f4ed707bf0b15f9b6098de30db8aae6fa40f`.

### Enabled

- [x] Full javac langtools tree: `tools/javac` - 5,554 files

Enabled total: 5,554 unique jtreg `.java` files.

### Enabled For Classification

- [x] Annotation processing: `tools/javac/processing` - 355 files
- [x] Modules: `tools/javac/modules` - 83 files

### Not Enabled Yet

- [x] No remaining `tools/javac` `.java` jtreg files in the pinned checkout.

### Coverage Accounting

- Enabled against all OpenJDK `tools/javac` `.java` tests: 5,554 / 5,554 =
  100.0%.

The current `javac-jtreg` suite pass rate should be read as pass percentage
within the full embedded-compiler compliance surface. Annotation processing and
modules are enabled even though some failures are expected, so they can be
classified and ratcheted instead of hidden.

## Future Java Suites

- [ ] OpenJDK runtime jtreg areas outside `tools/javac`, once Java execution
  compatibility is a target for this harness.
- [ ] JVM/library compatibility slices for standard library behavior that Elide
  exposes directly.
- [ ] Additional compiler-front-end suites for embedded Java compiler behavior,
  if they provide stable diagnostics or compile/run assertions.
