const people = [
  {
    name: "Jason Laster",
    role: "CEO",
    imageUrl: "/jason.jpeg",
    bio:
      "Jason has contributed to debuggers in several runtimes and prior to Replay was the tech lead for the Firefox Debugger. When not debugging the debugger, you’ll likely find him in the woodworking studio or outside with his pup Walle.",
    twitterUrl: "https://twitter.com/jasonlaster11/",
    linkedinUrl: "https://www.linkedin.com/in/jason-laster-6657167/"
  },
  {
    name: "Brian Hackett",
    role: "CTO",
    imageUrl: "/brian.jpg",
    bio:
      "Brian has had a longtime passion for helping people understand hugely complex software systems, starting with a Stanford Ph.D. and continuing through 10 years at Mozilla, where he worked on JavaScript VM optimizations and developed a precursor to Replay.  He is a nomadic adventurer and enjoys sailing around Polynesia and van travel in the western US with his wife.",
    twitterUrl: null,
    linkedinUrl: null
  },
  {
    name: "Dan Miller",
    role: "Software Engineer",
    imageUrl: "/dan.jpeg",
    bio: `Dan started his career at Etsy where he worked on PHP runtimes and type systems and has been trying to help developers be more productive ever since. When not trying to express the "is a hot dog a sandwich" question using types, he can probably be found hiking or skiing if the weather is nice, otherwise he's probably playing Super Smash Bros.`,
    twitterUrl: "https://twitter.com/jazzdan",
    linkedinUrl: "https://www.linkedin.com/in/dan-miller-b3790211/"
  },
  {
    name: "Kannan Vijayan",
    role: "Software Engineer",
    imageUrl: "/kannan.png",
    bio:
      "Kannan has implemented everything from an IrDA stack for Blackberry devices, to an mRNA sequence analysis platform for biology researchers, to a Javascript JIT for Firefox.  Outside of work hours, he is learning his way around creating a nature preserve and small personal farm in a 100-acre patch of exploited land in rural Canada.  He has always had his feet in two different worlds at any given time and aims to keep it that way.",
    linkedinUrl: "https://www.linkedin.com/in/kannan-vijayan-30695622/"
  },
  {
    name: "Logan Smyth",
    role: "Software Engineer",
    imageUrl: "/logan.png",
    bio:
      "Logan loves diving into complex systems, and before Replay he helped maintain BabelJS, and worked on Firefox's developer tools at Mozilla. Outside work he loves playing games, reading, and finding interesting new things to learn about.",
    twitterUrl: "https://twitter.com/loganfsmyth",
    linkedinUrl: "https://www.linkedin.com/in/logan-smyth-82a98012/"
  },
  {
    name: "Holger Benl",
    role: "Software Engineer",
    imageUrl: "/holger.png",
    bio:
      "Holger explored the world of programming languages from 6502 machine code to extracting LISP programs from mathematical proofs. These days he's mostly interested in creating developer tools. When he's not working on Replay or one of his VSCode extensions, he likes to read political blogs and books and watch asian movies."
  },
  {
    name: "Jon Bell",
    role: "Designer",
    imageUrl: "/jon.jpeg",
    bio:
      "Jon has been excited about designing things on the internet since the 80s, and has led design teams at Twitter and Windows Phone. He lives in windy Wellington, New Zealand with his large family and loves writing, teaching classes, playing soccer, and trying to remember how to play the clarinet.",
    twitterUrl: "https://twitter.com/JonBell",
    linkedinUrl: "https://www.linkedin.com/in/jon-bell-733310138/"
  }
];

function LinkedIn(props) {
  if (!props.linkedinUrl) {
    return null;
  }

  return (
    <li>
      <a href={props.linkedinUrl} className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">LinkedIn</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  );
}

function Twitter(props) {
  if (!props.twitterUrl) {
    return null;
  }
  return (
    <li>
      <a href={props.twitterUrl} className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Twitter</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>
    </li>
  );
}

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="text-xl text-gray-500">
              We're a distributed company, founded by people who have spent many
              years working on fully distributed teams. We work across the
              globe, so we focus less on hours and more on building a great
              product. We build for the long term: it's a relay, not a sprint.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    <ul className="flex space-x-5">
                      <Twitter twitterUrl={person.twitterUrl} />
                      <LinkedIn linkedinUrl={person.linkedinUrl} />
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
