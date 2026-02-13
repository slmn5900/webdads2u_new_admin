"use client";
import { motion } from "framer-motion";
export default function TestimonialCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        min-w-[260px] sm:min-w-0
        h-[420px]
        rounded-[28px]
        bg-[#f4f4f4]
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      "
    >
      <div className="h-full bg-white rounded-[22px] p-6 flex flex-col">
        <div className="text-purple-600 text-3xl font-bold mb-4">“</div>
        <div
          data-lenis-prevent
          className="
            flex-1
            text-md text-gray-700 leading-relaxed
            overflow-y-auto pr-3
            scrollbar-thin
            scrollbar-thumb-purple-600
            scrollbar-track-transparent
          "
        >
          <strong>{item?.name}</strong>
          <br />
          <br />
          {item?.review}
        </div>
      </div>
    </motion.div>
  );
}
