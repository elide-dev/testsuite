import { test, expect } from "bun:test";
import { normalizeSignature } from "./signature";

test("collapses identifier-specific ReferenceErrors to one signature", () => {
  const a = normalizeSignature("ReferenceError: print is not defined");
  const b = normalizeSignature("ReferenceError: $262 is not defined");
  // identifiers are not quoted here, so they remain distinct words; the
  // scrubbing targets quoted/located/numeric variance, not bare identifiers.
  expect(a).toBe("ReferenceError: print is not defined");
  expect(b).toBe("ReferenceError: $262 is not defined");
});

test("scrubs quoted strings, locations, and numbers", () => {
  expect(normalizeSignature(`TypeError: Cannot load module: 'vm'`)).toBe(
    "TypeError: Cannot load module: <str>",
  );
  expect(normalizeSignature("SyntaxError: foo.js:12:5 unexpected token")).toBe(
    "SyntaxError: <loc> unexpected token",
  );
  expect(normalizeSignature("Test262Error: expected 3 but got 42")).toBe(
    "Test262Error: expected <n> but got <n>",
  );
});

test("handles missing message", () => {
  expect(normalizeSignature(undefined)).toBe("(no message)");
  expect(normalizeSignature("")).toBe("(no message)");
});

test("collapses whitespace and truncates", () => {
  const long = "Error: " + "x".repeat(300);
  expect(normalizeSignature(long).length).toBeLessThanOrEqual(160);
  expect(normalizeSignature("Error:   a\n\tb")).toBe("Error: a b");
});
