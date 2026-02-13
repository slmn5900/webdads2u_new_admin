"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import MainLayout from "@/app/common/MainLayout";
import Image from "next/image";
import ArrowSvg from "@/app/assets/arrow.svg";
import Link from "next/link";
import { works } from "@/app/utils/commonMockdata";

const categories = [
  "All",
  "Website",
  "Mobile App",
  "SMM",
  "PPC",
  "Print",
  "SEO",
  "Branding",
];

const ServiceWorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredWorks = useMemo(() => {
    if (activeCategory === "All") return works;
    return works.filter((item) => item.category === activeCategory);
  }, [activeCategory]);
  const featured = filteredWorks[0];
  const layoutPattern = [2, 3, 3];
  let start = 1;

  const rows = layoutPattern.map((count) => {
    const rowItems = filteredWorks.slice(start, start + count);
    start += count;
    return rowItems;
  });

  return (
    <MainLayout
      className="
        px-4 md:px-28
        py-16 md:py-20
        bg-linear-to-br
        from-[#0a050e]
        via-[#1a0f2c]
        to-[#04040b]
      "
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-gray-400 flex items-center gap-2 mb-4 text-lg">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            Our Work
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
            10+ Years Exp but
            <br />
            Countless Innovations
          </h2>
        </div>
        <div className="flex flex-col items-center lg:items-end gap-6 mt-8 lg:mt-0">
          <Link
            href="/work"
            className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium hover:opacity-90 transition"
          >
            View More
          </Link>
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 text-lg min-w-max">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 flex items-center gap-2 whitespace-nowrap transition-all
          ${isActive ? "text-white" : "text-gray-500 hover:text-white"}`}
                  >
                    {isActive && (
                      <Image
                        src={ArrowSvg}
                        alt="arrow"
                        width={18}
                        height={18}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {featured && (
        <div className="grid lg:grid-cols-12 gap-5 md:gap-12 mt-5 md:mt-10">
          <motion.div
            key={featured.id}
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl md:text-5xl text-white font-medium mb-6 leading-tight">
              {featured.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {featured.description}
            </p>
            <div className="flex items-center justify-between py-10">
              <div>
                <h4 className="text-6xl font-light text-white">
                  {featured.percentage || "120%"}
                </h4>
                <p className="text-gray-400 mt-2">
                  {featured.resultText || "Increase in engagement"}
                </p>
              </div>

              <Link
                href={featured.link || "/project-details/featured-project"}
                target="_blank"
                className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium hover:opacity-90 transition"
              >
                View Case Study
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={900}
                height={700}
                className="w-full h-[520px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      )}
      {rows?.map(
        (row, rowIndex) =>
          row.length > 0 && (
            <div
              key={rowIndex}
              className={`grid lg:grid-cols-${row.length} gap-16`}
            >
              {row.map((item, idx) => (
                <Card key={item.id} item={item} idx={idx} />
              ))}
            </div>
          ),
      )}
    </MainLayout>
  );
};

export default ServiceWorkShowcase;

const Card = ({ item, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    className="my-20"
  >
    <div className="rounded-3xl overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        width={900}
        height={600}
        className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
      />
    </div>
    <div className="flex flex-col justify-between text-white mt-6">
      <div>
        <h3 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-6xl font-light">{item.percentage || "120%"}</h4>
          <p className="text-gray-400 mt-2">
            {item.resultText || "Increase in engagement"}
          </p>
        </div>
        <Link
          href={item.link}
          target="_blank"
          className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-medium hover:opacity-90 transition"
        >
          View Case Study
        </Link>
      </div>
    </div>
  </motion.div>
);
