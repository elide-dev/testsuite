#!/usr/bin/env bash
# Injects the custom "elide" host (agent + runtime) into the installed eshost
# package. Runs as the harness `postinstall`, so it fires after every
# `bun install`. eshost's upstream patch mechanism is intentionally not used:
# Bun's patchedDependencies applier mis-handles patches that add new files
# (wrong cwd + 0644 dir mode), so we copy the files in directly instead.
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"
eshost="$here/node_modules/eshost"

# eshost may not be installed yet (e.g. postinstall firing in a Docker layer
# before the package is present). Skip gracefully rather than failing install.
if [ ! -d "$eshost" ]; then
  echo "install-elide-host: eshost not installed yet at $eshost — skipping"
  exit 0
fi

cp "$here/src/eshost-elide/agent.elide.js" "$eshost/lib/agents/elide.js"
cp "$here/src/eshost-elide/runtime.elide.js" "$eshost/runtimes/elide.js"
echo "Installed elide host into $eshost"
