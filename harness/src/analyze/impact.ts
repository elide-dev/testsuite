import { normalizeSignature } from "./signature";

export interface FailRow { id: string; status: string; message?: string; features: string[] }
// `samples` keeps a few distinct RAW messages per cluster — the signature
// scrubs out the variable parts (module names, values), so the samples are
// where you see *which* modules/values actually failed.
export interface ImpactCluster { signature: string; count: number; exampleIds: string[]; samples: string[] }
export interface FeatureCount { feature: string; count: number }
export interface Impact { bySignature: ImpactCluster[]; byFeature: FeatureCount[] }

const isFail = (s: string): boolean => s === "fail" || s === "error";

export function computeImpact(rows: FailRow[]): Impact {
  const sig = new Map<string, ImpactCluster>();
  const feat = new Map<string, number>();
  for (const r of rows) {
    if (!isFail(r.status)) continue;
    const key = normalizeSignature(r.message);
    let cl = sig.get(key);
    if (!cl) { cl = { signature: key, count: 0, exampleIds: [], samples: [] }; sig.set(key, cl); }
    cl.count++;
    if (cl.exampleIds.length < 5) cl.exampleIds.push(r.id);
    const msg = r.message?.trim();
    if (msg && cl.samples.length < 5 && !cl.samples.includes(msg)) cl.samples.push(msg);
    for (const f of r.features) feat.set(f, (feat.get(f) ?? 0) + 1);
  }
  const bySignature = [...sig.values()].sort((a, b) => b.count - a.count || a.signature.localeCompare(b.signature));
  const byFeature = [...feat.entries()]
    .map(([feature, count]) => ({ feature, count }))
    .sort((a, b) => b.count - a.count || a.feature.localeCompare(b.feature));
  return { bySignature, byFeature };
}

export function renderImpactMd(i: Impact): string {
  const lines: string[] = ["# Impact-ordered failures", ""];
  if (!i.bySignature.length) { lines.push("_No failures._", ""); return lines.join("\n"); }
  lines.push("## By root-cause signature", "");
  for (const c of i.bySignature) {
    lines.push(`### ${c.count} × \`${c.signature.replace(/`/g, "ʼ")}\``, "");
    if (c.samples.length) {
      lines.push("distinct messages:");
      for (const s of c.samples) lines.push(`- \`${s.replace(/`/g, "ʼ").slice(0, 300)}\``);
    }
    lines.push(`example test: \`${c.exampleIds[0] ?? ""}\``, "");
  }
  if (i.byFeature.length) {
    lines.push("## By feature", "", "| count | feature |", "|---:|---|");
    for (const f of i.byFeature) lines.push(`| ${f.count} | ${f.feature} |`);
    lines.push("");
  }
  return lines.join("\n");
}
