import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import Head from "next/head";

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
        "fixed z-50 grid items-center justify-center w-full h-full",
        gameState === "ended" ? "bg-white text-black" : "text-white bg-black"
      )}
    >
      <Head>
        <title>⭐️ Your first replay</title>
      </Head>
      <div className="z-40 flex flex-col min-h-screen pt-16 pb-12 main">
        <main className="flex flex-col justify-center flex-grow w-full max-w-2xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="py-16 space-y-12 text-center">
            <div className="space-y-2">
              <h1 className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">
                {gameState === "ended"
                  ? "Great Scott!"
                  : "Can you get 3 of a kind?"}
              </h1>
            </div>
            <div className="z-40 grid grid-cols-3 gap-4 place-items-center">
              {cards.map((c, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const newCards = [...cards];
                    newCards[i] = getRandomCard(possibleCards.indexOf(c));
                    setCards(newCards);
                  }}
                  className={`w-32 h-32 bg-cover border-4 border-white rounded-full ${c}`}
                ></button>
              ))}
            </div>
            <div className="px-20 text-base italic quote">
              {gameState === "ended"
                ? "Well done! Now stop the recording and we'll upload it."
                : "If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious shit."}
            </div>
            <div className="text-xs italic">
              Awesome illustrations by{" "}
              <a href="https://www.iconfinder.com/iconsets/back-to-the-future">
                Veiga Studio
              </a>
            </div>
          </div>
        </main>
      </div>
      <div
        id="recMessage"
        className="absolute z-10 px-4 py-2 font-bold text-white transition-opacity bg-blue-500 rounded-lg opacity-100 top-4 right-24"
      >
        Start and stop recordings here! <span className="text-xl">⤴︎</span>
      </div>
    </div>
  );
};
export default Game;
