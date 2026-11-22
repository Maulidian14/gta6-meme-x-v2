// Entry program for the make.fun bounty "Post a GTA 6 meme on X".
// It copies POST.json from this repository into the output directory.
// The house reads the post's address from there and grades the X post itself.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");
if (!existsSync(source)) {
  throw new Error(`POST.json not found in ${botDir}`);
}

// Fail loudly on a malformed post file instead of copying garbage.
const parsed = JSON.parse(readFileSync(source, "utf8")) as unknown;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  !(parsed as { url: string }).url.startsWith("https://")
) {
  throw new Error("POST.json must be an object with a url string starting with https://");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
console.log(`POST.json copied to ${outDir}`);
