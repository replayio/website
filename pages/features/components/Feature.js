export default function Feature({
  header = "",
  title,
  poster,
  videoSrc,
  children
}) {
  return (
    <div
      className="relative md:py-16 space-y-8"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #ECECEC 50%, #FFFFFF 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 "
              style={{ "mix-blend-mode": "multiply;" }}
            ></div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 flex-col flex justify-center ">
            <div className="text-center text-xl  tracking-tight sm:text-xl lg:text-2xl">
              <span className="block text-blue-800">{header}</span>
            </div>
            <h3 className="mt-4 text-center text-2xl  tracking-tight sm:text-3xl lg:text-4xl text-gray-900 font-bold">
              {title}
            </h3>
            <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-900 sm:max-w-3xl my-8 font-light">
              {children}{" "}
            </p>
            <video className="rounded-lg " controls={"1"} poster={poster}>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
