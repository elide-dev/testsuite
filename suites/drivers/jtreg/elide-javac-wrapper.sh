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
# A real pipeline, not `2> >(sed ...)`: the script must not exit before the filter has flushed
# javac's stderr, or golden-file comparisons intermittently see empty output.
{ "${ELIDE_JAVAC:-/opt/elide/bin/elide}" javac -- "${args[@]}" 2>&1 1>&3 3>&- \
  | sed -E '/^(\\u2705|\\u274c|✅|❌)[[:space:]]+/d' >&2; } 3>&1
status=${PIPESTATUS[0]}
set -e
exit "$status"
