import type { RunMeta } from "../results/schema";
import { passRatesOf, type Comparison } from "../expectations/compare";

export interface RunSummary {
  workload: string;
  semver: string;
  digest: string; // short
  /** Overall pass rate, 0..1: passes over all tests incl. skipped/suppressed. */
  passRate: number;
  /** Pass rate vs expectations, 0..1: everything but regressions is on the floor. */
  expectedRate: number;
  regressions: number;
  newPasses: number;
}

export function statusMark(r: Pick<RunSummary, "regressions" | "newPasses">): string {
  if (r.regressions === 0) return "✅";
  // Regressions alongside new passes: the floor moved, ratchet to lock it in.
  return r.newPasses > 0 ? "🔵" : "❌";
}

export function renderSuiteReport(meta: RunMeta, c: Comparison): string {
  const { pass, total } = c.counts;
  // Both rates are over the whole selection: skipped/suppressed tests stay in the denominator.
  const rates = passRatesOf(c.counts, c.regressions.length);
  const rate = (rates.overall * 100).toFixed(2);
  const expectedRate = (rates.expected * 100).toFixed(2);
  const lines: string[] = [];
  lines.push(`# ${meta.workload} — \`${meta.elide.semver}\``, "");
  lines.push(`- Image digest: \`${meta.elide.digest}\``);
  lines.push(`- Suite version: \`${meta.suiteVersion ?? "unknown"}\``);
  lines.push(`- Ran: ${meta.startedAt} → ${meta.finishedAt}`, "");
  lines.push(`## Summary`, "");
  lines.push("![Pass-rate chart](./pass-rate.svg)", "");
  lines.push(`**Pass rate: ${pass}/${total} (${rate}%)** — overall, over all tests including skipped/suppressed`, "");
  lines.push(`**vs expectations: ${total - c.regressions.length}/${total} (${expectedRate}%)** — tests at or above the baseline (only regressions count against it)`, "");
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
  const status = c.regressions.length === 0
    ? "✅ green"
    : c.newPasses.length > 0
      ? `🔵 ${c.regressions.length} regressions, ${c.newPasses.length} new passes — floor advanced, ratchet to lock it in`
      : `❌ ${c.regressions.length} regressions`;
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
  const lines: string[] = [
    "# Elide compliance reports",
    "",
    "![Latest compatibility pass rates](./pass-rate.svg)",
    "",
    "| Suite | Version | Digest | Pass rate | vs expectations | Status |",
    "|---|---|---|---:|---:|:--:|",
  ];
  for (const r of runs) {
    const pct = (r.passRate * 100).toFixed(1);
    const expected = (r.expectedRate * 100).toFixed(1);
    lines.push(
      `| ${r.workload} | \`${r.semver}\` | \`${r.digest}\` | ${pct}% | ${expected}% | ${statusMark(r)} |`,
    );
  }
  lines.push(
    "",
    "_Pass rate_ is over every test in the selection, including skipped/suppressed ones.",
    "_vs expectations_ is the share of tests at or above the checked-in baseline (only regressions count against it).",
    "🔵 marks a run with regressions **and** new passes: the floor advanced, ratchet to lock it in.",
  );
  lines.push("");
  return lines.join("\n");
}
