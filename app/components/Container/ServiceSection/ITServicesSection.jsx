"use client";

import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";
import Image from "next/image";

const service = {
  label: "We Are Expert Of",
  title: "Digital Solutions",
  description:
    "We help brands grow online using modern digital strategies including SEO, paid ads, and AI-powered marketing solutions.",
  image: "https://assets.webdads2u.com/images/digital-solutions-services.jpg",
  children: [
    "Digital Marketing",
    "SEO",
    "LLM SEO",
    "GEO",
    "Local SEO",
    "Pay Per Click Ads",
    "E-mail Marketing",
    "App Store Optimization",
    "Social Media Marketing",
  ],
};

export default function ITServicesSection() {
  return (
    <MainLayout className="relative bg-black text-white py-28 overflow-hidden px-3 md:px-30">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-24"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-sm tracking-widest text-white/80 uppercase">
            {service.label}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold">{service.title}</h2>
      </motion.div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

          <button className="mt-8 w-fit px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-lg">
            Discover More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-3 text-lg"
        >
          {service.children.map((item, i) => (
            <li key={i} className="text-white/90 font-medium">
              • {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </MainLayout>
  );
}
