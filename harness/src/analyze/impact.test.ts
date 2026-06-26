import { test, expect } from "bun:test";
import { computeImpact, renderImpactMd, type FailRow } from "./impact";

const rows: FailRow[] = [
  { id: "a default", status: "fail", message: "TypeError: Cannot load module: 'vm'", features: ["modules"] },
  { id: "b default", status: "fail", message: "TypeError: Cannot load module: 'fs'", features: ["modules"] },
  { id: "c default", status: "error", message: "ReferenceError: print is not defined", features: [] },
  { id: "d default", status: "pass", message: "", features: [] }, // ignored (not failing)
];

test("clusters by normalized signature, ranked by blast radius", () => {
  const imp = computeImpact(rows);
  expect(imp.bySignature[0].signature).toBe("TypeError: Cannot load module: <str>");
  expect(imp.bySignature[0].count).toBe(2);
  expect(imp.bySignature[0].exampleIds).toEqual(["a default", "b default"]);
  expect(imp.bySignature[1].count).toBe(1);
});

test("rolls up by feature, ignoring non-failing rows", () => {
  const imp = computeImpact(rows);
  expect(imp.byFeature).toEqual([{ feature: "modules", count: 2 }]);
});

test("markdown is impact-ordered", () => {
  const md = renderImpactMd(computeImpact(rows));
  expect(md.indexOf("Cannot load module")).toBeLessThan(md.indexOf("print is not defined"));
});
