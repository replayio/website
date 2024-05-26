"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";
import mixpanel from "mixpanel-browser";

export default function Analytics() {
  useEffect(() => {
    LogRocket.init("4sdo4i/firstreplayio");
    mixpanel.init("ffaeda9ef8fb976a520ca3a65bba5014", {
      track_pageview: "url-with-path"
    });
    mixpanel.track("Loaded first.replay.io");
  }, []);

  return (
    <>
      {/* <script
        async
        src="https://analytics.umami.is/script.js"
        data-website-id="a88c4537-f122-4018-9956-8b9f6db92a7b"
      ></script> */}
      {/* <script
        async
        src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"
      ></script> */}
    </>
  );
}
