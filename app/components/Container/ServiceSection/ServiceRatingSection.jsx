"use client";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import imgservice from "@/app/assets/imgservice-rating-bg.webp";
import { CountUp } from "@/app/common/Animation";

const statsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const statItem = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const ServiceRatingSection = ({ title, description, stats = [] }) => {
  return (
    <MainLayout
      className="relative bg-black text-white py-16 md:py-24 px-4 md:px-30"
      style={{
        backgroundImage: imgservice ? `url(${imgservice.src})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative grid grid-cols-12 gap-10 items-start overflow-hidden">
        <motion.div
          className="col-span-12 md:col-span-7 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-light mb-5 leading-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-3">{description}</p>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-5 space-y-8"
          variants={statsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={statItem}
              className="space-y-2 max-w-md ml-auto"
            >
              <h3 className="text-4xl md:text-5xl font-bold">
                <CountUp value={item.value} />
              </h3>

              <p className="text-sm text-gray-300 text-left md:text-right">
                {item.label}
              </p>

              <motion.div
                className="h-[3px] bg-white/40 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default ServiceRatingSection;
