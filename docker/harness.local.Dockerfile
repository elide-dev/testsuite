# syntax=docker/dockerfile:1
# Build context must contain ./.elide-install (an Elide install dir staged by bin/run).
# node:25-trixie (Debian 13, glibc 2.41) — Elide's binary requires GLIBC >= 2.39.
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
ARG JDK26_BASE_URL=https://download.java.net/java/GA/jdk26/c3cc523845074aa0af4f5e1e1ed4151d/35/GPL
RUN case "${TARGETARCH}" in \
      amd64) JDK_ARCH=x64 ;; \
      arm64) JDK_ARCH=aarch64 ;; \
      *) echo "unsupported TARGETARCH=${TARGETARCH}" >&2; exit 1 ;; \
    esac \
 && curl -fsSL "${JDK26_BASE_URL}/openjdk-26_linux-${JDK_ARCH}_bin.tar.gz" -o /tmp/jdk.tar.gz \
 && mkdir -p /opt/jdk-26 \
 && tar -xzf /tmp/jdk.tar.gz -C /opt/jdk-26 --strip-components=1 \
 && rm /tmp/jdk.tar.gz
ARG JTREG_VERSION=8.2.1+1
RUN curl -fsSL "https://builds.shipilev.net/jtreg/jtreg-${JTREG_VERSION}.zip" -o /tmp/jtreg.zip \
 && unzip -q /tmp/jtreg.zip -d /opt \
 && rm /tmp/jtreg.zip
COPY .elide-install /opt/elide
RUN chmod +x /opt/elide/bin/elide
ENV JAVA_HOME=/opt/jdk-26
ENV JTREG_HOME=/opt/jtreg
ENV PATH=/opt/jtreg/bin:/opt/jdk-26/bin:/opt/elide/bin:$PATH

WORKDIR /opt/harness
COPY harness/package.json harness/bun.lock ./
COPY harness/patches ./patches
RUN bun install --frozen-lockfile
COPY harness/ ./

WORKDIR /work
ENTRYPOINT ["bun", "run", "/opt/harness/src/cli.ts"]
