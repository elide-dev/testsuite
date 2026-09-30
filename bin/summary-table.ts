// Width-aware layout for the final compliance summary. Extracted from run.ts so
// the fitting rules are unit-testable without ansi/terminal state. See
// summary-table.test.ts.
//
// Cells may carry ANSI styling; widths are display widths (Bun.stringWidth
// handles escapes and double-width emoji). Layouts, widest first:
//   1. the full table, notes joined on one line;
//   2. the table with the notes column wrapped, one or more items per line;
//   3. a stacked block per suite, when even (2) cannot fit.

export interface SummaryRow {
  /** One cell per non-notes header. */
  cells: string[];
  /** Items for the trailing notes column; wrapped between items, never inside one. */
  notes: string[];
}

const NOTE_SEP = ", ";
const FIELD_SEP = " · ";
const INDENT = "  ";

export function visibleWidth(value: string): number {
  return Bun.stringWidth(value);
}

function padVisible(value: string, width: number): string {
  return value + " ".repeat(Math.max(0, width - visibleWidth(value)));
}

/**
 * Greedily pack items onto lines no wider than `width`. An item wider than
 * `width` gets a line of its own rather than being split.
 */
export function packItems(items: string[], width: number, sep: string): string[] {
  const lines: string[] = [];
  let current = "";
  for (const item of items) {
    if (current && visibleWidth(current + sep + item) > width) {
      lines.push(current);
      current = item;
    } else {
      current = current ? current + sep + item : item;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Terminal width to fit the summary to; Infinity when it can't be known (CI logs, pipes). */
export function terminalWidth(stream: { isTTY?: boolean; columns?: number } = process.stderr): number {
  if (stream.isTTY && stream.columns) return stream.columns;
  const env = Number.parseInt(process.env.COLUMNS ?? "", 10);
  return Number.isFinite(env) && env > 0 ? env : Infinity;
}

// Box width of a table whose columns have the given content widths.
function tableWidth(widths: number[]): number {
  return 1 + widths.reduce((sum, width) => sum + width + 3, 0);
}

function renderTable(headers: string[], rows: SummaryRow[], notesWidth: number, bold: (s: string) => string): string[] {
  const fixed = headers.slice(0, -1).map((header, i) => Math.max(visibleWidth(header), ...rows.map((row) => visibleWidth(row.cells[i]))));
  const widths = [...fixed, notesWidth];
  const line = (cells: string[]): string => `│ ${cells.map((cell, i) => padVisible(cell, widths[i])).join(" │ ")} │`;
  const rule = (l: string, m: string, r: string): string => `${l}${widths.map((width) => "─".repeat(width + 2)).join(m)}${r}`;
  const out = [rule("┌", "┬", "┐"), line(headers.map(bold)), rule("├", "┼", "┤")];
  for (const row of rows) {
    const notes = packItems(row.notes, notesWidth, NOTE_SEP);
    out.push(line([...row.cells, notes[0] ?? ""]));
    for (const more of notes.slice(1)) out.push(line([...row.cells.map(() => ""), more]));
  }
  out.push(rule("└", "┴", "┘"));
  return out;
}

function renderStacked(headers: string[], rows: SummaryRow[], maxWidth: number, bold: (s: string) => string): string[] {
  const out: string[] = [];
  const inner = Math.max(1, maxWidth - INDENT.length);
  for (const row of rows) {
    // The first two cells (suite, status) head the block; the rest become labelled
    // fields, minus empty ones so an errored suite isn't a line of "n/a".
    const [name, status, ...rest] = row.cells;
    out.push(`${bold(name)}  ${status}`);
    const fields = rest.flatMap((cell, i) => (Bun.stripANSI(cell) === "n/a" ? [] : [`${headers[i + 2]} ${cell}`]));
    for (const l of packItems(fields, inner, FIELD_SEP)) out.push(INDENT + l);
    for (const l of packItems(row.notes, inner, NOTE_SEP)) out.push(INDENT + l);
  }
  return out;
}

/**
 * Lay out the summary to fit `maxWidth` columns. The last header names the
 * notes column; every other header matches a position in `SummaryRow.cells`.
 */
export function renderSummaryTable(
  headers: string[],
  rows: SummaryRow[],
  maxWidth = Infinity,
  bold: (s: string) => string = (s) => s,
): string[] {
  const fixed = headers.slice(0, -1).map((header, i) => Math.max(visibleWidth(header), ...rows.map((row) => visibleWidth(row.cells[i]))));
  const notesHeader = visibleWidth(headers[headers.length - 1]);
  const fullNotes = Math.max(notesHeader, ...rows.map((row) => visibleWidth(row.notes.join(NOTE_SEP))));
  const minNotes = Math.max(notesHeader, ...rows.flatMap((row) => row.notes.map(visibleWidth)));
  if (tableWidth([...fixed, fullNotes]) <= maxWidth) return renderTable(headers, rows, fullNotes, bold);
  if (tableWidth([...fixed, minNotes]) <= maxWidth) {
    const available = maxWidth - tableWidth([...fixed, 0]);
    // Shrink the column to the widest packed line, so no row is padded past its content.
    const packed = rows.flatMap((row) => packItems(row.notes, available, NOTE_SEP));
    const notesWidth = Math.max(minNotes, ...packed.map(visibleWidth));
    return renderTable(headers, rows, notesWidth, bold);
  }
  return renderStacked(headers, rows, maxWidth, bold);
}
