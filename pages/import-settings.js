function launchMigrationWizard(e) {
  e.preventDefault();
  document.querySelector("#migrationFrame").src = "replay:migrate";
  window.addEventListener("focus", function nav() {
    document.location.href = e.target.href;
    window.removeEventListener("focus", nav);
  });
}

export default function ImportSettings() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative overflow-hidden text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Import Settings to{" "}
          <div className="inline-block">
            Replay
            <svg
              className=""
              style={{ width: "160px" }}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 16"
              width="400"
              height="16"
            >
              <defs>
                <linearGradient
                  id="a"
                  y1="13.69"
                  x2="435.45"
                  y2="13.69"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.91716 0 0 .7708 .27 .687)"
                >
                  <stop offset="0" stop-color="#616eb3" />
                  <stop offset=".5" stop-color="#ec1067" />
                  <stop offset="1" stop-color="#f6901e" />
                </linearGradient>
              </defs>
              <path
                vector-effect="non-scaling-stroke"
                d="M3.12 14c161-19.73 207.41 3 223.21-.65 16.76-3.85 20-6.77 31.28-10.29 18.08-5.64-2.49 13.2 8.14 10.71 16.45-3.84 27.73-7.39 39.25-9.4 15-2.6-2 22.49 87.48-2.37"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                stroke="url(#a)"
              />
            </svg>
          </div>
        </h1>
        <h2 style={{ width: "660px" }} className="text-xl mt-4 text-gray-600">
          Import your cookies, passwords, and bookmarks from another browser to
          quickly get started with Replay.
        </h2>

        <a
          type="button"
          href="https://replay.io/view"
          className="inline-block appearance-none w-36 mt-8 mx-4 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={launchMigrationWizard}
        >
          Import
        </a>
        <a
          type="button"
          href="https://replay.io/view"
          className="inline-block appearance-none w-36 mt-8 mx-4 px-5 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Skip
        </a>
        <iframe id="migrationFrame" />
      </div>
    </div>
  );
}
