#!/usr/bin/env bash
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"
eshost="$here/node_modules/eshost"
cp "$here/src/eshost-elide/agent.elide.js" "$eshost/lib/agents/elide.js"
cp "$here/src/eshost-elide/runtime.elide.js" "$eshost/runtimes/elide.js"
echo "Installed elide host into $eshost"
