import { useEffect, useState } from "react";
import Quote from "./Quote";

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
    title: "Product Manager, VS Code",
    avatar: "/harald.jpg",
    body:
      "Replay is one of these experiences that first feels like magic – but after squashing your first bugs with it, you will quickly wonder how you ever worked without it."
  },
  {
    name: "Geoffrey Litt",
    title: "PhD, programming tools",
    avatar: "/geoffrey.jpg",
    body:
      "Using Replay feels like living in the future. The ability to quickly find all the places that a print statement triggered and move between them is so useful for understanding what's happening.	"
  }
];

export default function Testimonials() {
  return (
    <div className="space-y-16">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center px-4 lg:hidden">
        What people are saying
      </h2>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-y-12 gap-x-16 sm:grid-rows-3 lg:grid-rows-1 sm:grid-cols-1 lg:grid-cols-3 ">
        {testimonials.map((testimonial) => (
          <div class="max-w-7xl mx-auto md:grid md:grid-cols-1 ">
            <Quote
              name={testimonial.name}
              picture={testimonial.avatar}
              position={testimonial.title}
              content={testimonial.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
