import type { RunMeta } from "../results/schema";
import type { Comparison } from "../expectations/compare";

export interface RunSummary {
  workload: string;
  semver: string;
  digest: string; // short
  passRate: number; // 0..1
  regressions: number;
}

export function renderSuiteReport(meta: RunMeta, c: Comparison): string {
  const { pass, total } = c.counts;
  const rate = total ? ((pass / total) * 100).toFixed(2) : "0.00";
  const lines: string[] = [];
  lines.push(`# ${meta.workload} — \`${meta.elide.semver}\``, "");
  lines.push(`- Image digest: \`${meta.elide.digest}\``);
  lines.push(`- Suite version: \`${meta.suiteVersion ?? "unknown"}\``);
  lines.push(`- Ran: ${meta.startedAt} → ${meta.finishedAt}`, "");
  lines.push(`## Summary`, "");
  lines.push(`**Pass rate: ${pass}/${total} (${rate}%)**`, "");
  lines.push(`| pass | fail | error | skip | regressions | new passes |`);
  lines.push(`|---:|---:|---:|---:|---:|---:|`);
  lines.push(
    `| ${pass} | ${c.counts.fail} | ${c.counts.error} | ${c.counts.skip} | ${c.regressions.length} | ${c.newPasses.length} |`,
    "",
  );
  if (meta.workload !== "test262" && c.observed.length) {
    lines.push(`## Observed cases (${c.observed.length})`, "");
    for (const r of c.observed.slice(0, 200)) {
      const detail = r.status === "pass" ? "pass" : `${r.status}${r.message ? ` — ${r.message}` : ""}`;
      lines.push(`- \`${r.id}\` — ${detail}`);
    }
    if (c.observed.length > 200) lines.push(`- …and ${c.observed.length - 200} more`);
    lines.push("");
  }
  if (c.regressions.length) {
    lines.push(`## ❌ Regressions (${c.regressions.length})`, "");
    for (const r of c.regressions.slice(0, 200))
      lines.push(`- \`${r.id}\` — ${r.message ?? ""}`);
    if (c.regressions.length > 200) lines.push(`- …and ${c.regressions.length - 200} more`);
    lines.push("");
  }
  if (c.newPasses.length) {
    lines.push(`## 🟢 New passes (${c.newPasses.length}) — consider advancing the baseline`, "");
    for (const r of c.newPasses.slice(0, 200)) lines.push(`- \`${r.id}\``);
    if (c.newPasses.length > 200) lines.push(`- …and ${c.newPasses.length - 200} more`);
    lines.push("");
  }
  return lines.join("\n");
}

export function renderRunIndex(meta: RunMeta, c: Comparison): string {
  const status = c.regressions.length === 0 ? "✅ green" : `❌ ${c.regressions.length} regressions`;
  return [
    `# Compliance run — \`${meta.elide.semver}\` (\`${meta.elide.digest}\`)`,
    "",
    `Status: **${status}**`,
    "",
    `- [${meta.workload}](./${meta.workload}.md)`,
    "",
  ].join("\n");
}

export function renderTopIndex(runs: RunSummary[]): string {
  const lines: string[] = ["# Elide compliance reports", "", "| Suite | Version | Digest | Pass rate | Status |", "|---|---|---|---:|:--:|"];
  for (const r of runs) {
    const mark = r.regressions === 0 ? "✅" : "❌";
    const pct = (r.passRate * 100).toFixed(1);
    lines.push(
      `| ${r.workload} | \`${r.semver}\` | \`${r.digest}\` | ${pct}% | ${mark} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}
