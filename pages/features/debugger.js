import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className="space-y-8">
        <div className="">
          <Header />

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
                    <span className="block text-blue-800">Debugger</span>
                  </h1>
                  <p className="mt-4 text-center text-2xl  tracking-tight sm:text-3xl lg:text-4xl text-gray-900 font-bold">
                    Adding Print Statements Retroactively
                  </p>
                  <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-900 sm:max-w-3xl my-8 font-light">
                    Developers debug with print statements, but typically that
                    means edit the code, refresh, re-run, and hope you
                    reproduce. With Replay, you can add a console.log and
                    immediately see the messages in the console.
                  </p>
                  <video
                    className="rounded-lg "
                    controls={"1"}
                    poster="/video/print-statements.png"
                  >
                    <source
                      src="/video/print-statements.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 ">
          <Feature
            header="1"
            title="Jumping to a breakpoint hit"
            poster="/video/breakpoints.png"
            videoSrc="/video/breakpoints.mp4"
          >
            The problem with breakpoints is that you pause and can only go
            forward. With Replay, you can add a breakpoint, see all of the hits,
            and jump to any point.
          </Feature>
        </div>
        <div className="py-12 ">
          <Feature
            header="2"
            title="Adding comments"
            poster="/video/comments.png"
            videoSrc="/video/comments.mp4"
          >
            When you leave a comment in Replay, the comment includes the point
            in time and location in the code. This makes it easy to see the
            context the comment was left in.
          </Feature>
        </div>
        <div className="py-12 ">
          <Feature
            header="3"
            title="Evaluating in the Console"
            poster="/video/evaluations.png"
            videoSrc="/video/evaluations.mp4"
          >
            When you pause in Replay it is like you're paused in the program the
            first time it ran. You can hover on a variable in the editor and
            evaluate expressions in the console.{" "}
          </Feature>
        </div>
        <Footer />
      </div>
    </>
  );
}
