import Image from "next/image";

function SubHeader() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="text-black block">Record Once</span>
          <span className="text-blue-500 block">Never Reproduce</span>
        </h2>
      </div>
    </div>
  );
}

function Feature({ title, content, type, picture }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900";
  const bodyColor = type == "dark" ? "text-white" : "text-gray-900";
  return (
    <div>
      <dt className={`text-xl leading-6 ${headerColor}`}>{title}</dt>

      <dd className="my-6 px-2 sm:px-4 md:px-16 lg:px-16 text-xl w-xl font-light ${bodyColor}">
        {content}
      </dd>

      <div class="flex-shrink-0 inline-flex rounded-full mt-8">
        <img class="h-full w-full shadow-lg rounded-md" src={picture} alt="" />
      </div>
    </div>
  );
}

function FeatureGroup({ title, children, type }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900";

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="lg:gap-24 text-center">
        <div>
          <h2
            className={`text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl ${headerColor}`}
          >
            {title}
          </h2>
        </div>
        <div className="mt-0 lg:col-span-2">
          <dl className="space-y-12">{children}</dl>
        </div>
      </div>
    </div>
  );
}

function Quote({ content, name, position, picture }) {
  return (
    <div class="flex flex-col" style={{ maxWidth: "600px" }}>
      <blockquote class="flex-grow text-xl flex flex-col space-y-6">
        <div class="relative  flex-grow">
          <p class="relative py-0 text-xl text-gray-500">{content}</p>
        </div>
        <footer>
          <div class="flex items-start">
            <div class="flex-shrink-0 inline-flex rounded-full">
              <img class="h-12 w-12 rounded-full" src={picture} alt="" />
            </div>
            <div class="text-xl font-medium ml-4">
              <div class="text-gray-600">{name}</div>
              <div class="text-gray-600">{position}</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

function FeatureQuote({ name, position, picture, style, content }) {
  return (
    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col mx-8 lg:mx-12">
      <div className="relative text-lg font-light italic  md:flex-grow">
        <svg
          className="absolute top-0 left-0 transform -translate-x-10 -translate-y-2 h-8 w-8 text-blue-500"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <Quote {...{ name, position, picture, style, content }} />
      </div>
    </blockquote>
  );
}

export default function Features() {
  return (
    <main className="bg-white space-y-16" style={{ paddingTop: "360px" }}>
      {/* <SubHeader /> */}
      <div className="my-0 sm:my-12">
        <FeatureGroup title="Capture the session">
          <Feature
            title={``}
            content={`Replay records the low-level events needed to replay the browser as it ran before. You'll never need to repro again!`}
            picture={"/recording.png"}
          />
        </FeatureGroup>
      </div>
      <div className="py-6 sm:py-4">
        <FeatureGroup title="Collaborate in context">
          <Feature
            title={``}
            content={`When you share a replay with the team, they have the context needed to discuss what went wrong and why it happened. `}
            picture={"/viewing.png"}
          />
        </FeatureGroup>
      </div>
      <div className="pt-6 pb-24 sm:py-4">
        <FeatureGroup title="Debug with DevTools">
          <Feature
            title={``}
            content={`Replays include the DevTools you expect, so that you can view console logs, inspect elements, and even add print statements after the fact. `}
            picture={"/devtools.png"}
          />
        </FeatureGroup>
      </div>
    </main>
  );
}

// "say it with a link" sounds great
