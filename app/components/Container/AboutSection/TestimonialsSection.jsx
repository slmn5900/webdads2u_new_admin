"use client";
import TestimonialCard from "@/app/common/TestimonialCard";
import { testimonials } from "@/app/utils/commonMockdata";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="px-4 md:px-30 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
          <span className="text-lg font-medium tracking-wide text-purple-600">
            Client Testimonials & Reviews
          </span>
          <span className="flex-1 h-px bg-linear-to-r from-purple-600/60 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-light">
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
        {testimonials?.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
