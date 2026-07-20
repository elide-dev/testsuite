import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

/**
 * A running WPT server (wptserve) sidecar. `.any.js` fetch tests resolve relative URLs against the
 * document location and fetch WPT resources / stateful handlers; without a real server they die in
 * setup ("Failed to parse URL"). The two runtimes that actually run `fetch/api` — Deno and workerd
 * — both run upstream Python wptserve as a sidecar; this mirrors that.
 *
 * Scope of this cut: HTTP only, bound to `127.0.0.1`, subdomain checks off. That un-gates the
 * same-origin fetch tests (the majority) with no `/etc/hosts` dependency, so it runs identically
 * locally and in the container. Cross-origin (subdomain) and `.https` / `.h2` tests still fail —
 * they need the `web-platform.test` subdomain aliases and a client that trusts WPT's CA (an Elide
 * TLS-trust concern), and are gated in `expectations/wpt-wintertc.toml`.
 */
export interface WptServer {
  /** Same-origin base, e.g. `http://127.0.0.1:8123`. */
  origin: string;
  host: string;
  httpPort: number;
  /** Terminate the server (and its child listeners) and clean up. Idempotent. */
  stop(): void;
}

const HOST = "127.0.0.1";

// wptserve tags each listener line "[<ts> <scheme> on port <port>] ...". Reading the bound port
// from the log (rather than pre-allocating one) removes the bind-then-hope-it's-free TOCTOU race.
const MAIN_HTTP_PORT_RE = /\bhttp on port (\d+)\]/;
const CAPTURE_CAP = 8192;

/**
 * Port of the primary HTTP listener from wptserve's log output. The regex matches only the `http`
 * scheme tag — never `http-local`/`http-public`/`https` nor the `http://…` message text. Null until
 * that line appears.
 */
export function parseMainHttpPort(logText: string): number | null {
  const m = MAIN_HTTP_PORT_RE.exec(logText);
  return m ? Number(m[1]) : null;
}

/** Poll `origin` until it serves testharness.js or the deadline passes. */
async function waitReady(origin: string, deadlineMs: number): Promise<boolean> {
  const probeUrl = `${origin}/resources/testharness.js`;
  while (Date.now() < deadlineMs) {
    try {
      // Loopback is never routed through an HTTP proxy by Bun's fetch, so no proxy bypass is needed.
      const resp = await fetch(probeUrl, { signal: AbortSignal.timeout(1000) });
      await resp.body?.cancel();
      if (resp.status === 200) return true;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
}

/**
 * Start wptserve against `suitePath` (the WPT checkout) and wait until it serves. Throws if the
 * server does not come up within `readyTimeoutMs`. `bin/setup.ts` has already patched the checkout
 * to run `wpt serve` without a virtualenv.
 */
export async function startWptServer(
  suitePath: string,
  opts: { readyTimeoutMs?: number; log?: (msg: string) => void } = {},
): Promise<WptServer> {
  const log = opts.log ?? (() => {});

  // Override merged over wptserve's `_default` config: bind loopback explicitly (bind_address +
  // browser_host → 127.0.0.1, not 0.0.0.0), skip the subdomain check, auto-pick every port, and
  // disable TLS (the pregenerated cert is for web-platform.test). The ssl-"none" https listeners
  // fail to start and are logged-and-skipped; the http listener serves regardless.
  const configDir = mkdtempSync(join(tmpdir(), "wpt-serve-"));
  const configPath = join(configDir, "config.json");
  const cleanupConfig = (): void => {
    try {
      rmSync(configDir, { recursive: true, force: true });
    } catch {
      // best effort
    }
  };
  writeFileSync(
    configPath,
    JSON.stringify({
      browser_host: HOST,
      bind_address: true,
      alternate_hosts: {},
      check_subdomains: false,
      ports: { http: ["auto", "auto"], https: ["auto", "auto"] },
      ssl: { type: "none" },
    }),
  );

  const proc = Bun.spawn(
    ["python3", "./wpt", "serve", "--config", configPath, "--no-h2", "--doc_root", suitePath],
    { cwd: suitePath, stdout: "pipe", stderr: "pipe", stdin: "ignore" },
  );

  let stopped = false;
  const stop = (): void => {
    if (stopped) return;
    stopped = true;
    try {
      // wptserve forks multiprocessing child listeners and reaps them on its KeyboardInterrupt
      // (SIGINT) handler; a plain SIGTERM/SIGKILL of the parent would orphan them (ports stay
      // bound). SIGINT first for a clean reap; if it does not exit in time, SIGKILL the parent AND
      // pkill anything still holding this server's unique --config path (the forked children
      // inherit the parent's argv, so they carry it too) — no orphaned listeners survive.
      proc.kill("SIGINT");
    } catch {
      // already gone
    }
    const grace = setTimeout(() => {
      try {
        proc.kill("SIGKILL");
      } catch {
        // gone
      }
      try {
        Bun.spawn(["pkill", "-9", "-f", configPath], { stdout: "ignore", stderr: "ignore" });
      } catch {
        // pkill unavailable / nothing to kill
      }
      cleanupConfig();
    }, 5000);
    void proc.exited.finally(() => {
      clearTimeout(grace);
      cleanupConfig();
    });
  };

  const deadline = Date.now() + (opts.readyTimeoutMs ?? 30_000);

  // Drain both streams (so wptserve never blocks on a full pipe), capturing a bounded tail for
  // diagnostics and resolving the port as soon as the primary HTTP listener logs it.
  let capture = "";
  let resolvePort: (p: number | null) => void = () => {};
  const portFound = new Promise<number | null>((r) => {
    resolvePort = r;
  });
  const drain = async (stream: ReadableStream<Uint8Array> | undefined): Promise<void> => {
    if (!stream) return;
    const dec = new TextDecoder();
    try {
      for await (const chunk of stream) {
        const text = capture + dec.decode(chunk, { stream: true });
        const port = parseMainHttpPort(text);
        if (port !== null) resolvePort(port);
        capture = text.length > CAPTURE_CAP ? text.slice(-CAPTURE_CAP) : text;
      }
    } catch {
      // stream closed
    }
  };
  void drain(proc.stdout as ReadableStream<Uint8Array>);
  void drain(proc.stderr as ReadableStream<Uint8Array>);

  const port = await Promise.race([
    portFound,
    new Promise<null>((r) => setTimeout(() => r(null), Math.max(0, deadline - Date.now()))),
  ]);
  if (port === null) {
    stop();
    throw new Error(`wptserve did not report a bound HTTP port\n${capture.slice(-2000)}`);
  }

  const origin = `http://${HOST}:${port}`;
  const ready = await waitReady(origin, deadline);
  if (!ready) {
    stop();
    throw new Error(`wptserve did not become ready at ${origin}\n${capture.slice(-2000)}`);
  }
  log(`wptserve ready at ${origin}`);
  return { origin, host: HOST, httpPort: port, stop };
}
