import { passRate } from "../expectations/compare";
import type { Comparison } from "../expectations/compare";
import type { RunSummary } from "./render";

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

export function renderSuitePassRateSvg(workload: string, c: Comparison): string {
  const width = 720;
  const height = 170;
  const x = 40;
  const y = 84;
  const barWidth = 640;
  const barHeight = 28;
  const total = Math.max(c.counts.total, 1);
  const segments = [
    { label: "pass", value: c.counts.pass, color: "#198754" },
    { label: "fail", value: c.counts.fail, color: "#dc3545" },
    { label: "error", value: c.counts.error, color: "#6f42c1" },
    { label: "skip", value: c.counts.skip, color: "#6c757d" },
  ].filter((segment) => segment.value > 0);
  let offset = 0;
  const rects = segments
    .map((segment) => {
      const w = (segment.value / total) * barWidth;
      const rect = `<rect x="${(x + offset).toFixed(2)}" y="${y}" width="${w.toFixed(2)}" height="${barHeight}" fill="${segment.color}"><title>${escapeXml(segment.label)}: ${segment.value}</title></rect>`;
      offset += w;
      return rect;
    })
    .join("\n  ");
  // Bar segments above show all results (incl. skip); the headline rate excludes skips.
  const rate = passRate(c.counts);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(workload)} pass-rate chart</title>
  <desc id="desc">${c.counts.pass} of ${c.counts.total} tests passed.</desc>
  <rect width="${width}" height="${height}" fill="#ffffff"/>
  <text x="${x}" y="34" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#1f2328">${escapeXml(workload)}</text>
  <text x="${x}" y="58" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="14" fill="#57606a">${c.counts.pass}/${c.counts.total} pass (${pct(rate)})</text>
  <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="#eaeef2"/>
  ${rects}
  <text x="${x}" y="136" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" fill="#57606a">fail ${c.counts.fail} · error ${c.counts.error} · skip ${c.counts.skip} · regressions ${c.regressions.length}</text>
</svg>
`;
}

export function renderTopPassRateSvg(runs: RunSummary[]): string {
  const rowHeight = 34;
  const width = 760;
  const height = Math.max(120, 62 + runs.length * rowHeight);
  const barX = 210;
  const barWidth = 430;
  const rows = runs
    .map((run, index) => {
      const y = 54 + index * rowHeight;
      const filled = Math.max(0, Math.min(1, run.passRate)) * barWidth;
      const color = run.regressions === 0 ? "#198754" : "#d29922";
      return `<text x="32" y="${y + 15}" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="13" fill="#24292f">${escapeXml(run.workload)}</text>
  <rect x="${barX}" y="${y}" width="${barWidth}" height="18" rx="3" fill="#eaeef2"/>
  <rect x="${barX}" y="${y}" width="${filled.toFixed(2)}" height="18" rx="3" fill="${color}"/>
  <text x="${barX + barWidth + 18}" y="${y + 14}" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="12" fill="#57606a">${pct(run.passRate)}</text>`;
    })
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">Elide compatibility pass rates</title>
  <desc id="desc">Latest pass rate by compliance suite.</desc>
  <rect width="${width}" height="${height}" fill="#ffffff"/>
  <text x="32" y="32" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="20" font-weight="700" fill="#1f2328">Latest compatibility</text>
  ${rows}
</svg>
`;
}
