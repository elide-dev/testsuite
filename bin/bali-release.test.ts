import { expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { selectBaliRelease, verifyReleaseArchive, type Release } from "./bali-release";
const release = (): Release => ({
  id: 1,
  tag_name: "v0.4.0",
  html_url: "https://github.com/elide-dev/bali/releases/tag/v0.4.0",
  published_at: "2026-08-30T03:44:48Z",
  draft: false,
  prerelease: false,
  assets: [
    {
      id: 42,
      name: "bali-0.4.0-linux-amd64.tgz",
      digest: "sha256:" + "a".repeat(64),
      state: "uploaded",
    },
    {
      id: 43,
      name: "bali-0.4.0-linux-arm64.tgz",
      digest: "sha256:" + "b".repeat(64),
      state: "uploaded",
    },
  ],
});
test("latest release selection binds the exact Linux AMD64 asset and checksum", () => {
  expect(selectBaliRelease(release())).toMatchObject({
    tag: "v0.4.0",
    assetId: 42,
    sha256: "a".repeat(64),
    platform: "linux-amd64",
  });
  for (const bad of [
    { ...release(), draft: true },
    { ...release(), prerelease: true },
    { ...release(), assets: [] },
    { ...release(), tag_name: "v0.4.0\ninjected" },
  ])
    expect(() => selectBaliRelease(bad)).toThrow();
  const duplicate = release();
  duplicate.assets.push(duplicate.assets[0]!);
  expect(() => selectBaliRelease(duplicate)).toThrow("exactly one");
  const missing = release();
  missing.assets[0]!.digest = null;
  expect(() => selectBaliRelease(missing)).toThrow("SHA-256");
});
test("archive verification rejects corrupted downloads", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-release-"));
  try {
    const path = join(root, "distribution.tgz");
    await Bun.write(path, "downloaded bytes");
    await verifyReleaseArchive(path, createHash("sha256").update("downloaded bytes").digest("hex"));
    await expect(verifyReleaseArchive(path, "a".repeat(64))).rejects.toThrow("mismatch");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
