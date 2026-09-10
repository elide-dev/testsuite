import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

interface ReleaseAsset {
  id: number;
  name: string;
  digest: string | null;
  state: string;
}
export interface Release {
  id: number;
  tag_name: string;
  html_url: string;
  published_at: string;
  draft: boolean;
  prerelease: boolean;
  assets: ReleaseAsset[];
}
export function selectBaliRelease(release: Release) {
  if (release.draft || release.prerelease || !release.published_at)
    throw new Error("Expected a published stable Bali release");
  if (!/^v?\d+\.\d+\.\d+(?:[.+-][0-9A-Za-z.-]+)?$/.test(release.tag_name))
    throw new Error("Unexpected Bali release tag");
  const name = `bali-${release.tag_name.replace(/^v/, "")}-linux-amd64.tgz`;
  const assets = release.assets.filter((asset) => asset.name === name);
  if (assets.length !== 1) throw new Error(`Expected exactly one release asset: ${name}`);
  const asset = assets[0]!;
  if (!Number.isSafeInteger(asset.id) || asset.id <= 0 || asset.state !== "uploaded")
    throw new Error("Release asset is not ready for download");
  if (!asset.digest || !/^sha256:[a-f0-9]{64}$/.test(asset.digest))
    throw new Error("Release asset has no usable SHA-256 digest");
  return {
    repository: "elide-dev/bali",
    releaseId: release.id,
    tag: release.tag_name,
    url: release.html_url,
    publishedAt: release.published_at,
    platform: "linux-amd64",
    assetId: asset.id,
    assetName: name,
    sha256: asset.digest.slice(7),
  };
}
export async function verifyReleaseArchive(path: string, expected: string) {
  if (!/^[a-f0-9]{64}$/.test(expected)) throw new Error("Invalid expected SHA-256");
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  if (hash.digest("hex") !== expected) throw new Error("Bali release archive SHA-256 mismatch");
}
if (import.meta.main) {
  try {
    const [command, input, output] = Bun.argv.slice(2);
    if (command === "select" && input && output) {
      const selected = selectBaliRelease(await Bun.file(input).json());
      await Bun.write(output, JSON.stringify(selected, null, 2) + "\n");
      console.log(`${selected.tag}: ${selected.assetName} (${selected.sha256})`);
    } else if (command === "verify" && input && output) {
      const selected = await Bun.file(input).json();
      await verifyReleaseArchive(output, selected.sha256);
      console.log(`Verified ${selected.assetName}`);
    } else
      throw new Error(
        "usage: bali-release.ts select <release.json> <selection.json> | verify <selection.json> <archive>",
      );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 2;
  }
}
