import { expect, test } from "bun:test";
import { packItems, renderSummaryTable, terminalWidth, visibleWidth, type SummaryRow } from "./summary-table";

const headers = ["Suite", "Status", "Pass rate", "Changes"];
const rows: SummaryRow[] = [
  { cells: ["test262", "🛑 ERROR", "n/a"], notes: ["baseline n/a"] },
  { cells: ["wpt-wintertc", "⬆️ ADVANCED", "80.7%"], notes: ["✨ 371 new passes", "🆕 5974 added", "✅ 371 fixed", "❌ 6 regressed"] },
];

const widest = (lines: string[]): number => Math.max(...lines.map(visibleWidth));

test("packItems fills lines up to the width and never splits an item", () => {
  expect(packItems(["aa", "bb", "cc"], 6, ", ")).toEqual(["aa, bb", "cc"]);
  expect(packItems(["toolong", "x"], 3, ", ")).toEqual(["toolong", "x"]);
  expect(packItems([], 10, ", ")).toEqual([]);
});

test("an unbounded width keeps every row on one line", () => {
  const lines = renderSummaryTable(headers, rows);
  expect(lines).toHaveLength(6); // top, header, rule, 2 rows, bottom
  expect(lines[4]).toContain("✨ 371 new passes, 🆕 5974 added, ✅ 371 fixed, ❌ 6 regressed");
  expect(new Set(lines.map(visibleWidth)).size).toBe(1);
});

test("a narrower width wraps the notes column and keeps the box aligned", () => {
  const full = widest(renderSummaryTable(headers, rows));
  const lines = renderSummaryTable(headers, rows, full - 20);
  expect(widest(lines)).toBeLessThanOrEqual(full - 20);
  expect(new Set(lines.map(visibleWidth)).size).toBe(1);
  expect(lines.length).toBeGreaterThan(6);
  // Continuation lines leave the fixed cells blank.
  expect(lines.some((line) => line.startsWith("│              │"))).toBe(true);
});

test("a width too narrow for the table falls back to stacked blocks", () => {
  const lines = renderSummaryTable(headers, rows, 40);
  expect(lines.some((line) => line.includes("│"))).toBe(false);
  expect(lines[0]).toBe("test262  🛑 ERROR");
  expect(lines).toContain("  Pass rate 80.7%");
  expect(lines[1]).toBe("  baseline n/a"); // n/a fields are dropped, notes are kept
  expect(widest(lines)).toBeLessThanOrEqual(40);
});

test("terminalWidth uses the TTY width, then $COLUMNS, else unbounded", () => {
  const saved = process.env.COLUMNS;
  try {
    delete process.env.COLUMNS;
    expect(terminalWidth({ isTTY: true, columns: 100 })).toBe(100);
    expect(terminalWidth({ isTTY: false })).toBe(Infinity);
    process.env.COLUMNS = "90";
    expect(terminalWidth({ isTTY: false })).toBe(90);
  } finally {
    if (saved === undefined) delete process.env.COLUMNS;
    else process.env.COLUMNS = saved;
  }
});
