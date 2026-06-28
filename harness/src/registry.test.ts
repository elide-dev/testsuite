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

test("preserves binding-required workload order from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  expect(ws.map((w) => w.id)).toEqual([
    "wpt-wintertc",
    "cpython-core",
    "javac-jtreg",
    "test262",
  ]);
});

test("loads wpt-wintertc workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const wpt = ws.find((w) => w.id === "wpt-wintertc");
  expect(wpt).toBeDefined();
  expect(wpt!.kind).toBe("test");
  expect(wpt!.adapter).toBe("wpt-wintertc");
  expect(wpt!.path).toBe("suites/wpt");
  expect(wpt!.settings.include).toEqual(["**/*"]);
  expect(wpt!.settings.manifest).toBe("manifests/wintertc-wpt-2025.toml");
});

test("loads cpython-core workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const py = ws.find((w) => w.id === "cpython-core");
  expect(py).toBeDefined();
  expect(py!.kind).toBe("test");
  expect(py!.adapter).toBe("cpython-core");
  expect(py!.path).toBe("suites/cpython");
  expect(py!.settings.manifest).toBe("manifests/cpython-core.toml");
});

test("loads javac-jtreg workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const javac = ws.find((w) => w.id === "javac-jtreg");
  expect(javac).toBeDefined();
  expect(javac!.kind).toBe("test");
  expect(javac!.adapter).toBe("javac-jtreg");
  expect(javac!.path).toBe("suites/openjdk");
  expect(javac!.settings.manifest).toBe("manifests/javac-langtools.toml");
  expect(javac!.settings.timeoutMs).toBe(3600000);
  expect(javac!.settings.javaRunner).toBe("java");
});
