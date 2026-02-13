"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import MainLayout from "@/app/common/MainLayout";
import CustomImage from "@/app/common/Image";
import { getAllOurWork } from "@/app/store/slice/ourWorkSlice";
import Link from "next/link";

const industries = [
  "Corporate (31)",
  "Real Estate (31)",
  "Government (24)",
  "Business and Finance (22)",
  "Education (16)",
];

export default function OurWorkSection() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { works = [], loading } = useSelector((state) => state.ourWork);

  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllOurWork());
  }, [dispatch]);

  const categories = useMemo(() => {
    const uniqueCategories = works.map((item) => item.category);
    return ["All", ...new Set(uniqueCategories)];
  }, [works]);

  const filteredWorks = useMemo(() => {
    if (active === "All") return works;
    return works.filter((item) => item.category === active);
  }, [active, works]);

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  return (
    <MainLayout className="relative py-30 text-white bg-black bg-[radial-gradient(#222_1px,transparent_1px)]">
      <div className="px-6 md:px-30">
        <p className="mb-6 text-sm flex items-center font-semibold gap-3">
          <span className="text-purple-500">●</span>
          <span>Our Work</span>
        </p>
        <div className="flex gap-8 text-gray-500 mb-6 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`whitespace-nowrap transition ${
                active === item ? "text-white" : "hover:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="relative w-72 mb-12">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center px-5 py-2 text-xs rounded-full border border-purple-500"
          >
            Explore All Industries
            <ChevronDown size={18} />
          </button>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl backdrop-blur bg-white/10"
            >
              {industries.map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 text-white text-xs hover:bg-white hover:text-black cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {loading && <p>Loading...</p>}
          {!loading && filteredWorks.length === 0 && <p>No projects found.</p>}
          {filteredWorks?.map((project) => (
            <motion.div
              key={project._id}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden h-[420px]">
                <Link
                  href={`${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomImage
                    src={project.ourWorkImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl mb-2">{project.title}</h3>
                    <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
                      {project?.services?.map((service, i) => (
                        <span key={i}>
                          <span className="text-purple-500">●</span> {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      router.push(`/project-details/${slugify(project.title)}`)
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          shrink-0
          px-4 py-1
          cursor-pointer
          rounded-full
          bg-linear-to-r from-purple-500 to-pink-500
          text-white text-sm font-medium
          whitespace-nowrap
          hover:opacity-90
          transition-all
        "
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
