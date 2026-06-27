# Ubuntu 24.04 (glibc 2.39) — Elide's binary requires GLIBC >= 2.39, so the
# default devcontainers bookworm base (glibc 2.36) cannot run Elide natively.
FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# Bun — the harness CLI runtime. Installed via the official installer (no npm
# dependency at the base layer), symlinked onto PATH for all users.
RUN curl -fsSL https://bun.sh/install | bash \
 && ln -sf /root/.bun/bin/bun /usr/local/bin/bun

# Elide (dev convenience; nightly channel). Actual compliance runs always pin a
# specific Elide via the harness image, regardless of this dev install.
RUN curl -fsSL https://elide.sh | bash -s - \
      --noninteractive --channel=nightly \
      --install-dir=/usr/local/elide --no-path \
 && ln -sf /usr/local/elide/elide /usr/local/bin/elide
