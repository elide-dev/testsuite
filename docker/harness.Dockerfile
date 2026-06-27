# syntax=docker/dockerfile:1
ARG ELIDE_REF=ghcr.io/elide-dev/elide:nightly
FROM ${ELIDE_REF} AS elide

# node:25-trixie (Debian 13, glibc 2.41) — Elide's binary requires GLIBC >= 2.39,
# so an older base (e.g. the default bookworm/2.36) cannot run the copied-in binary.
FROM node:25-trixie
RUN npm install -g bun@1
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
      ca-certificates \
      curl \
      git \
      python3 \
      unzip \
 && rm -rf /var/lib/apt/lists/*
ARG TARGETARCH
RUN case "${TARGETARCH}" in \
      amd64) JDK_URL=https://download.oracle.com/graalvm/25/archive/graalvm-jdk-25.0.3_linux-x64_bin.tar.gz ;; \
      arm64) JDK_URL=https://download.oracle.com/graalvm/25/archive/graalvm-jdk-25.0.3_linux-aarch64_bin.tar.gz ;; \
      *) echo "unsupported TARGETARCH=${TARGETARCH}" >&2; exit 1 ;; \
    esac \
 && curl -fsSL "${JDK_URL}" -o /tmp/jdk.tar.gz \
 && mkdir -p /opt/graalvm-jdk-25.0.3 \
 && tar -xzf /tmp/jdk.tar.gz -C /opt/graalvm-jdk-25.0.3 --strip-components=1 \
 && rm /tmp/jdk.tar.gz
ARG JTREG_VERSION=8.2.1+1
RUN curl -fsSL "https://builds.shipilev.net/jtreg/jtreg-${JTREG_VERSION}.zip" -o /tmp/jtreg.zip \
 && unzip -q /tmp/jtreg.zip -d /opt \
 && rm /tmp/jtreg.zip
COPY --from=elide /opt/elide /opt/elide
ENV JAVA_HOME=/opt/graalvm-jdk-25.0.3
ENV JTREG_HOME=/opt/jtreg
ENV PATH=/opt/jtreg/bin:/opt/graalvm-jdk-25.0.3/bin:/opt/elide/bin:$PATH

WORKDIR /opt/harness
COPY harness/package.json harness/bun.lock ./
COPY harness/patches ./patches
RUN bun install --frozen-lockfile
COPY harness/ ./

WORKDIR /work
ENTRYPOINT ["bun", "run", "/opt/harness/src/cli.ts"]
