import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import Head from "next/head";
// import LogRocket from "logrocket";
import mixpanel from "mixpanel-browser";
import { Analytics } from "@vercel/analytics/react";

const Game = () => {
  const [gameState, setGameState] = useState<"initial" | "ended">("initial");
  const possibleCards = ["doc", "clocktower", "delorean", "hoverboard"];
  const [cards, setCards] = useState(["doc", "clocktower", "delorean"]);
  const getRandomCard = (cardIndexToAvoid: number) => {
    const randomIndex = Math.floor(Math.random() * possibleCards.length);
    if (randomIndex !== cardIndexToAvoid) {
      return possibleCards[randomIndex];
    }
    return getRandomCard(cardIndexToAvoid);
  };

  useEffect(() => {
    // LogRocket.init("4sdo4i/firstreplayio");
    mixpanel.init("ffaeda9ef8fb976a520ca3a65bba5014", {
      track_pageview: "url-with-path"
    });
    mixpanel.track("Loaded first.replay.io");
  }, []);

  useEffect(() => {
    printWelcomeMessage();
  }, []);

  useEffect(() => {
    if (gameState === "ended") {
      return;
    }
    if (cards.every((c) => c === cards[0])) {
      setGameState("ended");
    }
  }, [cards]);

  useEffect(() => {
    // preload images
    possibleCards.forEach((c) => {
      new Image().src = `/demo/demo_${c}.png`;
    });
  }, []);

  function printWelcomeMessage() {
    console.log("Welcome to Replay!👋 Here's how to get started");
    console.log("1. Hover over this line");
    console.log(
      "2. Notice the rewind/fast forward button to the left? Click it."
    );
    console.log(
      "3. Now the source code will appear on the left. Click the plus icon to add a print statement."
    );
    console.log("");
    console.log("Say hi in Discord: replay.io/discord");
  }

  return (
    <div
      className={clsx(
        "fixed z-50 grid items-start justify-start w-full h-full",
        gameState === "ended"
          ? "bg-blue-200 text-black"
          : "text-white bg-gray-800"
      )}
    >
      <Head>
        <title>⭐️ Your first replay</title>
      </Head>
      <Analytics debug={false} />
      <div className="z-40 flex flex-col min-h-screen pt-6 pb-12 m-6 prose main">
        <main className="flex flex-col justify-start flex-grow w-full max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
          <h1 className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">
            Three steps to your first replay
          </h1>
          <section className="my-8 space-y-2">
            <h2 className="text-lg font-medium">
              1. Start recording this page
            </h2>
            <p>
              <code className="p-2 text-white bg-gray-900 rounded">
                npx replayio@latest record first.replay.io
              </code>{" "}
              is how to record from your terminal.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-lg font-medium">2. Click around!</h2>
            <p>
              By clicking, you're adding user events that we can inspect in the
              replay. <br />
              Try clicking these Back to the Future images to get three in a
              row:
            </p>
            <div className="z-40 grid grid-cols-5 gap-1 mt-3">
              {cards.map((c, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const newCards = [...cards];
                    newCards[i] = getRandomCard(possibleCards.indexOf(c));
                    setCards(newCards);
                  }}
                  className={`w-24 h-24 bg-cover border-4 border-white rounded-full ${c}`}
                ></button>
              ))}
            </div>
          </section>
          <section className="space-y-0">
            <h2 className="text-lg font-medium">3. Stop recording</h2>

            <p>All done! Stop recording and we'll show you the replay.</p>
          </section>

          <section className="my-8">
            <h2 className="text-lg font-medium">Resources</h2>

            <p>
              If you need help, feel free to{" "}
              <a
                href="http://replay.io/discord"
                rel="noopener noreferrer"
                className="underline"
              >
                chat with us on Discord
              </a>
              ,{" "}
              <a
                href="http://replay.io/contact"
                rel="noopener noreferrer"
                className="underline"
              >
                file a ticket
              </a>
              , or read our{" "}
              <a
                href="https://docs.replay.io"
                rel="noopener noreferrer"
                className="underline"
              >
                documentation
              </a>
              . Happy time traveling!
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Game;
