// Normalize a failure message into a cluster key, scrubbing variable content
// so failures sharing a root cause collapse to one signature.
export function normalizeSignature(message: string | undefined): string {
  if (!message || message.trim() === "") return "(no message)";
  let s = message;
  // file:line:col or :line:col → <loc>; bare *.js paths → <loc>
  s = s.replace(/[\w./-]*\.js(:\d+)?(:\d+)?/g, "<loc>");
  s = s.replace(/(?<!:):\d+:\d+/g, "<loc>");
  // quoted runs → <str>
  s = s.replace(/'[^']*'|"[^"]*"|`[^`]*`/g, "<str>");
  // standalone numbers (int/float/hex) → <n>
  // Use negative lookbehind to avoid matching numbers that are part of identifiers (e.g., $262)
  s = s.replace(/(?<![a-zA-Z_$])0x[0-9a-fA-F]+\b|(?<![a-zA-Z_$])\b\d+(\.\d+)?\b/g, "<n>");
  // collapse whitespace
  s = s.replace(/\s+/g, " ").trim();
  return s.length > 160 ? s.slice(0, 160) : s;
}
