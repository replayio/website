import Image from "next/image";
const testimonials = [
  {
    name: "Kyle Matthews",
    title: "Founder/CEO, Gatsby",
    avatar: "/kyle.jpg",
    body:
      "The hardest part of debugging is first understanding the problem. Replay gives you powerful tools for dissecting problems so bugs get fixed fast—and stay fixed."
  },
  {
    name: "Brian Vaughn",
    title: "React Maintainer",
    avatar: "/brianv.jpg",
    body:
      "Replay is going to be amazing for library maintainers. We'll no longer need to ask for repro instructions with bug reports – we can just ask for the recording."
  },
  {
    name: "Harald K.",
    title: "Senior Program Manager, VS Code",
    avatar: "/harald.jpg",
    body:
      "Replay is one of these experiences that first feels like magic – but after squashing your first bugs with it, you will quickly wonder how you ever worked without it."
  }
];

function Link({ href, children }) {
  return (
    <a href={href} className="underline text-blue-700 hover:text-gray-900">
      {children}
    </a>
  );
}

function Testimonial({ testimonial }) {
  const { body, title, avatar, name } = testimonial;
  return (
    <div className="pt-8 pb-12 mx-4 flex-col justify-center sm:px-6 md:flex md:flex-col md:pb-16 ">
      <blockquote
        className="mt-6 md:flex-grow md:flex md:flex-col self-center inline-block"
        style={{ width: "600px" }}
      >
        <div className="relative text-lg font-medium text-gray-500 md:flex-grow ">
          <svg
            className="absolute top-0 left-0 transform -translate-x-6 -translate-y-2 h-6 w-6 text-blue-500"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p
            className="relative"
            dangerouslySetInnerHTML={{ __html: body }}
          ></p>
        </div>
        <footer className="mt-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 inline-flex rounded-full border-2 border-blue">
              <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-base font-bold text-gray-500 ">{name}</div>
              <div className="text-base font-medium text-gray-500">{title}</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}
function Feature({ title, content, link, type, picture }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900";
  const bodyColor = type == "dark" ? "text-white" : "text-gray-900";
  return (
    <div>
      <dt className={`text-xl leading-6 ${headerColor}`}>{title}</dt>

      <dd className="my-6 px-2 sm:px-4 md:px-16 lg:px-16 text-xl w-xl font-light ${bodyColor}">
        {content} {link}
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
        <FeatureGroup title="Capture the whole session">
          <Feature
            title={``}
            content={`Replay records the low-level events needed to replay the browser as it ran before. You'll never need to repro again!`}
            picture={"/recording.png"}
            link={
              <Link href="https://www.notion.so/replayio/Technology-cc65abf5eb11443586abb4aa04345985">
                Learn more
              </Link>
            }
          />
        </FeatureGroup>
        <Testimonial testimonial={testimonials[0]} />
      </div>
      <div className="py-6 sm:py-4">
        <FeatureGroup title="Collaborate in context">
          <Feature
            title={``}
            content={`With Replay, you can add a comment in the video, an event, or even a line of code. Then you can share with your team using a simple link to get everyone on the same page.`}
            picture={"/viewing.png"}
          />
        </FeatureGroup>
        <Testimonial testimonial={testimonials[1]} />
      </div>
      <div className="pt-6 pb-24 sm:py-4">
        <FeatureGroup title="Debug with DevTools">
          <Feature
            title={``}
            content={`With Replay, you can view console logs, inspect elements, and even add print statements after the fact. It's all there so you can find the bugs faster.`}
            picture={"/devtools.png"}
          />
        </FeatureGroup>
        <Testimonial testimonial={testimonials[2]} />
      </div>
    </main>
  );
}

// "say it with a link" sounds great
