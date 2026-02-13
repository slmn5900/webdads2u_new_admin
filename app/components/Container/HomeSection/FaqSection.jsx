"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { faqs } from "@/app/utils/commonMockdata";

export default function FAQSection() {
  const [active, setActive] = useState(null);
  return (
    <section className="relative bg-black md:py-30 pt-10 pb-10 overflow-hidden px-3 md:px-30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] " />
      <div className="relative z-10  grid lg:grid-cols-2 md:gap-20 gap-10">
        <div className="lg:sticky lg:top-0 self-start">
          <div className="mb-6 flex items-center gap-2 text-lg text-gray-300">
            <span className="h-2 w-2 rounded-full text-[14px] md:text-[18px] bg-purple-500" />
            FAQs
          </div>
          <h2 className="text-[28px] md:text-5xl font-light text-white md:mb-6 mb-3">
            Transformation with <br />
            Smart UX & <br />
            Scalable Tech
          </h2>
          <p className="text-white leading-relaxed max-w-lg md:text-lg text-[16px]">
            At Webdads2u, we blend smart technology with creative thinking to
            craft powerful, scalable, and future-ready digital solutions that
            help brands grow and stand out.
          </p>
        </div>
        <div
          data-lenis-prevent
          className="
            space-y-4
            max-h-[90vh]
            overflow-y-auto
            pr-2
            scrollbar-hide
            scrollbar-thumb-white/10
          "
        >
          {faqs?.map((faq, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="flex w-full items-center justify-between md:px-6 md:py-5 py-2 px-2 text-left text-white"
                >
                  <span className="text-lg">{faq.q}</span>
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white leading-relaxed text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
