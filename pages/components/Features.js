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

function Feature({ title, content, type }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900"
  const bodyColor = type == "dark" ? "text-white" : "text-gray-900"
  return (
    <div>
      <dt className={`text-xl leading-6 font-semibold ${headerColor}`} >{title}</dt>
      <dd className={`mt-2 text-xl ${bodyColor}`}>{content}</dd>
    </div>
  );
}

function FeatureGroup({ title, children, type }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="lg:grid lg:grid-cols-3 lg:gap-24">
        <div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold ${headerColor}`}>
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
    <div class="flex flex-col" style={{maxWidth: "600px"}}>
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
      <svg className="absolute top-0 left-0 transform -translate-x-10 -translate-y-2 h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <Quote {...{ name, position, picture, style, content }} />
    </div>
    </blockquote>
  );
}

export default function Features() {
  return (
    <main className="bg-white space-y-16" style={{paddingTop: "300px"}}>
      {/* <SubHeader /> */}
      <div className="bg-blue-500 py-32">
      <FeatureGroup type="dark" title="How Replay Works">
        <Feature
          type="dark"
          title={`Record sessions`}
          content={`Capture the context you need to fix bugs in a single link.`}
        />
        <Feature
          type="dark"
          title={`Comment on anything`}
          content={`Add a comment in the video, a mouse event, or a line of code.`}
        />
        <Feature
          type="dark"
          title={`Debug with DevTools`}
          content={`Add a print statement and see the logs immediately in the console.`}
        />

      </FeatureGroup>        
      </div>
      <div className=" my-32 ">
      <FeatureGroup title="Built for teams">
        <Feature
          title={`The universal translator your team has been missing`}
          content={`With Replay, everyone's on the same page. Your support team can file support tickets easier than before. Design and product can explain what they’re seeing without resorting to drawing diagrams and hand gestures. And developers get the best repro steps of their life.`}
        />
        <Feature
          title={`Get to the point faster`}
          content={`Replay lets you record your software and easily comment on anything. You can add a comment on a place in the video, a point in time, a mouse event, or even a line of code.  And it's all shared with a simple link that works in your everyday browser.`}
        />
        <FeatureQuote
          name={`Brian Vaughn`}
          position={`React Maintainer`}
          picture={"https://replay.io/brianv.jpg"}
          content={`Replay is going to be amazing for library maintainers. We'll no longer need to ask for repro instructions with bug reports – we can just ask for the recording.`}
        />
      </FeatureGroup>
      </div>
      <div className=" my-32 ">


      <FeatureGroup title="Next level tech">
        <Feature
          title={`Reproducible bug recordings, every time`}
          content={`Replay records browser input at the lowest levels. This means your team has everything they need in a single link, from any element in the UI to any line of code.`}
        />
        <Feature
          title={`Time-travel debugging, today`}
          content={`Because Replay is a time-travel debugger, you can debug any point in time without having to refresh the application and replicate the steps. Magic!`}
        />
        <FeatureQuote
          name={`Gleb Bahmutov`}
          position={`Cypress Distinguished Engineer`}
          picture={"https://replay.io/gleb.png"}
          content={`Debugging intermittent tests in Replay will be a game changer. The debugger feels like hopping into Doc Brown’s DeLorean!`}
        />
      </FeatureGroup>
      </div>
    </main>
  );
}

// "say it with a link" sounds great
