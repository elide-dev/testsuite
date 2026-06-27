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

export function mapRecord(raw: unknown): TestResult {
  const r = RecordZ.parse(raw) as Record;
  const status: TestResult["status"] = r.result.pass
    ? "pass"
    : !r.result.message || /^Test262Error\b/.test(r.result.message)
      ? "fail"
      : "error";
  return {
    kind: "test",
    id: `${r.file} ${r.scenario}`,
    status,
    message: r.result.message || undefined,
    meta: {
      features: r.attrs?.features ?? [],
      flags: r.attrs?.flags ?? {},
      chapter: r.file.split("/").slice(1, 3).join("/"),
    },
  };
}

export function mapRecords(records: unknown[]): TestResult[] {
  return records.map(mapRecord);
}

// The json reporter streams one JSON record per line, bracketed by "[" and "]",
// with a leading "," from the second record on. Parse a single such line into a
// record object, or null for the structural bracket/blank lines.
function parseRecordLine(line: string): unknown | null {
  let s = line.trim();
  if (s.startsWith(",")) s = s.slice(1).trim();
  if (s === "" || s === "[" || s === "]") return null;
  return JSON.parse(s);
}

async function* runTest262(ctx: AdapterContext): AsyncIterable<Result> {
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const args = [
    `${import.meta.dir}/../../node_modules/.bin/test262-harness`,
    "--host-type", "elide",
    "--host-path", ctx.elidePath,
    "--test262-dir", ctx.suitePath,
    "--reporter", "json",
    "--reporter-keys", "file,scenario,result,attrs",
    "--threads", String(ctx.threads),
    "--timeout", "60000",
    // Globs are relative to the suite root (the spawn cwd below), so
    // test262-harness reports `file` as a stable suite-relative path
    // (e.g. "test/language/types/x.js") that expectation globs match against.
    ...ctx.include,
  ];
  const proc = Bun.spawn(["node", ...args], {
    cwd: ctx.suitePath,
    stdout: "pipe",
    stderr: "inherit",
  });

  const emit = (raw: unknown): Result => {
    const r = mapRecord(raw);
    const rel = r.id.replace(/ (default|strict mode)$/, "");
    return skip.some((m) => m(rel)) ? { ...r, status: "skip" } : r;
  };

  // Stream stdout line-by-line so results surface as they complete.
  const decoder = new TextDecoder();
  let buf = "";
  for await (const chunk of proc.stdout as ReadableStream<Uint8Array>) {
    buf += decoder.decode(chunk, { stream: true });
    let nl: number;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl);
      buf = buf.slice(nl + 1);
      const raw = parseRecordLine(line);
      if (raw) yield emit(raw);
    }
  }
  buf += decoder.decode();
  const raw = parseRecordLine(buf);
  if (raw) yield emit(raw);
  await proc.exited;
}

export const test262Adapter: Adapter = {
  id: "test262",
  kind: "test",
  run: runTest262,
};
