"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Web Design & Development",
    slug: "web-design-and-development",
    desc: "Modern, scalable websites built for performance and growth.",
    image:
      "https://assets.webdads2u.com/images/web-design-services.jpg",
    children: [
      "UI UX Design",
      "Wordpress Web Development",
      "ReactJS Web Development",
      "Real Time Application Development",
      "Nextjs Development",
    ],
  },
  {
    title: "Digital Solutions",
    slug: "digital-solutions",
    desc: "We help brands grow online using SEO, paid ads and AI marketing.",
    image:
      "https://assets.webdads2u.com/images/digital-solutions-services.jpg",
    children: [
      "SEO",
      "LLM SEO",
      "GEO",
      "Local SEO",
      "Pay Per Click Ads",
      "E-mail Marketing",
      "App Store Optimization",
      "Social Media Marketing",
    ],
  },
];

export default function ServicesShowcase() {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const progress = ((index + 1) / services.length) * 100;

  const handleNavigate = () => {
    router.push(`/web-design-and-development`);
  };

  return (
    <div className="relative bg-black text-white py-24 overflow-hidden px-4 md:px-30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-sm tracking-widest text-white/80 uppercase">
            Count On Us For
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold mt-3">
          Development Services
        </h2>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-[3px] bg-white/20">
        <motion.div
          className="h-full bg-purple-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={services[index].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-light mb-4">
              {services[index].title}
            </h2>
            <p className="text-gray-400 text-lg  max-w-md">{services[index].desc}</p>
            <motion.button
              onClick={handleNavigate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                mt-6 px-8 py-3 rounded-full
                bg-linear-to-r from-purple-600 to-fuchsia-600
                text-white font-medium
                shadow-lg hover:shadow-purple-500/40
                transition-all duration-300

              "
            >
              Discover More
            </motion.button>
          </motion.div>
        </AnimatePresence>
        <div
          onClick={nextSlide}
          className="cursor-pointer rounded-3xl overflow-hidden shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={services[index].image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative h-[420px]"
            >
              <Image
                src={services[index].image}
                alt={services[index].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.ul
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="space-y-2 text-lg"
          >
            {services[index].children.map((item, i) => (
              <li key={i} className="text-white/80">
                • {item}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
