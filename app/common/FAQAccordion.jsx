"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQAccordion({
  faqs = [],
  title = "FAQs",
  heading = "Transformation with Smart UX & Scalable Tech",
  description = "",
}) {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-black py-32 overflow-hidden px-3 md:px-30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="relative z-10   grid lg:grid-cols-2 gap-20">
        <div className="lg:sticky lg:top-0 self-start">
          <div className="mb-4 flex items-center gap-2 text-lg text-gray-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            {title}
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
              {description}
            </p>
          )}
        </div>
        <div
          data-lenis-prevent
          className="space-y-4 max-h-[90vh] overflow-y-auto pr-2 scrollbar-hide"
        >
          {Array.isArray(faqs) && faqs.length > 0 ? (
            faqs.map((faq, i) => {
              const isOpen = active === i;
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5"
                >
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left text-white"
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
            })
          ) : (
            <p className="text-white/50 text-sm">No FAQs available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
