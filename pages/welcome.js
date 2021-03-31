import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Download() {
  return (
    <div className="bg-gray-50 flex flex-col h-full">
      <Header />
      <div
        className="flex flex-col align-center my-12"
        style={{ flex: "1 0 auto" }}
      >
        <div className="max-w-7xl mx-auto text-center py-8 my-12 flex-col justify-center px-4 sm:px-1 ">
          <h2 className="text-3xl">👋</h2>

          <p className="mt-4  text-center text-gray-500">
            Replay is currently in closed beta, <br /> so please do not download Replay unless you have been invited.
          </p>
          <div className="mt-12 flex justify-center">
            <div class="flex space-x-5">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/downloads/replay.dmg"
                  className="inline-flex items-center font-bold justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Download Replay for Mac
                </a>
              </div>

              <div className="inline-flex rounded-md shadow">
                <a
                  href="/downloads/linux-replay.tar.bz2"
                  className="inline-flex items-center font-bold justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Download Replay for Linux
                </a>
              </div>
            </div>
          </div>

          <p class="max-w-7xl mx-auto text-center py-8 my-1 px-4 sm:px-6">
            You should come say hi on{" "}
            <a class="underline" href="https://discord.com/invite/dtYw6urArk">
              our Discord
            </a>
            !
          </p>

          <div className="mt-20">
            <Image src="/recording.png" width="800px" height="560px" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
