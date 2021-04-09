const testimonials = [
  {
    name: "Kyle Matthews",
    title: "Founder/CEO, Gatsby",
    avatar: "/kyle.jpg",
    body:
      "The hardest part of debugging is first understanding the problem. Replay gives you powerful tools for dissecting problems so bugs get fixed fast—and stay fixed."
  },
  {
    name: "Harald K.",
    title: "Senior Program Manager, VS Code",
    avatar: "/harald.jpg",
    body:
      "Replay is one of these experiences that first feels like magic – but after squashing your first bugs with it, you will quickly wonder how you ever worked without it."
  },
  {
    name: "Rachel Nabors",
    title: "Community Engineer, React Core Team",
    avatar: "/rachel.jpeg",
    body: `I had the privilege of seeing these demos recently, and my mind is blown 🤯 <br /> <br />These are the tools interaction devs have needed for years.`
  },
  {
    name: "Kenneth Auchenberg",
    title: "Developer Products, Stripe",
    avatar: "/kenneth.jpeg",
    body: `Replay is a true game-changer that enables every developer to do time-travel debugging.<br /><br /> Their work is the most significant leap forward for (web) debugging since we introduced the step debugger.`
  },
  {
    name: "Geoffrey Litt",
    title: "PhD, programming tools",
    avatar: "/geoffrey.jpg",
    body:
      "Using Replay feels like living in the future. The ability to quickly find all the places that a print statement triggered and move between them is so useful for understanding what's happening.	"
  },
  {
    name: "Desigan Chinniah",
    title: "Former Director of Platform Relations at Firefox",
    avatar: "/dees.jpeg",
    body: "After a decade of working on browser engines and web standards. I can confidently say that Replay will change the way teams engineer their code and collaborate across the entire organization."
  }
];

function Testimonial({ testimonial }) {
  const { body, title, avatar, name } = testimonial;
  return (
    <div className="py-12 mx-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-blue-500 lg:pr-16">
      <div className="md:flex-shrink-0">
        {/* <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" /> */}
      </div>
      <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
        <div className="relative text-lg font-medium text-white md:flex-grow">
          <svg
            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600"
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
            <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
              <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium text-white">{name}</div>
              <div className="text-base font-medium text-blue-200">{title}</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <section className="bg-blue-500">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  );
}
