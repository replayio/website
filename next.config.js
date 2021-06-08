const devToolsHost =
  process.env.REPLAY_DEVTOOLS_HOST || "https://dc3tvimjwmdjm.cloudfront.net";
const directories = ["dist", "images", "downloads", "driver", "protocol"];
const files = ["view", "browser"];

const rewrites = [];
const headers = [];

rewrites.push({
  source: `/protocol/tot/:domain`,
  destination: `${devToolsHost}/protocol/tot/:domain/`
});

rewrites.push({
  source: "/discord",
  destination: "https://discord.gg/PFjtU3uv7M"
});

for (const directory of directories) {
  headers.push({
    source: `/${directory}/:rest*`,
    headers: [{ key: "cache-control", value: "s-maxage=1" }]
  });

  rewrites.push({
    source: `/${directory}/:rest*`,
    destination: `${devToolsHost}/${directory}/:rest*`
  });
}

for (const file of files) {
  headers.push({
    source: `/${file}`,
    headers: [{ key: "cache-control", value: "s-maxage=0" }]
  });

  rewrites.push({
    source: `/${file}/:rest*`,
    destination: `${devToolsHost}/${file}/:rest*`
  });

  // rewrite root directories when requested within child paths of each $file
  // /view/recordings/123-456-789/images/logo.svg => /images/logo.svg
  for (const directory of directories) {
    rewrites.push({
      source: `/${file}/:path*/${directory}/:rest*`,
      destination: `${devToolsHost}/${directory}/:rest*`
    });
  }
}

module.exports = {
  rewrites() {
    return rewrites;
  },
  headers() {
    return headers;
  }
};
