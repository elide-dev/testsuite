import type { Adapter } from "./types";
import { test262Adapter } from "./test262";

export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
};
