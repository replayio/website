import React, { useEffect, useState, useRef } from "react";
import Player from "@vimeo/player";
import { ReactSVG } from "react-svg";

function useMedia(query) {
  if (!window) {
    return null;
  }

  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // cDM, cDU
  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener();
  }, [query]);

  return matches;
}

function Video() {
  const [player, setPlayer] = useState(null);
  const imgNode = useRef(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const onClickHero = () => {
    setShowPlayer(true);
    player.play();
  };

  useEffect(() => {
    const width = imgNode.current.getBoundingClientRect().width;

    var options = {
      id: 527068688,
      width,
      loop: false,
      transparent: true
    };

    const newPlayer = new Player("replay-video", options);
    setPlayer(newPlayer);

    newPlayer.on("play", function () {
      console.log("played the video!");
    });
  }, []);

  return (
    <div className="flex justify-center pb-12 mx-4 lg:mx-0">
      <div
        id="replay-video"
        className={`${!showPlayer && "hidden"} overflow-hidden rounded-md`}
      ></div>
      <div className="relative cursor-pointer" onClick={() => onClickHero()}>
        <img
          style={{
            width: "900px",
            boxShadow: "2px 3px 9px 2px #dcdcdc",
            borderRadius: "6px"
          }}
          className={`${showPlayer && "hidden"}`}
          src="/screenshot.png"
          ref={imgNode}
        />
        {!showPlayer ? (
          <div className="w-min absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90">
            <ReactSVG
              className="transform scale-50"
              width="180px"
              height="180px"
              wrapper="svg"
              src="/play-btn.svg"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Hero() {

  return (
    <div  style={{marginBottom: "-340px"}}>
      <div className="relative md:py-16 space-y-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 "
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
                <span className="text-blue-500 font-bold">debug</span> your
                application with next-gen devtools.
              </p>
            </div>
          </div>
        </div>
        <Video />
      </div>
    </div>
  );
}
