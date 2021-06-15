import Image from "next/image";

export default function WelcomeToReplay() {
  return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative overflow-hidden text-center">
        <Image width="38px" height="38px" src="/logo.svg" alt="" />

            <h1 className="text-5xl font-bold text-gray-800 mt-8">
              Maintenance
            </h1>
            <h2 style={{width: "660px"}} className="text-xl mt-4 text-gray-600">
              Please check back in a couple of minutes.
            </h2>
        </div>
      </div>
  );
}
