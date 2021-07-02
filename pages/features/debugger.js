import React, { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Feature from "./components/Feature";

function Hero() {
  const [showControls, setControlVisibility] = useState(false);

  return (
    <div className="relative md:py-16 space-y-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 "
              style={{ "mix-blend-mode": "multiply;" }}
            ></div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 flex-col flex justify-center ">
            <h1 className="text-center text-xl  tracking-tight sm:text-xl lg:text-2xl">
              <span className="block text-blue-500">Debugger</span>
            </h1>
            <p className="mt-4 text-center text-2xl  tracking-tight sm:text-3xl lg:text-4xl text-gray-900 font-bold">
              Retroactive Print Statements
            </p>
            <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-900 sm:max-w-3xl my-8 font-light">
              Debugging with print statements typically includes editing,
              re-running, and hoping you reproduce the bug. With Replay, you
              click and immediately see the messages in the console as if you
              had the log there all along.
            </p>
            <video
              className="rounded-lg "
              controls={showControls ? "1" : ""}
              onMouseEnter={() => setControlVisibility(true)}
              onMouseLeave={() => setControlVisibility(false)}
              // poster="/video/print-statements.png"
            >
              <source src="/video/print-statements.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className="space-y-8">
        <div className="">
          <Header />
          <Hero />
        </div>
        <div className="py-8 ">
          <Feature
            header="1"
            title="Jump to the point"
            poster="/video/breakpoints.png"
            videoSrc="/video/breakpoints.mp4"
          >
            The problem with breakpoints is that when you pause you can only go
            forward. When you add a breakpoint in Replay, you can jump forward
            and backward.
          </Feature>
        </div>
        <div className="py-8 ">
          <Feature
            header="2"
            title="Add a comment"
            poster="/video/comments.png"
            videoSrc="/video/comments.mp4"
          >
            Comments are pinned to the code so it's easy to discuss the
            application context at that specific point in time.
          </Feature>
        </div>
        <div className="py-8 ">
          <Feature
            header="3"
            title="Evaluate in the Console"
            poster="/video/evaluations.png"
            videoSrc="/video/evaluations.mp4"
          >
            Hover on a variable in the editor and evaluate expressions in the
            console. What's magical about Replay is that you can rewind to the
            root cause and debug it directly.
          </Feature>
        </div>
        <Footer />
      </div>
    </>
  );
}
