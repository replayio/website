import { useEffect, useState } from "react";
import clsx from "clsx";

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
    console.log("Welcome to Replay!👋 Here are some things to try:");
    console.log("1. Clicking on a console message");
    console.log("2. Mousing over a line number");
    console.log("3. Adding a print statement!");
    console.log("");
    console.log("Say hi in Discord! replay.io/discord");
  }

  return (
    <div
      className={clsx(
        "fixed z-50 grid items-center justify-center w-full h-full",
        gameState === "ended" ? "bg-white text-black" : "text-white bg-black"
      )}
    >
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
            <div className="px-12 text-base italic quote">
              {gameState === "ended"
                ? "Well done! Now hit the stop button up top so we can pop the hood on your recording and check it out."
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
        className="absolute z-10 p-4 transition-opacity bg-gray-900 rounded-lg opacity-0 top-4 right-24"
      >
        Click REC to start recording! ⤴︎
      </div>
    </div>
  );
};
export default Game;
