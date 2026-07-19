import { test, expect } from "bun:test";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseMainHttpPort, startWptServer } from "./wpt-server";

test("parseMainHttpPort reads the primary http listener, not http-local/http-public/https", () => {
  const log = [
    "[2026-07-19 10:00:00,000 http-local on port 5001] INFO - Starting http server on http://127.0.0.1:5001",
    "[2026-07-19 10:00:00,001 http-public on port 5002] INFO - Starting http server on http://127.0.0.1:5002",
    "[2026-07-19 10:00:00,002 http on port 5003] INFO - Starting http server on http://127.0.0.1:5003",
    "[2026-07-19 10:00:00,003 https on port 5004] INFO - Starting https server on https://127.0.0.1:5004",
  ].join("\n");
  expect(parseMainHttpPort(log)).toBe(5003);
});

test("parseMainHttpPort ignores everything until the primary listener logs its bind", () => {
  expect(parseMainHttpPort("")).toBeNull();
  // http-local / http-public / the http:// URL in the message must never be mistaken for the primary.
  expect(
    parseMainHttpPort(
      "[.. http-local on port 5001] INFO - Starting http server on http://127.0.0.1:5001\n" +
        "[.. http-public on port 5002] INFO - Starting http server on http://127.0.0.1:5002",
    ),
  ).toBeNull();
});

// Fake `wpt` that binds an OS-assigned loopback port, logs it in wptserve's format, and serves
// testharness.js — exercising the real spawn → drain → port-parse → readiness → stop path without a
// WPT checkout or Python wptserve deps.
const FAKE_WPT = `import http.server, socketserver, signal, sys
class H(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/resources/testharness.js":
            self.send_response(200); self.end_headers(); self.wfile.write(b"// ok")
        else:
            self.send_response(404); self.end_headers()
    def log_message(self, *a): pass
srv = socketserver.TCPServer(("127.0.0.1", 0), H)
port = srv.server_address[1]
print("[2026-07-19 10:00:00,000 http on port %d] INFO - Starting http server on http://127.0.0.1:%d" % (port, port), flush=True)
signal.signal(signal.SIGINT, lambda *a: sys.exit(0))
srv.serve_forever()
`;

const python = Bun.which("python3");

test.skipIf(!python)("startWptServer parses the bound port, becomes ready, and stop() is idempotent", async () => {
  const suitePath = mkdtempSync(join(tmpdir(), "wpt-fake-"));
  writeFileSync(join(suitePath, "wpt"), FAKE_WPT);

  const server = await startWptServer(suitePath, { readyTimeoutMs: 10_000 });
  try {
    expect(server.host).toBe("127.0.0.1");
    expect(server.httpPort).toBeGreaterThan(0);
    expect(server.origin).toBe(`http://127.0.0.1:${server.httpPort}`);

    // The server the parsed port points at genuinely serves testharness.js.
    const resp = await fetch(`${server.origin}/resources/testharness.js`);
    expect(resp.status).toBe(200);
    await resp.body?.cancel();
  } finally {
    server.stop();
    server.stop(); // idempotent — must not throw
  }
});

test.skipIf(!python)("startWptServer throws (not hangs) when the server never reports a port", async () => {
  const suitePath = mkdtempSync(join(tmpdir(), "wpt-fake-"));
  // A `wpt` that exits immediately without ever logging a port.
  writeFileSync(join(suitePath, "wpt"), "import sys; sys.exit(0)\n");

  let error: unknown;
  try {
    await startWptServer(suitePath, { readyTimeoutMs: 2_000 });
  } catch (e) {
    error = e;
  }
  expect(String(error)).toContain("did not report a bound HTTP port");
});
