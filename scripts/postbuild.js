import fs from "node:fs";
import path from "node:path";

const src = path.resolve(".output/public");
const dest = path.resolve("dist");

if (fs.existsSync(src)) {
  fs.cpSync(src, dest, { recursive: true, force: true });
  console.log("Successfully copied .output/public to dist");
}
