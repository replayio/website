import { useEffect, useState } from "react";
import Head from "next/head";
import mixpanel from "mixpanel-browser";
import { Analytics } from "@vercel/analytics/react";
import TicTacToe from "../components/TicTacToe";

const Home = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const [animateSuccess, setAnimateSuccess] = useState(false);

  useEffect(() => {
    printWelcomeMessage();

    mixpanel.init("ffaeda9ef8fb976a520ca3a65bba5014", {
      track_pageview: "url-with-path"
    });
    mixpanel.track("Loaded first.replay.io");
  }, []);

  function printWelcomeMessage() {
    console.log("👋 Welcome to Replay!");
  }

  const handleClick = (step: number) => {
    setCurrentStep(step);
    const newCheckedItems = [...checkedItems];
    newCheckedItems[step - 1] = true;
    setCheckedItems(newCheckedItems);

    const allStepsCompleted = newCheckedItems.every((item) => item);
    setAnimateSuccess(allStepsCompleted);
  };

  return (
    <div className="bg-[url('/grandcanyon-delorean.jpeg')] bg-cover bg-center h-screen flex justify-center items-center relative overflow-hidden">
      <Analytics debug={false} />
      <Head>
        <title>⭐️ first.replay.io</title>
      </Head>

      {!showDiv && (
        <button onClick={() => setShowDiv(true)} className="get-started">
          Get started with Replay
        </button>
      )}

      {showDiv && (
        <div className="rounded-lg shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center z-50 p-2 box-border">
          <div className="m-12 text-center text-gray-800 ">
            <TicTacToe />
          </div>
        </div>
      )}

      {currentStep > 0 && (
        <div
          className="absolute z-20 p-2 transition-opacity duration-500 ease-in-out bg-white rounded-lg shadow-lg"
          style={{
            top: "50%",
            left: "51%",
            transform: "translateY(-50%)"
          }}
        ></div>
      )}
    </div>
  );
};

export default Home;
