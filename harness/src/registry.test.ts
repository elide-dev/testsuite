import { test, expect } from "bun:test";
import { loadRegistry } from "./registry";

test("loads test262 workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const t262 = ws.find((w) => w.id === "test262");
  expect(t262).toBeDefined();
  expect(t262!.kind).toBe("test");
  expect(t262!.adapter).toBe("test262");
  expect(t262!.path).toBe("suites/test262");
  expect(t262!.settings).toEqual({
    include: ["test/language/**/*.js", "test/built-ins/**/*.js"],
  });
});
