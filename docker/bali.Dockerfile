# syntax=docker/dockerfile:1
# Match Elide's Linux/Debian harness environment; stock Java is Bali's oracle.
FROM eclipse-temurin:25.0.2_10-jdk@sha256:1bda4d9e668f44f399abed30636c34e0befb727408fba27b1e6aaefcf9df346b AS reference
FROM node:25-trixie@sha256:b6cf8d20ee78aa10f0a6b98242e26d547869801abd6bc3f7094b0a54301dee02
RUN npm install -g bun@1.4.0 \
 && apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates curl git unzip \
      libzstd1 libfreetype6 fontconfig libx11-6 libxext6 libxi6 libxrender1 libxtst6 libasound2t64 \
 && rm -rf /var/lib/apt/lists/*
COPY --from=reference /opt/java/openjdk /opt/reference-jdk
ENV JAVA_HOME=/opt/reference-jdk
ENV PATH=/opt/reference-jdk/bin:$PATH
# The shared harness (cli.ts, expectations, ratchet, reports) needs its dependencies;
# the Elide-host postinstall is irrelevant for Bali and is skipped.
WORKDIR /work/harness
COPY harness/package.json harness/bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts
COPY harness/src ./src
WORKDIR /work
# registry.toml, manifests/, expectations/, reports/, and .harness/ are bind-mounted at
# run time, exactly as for the Elide harness container.
ENTRYPOINT ["bun", "/work/harness/src/cli.ts"]
