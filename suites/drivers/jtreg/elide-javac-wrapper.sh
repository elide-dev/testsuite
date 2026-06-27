#!/usr/bin/env bash
set -euo pipefail
exec "${ELIDE_JAVAC:-/opt/elide/bin/elide}" javac -- "$@"
