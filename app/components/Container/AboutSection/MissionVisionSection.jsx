"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    content:
      "To build digital solutions that support business growth and change. We combine strong technology, smart design, and practical thinking to create solutions that address real challenges and deliver measurable value.",
  },
  {
    title: "Our Vision",
    content:
      "To be a reliable global technology partner, helping businesses move forward with scalable, innovative, and future-ready digital solutions that stand the test of time.",
  },
  {
    title: "Our Values",
    content:
      "We approach technology with intention, focusing on quality, consistency, and lasting impact. Open communication and honesty shape how we work and help us build long-term partnerships based on trust. By keeping users at the center and embracing continuous learning, we evolve with the digital landscape and deliver solutions that truly make a difference.",
  },
];

export default function MissionVisionSection() {
  const [active, setActive] = useState(0);
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-black px-4 md:px-30">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] h-[70%] bg-purple-600/30 blur-[120px]" />
      <div className="relative z-10  mx-auto  py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl  font-light leading-13">
            What Moves and Defines Us
          </h2>
        </div>
        <div className="space-y-8">
          {items?.map((item, index) => {
            const isOpen = active === index;
            return (
              <div key={index}>
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-2xl md:text-3xl font-light">
                    {item.title}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="opacity-70" />
                  ) : (
                    <ChevronDown className="opacity-70" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/80 max-w-xl">{item.content}</p>
                </div>
                {isOpen && <div className="mt-6 h-px w-full bg-white/40" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
