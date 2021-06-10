const host =
  process.env.REPLAY_DEVTOOLS_HOST || "https://dc3tvimjwmdjm.cloudfront.net";
const directories = ["dist", "images", "downloads", "driver", "protocol"];
const devToolsAppPath = "view";
const files = [devToolsAppPath];
const devToolsPaths = ["browser"];

const rewrites = [];
const headers = [];

rewrites.push({
  source: `/protocol/tot/:domain`,
  destination: `${host}/protocol/tot/:domain/`
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
    destination: `${host}/${directory}/:rest*`
  });
}

for (const file of files) {
  headers.push({
    source: `/${file}`,
    headers: [{ key: "cache-control", value: "s-maxage=0" }]
  });

  rewrites.push({
    source: `/${file}`,
    destination: `${host}/${file}`
  });
}

// Ensure all sub-paths are served by the app root
for (const devToolsPath of devToolsPaths) {
  // These first two are workarounds until devtools is updated for better pathing
  rewrites.push({
    source: `/${devToolsPath}/dist/:rest*`,
    destination: `${host}/dist/:rest*`
  });

  rewrites.push({
    source: `/${devToolsPath}/images/:rest*`,
    destination: `${host}/images/:rest*`
  });

  rewrites.push({
    source: `/${devToolsPath}/:rest*`,
    destination: `${host}/${devToolsAppPath}`
  });
}

module.exports = {
  rewrites() {
    return rewrites;
  },
  headers() {
    return headers;
  }
};
