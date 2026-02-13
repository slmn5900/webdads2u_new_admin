"use client";
import Image from "next/image";
import serviceBg from "@/app/assets/service-bg.svg";
import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <MainLayout className="relative w-full h-screen overflow-hidden">
      <Image
        src={serviceBg}
        alt="Services background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-6xl px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-xs tracking-widest text-white/80">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Services</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white font-light leading-tight text-4xl md:text-5xl"
          >
            We Build Powerful Digital Experiences <br />
            <span className="font-normal">
              That Help Your Business Grow Faster
            </span>
          </motion.h1>
          <p className="mt-6 max-w-2xl mx-auto  md:text-base text-gray-400 text-lg leading-relaxed ">
            From strategy and design to development and marketing — we deliver
            complete digital solutions tailored to your brand goals.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
