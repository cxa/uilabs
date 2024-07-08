import child_process from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const dir = process.argv[2];
if (!dir) throw Error("Target not specified!");
const input = path.join(dir, "index.html");
const projName = path.basename(dir);
const distDirName = "build";
const distRootDir = path.join(import.meta.dirname, distDirName);
const distProjDir = path.join(distRootDir, projName);

try {
  // Wipe out old dist files
  await fs.rm(distProjDir, { recursive: true, force: true });
  await fs.mkdir(distProjDir, { recursive: true });
} catch (e) {
  console.error(`failed to remove ${distProjDir}: ${e}`);
}

// Copy file that not ruquired to build in `public` first
const cmd = `pnpm parcel build  public/* --dist-dir ${distRootDir} --no-cache && pnpm parcel build ${input} --dist-dir ${distProjDir} --public-url /uilabs/${projName} --no-cache && pnpm gh-pages -d ${distDirName}`;
const opts = {
  shell: true,
  stdio: "inherit",
  env: { ...process.env, POSTHTML_INCLUDE_PROJ: projName },
};

console.info(`Performing ${cmd}`);
child_process.spawn(cmd, opts);
