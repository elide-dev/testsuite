// Targeted test selection: `--filter [<suite>:]<pattern>`.
//
// A filter NARROWS whatever the registry / manifest / --include already
// selected; it never widens it. Patterns are globs (`*`, `**`, `?`, `{a,b}`,
// `[abc]`) matched case-insensitively against ANY PART of the selectable unit's
// id, so `*time*` hits `test/built-ins/Date/prototype/getTime/name.js`,
// `test_datetime` and `test/parallel/test-timers.js` alike. Anchor with a
// path: `test/built-ins/Date/**` still behaves like a normal prefix glob.
//
// What a pattern is matched against, per suite (the id an agent sees in
// reports/ and expectations/):
//   test262       suite-relative file path        test/built-ins/Date/now/name.js
//   node-api      suite-relative file path        test/parallel/test-timers.js
//   wpt-wintertc  suite-relative file path        encoding/encodeInto.any.js
//   javac-jtreg   langtools-relative test path    tools/javac/T6411379.java
//   jdk-jtreg     test/jdk-relative test path     java/util/Date/Bug4326.java
//   cpython-core  module name AND case id         test_time / test_ast.test_ast.AST_Tests.test_dump
import picomatch from "picomatch";

export interface TestFilter {
  /** Registry workload id the pattern is scoped to; undefined = every selected suite. */
  suite?: string;
  pattern: string;
}

export type FilterMatcher = (value: string) => boolean;

/**
 * Parse `[<suite>:]<pattern>` specs. The prefix is only taken as a suite when
 * it is exactly a known workload id, so ids containing `:` (wpt's
 * `file :: subtest`, jtreg's `path::runner`) still work as bare patterns.
 */
export function parseFilterSpecs(specs: string[], knownSuites: string[]): TestFilter[] {
  const known = new Set(knownSuites);
  const filters: TestFilter[] = [];
  for (const raw of specs) {
    const spec = raw.trim();
    if (!spec) continue;
    const colon = spec.indexOf(":");
    const head = colon > 0 ? spec.slice(0, colon) : "";
    if (head && known.has(head)) {
      const pattern = spec.slice(colon + 1).trim();
      if (!pattern) throw new Error(`--filter '${raw}': missing pattern after '${head}:'`);
      filters.push({ suite: head, pattern });
    } else {
      filters.push({ pattern: spec });
    }
  }
  return filters;
}

/** Patterns that apply to `suite`: the suite-scoped ones plus the unscoped ones. */
export function patternsForSuite(filters: TestFilter[], suite: string): string[] {
  return filters.filter((f) => f.suite === undefined || f.suite === suite).map((f) => f.pattern);
}

/** Suites that filters name explicitly, in first-seen order. */
export function suitesNamedByFilters(filters: TestFilter[]): string[] {
  return [...new Set(filters.map((f) => f.suite).filter((s): s is string => Boolean(s)))];
}

/** Compile patterns to an OR-matcher. No patterns => everything matches. */
export function compileFilter(patterns: string[] | undefined): FilterMatcher {
  if (!patterns?.length) return () => true;
  const matchers = patterns.map((p) => picomatch(p, { contains: true, nocase: true }));
  return (value) => matchers.some((m) => m(value));
}

/** True when a filter is active, i.e. the selection is being narrowed. */
export function hasFilter(patterns: string[] | undefined): boolean {
  return Boolean(patterns?.length);
}

/** Apply the filter to a list of ids, reporting how much it narrowed. */
export function applyFilter<T>(
  items: T[],
  patterns: string[] | undefined,
  idOf: (item: T) => string,
  onNarrowed?: (kept: number, total: number) => void,
): T[] {
  if (!hasFilter(patterns)) return items;
  const matches = compileFilter(patterns);
  const kept = items.filter((item) => matches(idOf(item)));
  onNarrowed?.(kept.length, items.length);
  return kept;
}

/** One-line summary for the run log. */
export function describeFilter(patterns: string[], kept: number, total: number, unit: string): string {
  return `filter ${patterns.map((p) => `'${p}'`).join(" | ")}: selected ${kept} of ${total} ${unit}`;
}

/**
 * Launcher suite selection. Explicit `--suite` / `--all-suites` win; otherwise
 * suite-prefixed filters pick the suites; otherwise the default. A filter that
 * names a suite outside the final selection is an error rather than a silent no-op.
 */
export function selectSuites(
  explicit: string[],
  allSuites: string[] | undefined,
  filters: TestFilter[],
  fallback: string[],
): string[] {
  const named = suitesNamedByFilters(filters);
  const suites = allSuites ?? (explicit.length ? explicit : named.length ? named : fallback);
  for (const suite of named) {
    if (!suites.includes(suite)) {
      throw new Error(`--filter names suite '${suite}' but it is not selected (add it to --suite or drop the prefix)`);
    }
  }
  return suites;
}
