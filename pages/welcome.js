import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Download() {
                href="/downloads/replay.dmg"
                className="inline-flex items-center font-bold justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Download Replay for Mac
              </a>
            </div>
          </div>
          <div className="my-4 italic text-gray-500">
            Linux support coming soon!!
          </div>
          <div className="mt-20">
            <Image src="/recording.png" width="800px" height="560px" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
