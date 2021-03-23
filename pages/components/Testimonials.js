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

function Testimonial({ children }) {
    return <div className="bg-gray-200 p-4">{children}</div>;
}

export default function Testimonials() {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-x-4">
            {testimonials.map((testimonial) => (
                <Quote
                    name={testimonial.name}
                    picture={testimonial.avatar}
                    position={testimonial.title}
                    content={testimonial.body}
                />
            ))}
        </div>
    );
}
