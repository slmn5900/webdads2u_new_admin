"use client";
import Image from "next/image";
import detailsBanner from "@/app/assets/detailsBanner.svg";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  createEnquiry,
  clearError,
  clearMessage,
} from "@/app/store/slice/enquirySlice";
import { errorAlert, successAlert } from "@/app/utils/alertService";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceDetailsHero({ serviceData }) {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.enquiry);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    price: 5000,
    projectDescription: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEnquiry(form));
  };

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(clearMessage());
      setForm({
        name: "",
        email: "",
        phone: "",
        price: 5000,
        projectDescription: "",
      });
    }

    if (error) {
      errorAlert(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  return (
    <MainLayout className="relative min-h-screen text-white overflow-hidden flex justify-center">
      <Image
        src={detailsBanner}
        alt="Service background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10  px-6 lg:px-30 py-24 flex justify-center gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            <p className="text-lg  tracking-widest capitalize">
              {serviceData?.title}
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl my-10 w-[90%]">
            {serviceData?.subTitle}
          </h1>
          <p className="text-lg max-w-xl">{serviceData?.description}</p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Have any questions?</h3>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mb-6 bg-transparent border border-white/20 rounded-lg px-4 py-2"
            placeholder="Name*"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-6 bg-transparent border border-white/20 rounded-lg px-4 py-2"
            placeholder="Email*"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full mb-6 bg-transparent border border-white/20 rounded-lg px-4 py-2"
            placeholder="Phone*"
          />

          <div className="flex justify-between text-sm mb-2 font-medium">
            <span> 5K</span>
            <span>100K+</span>
          </div>

          <input
            type="range"
            name="price"
            min="5000"
            max="100000"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
            className="w-full accent-purple-600"
          />

          <div className="flex justify-center mb-6">
            <span className="px-3 py-1 bg-amber-50 text-black text-xs rounded-lg font-semibold">
              ₹{form.price.toLocaleString()}
            </span>
          </div>

          <textarea
            name="projectDescription"
            value={form.projectDescription}
            onChange={handleChange}
            className="w-full mb-4 bg-transparent border border-white/20 rounded-lg px-4 py-2 h-20"
            placeholder="Tell us about your project"
          />

          <button
            disabled={loading}
            className="w-32 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </MainLayout>
  );
}
