#!/usr/bin/env bash
set -euo pipefail
exec "${JTREG_JAVA:-java}" "$@"
