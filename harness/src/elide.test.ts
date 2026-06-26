import { test, expect } from "bun:test";
import { parseElideVersion } from "./elide";

test("parses semver from elide --version output", () => {
  expect(parseElideVersion("1.3.5+20260626.bfb28f6\n")).toBe("1.3.5+20260626.bfb28f6");
});

test("parses semver when wrapped in extra text", () => {
  expect(parseElideVersion("Elide v1.3.5+abc (something)\n")).toBe("1.3.5+abc");
});

test("falls back to 'unknown' when no version present", () => {
  expect(parseElideVersion("no version here")).toBe("unknown");
});
