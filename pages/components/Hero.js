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
            width: "1100px",
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
    <div style={{ marginBottom: "-340px" }}>
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
              <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="block text-gray-900 font-bold">
                  Debuggable bug reports
                </span>
              </h1>
              <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl my-8 font-light">
                Replay is a browser that records all of the context you need to
                fix bugs faster.
              </p>
              <div className="flex  justify-center">
                <a
                  className="inline-flex typeform-share text-center whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
                  href="https://form.typeform.com/to/jAaabLbi"
                  data-mode="drawer_right"
                  data-submit-close-delay="0"
                  target="_blank"
                >
                  Join our beta list
                </a>
              </div>
            </div>
          </div>
        </div>
        <Video />
        <Intro />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="bg-gray-100 p-6 sm:py-6 md:p-16 lg:p-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="lg:gap-24 text-center">
          <div>
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl text-gray-900">
              Stop reproducing bugs
            </h2>
          </div>
          <div className="mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dd className="my-6 px-2 sm:px-4 md:px-16 lg:px-16 text-xl w-xl font-light text-gray-900">
                  <p>
                    Discussing and reproducing bugs is time-consuming and
                    frustrating. When you record with Replay, we capture
                    everything in one place so your team can fix it as soon as
                    possible.
                  </p>
                  <p className="mt-4">
                    We've worked on Replay for five years and we'd love to hear
                    what you think!
                  </p>
                </dd>
                <figcaption className="sm:text-xl font-medium flex flex-col items-center">
                  <div className="p-1 border-2 border-light-blue-400 rounded-full mb-3">
                    <img
                      src="/jason.jpeg"
                      alt=""
                      className="w-10 h-10 rounded-full bg-light-blue-100"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-gray-900">
                    <a href="mailto:jason@replay.io">Jason Laster</a>
                  </div>
                  <div className="text-gray-500 font-light">
                    Co-founder, Replay
                  </div>
                </figcaption>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
