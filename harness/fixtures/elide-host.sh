#!/usr/bin/env bash
# eshost calls: <hostPath> run --quiet <file>. Mount the file's dir, run in container.
file="${@: -1}"; dir="$(cd "$(dirname "$file")" && pwd)"; base="$(basename "$file")"
exec docker run --rm -v "$dir":/w -w /w --entrypoint /opt/elide/bin/elide \
  ghcr.io/elide-dev/elide:nightly run --quiet "/w/$base"
