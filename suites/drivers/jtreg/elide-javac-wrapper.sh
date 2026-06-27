#!/usr/bin/env bash
set -euo pipefail
args=()
for arg in "$@"; do
  case "$arg" in
    -J*) ;;
    *) args+=("$arg") ;;
  esac
done
exec "${ELIDE_JAVAC:-/opt/elide/bin/elide}" javac -- "${args[@]}"
