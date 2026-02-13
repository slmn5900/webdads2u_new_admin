"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import MainLayout from "@/app/common/MainLayout";
import Image from "next/image";
import ArrowSvg from "@/app/assets/arrow.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { works } from "@/app/utils/commonMockdata";
import { usePathname } from "next/navigation";

const categories = [
  "All",
  "Website",
  "Mobile App",
  "SMM",
  "PPC",
  "SEO",
  "Branding",
];

const WorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const pathname = usePathname();

  const filteredWorks = useMemo(() => {
    if (activeCategory === "All") return works;
    return works.filter((item) => item.category === activeCategory);
  }, [activeCategory, works]);

  return (
    <MainLayout
      className={`
    ${pathname === "/" ? "relative " : "  "}
    px-3 md:px-30 
    py-10 md:py-24
    bg-linear-to-br
    from-[#0a050e]
    via-[#7658a2]
    to-[#04040b]
  `}
    >
      <div className=" mb-6 md:mb-16">
        <p className="md:text-lg text-[14px] font-medium text-gray-300 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />A Glimpse of
          Our Best Work
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
          <h2 className="text-[28px] md:text-5xl font-light text-white leading-tight">
            13+ Years Exp but
            <br />
            Countless Innovations
          </h2>
          <div className="flex flex-wrap md:flex-nowrap md:gap-4 md:overflow-x-auto md:scrollbar-hide">
            {categories?.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-3 md:px-6 md:mt-5 pt-2 md:pt-0   whitespace-nowrap transition-all
                    ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {isActive && (
                    <Image src={ArrowSvg} alt="arrow" width={16} height={16} />
                  )}
                  <span className="text-lg font-medium">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          sm:grid sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {filteredWorks?.map((item, idx) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="
        group
        min-w-[280px]
        sm:min-w-0
        cursor-pointer
      "
            >
              <div className="relative h-[190px] md:h-full overflow-hidden rounded-3xl group">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full md:h-[420px] object-cover  md:object-cover"
                />
                <div
                  className="
      absolute bottom-0 left-0 right-0
      bg-linear-to-t
     bg-black/80
      to-transparent
      rounded-t-xl
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-in-out
      flex items-center justify-center
      p-6
    "
                >
                  <div className="text-white max-w-md">
                    <p className="md:text-lg text-[17px] font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <h3 className="md:text-3xl text-[24px] font-medium text-white leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <MdOutlineArrowOutward
                  size={28}
                  className="
                  opacity-0
                  group-hover:opacity-100
                  group-hover:translate-x-1
                  transition-all duration-300
                  text-white
                "
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default WorkShowcase;
