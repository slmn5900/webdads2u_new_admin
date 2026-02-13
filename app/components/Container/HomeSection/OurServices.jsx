"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";

const CaseStudySlider = () => {
  const x = useMotionValue(0);
  const sliderRef = useRef(null);
  const speed = 0.5;

  useAnimationFrame(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const contentWidth = slider.scrollWidth / 2;
    x.set(x.get() - speed);

    if (Math.abs(x.get()) >= contentWidth) {
      x.set(0);
    }
  });

  return (
    <>
      <MainLayout className="relative py-20  overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="https://assets.webdads2u.com/images/software-development-company.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-44 z-20 
          "
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-44 z-20 
         "
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center text-white ">
            <span className="text-purple-500 px-3 md:text-5xl text-[26px]">•</span>
            <p className="md:text-sm text-[16px] font-normal mt-3 text-white">What We Do</p>
          </div>
          <h2 className="text-white md:text-6xl text-[28px] font-semi-bold md:font-medium leading-10 px-4 md:px-0 md:leading-16 text-center">
            Fueled Up 500+ Brands to
            <br />
            Roar with Next-GenTech
          </h2>
        </div>
        <div className="relative z-10  overflow-hidden mt-20 mb-10">
          <motion.div
            ref={sliderRef}
            className="flex w-max items-center"
            style={{ x }}
          >
            {[
              "Digital Marketing",
              "CRM & ERP Development",
              "Branding",
              "E-Commerce Development",
              "Mobile App Development",
              "Digital Marketing",
              "CRM & ERP Development",
              "Branding",
              "E-Commerce Development",
              "Mobile App Development",
            ].map((item, index) => (
              <div
                key={index}
                className="mx-8 text-lg md:text-4xl font-medium tracking-wide
                text-white/70 hover:text-white transition-all duration-300
                whitespace-nowrap select-none flex items-center"
              >
                <span className="text-purple-500 px-3">•</span>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="relative z-10 flex justify-center mt-20">
          <div
            className="flex flex-col md:flex-row items-center md:gap-8 gap-4 px-8 py-2 md:px-10 md:py-5 
            rounded-2xl 
            border border-white/20 
            bg-linear-to-r from-purple-900/40 via-purple-800/30 to-black/40
            backdrop-blur-md
            text-white"
          >
            <div className="pr-8 md:border-b-0 md:border-r  border-w-12 border-white/20">
            
  
              <p className="text-lg font-medium">Our Global Presence</p>
                <hr className="md:hidden mt-2 border-0 h-[2px] w-16 bg-white/20 mx-auto" />
            </div>

            <div className="flex md:gap-10 gap-4">

            {["USA", "UAE", "Australia", "Canada"].map((country, i) => (
              <div key={i} className="flex  flex-row md:auto items-center md:gap-2 md:text-lg text-[10px] gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-200">{country}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default CaseStudySlider;
