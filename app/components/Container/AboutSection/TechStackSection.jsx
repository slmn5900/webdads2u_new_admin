"use client";
import framework1 from "@/app/assets/framework1.svg";
import framework2 from "@/app/assets/framework2.svg";
import framework3 from "@/app/assets/framework3.svg";
import framework4 from "@/app/assets/framework4.svg";
import framework5 from "@/app/assets/framework5.svg";
import framework6 from "@/app/assets/framework6.svg";
import framework7 from "@/app/assets/framework7.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const techs = [
  { img: framework1 },
  { img: framework2 },
  { img: framework3 },
  { img: framework4 },
  { img: framework5 },
  { img: framework6 },
  { img: framework7 },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.6,
    },
  },
};

export default function TechStackSection() {
  return (
    <section className="relative  bg-black text-white overflow-hidden px-6 flex flex-col justify-center py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[60%] bg-purple-600/20 blur-[180px]" />
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mt-5 md:mt-0">
          Advanced Tech Stack for <br />
          Performance, Scalability & Innovation
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mt-3">
          Our team of experts is well-versed in advanced technologies and their
          right uses, ensuring no compromise on your business growth.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative z-10 mt-20
          w-full
          grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7
          gap-10
        "
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.18,
              boxShadow: "0 0 160px rgba(80,180,255,0.55)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="
      aspect-square
      rounded-3xl
      bg-linear-to-br from-white/10 via-white/5 to-white/0
      backdrop-blur-xl
      border border-white/10
      flex items-center justify-center
      relative overflow-hidden
      cursor-pointer
      origin-center
    "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
        absolute inset-0 rounded-3xl
        bg-white/5
        shadow-[inset_0_0_60px_rgba(80,180,255,0.35)]
      "
            />

            <Image
              src={tech.img}
              alt="tech"
              className="relative z-10 w-14 h-14 md:w-16 md:h-16 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
