"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import schedule from "@/app/assets/schedule.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeroSection = () => {
  const router = useRouter();
  const headlines = [
    "Better Digital Marketing Solution",
    "Better Web Development Solution",
    "Better Branding Solution",
    "Better Automation Solution",
    "Better App Development Solution",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src="https://assets.webdads2u.com/images/home_banner.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      <MainLayout className="relative z-10 px-4 md:px-30 h-full flex items-end pb-20 md:pb-6">
        <div className="w-full flex flex-col items-center text-center  text-white">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              className="
                min-h-[41px] md:min-h-[58px]
               md:text-3xl lg:text-5xl
                text-[28px] font-medium  leading-8
                   md:leading-tight mb-4
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {headlines[current]}
            </motion.h1>
          </AnimatePresence>
          <p className="text-sm md:text-lg opacity-90 md:mt-3 max-w-xl font-medium ">
            Website Design and Development Company in Chennai
          </p>
          <div className="flex gap-6 items-center mt-4">
            <button
              onClick={handleNavigate}
              className="
            cursor-pointer
    group relative flex items-center gap-3
    overflow-hidden
    rounded-full
    bg-white
    md:px-3 md:py-2
    px-2 py-1
    text-sm font-medium text-black
    shadow-lg
  "
            >
              <span
                className="
      absolute inset-0
      bg-linear-to-r from-purple-600 to-pink-600
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-out
    "
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white font-bold">
                Schedule a call
              </span>
              <span className="relative z-10 w-8 h-8 rounded-full overflow-hidden border border-white">
                <Image
                  src={schedule}
                  className="w-8 h-8 rounded-full"
                  alt="avatar"
                />
              </span>
            </button>
            <Link href={"/projects"} className="text-xs underline underline-offset-6 capitalize">
              see our work
            </Link>
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default HeroSection;
