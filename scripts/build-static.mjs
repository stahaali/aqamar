import { existsSync, renameSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";

const apiDir = "src/app/api";
const bakDir = "src/_api_bak";

function run(cmd) {
  execSync(cmd, { stdio: "inherit", shell: true });
}

if (existsSync(apiDir)) {
  renameSync(apiDir, bakDir);
}

try {
  // Stale .next route types still reference /api/contact after moving it
  if (existsSync(".next")) {
    rmSync(".next", { recursive: true, force: true });
  }
  run("npx prisma generate");
  run("npx next build");
} finally {
  if (existsSync(bakDir)) {
    renameSync(bakDir, apiDir);
  }
}
