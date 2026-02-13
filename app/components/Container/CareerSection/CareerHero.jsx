"use client";

import React from "react";
import MainLayout from "@/app/common/MainLayout";
import Image from "next/image";
import careerbg from "@/app/assets/career-bg.jpg";

const CareerHero = () => {
  return (
    <MainLayout className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <Image
        src={careerbg}
        alt="Career Background"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center max-w-4xl px-6">
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <p className="text-sm text-white tracking-wide">Careers</p>
        </div>

        <h1 className="text-white font-light leading-13 text-4xl md:text-5xl">
          Build the Future of Digital <br /> Transformation with Us
        </h1>

        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Work on meaningful digital projects, collaborate with passionate
          people, and help businesses and brands grow in a fast-moving digital
          world.
        </p>
      </div>
    </MainLayout>
  );
};

export default CareerHero;
