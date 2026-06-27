import type { Adapter } from "./types";
import { test262Adapter } from "./test262";
import { wptWintertcAdapter } from "./wpt-wintertc";

export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
};
