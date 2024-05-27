import React, { useState } from "react";
import Head from "next/head";

const Home = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  const handleClick = () => {
    // Start fading out the button
    setButtonOpacity(0);
    // After the fade out transition, hide the div
    setTimeout(() => setShowDiv(true), 500); // 500ms for the fade out duration
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
        <title>Centered Button</title>
      </Head>
      {!showDiv && (
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#F02D5E",
            border: "none",
            borderRadius: "64px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
            zIndex: 1,
            opacity: buttonOpacity,
            transition: "opacity 0.5s ease-in-out" // Added transition for opacity
          }}
        >
          Learn to time travel
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
          <div className="mb-0 text-4xl text-pink-600">
            Time travel in 3 easy steps
          </div>
          <span className="mb-12 text-lg text-gray-500">
            (and you already did one!)
          </span>

          <ol className="mt-12 leading-7">
            <li className="mb-2.5">
              <strong className="text-lg">1. Start recording this page</strong>
              <p className="my-1">
                You probably already did this step! If not, go to your terminal
                and type
                <br />{" "}
                <code className="p-1 bg-gray-200 rounded">
                  npx replayio@latest record first.replay.io
                </code>
              </p>
            </li>
            <li className="mb-2.5">
              <strong className="text-lg">2. Click around!</strong>
              <p className="my-1">
                By clicking, you're adding user events that we can inspect in
                the replay.
                <br />
                Try clicking these Back to the Future images to get three in a
                row:
              </p>
            </li>
            <li className="mb-2.5">
              <strong className="text-lg">3. Stop recording</strong>
              <p className="my-1">
                All done! Stop recording and we'll show you the replay.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
