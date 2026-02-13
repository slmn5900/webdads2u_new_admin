"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import designed1 from "@/app/assets/designed1.svg";
import designed2 from "@/app/assets/designed2.svg";
import designed3 from "@/app/assets/designed3.svg";
import designed4 from "@/app/assets/designed4.svg";
import designed5 from "@/app/assets/designed5.svg";
import designed6 from "@/app/assets/designed6.svg";
import designed7 from "@/app/assets/designed7.svg";
import designed8 from "@/app/assets/designed8.svg";
import designed9 from "@/app/assets/designed9.svg";
import designed10 from "@/app/assets/designed10.svg";
import linevictor from "@/app/assets/line-vector.svg";

const clients = [
  { name: "Food & Beverage", img: designed1 },
  { name: "Beauty & Wellness", img: designed2 },
  { name: "Travel & Hospitality", img: designed3 },
  { name: "Logistics & Transportation", img: designed4 },
  { name: "Manufacturing & Industrial", img: designed5 },
  { name: "Real Estate & Infrastructure", img: designed6 },
  { name: "Banking, Finance & Insurance", img: designed7 },
  { name: "E-commerce & Retail", img: designed8 },
  { name: "Healthcare & Medical Services", img: designed9 },
  { name: "Education & EdTech", img: designed10 },
];

export default function OurClients() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0" />

      <Image
        src={linevictor}
        alt="background lines"
        fill
        priority
        className="pointer-events-none"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:my-20 mt-10">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-lg text-gray-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Our Clients
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-[28px] md:text-5xl font-light leading-[1.02] text-white"
          >
            The Industries <br /> we serve
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10">
          {clients.map((client, i) => {
            const isOpen = activeIndex === i;

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-[141px] flex items-center justify-center overflow-hidden"
              >
                {/* Mobile PLUS/MINUS */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="absolute top-2 right-2 z-20 md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white"
                >
                  {isOpen ? "−" : "+"}
                </button>

                {/* Logo */}
                <Image
  src={client.img}
  alt={client.name}
  width={100}
  height={60}
  className={`
    w-[60px] md:w-[100px]
    h-auto
    transition-all duration-500
    ${isOpen ? "opacity-0 scale-90" : ""}
    md:group-hover:opacity-0 md:group-hover:scale-90
  `}
/>


                {/* Text Content */}
                <div
                  className={`
                    absolute inset-0 flex flex-col items-center justify-center text-center
                    transition-all duration-500 px-3
                    ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                    md:group-hover:opacity-100 md:group-hover:scale-100
                  `}
                >
                  <h3 className="text-[10px] md:text-4xl font-bold text-white tracking-wider">
                    {client.name.split("&")[0]}
                  </h3>

                  <p className="mt-3 text-[8px] md:text-sm text-gray-300 max-w-[220px]">
                    We provided them with a fully customized Website aiming
                    to make their business thrive.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
