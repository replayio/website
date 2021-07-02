import React, { useState } from "react";

export default function Feature({
  header = "",
  title,
  poster,
  videoSrc,
  children
}) {
  const [showControls, setControlVisibility] = useState(false);

  return (
    <div
      className="relative md:py-16 space-y-4 "
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #ECECEC 50%, #FFFFFF 100%)"
      }}
    >
      <div
        className="max-w-7xl mx-auto sm:px-6 lg:px-8"
        // style={{ paddingLeft: "200px" }}
      >
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 "
              style={{ "mix-blend-mode": "multiply;" }}
            ></div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 flex-col flex justify-center ">
            {/* <div className="text-center text-lg  font-bold tracking-tight sm:text-lg lg:text-xl">
              <span className="block text-blue-500">{header}</span>
            </div> */}
            <h3 className="mt-4 text-center text-2xl  tracking-tight sm:text-3xl lg:text-4xl text-gray-900 font-bold">
              {title}
            </h3>
            <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-900 sm:max-w-3xl my-8 font-light">
              {children}{" "}
            </p>
            <video
              className="rounded-lg "
              controls={showControls ? "1" : ""}
              onMouseEnter={() => setControlVisibility(true)}
              onMouseLeave={() => setControlVisibility(false)}
              // poster={poster}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
