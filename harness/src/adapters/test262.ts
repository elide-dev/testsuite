import { z } from "zod";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { Result, TestResult } from "../results/schema";

const RecordZ = z.object({
  file: z.string(),
  scenario: z.string(),
  result: z.object({ pass: z.boolean(), message: z.string().optional() }),
  attrs: z
    .object({ features: z.array(z.string()).optional(), flags: z.record(z.any()).optional() })
    .optional(),
});
type Record = z.infer<typeof RecordZ>;

export function mapRecords(records: unknown[]): TestResult[] {
  return records.map((raw) => {
    const r = RecordZ.parse(raw) as Record;
    return {
      kind: "test",
      id: `${r.file} ${r.scenario}`,
      status: r.result.pass ? "pass" : "fail",
      message: r.result.message || undefined,
      meta: {
        features: r.attrs?.features ?? [],
        flags: r.attrs?.flags ?? {},
        chapter: r.file.split("/").slice(1, 3).join("/"),
      },
    };
  });
}

async function* runTest262(ctx: AdapterContext): AsyncIterable<Result> {
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const globs = ctx.include.map((g) => `${ctx.suitePath}/${g}`);
  const args = [
    `${import.meta.dir}/../../node_modules/.bin/test262-harness`,
    "--host-type", "elide",
    "--host-path", ctx.elidePath,
    "--test262-dir", ctx.suitePath,
    "--reporter", "json",
    "--reporter-keys", "file,scenario,result,attrs",
    "--threads", String(ctx.threads),
    "--timeout", "60000",
    ...globs,
  ];
  const proc = Bun.spawn(["node", ...args], { stdout: "pipe", stderr: "inherit" });
  const out = await new Response(proc.stdout).text();
  await proc.exited;
  const records = JSON.parse(out) as unknown[];
  for (const r of mapRecords(records)) {
    const path = r.id.replace(/ (default|strict mode)$/, "");
    const rel = path.startsWith(ctx.suitePath) ? path.slice(ctx.suitePath.length + 1) : path;
    if (skip.some((m) => m(rel))) {
      yield { ...r, status: "skip" };
    } else {
      yield r;
    }
  }
}

export const test262Adapter: Adapter = {
  id: "test262",
  kind: "test",
  run: runTest262,
};
