import Head from "next/head";
import Header from "./components/Header";
import Team from "./components/about-us/Team";
import Content from "./components/about-us/Content";

import BackgroundShapes from "./components/BackgroundShapes";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <BackgroundShapes />
          <Header />
          <Content title="About Replay" subTitle="OUR MISSION">
            <p className="mt-8 text-xl text-gray-500 leading-8">
              We believe people understand what they can see, and if you cannot
              see what your software is doing, you cannot understand it.
            </p>

            <p className="mt-8 text-xl text-gray-500 leading-8">
              Recording software so that you can replay it later is not a new
              idea. It is just incredibly difficult. We've been working on it
              for the past five years and have just recently gotten good at it.
            </p>

            <p className="mt-8 text-xl text-gray-500 leading-8">
              We see a world where collaborating with Replay is second nature.
              When an engineer gets stuck, they share a replay. When a test
              fails, a developer clicks a link to view the replay. When a
              question is asked on Stack Overflow, folks comment directly in the
              replay. When an issue is filed in Github, maintainers help
              directly in replay. You see where we’re going with this!
            </p>

            <p className="mt-8 text-xl text-gray-500 leading-8">
              We believe recording software at scale, will change the way
              software is understood. Recordings let us show type-hints in your
              editor and even suggest type improvements. Eventually, we can
              support the debugging process by suggesting hypothesis and
              eventually potential fixes.
            </p>

            <p className="mt-8 text-xl text-gray-500 leading-8">
              If you’re excited to be a part of this journey and think Replay
              could be a good fit for your team please reach out to us at{" "}
              <a className="text-indigo-600" href="mailto:hi@replay.io">
                hi@replay.io
              </a>
              .
            </p>
          </Content>
          <Team />
          <Footer />
        </div>
      </div>
    </>
  );
}
