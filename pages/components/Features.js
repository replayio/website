import Quote from "./Quote";

function SubHeader() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="text-black block">
                        A little different.
                    </span>
                    <span className="text-blue-500 block">
                        A whole lot better.
                    </span>
                </h2>
            </div>
        </div>
    );
}

function Feature({ title, content }) {
    return (
        <div>
            <dt className="text-xl leading-6 font-semibold text-gray-900">
                {title}
            </dt>
            <dd className="mt-2 text-xl text-gray-500">{content}</dd>
        </div>
    );
}

function FeatureGroup({ title, children }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="lg:grid lg:grid-cols-3 lg:gap-24">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
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

export default function Features() {
    return (
        <main className="bg-gray-100 space-y-32">
            <SubHeader />
            <FeatureGroup title="Built for teams">
                <Feature
                    title={`The universal translator your team has been missing`}
                    content={`With Replay, everyone's on the same page. Your support team can file support tickets easier than before. Design and product can explain what they’re seeing without resorting to drawing diagrams and hand gestures. And developers get the best repro steps of their life.`}
                />
                <Feature
                    title={`Get to the point faster`}
                    content={`Replay lets you record your software and easily comment on anything. You can add a comment on a place in the video, a point in time, a mouse event, or even a line of code.  And it's all shared with a simple link that works in your everyday browser.`}
                />
                <Quote
                    name={`Brian Vaughn`}
                    position={`React Maintainer`}
                    picture={"https://replay.io/brianv.jpg"}
                    style={`bg-gray-200`}
                    content={`Replay is going to be amazing for library maintainers. We'll no longer need to ask for repro instructions with bug reports – we can just ask for the recording.`}
                />
            </FeatureGroup>
            <FeatureGroup title="Next level tech">
                <Feature
                    title={`Reproducible bug recordings, every time`}
                    content={`Replay records browser input at the lowest levels. This means your team has everything they need in a single link, from any element in the UI to any line of code.`}
                />
                <Feature
                    title={`Time-travel debugging, today`}
                    content={`Because Replay is a time-travel debugger, you can debug any point in time without having to refresh the application and replicate the steps. Magic!`}
                />
                <Quote
                    name={`Gleb Bahmutov`}
                    position={`Cypress Distinguished Engineer`}
                    picture={"https://replay.io/gleb.png"}
                    style={`bg-gray-200`}
                    content={`Debugging intermittent tests in Replay will be a game changer. The debugger feels like hopping into Doc Brown’s DeLorean!`}
                />
            </FeatureGroup>
        </main>
    );
}

// "say it with a link" sounds great
