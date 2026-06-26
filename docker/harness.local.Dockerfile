# syntax=docker/dockerfile:1
# Build context must contain ./.elide-bin/elide (staged by bin/run).
# node:25-trixie (Debian 13, glibc 2.41) — Elide's binary requires GLIBC >= 2.39.
FROM node:25-trixie
RUN npm install -g bun@1
COPY .elide-bin/elide /opt/elide/bin/elide
RUN chmod +x /opt/elide/bin/elide
ENV PATH=/opt/elide/bin:$PATH

WORKDIR /opt/harness
COPY harness/package.json harness/bun.lock ./
COPY harness/patches ./patches
RUN bun install --frozen-lockfile
COPY harness/ ./

WORKDIR /work
ENTRYPOINT ["bun", "run", "/opt/harness/src/cli.ts"]
