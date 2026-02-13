"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MainLayout from "@/app/common/MainLayout";

export default function StickyServicesSection({ services, heading }) {
  const [open, setOpen] = useState(null);

  return (
    <MainLayout className="relative min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 lg:px-20 py-32">
        <div className="md:sticky top-32 h-fit">
          <h2 className="text-4xl md:text-5xl  font-light">
            {heading}
          </h2>
        </div>
        <div>
          {services?.map((item, index) => (
            <div key={index} className="border-b border-white/20 py-10">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-3xl font-light">{item.title}</h3>

                <motion.span
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6">
                      <p className="text-white/70 leading-relaxed max-w-xl mb-6">
                        {item.description}
                      </p>

                      {item.link && (
                        <a
                          href={item.link}
                          className="inline-block px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-sm"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
