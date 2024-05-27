import React, { useState } from "react";
import Head from "next/head";
import FetchData from "../components/FetchData";
import Icons from "../components/Icons"; // Import the Icons component

const Home = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);

  const handleClick = (step: number) => {
    setCurrentStep(step);
    const newCheckedItems = [...checkedItems];
    newCheckedItems[step - 1] = true;
    setCheckedItems(newCheckedItems);

    if (step === 3) {
      setShowSuccess(true);
      setAnimateSuccess(true);
      setShowSuccess(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.midjourney.com/e6834ba8-9d4e-4986-b928-7766a11f42cd/0_0.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Head>
        <title>⭐️ first.replay.io</title>
      </Head>

      {!showDiv && (
        <button onClick={() => setShowDiv(true)} className="get-started">
          Get started with time travel
        </button>
      )}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: showDiv ? 0 : "-50%",
          width: "50%",
          height: "100%",
          backgroundColor: "white",
          transition: "left 0.5s ease-in-out",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="m-12 text-left text-gray-800">
          <div
            className={`mb-0 text-4xl font-bold ${
              currentStep < 3 ? "animated-gradient-text" : ""
            }`}
          >
            Time travel in 3 easy steps
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
                <li
                  className={`flex items-center my-2 ${
                    checkedItems[0] ? "checked" : ""
                  }`}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icons type={checkedItems[0] ? "check" : "circle"} />
                  </div>
                  <a href="#" onClick={() => handleClick(1)}>
                    Click me first
                  </a>
                </li>
                <li
                  className={`flex items-center my-2 ${
                    checkedItems[1] ? "checked" : ""
                  }`}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icons type={checkedItems[1] ? "check" : "circle"} />
                  </div>
                  <a href="#" onClick={() => handleClick(2)}>
                    Network Events
                  </a>
                </li>
                <li
                  className={`flex items-center my-2 ${
                    checkedItems[2] ? "checked" : ""
                  }`}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Icons type={checkedItems[2] ? "check" : "circle"} />
                  </div>
                  <a href="#" onClick={() => handleClick(3)}>
                    Console logs
                  </a>
                </li>
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
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "300px",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
            padding: "20px",
            zIndex: 2,
            transition: "opacity 0.5s ease-in-out"
          }}
        >
          {currentStep === 1 && (
            <div>
              <h3 className="font-bold text-pink-600">Capturing events</h3>
              <p>
                Replay captured that mouse event so we can inspect it later.
              </p>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h3 className="font-bold text-pink-600">Network events</h3>
              <p>
                When you clicked this we made an API call we can inspect later:
              </p>
              <div className="text-xs">
                <FetchData />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h3 className="font-bold text-pink-600">
                Console logs (on the fly!)
              </h3>
              <p>
                Replay allows you to set console logs on the fly, which is a
                game changer. We'll show you how once you're done recording.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
