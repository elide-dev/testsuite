import { passRatesOf } from "../expectations/compare";
import type { Comparison } from "../expectations/compare";
import type { RunSummary } from "./render";

const FONT = "system-ui, -apple-system, Segoe UI, sans-serif";
const COLORS = {
  pass: "#198754",
  fail: "#dc3545",
  error: "#6f42c1",
  skip: "#6c757d",
  regression: "#d29922",
  expected: "#0969da",
  track: "#eaeef2",
  ink: "#1f2328",
  muted: "#57606a",
};

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function pct(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
}

/**
 * Per-suite chart. The top bar is the full result mix over EVERY test in the
 * selection (skipped/suppressed included, so muting is visible rather than
 * hidden). The bottom bar is the run measured against the expectations: only
 * regressions eat into it, so a full bar means the run is on (or above) the floor.
 */
export function renderSuitePassRateSvg(workload: string, c: Comparison): string {
  const width = 720;
  const height = 214;
  const x = 40;
  const barWidth = 640;
  const total = Math.max(c.counts.total, 1);
  const rates = passRatesOf(c.counts, c.regressions.length);
  const segments = [
    { label: "pass", value: c.counts.pass, color: COLORS.pass },
    { label: "fail", value: c.counts.fail, color: COLORS.fail },
    { label: "error", value: c.counts.error, color: COLORS.error },
    { label: "skip", value: c.counts.skip, color: COLORS.skip },
  ].filter((segment) => segment.value > 0);
  const mixY = 84;
  const mixHeight = 24;
  let offset = 0;
  const rects = segments
    .map((segment) => {
      const w = (segment.value / total) * barWidth;
      const rect = `<rect x="${(x + offset).toFixed(2)}" y="${mixY}" width="${w.toFixed(2)}" height="${mixHeight}" fill="${segment.color}"><title>${escapeXml(segment.label)}: ${segment.value}</title></rect>`;
      offset += w;
      return rect;
    })
    .join("\n  ");
  const expY = 150;
  const expHeight = 12;
  const onFloor = Math.max(0, c.counts.total - c.regressions.length);
  const expWidth = clamp01(rates.expected) * barWidth;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(workload)} pass-rate chart</title>
  <desc id="desc">${c.counts.pass} of ${c.counts.total} tests passed (${pct(rates.overall)} overall, including skipped and suppressed tests); ${onFloor} of ${c.counts.total} are at or above the expectations baseline (${pct(rates.expected)}); ${c.regressions.length} regressions; ${c.newPasses.length} new passes.</desc>
  <rect width="${width}" height="${height}" fill="#ffffff"/>
  <text x="${x}" y="34" font-family="${FONT}" font-size="20" font-weight="700" fill="${COLORS.ink}">${escapeXml(workload)}</text>
  <text x="${x}" y="58" font-family="${FONT}" font-size="14" fill="${COLORS.muted}">${c.counts.pass}/${c.counts.total} pass · ${pct(rates.overall)} overall · ${pct(rates.expected)} vs expectations</text>
  <text x="${x}" y="${mixY - 6}" font-family="${FONT}" font-size="11" fill="${COLORS.muted}">all tests, incl. skipped/suppressed</text>
  <rect x="${x}" y="${mixY}" width="${barWidth}" height="${mixHeight}" fill="${COLORS.track}"/>
  ${rects}
  <text x="${x}" y="${mixY + mixHeight + 18}" font-family="${FONT}" font-size="13" fill="${COLORS.muted}">pass ${c.counts.pass} · fail ${c.counts.fail} · error ${c.counts.error} · skip ${c.counts.skip}</text>
  <text x="${x}" y="${expY - 6}" font-family="${FONT}" font-size="11" fill="${COLORS.muted}">vs expectations (only regressions count against it)</text>
  <rect x="${x}" y="${expY}" width="${barWidth}" height="${expHeight}" rx="3" fill="${COLORS.track}"/>
  <rect x="${x}" y="${expY}" width="${expWidth.toFixed(2)}" height="${expHeight}" rx="3" fill="${COLORS.expected}"><title>at or above baseline: ${onFloor}</title></rect>
  <text x="${x}" y="${expY + expHeight + 18}" font-family="${FONT}" font-size="13" fill="${COLORS.muted}">${onFloor}/${c.counts.total} at or above baseline · regressions ${c.regressions.length} · new passes ${c.newPasses.length}</text>
</svg>
`;
}

/**
 * Headline chart. Each suite gets two bars: the overall pass rate (over all
 * tests, skipped/suppressed included) and the pass rate vs the expectations.
 */
export function renderTopPassRateSvg(runs: RunSummary[]): string {
  const rowHeight = 48;
  const width = 820;
  const headerHeight = 78;
  const height = Math.max(140, headerHeight + runs.length * rowHeight + 12);
  const barX = 210;
  const barWidth = 380;
  const labelX = barX + barWidth + 14;
  const rows = runs
    .map((run, index) => {
      const y = headerHeight + index * rowHeight;
      const overall = clamp01(run.passRate) * barWidth;
      const expected = clamp01(run.expectedRate) * barWidth;
      const overallColor = run.regressions === 0 ? COLORS.pass : COLORS.regression;
      const note = run.regressions === 0
        ? ""
        : run.newPasses > 0
          ? ` · ${run.regressions} regr, ${run.newPasses} new`
          : ` · ${run.regressions} regr`;
      return `<text x="32" y="${y + 13}" font-family="${FONT}" font-size="13" fill="#24292f">${escapeXml(run.workload)}</text>
  <rect x="${barX}" y="${y}" width="${barWidth}" height="14" rx="3" fill="${COLORS.track}"/>
  <rect x="${barX}" y="${y}" width="${overall.toFixed(2)}" height="14" rx="3" fill="${overallColor}"><title>${escapeXml(run.workload)} overall: ${pct(run.passRate)}</title></rect>
  <text x="${labelX}" y="${y + 12}" font-family="${FONT}" font-size="12" fill="${COLORS.muted}">${pct(run.passRate)}</text>
  <rect x="${barX}" y="${y + 18}" width="${barWidth}" height="8" rx="3" fill="${COLORS.track}"/>
  <rect x="${barX}" y="${y + 18}" width="${expected.toFixed(2)}" height="8" rx="3" fill="${COLORS.expected}"><title>${escapeXml(run.workload)} vs expectations: ${pct(run.expectedRate)}</title></rect>
  <text x="${labelX}" y="${y + 27}" font-family="${FONT}" font-size="11" fill="${COLORS.muted}">${pct(run.expectedRate)} exp${escapeXml(note)}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">Elide compatibility pass rates</title>
  <desc id="desc">Latest pass rate by compliance suite: overall (over all tests, including skipped and suppressed) and vs expectations (only regressions count against it).</desc>
  <rect width="${width}" height="${height}" fill="#ffffff"/>
  <text x="32" y="32" font-family="${FONT}" font-size="20" font-weight="700" fill="${COLORS.ink}">Latest compatibility</text>
  <rect x="32" y="48" width="12" height="12" rx="2" fill="${COLORS.pass}"/>
  <text x="50" y="58" font-family="${FONT}" font-size="11" fill="${COLORS.muted}">overall pass rate (all tests, incl. skipped/suppressed)</text>
  <rect x="352" y="48" width="12" height="12" rx="2" fill="${COLORS.expected}"/>
  <text x="370" y="58" font-family="${FONT}" font-size="11" fill="${COLORS.muted}">vs expectations (100% = at or above baseline)</text>
  ${rows}
</svg>
`;
}
