import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Kyle Matthews",
    title: "Founder / CEO of Gatsby",
    avatar: "/kyle.jpg",
    body:
      "The hardest part of debugging is first understanding the problem. Replay gives you powerful tools for dissecting problems so bugs get fixed fast—and stay fixed.",
  },
  {
    name: "Brian Vaughn",
    title: "React Maintainer",
    avatar: "/brianv.jpg",
    body:
      "Replay is going to be amazing for library maintainers. We'll no longer need to ask for repro instructions with bug reports– we can just ask for the recording.",
  },
  {
    name: "Harald K.",
    title: "Product Manager at VS Code	",
    avatar: "/harald.jpg",
    body:
      "Replay is one of these experiences that first feels like magic – but after squashing your first bugs with it, you will quickly wonder how you ever worked without it.",
  },

  {
    name: "Shawn swyx wang",
    title: "Sr. Dev Advocate at AWS",
    avatar: "/shawn.jpg",
    body:
      "Imagine if you could retroactively insert logs and breakpoints to all bug reports. That's Replay.",
  },

  {
    name: "Geoffrey Litt",
    title: "PhD programming tools	",
    avatar: "/geoffrey.jpg",
    body:
      "Using Replay feels like living in the future. The ability to quickly find all the places that a print statement triggered and move between them is so useful for understanding what's happening.	",
  },
];

const colors = [
  {
    lightColor: "text-pink-100",
    primaryColor: "text-pink-500",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    lightColor: "text-fuchsia-100",
    primaryColor: "text-fuchsia-500",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    lightColor: "text-green-100",
    primaryColor: "text-green-400",
    gradient: "from-green-400 to-cyan-500",
  },
  {
    lightColor: "text-cyan-100",
    primaryColor: "text-cyan-400",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    lightColor: "text-orange-100",
    primaryColor: "text-orange-400",
    gradient: "from-orange-400 to-pink-600",
  },
];

function Testimonial({ name, title, avatar, body, offset, index }) {
  const [rotation, setRotation] = useState();
  useEffect(() => {
    const num = (6 + Math.random(10)) / 10;
    const dir = Math.random() > 0.5 ? "-" : "";
    setRotation(`rotate(${dir}${num}deg) translateZ(0px)`);
  }, []);

  const { primaryColor, gradient, lightColor } = colors[index % colors.length];

  return (
    <li
      className="px-3 md:px-4 flex-none testimonial"
      style={{ transform: `translateX(${offset}px) translateZ(0px)` }}
      // style="transform: "
    >
      <figure
        className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
        style={{ width: "550px", transform: rotation }}

        // style="transform: "
      >
        <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
          <svg
            width="45"
            height="36"
            className={`mb-5 fill-current ${primaryColor} opacity-40`}
          >
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
          </svg>
          <p>{body}</p>
        </blockquote>
        <figcaption
          className={`${gradient} flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white `}
        >
          <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <img
              src={avatar}
              alt=""
              className="w-12 h-12 rounded-full bg-orange-100"
              loading="lazy"
            />
          </div>
          <div className="flex-auto">
            {name}
            <br />
            <span className={lightColor}>{title}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

export default function Testimonials() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOffset(offset < -3000 ? 0 : offset - 0.7);
    }, 20);

    return () => clearTimeout(timeout);
  }, [offset]);

  return (
    <div className="relative testimonials py-20">
      <div
        className="absolute  bg-gray-50 pointer-events-none top-0"
        style={{ width: "100%", height: "40%" }}
      ></div>
      <div className="flex overflow-hidden -my-8">
        <ul className="flex items-center w-full py-8">
          {[
            ...testimonials,
            ...testimonials,
            ...testimonials,
            ...testimonials,
          ].map((testionial, i) => (
            <Testimonial {...testionial} offset={offset} key={i} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
