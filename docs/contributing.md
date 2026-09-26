# Contributing

## Local development

```bash
bun install            # installs root TypeScript/Bun types for bin/run.ts
bun run typecheck      # type-check the host launcher
cd harness
bun install            # applies the eshost `elide` host patch
bun test               # unit tests
bun run typecheck
```

Or open the repo in a GitHub Codespace / VS Code devcontainer, which provisions
Bun, Node, Docker-in-Docker, and Elide automatically.

## Layout

```
suites/test262/        Test262 (git submodule)
manifests/             curated suite slices for WPT, CPython, and jtreg
suites/drivers/        small bridge/wrapper programs used by external suites
expectations/          workload baselines + machine ratchets
reports/               committed per-version reports + top-level index
harness/               the Bun/TypeScript harness (src/, fixtures/, patches/)
docker/                harness images (image-ref + local install dir)
bin/run.ts             Bun/TypeScript launcher: resolve --elide → docker build → docker run
bin/run                executable alias for bin/run.ts
.devcontainer/         Codespaces dev environment
.github/workflows/     nightly + on-demand compliance runs, Pages publish
docs/superpowers/      design specs and implementation plans
```

