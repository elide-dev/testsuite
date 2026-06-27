#!/usr/bin/env bash
set -euo pipefail
args=()
for arg in "$@"; do
  case "$arg" in
    -J*) ;;
    *) args+=("$arg") ;;
  esac
done
set +e
"${ELIDE_JAVAC:-/opt/elide/bin/elide}" javac -- "${args[@]}" \
  2> >(sed -E '/^(\\u2705|\\u274c|✅|❌)[[:space:]]+/d' >&2)
status=$?
set -e
exit "$status"
