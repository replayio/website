function SubHeader() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="text-black block">A little different.</span>
          <span className="text-blue-500 block">A whole lot better.</span>
        </h2>
      </div>
    </div>
  );
}

function Feature({ title, content }) {
  return (
    <div>
      <dt className="text-xl leading-6 font-semibold text-gray-900">{title}</dt>
      <dd className="mt-2 text-xl text-gray-500">{content}</dd>
    </div>
  );
}

function FeatureGroup({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="lg:grid lg:grid-cols-3 lg:gap-12">
        <div>
          <h2 className="text-4xl lg:text-3xl font-extrabold text-blue-500">
            {title}
          </h2>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
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
    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col mx-8 lg:mx-0">
      <div className="relative text-lg font-medium  md:flex-grow">
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
    <main
      className="bg-white space-y-32"
      style={{ paddingTop: "300px", paddingBottom: "100px" }}
    >
      <FeatureGroup title="How it works">
        <Feature
          title={`Record everything`}
          content={`Replay doesn't just capture video. It records all events at the lowest levels so you have everything you need to fix bugs in a single link. All without needing to reproduce the issue.`}
        />
        <Feature
          title={`Comment on anything`}
          content={`With Replay, you can add a comment on a place in the video, a point in time, a mouse event, or even a line of code. And everyone on your team can jump in using their favorite browser.`}
        />
        <Feature
          title={`Add print statements anywhere`}
          content={`Because Replay is a time-travel debugger, you can add a print statements to any point in time without having to refresh the application and replicate the steps. You won't want to go back to the old way.`}
        />
        <FeatureQuote
          name={`Brian Vaughn`}
          position={`React Maintainer`}
          picture={"https://replay.io/brianv.jpg"}
          content={`Replay is going to be amazing for library maintainers. We'll no longer need to ask for repro instructions with bug reports – we can just ask for the recording.`}
        />
      </FeatureGroup>
    </main>
  );
}

// "say it with a link" sounds great
