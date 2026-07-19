import { createServer } from "node:net";
import { mkdtempSync, writeFileSync } from "node:fs";
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
  /** Terminate the server and free its port. Idempotent. */
  stop(): void;
}

const HOST = "127.0.0.1";

async function freePort(): Promise<number> {
  return await new Promise<number>((resolvePort, reject) => {
    const probe = createServer();
    probe.on("error", reject);
    probe.listen(0, HOST, () => {
      const addr = probe.address();
      const port = typeof addr === "object" && addr ? addr.port : 0;
      probe.close(() => (port ? resolvePort(port) : reject(new Error("no port"))));
    });
  });
}

/** Poll `origin` until it answers or the deadline passes. */
async function waitReady(origin: string, deadlineMs: number): Promise<boolean> {
  const probeUrl = `${origin}/resources/testharness.js`;
  while (Date.now() < deadlineMs) {
    try {
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
  const httpPort = await freePort();
  const httpsPort = await freePort();
  const origin = `http://${HOST}:${httpPort}`;

  // Minimal override merged over wptserve's built-in config (serve.py `_default`): bind to
  // loopback, skip the subdomain connectivity check, and disable TLS (the pregenerated cert is for
  // web-platform.test, which we are not using here). The https listeners fail to start under
  // ssl.type "none" and are logged-and-skipped by wptserve; the http listener serves regardless.
  const configDir = mkdtempSync(join(tmpdir(), "wpt-serve-"));
  const configPath = join(configDir, "config.json");
  writeFileSync(
    configPath,
    JSON.stringify({
      browser_host: HOST,
      alternate_hosts: {},
      check_subdomains: false,
      // wptserve requires two ports each for http/https. We serve on http[0]; the extra http port
      // and the (never-bound, ssl-disabled) https ports auto-pick to avoid collisions.
      ports: { http: [httpPort, "auto"], https: [httpsPort, "auto"] },
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
      // wptserve forks multiprocessing child servers and reaps them on its KeyboardInterrupt
      // (SIGINT) handler; a plain SIGTERM to the parent would orphan those children (the ports
      // stay bound). Escalate to SIGKILL only if it does not exit promptly.
      proc.kill("SIGINT");
      const grace = setTimeout(() => {
        try {
          proc.kill("SIGKILL");
        } catch {
          // already gone
        }
      }, 5000);
      void proc.exited.finally(() => clearTimeout(grace));
    } catch {
      // already gone
    }
  };

  const deadline = Date.now() + (opts.readyTimeoutMs ?? 30_000);
  const ready = await waitReady(origin, deadline);
  if (!ready) {
    stop();
    let tail = "";
    try {
      tail = await new Response(proc.stderr).text();
    } catch {
      // ignore
    }
    throw new Error(`wptserve did not become ready at ${origin}\n${tail.slice(-2000)}`);
  }
  log(`wptserve ready at ${origin}`);
  return { origin, host: HOST, httpPort, stop };
}
