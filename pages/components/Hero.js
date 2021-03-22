import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Player from "@vimeo/player";
import { ReactSVG } from "react-svg";

function Video() {
  const [player, setPlayer] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const onClickHero = () => {
    setShowPlayer(true);
    player.play();
  };

  useEffect(() => {
    var options = {
      id: 527068688,
      width: 900,
      loop: false,
      transparent: true,
    };

    const newPlayer = new Player("replay-video", options);
    setPlayer(newPlayer);

    newPlayer.on("play", function () {
      console.log("played the video!");
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div id="replay-video" className={`${!showPlayer && "hidden"}`}></div>
      <div className="relative">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        >
          <ReactSVG
            // style={{
            //   position: "absolute",
            //   width: "40px",
            // }}
            width="40px"
            height="40px"
            wrapper="svg"
            src="/play-btn.svg"
          />
        </div>
        <img
          style={{
            width: "900px",
            boxShadow: "2px 3px 9px 2px #dcdcdc",
            borderRadius: "6px",
          }}
          className={`${showPlayer && "hidden"}`}
          src="/screenshot.png"
          onClick={() => onClickHero()}
        ></img>
      </div>
      {/* <iframe
        src="https://player.vimeo.com/video/527068688"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      {/* <ReactPlayer
        vimeo={{ controls: true }}
        // controls={true}
        url="https://player.vimeo.com/video/527068688"
      /> */}
  </div>
  );
}

export default function Hero() {
  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img src="https://replay.io/_next/image?url=%2Flogo.svg&w=64&q=75" />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
            >
              Join our beta list
            </a>
          </div>
        </div>
      </div>
      <div className="relative py-28 space-y-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-white"
                style={{ "mix-blend-mode": "multiply;" }}
              ></div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-gray-900">
                  Instant replay, meet X-ray vision.
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl my-8">
                Replay is a browser that lets you{" "}
                <span className="text-blue-500 font-bold">record</span> your
                website,{" "}
                <span className="text-blue-500 font-bold">discuss</span> with
                your team, and{" "}
                <span className="text-blue-500 font-bold">inspect</span> your
                code with next-gen devtools.
              </p>
            </div>
          </div>
        </div>
        <Video />
      </div>
    </header>
  );
}
