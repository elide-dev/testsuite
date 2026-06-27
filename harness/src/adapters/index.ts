import type { Adapter } from "./types";
import { cpythonCoreAdapter } from "./cpython-core";
import { test262Adapter } from "./test262";
import { wptWintertcAdapter } from "./wpt-wintertc";

export const ADAPTERS: Record<string, Adapter> = {
  "cpython-core": cpythonCoreAdapter,
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
};
