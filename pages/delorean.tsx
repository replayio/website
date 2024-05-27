import { useEffect, useState } from "react";
import Head from "next/head";
import StepContent from "../components/StepContent";
import Icons from "../components/Icons";
import mixpanel from "mixpanel-browser";
import { Analytics } from "@vercel/analytics/react";

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

      <div
        className={`absolute top-0 ${
          showDiv ? "left-0" : "-left-1/2"
        } w-1/2 h-full bg-white transition-all duration-500 ease-in-out flex justify-center items-center z-0 p-5 box-border`}
      >
        <div className="m-12 text-left text-gray-800">
          <div
            className={`mb-0 text-4xl font-bold ${
              currentStep < 3 ? "animated-gradient-text" : ""
            }`}
          >
            3 easy steps
          </div>
          <span className="mb-12 text-gray-500 text-md">
            (and you already did one!)
          </span>

          <ol className="mt-12 leading-7">
            <li className={`my-4 ${checkedItems[0] ? "checked" : ""}`}>
              <strong className="text-lg">1. Start recording</strong>
              <p className="my-1">
                You probably already did this step! If not, go to your terminal
                and type
                <br />
                <code className="p-1 bg-gray-200 rounded">
                  npx replayio@latest record first.replay.io
                </code>
              </p>
            </li>
            <li className={`my-4 ${checkedItems[1] ? "checked" : ""}`}>
              <strong className="text-lg">2. Click around</strong>
              <p className="my-1">
                By clicking, you're adding user events that we can inspect in
                the replay.
              </p>
              <ul>
                {[1, 2, 3].map((step) => (
                  <li
                    key={step}
                    className={`flex items-center my-2 ${
                      checkedItems[step - 1] ? "checked" : ""
                    }`}
                  >
                    <div className="w-5 h-5 mr-2.5 flex justify-center items-center">
                      <Icons
                        type={checkedItems[step - 1] ? "check" : "circle"}
                      />
                    </div>
                    <a href="#" onClick={() => handleClick(step)}>
                      {step === 1 && "Click me first"}
                      {step === 2 && "Network Events"}
                      {step === 3 && "Console logs"}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={`my-4 ${checkedItems[2] ? "checked" : ""}`}>
              <strong className="text-lg">3. Stop recording</strong>
              <p
                className={`my-1 ${
                  animateSuccess ? "animated-gradient-text" : ""
                }`}
              >
                All done! Go back to your terminal and press any key to stop
                recording.
              </p>
            </li>
          </ol>
        </div>
      </div>

      {currentStep > 0 && (
        <div
          className="absolute z-20 p-5 transition-opacity duration-500 ease-in-out bg-white rounded-lg shadow-lg"
          style={{
            width: "300px",
            top: "50%",
            left: "51%",
            transform: "translateY(-50%)"
          }}
        >
          <StepContent currentStep={currentStep} />
        </div>
      )}
    </div>
  );
};

export default Home;
