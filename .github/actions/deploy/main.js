const { spawnSync } = require("child_process");

const OUT_DIR = "out/";

function spawnChecked(...args) {
  console.log(`spawnSync`, args[0], args[1].join(" "));
  const rv = spawnSync.apply(this, args);
  if (rv.status != 0 || rv.error) {
    throw new Error(`Spawned process failed: ${rv.error}`);
  }
}

function uploadDir(src, dst) {
  dst = dst || src;
  spawnChecked(
    "aws",
    [
      "s3",
      "cp",
      "--recursive",
      OUT_DIR + src,
      `s3://recordreplay-website/${dst}`
    ],
    {
      stdio: "inherit"
    }
  );
}

function upload(src, dst) {
  dst = dst || src;
  spawnChecked(
    "aws",
    ["s3", "cp", OUT_DIR + src, `s3://recordreplay-website/${dst}`],
    { stdio: "inherit" }
  );
}

function invalidateCloudFront() {
  spawnChecked(
    "aws",
    [
      "cloudfront",
      "create-invalidation",
      "--distribution-id",
      "E3U30CHVUQVFAF",
      "--paths",
      "/*"
    ],
    { stdio: "inherit" }
  );
}

// function ensureEnv(env) {
//   const envIsSet = !!process.env[env];
//   if (!envIsSet) {
//     throw new Error(`Environment variable ${env} is not set`);
//   }

//   const val = process.env[env];
//   if (val === "") {
//     throw new Error(`${env} is empty`);
//   }

//   return val;
// }

spawnChecked("npm", ["install"]);
spawnChecked("npm", ["run", "export"]);

uploadDir("demo");
upload("tos.html");
upload("privacy.html");

invalidateCloudFront();
