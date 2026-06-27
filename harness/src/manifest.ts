import { readFileSync } from "node:fs";
import { parse } from "smol-toml";

export interface ManifestGroup {
  id: string;
  include: string[];
  tags: string[];
  reason?: string;
}

export interface SuiteManifest {
  groups: ManifestGroup[];
}

function assertRelativePath(path: string): void {
  if (path.startsWith("/") || path.includes("..")) {
    throw new Error(`manifest include must be relative: ${path}`);
  }
}

export function loadManifest(path: string): SuiteManifest {
  const raw = parse(readFileSync(path, "utf8")) as {
    group?: Array<{ id?: unknown; include?: unknown; tags?: unknown; reason?: unknown }>;
  };
  const groups = (raw.group ?? []).map((g) => {
    const id = String(g.id ?? "");
    if (!id) throw new Error("manifest group requires id");
    const include = Array.isArray(g.include) ? g.include.map(String) : [];
    if (!include.length) throw new Error(`manifest group ${id} requires include`);
    for (const p of include) assertRelativePath(p);
    return {
      id,
      include,
      tags: Array.isArray(g.tags) ? g.tags.map(String) : [],
      reason: g.reason === undefined ? undefined : String(g.reason),
    };
  });
  return { groups };
}
