import { test, expect } from "bun:test";
import { mapRecords } from "./test262";

const records = JSON.parse(
  await Bun.file(`${import.meta.dir}/../../fixtures/test262-report.json`).text(),
);

test("maps reporter records to normalized TestResults", () => {
  const out = mapRecords(records);
  expect(out).toHaveLength(3);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "test/built-ins/Array/length.js default",
    status: "pass",
  });
  expect(out[1]).toMatchObject({
    id: "test/language/types/x.js strict mode",
    status: "fail",
    message: "Test262Error: nope",
  });
  expect(out[0].meta).toMatchObject({ features: ["Array"] });
  expect(out[2]).toMatchObject({
    id: "test/built-ins/x.js default",
    status: "error",
    message: "ReferenceError: print is not defined",
  });
});
