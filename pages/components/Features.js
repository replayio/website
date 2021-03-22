function SubHeader() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="text-black block">A little different.</span>
          <span className="text-blue-500 block">A whole lot better.</span>
        </h2>
      </div>
    </div>
  )
}

function Feature({title, content}) {
  return (
    <div>
      <dt className="text-xl leading-6 font-semibold text-gray-900">
        {title}
      </dt>
      <dd className="mt-2 text-xl text-gray-500">
        {content}
      </dd>
    </div>
  )
}

function Quote({ content, name, position, picture }) {
  return (
    <div class="max-w-7xl mx-auto md:grid md:grid-cols-1 bg-gray-100 p-8">
      <div class="md:flex md:flex-col">
        <blockquote class="md:flex-grow text-base md:flex md:flex-col space-y-6">
          <div class="relative italic text-gray-500 md:flex-grow">
            <p class="relative py-0">
              {content}
            </p>
          </div>
          <footer>
            <div class="flex items-start">
              <div class="flex-shrink-0 inline-flex rounded-full">
                <img
                  class="h-12 w-12 rounded-full"
                  src={picture}
                  alt=""
                />
              </div>
              <div class="text-base font-medium ml-4">
                <div class="text-gray-500">
                  {name}
                </div>
                <div class="text-gray-400">
                  {position}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

function FeatureGroup({ title, children }) {
  return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-3 lg:gap-24">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900">
              {title}
            </h2>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {children}
            </dl>
          </div>
        </div>
      </div>
  );
}

export default function Features() {
  return (
    <main>
      <SubHeader />
      <FeatureGroup title="Built for teams">
        <Feature title={`The universal translator your team is missing`} content={`With Replay, your support team can file support tickets easier than before. Design and product can explain what they’re seeing without resorting to drawing diagrams and hand gestures. And engineers get the best repro steps of their life.`} />
        <Feature title={`Show & tell`} content={`Leave a comment on a button, a time in the video, a breakpoint, or even a line of code. Then tag your teammate to show them what you’re seeing. Try doing that with a screenshot or screen recording.`} />
        <Quote name={`Brian Vaughn`} position={`React Maintainer`} picture={"https://replay.io/brianv.jpg"} content={`"Replay is going to be amazing for library maintainers. We'll no longer need to ask for repro instructions with bug reports – we can just ask for the recording."`} />
      </FeatureGroup>
      <FeatureGroup title="Privacy first">
        <Feature title={`Public or private, it's up to you`} content={`Want a public link to ask a question on Stack Overflow? We’ve got you covered. Want to share with just one person, just your team, or just yourself? Piece of cake.`} />
        <Feature title={`Recording should be opt-in`} content={`Some products record everything, all the time, and store all that data in the cloud. Replay’s approach is different. We think screen recording should be opt-in, so you’re only recording the important stuff.`} />
        <Quote name={`Impressive Human`} position={`CEO, Company name`} picture={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=9n3ghHO8hO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} content={`"I work with highly sensitive data etc etc! We need a quote here!"`} />
      </FeatureGroup>
      <FeatureGroup title="Way cool tech">
        <Feature title={`Seriously, it's pretty nuts`} content={`We’ve been working on this for over five years, first at Mozilla and now as our own company. The more you understand the technical details of what we're doing, the more magical Replay becomes.`} />
        <Feature title={`Open source by design`} content={`Replay has been built from the ground up to allow lots of different interfaces and runtimes to plug into it. Stay tuned 🤓`} />
        <Quote name={`Gleb Bahmutov`} position={`Cypress Distinguished Engineer`} picture={"https://replay.io/gleb.png"} content={`"Debugging intermittent tests in Replay will be a game changer. The debugger feels like hopping into Doc Brown’s DeLorean!"`} />
      </FeatureGroup>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Interested?</span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700"
            >
              Hop on the beta list!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// "say it with a link" sounds great
