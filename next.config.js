const host =
  process.env.REPLAY_DEVTOOLS_HOST || "https://dc3tvimjwmdjm.cloudfront.net";
const directories = ["dist", "images", "downloads", "driver", "protocol"];

let maintenance = false;

const devToolsAppPath = "view";

const rewrites = [];
const headers = [];

rewrites.push({
  source: `/protocol/tot/:domain`,
  destination: `${host}/protocol/tot/:domain/`
});

if (maintenance) {
  rewrites.push({
    source: `/view`,
    destination: `/maintenance`
  });
}

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

const careersPage = "https://www.notion.so/replayio/Replay-is-Hiring-2459455b1ab1446da7f1458721ba128f";

module.exports = {
  rewrites() {
    return rewrites;
  },
  redirects() {
    return [
      {
        source: "/view/:slug*",
        destination: "https://app.replay.io/:slug*",
        permanent: true
      },
      {
        source: `/browser/:rest*`,
        destination: `https://app.replay.io/browser/:rest*`,
        permanent: true
      },
      {
        source: "/jobs",
        destination: careersPage,
        permanent: true,
      },
      {
        source: "/careers",
        destination: careersPage,
        permanent: true,
      }
    ];
  },
  headers() {
    return headers;
  }
};
