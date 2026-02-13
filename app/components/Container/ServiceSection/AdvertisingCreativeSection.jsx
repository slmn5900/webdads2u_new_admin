"use client";

import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const service = {
  title: "App Development",
  label: "We Know How To Do",
  description:
    "We build high-performance mobile applications tailored to your business goals. From concept to deployment, our apps deliver seamless user experiences across all platforms.",
  image:
    "https://assets.webdads2u.com/images/mobile-app-developement-services.jpg",
  children: [
    "IOS App Development",
    "Android App Development",
    "Flutter App Development",
    "Hybrid App Development",
    "Location Based App Development",
  ],
};

export default function AdvertisingCreativeSection() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/app-development`);
  };
  return (
    <MainLayout className="relative bg-black text-white  overflow-hidden px-3 md:px-20">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-24"
      >
        <div className="flex items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-sm tracking-widest text-white/80 uppercase">
            {service.label}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold">{service.title}</h2>
      </motion.div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="text-gray-400 text-lg leading-relaxed mt-3">{service.description}</p>

          <button
            onClick={handleNavigate}
            className="mt-8 w-fit px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-lg cursor-pointer"
          >
            Discover More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center space-y-3 text-lg"
        >
          {service.children.map((item, i) => (
            <li key={i} className="text-white/90 font-medium">
              • {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </MainLayout>
  );
}
