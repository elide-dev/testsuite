import type { Adapter } from "./types";
import { cpythonCoreAdapter } from "./cpython-core";
import { javacJtregAdapter } from "./javac-jtreg";
import { test262Adapter } from "./test262";
import { wptWintertcAdapter } from "./wpt-wintertc";

export const ADAPTERS: Record<string, Adapter> = {
  "cpython-core": cpythonCoreAdapter,
  "javac-jtreg": javacJtregAdapter,
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
};
