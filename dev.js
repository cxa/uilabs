import child_process from "node:child_process";
import path from "node:path";

const dir = process.argv[2];
if (!dir) throw Error("Target not specified!");

const input = path.join(dir, "index.html");
const projDir = path.basename(dir);

child_process.spawn("pnpm", ["parcel", input], {
  stdio: "inherit",
  env: { ...process.env, POSTHTML_INCLUDE_PROJ: projDir },
});
