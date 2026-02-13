"use client";
import VideoCard from "@/app/common/VideoCard";
import { useState } from "react";

const testimonials = [
  { video: "/videos/testimonial1.mp4" },
  { video: "/videos/testimonia2.mp4" },
  { video: "/videos/testimonia3.mp4" },
  { video: "/videos/testimonial1.mp4" },
  { video: "/videos/testimonia3.mp4" },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white md:py-24 pt-10">
      <div className="px-4 sm:px-4 md:px-30 md:mb-16 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
          <span className="md:text-lg text-[14px] font-semibold tracking-wide text-purple-600">
            Client Testimonials & Reviews
          </span>
        </div>
        <h2 className="text-[28px] md:text-5xl font-light leading-[1.2]">
          Don't Take Our Words!
          <br />
          Hear From Our Esteemed Clients!
        </h2>
      </div>
      <div
        className="
          flex gap-4 overflow-x-auto pb-4 px-4
          sm:grid sm:grid-cols-2
          lg:grid-cols-5
          sm:overflow-visible
        "
      >
        {testimonials.map((item, index) => (
          <VideoCard
            key={index}
            video={item.video}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
