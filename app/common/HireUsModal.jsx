"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createHireUs,
  clearHireUsError,
  clearHireUsMessage,
} from "@/app/store/slice/hireusSlice";
import { successAlert, errorAlert } from "@/app/utils/alertService";

const HireUsModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.hireUs);
  const [price, setPrice] = useState(5000);
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    service: "",
    projectTimeline: "",
    projectDescription: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    dispatch(createHireUs({ ...form, price }));
  };

  useEffect(() => {
    if (message) {
      successAlert(message);
      dispatch(clearHireUsMessage());

      setForm({
        name: "",
        companyName: "",
        phone: "",
        email: "",
        service: "",
        projectTimeline: "",
        projectDescription: "",
      });
      setPrice(5000);
      onClose();
    }

    if (error) {
      errorAlert(error);
      dispatch(clearHireUsError());
    }
  }, [message, error, dispatch]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-999 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-5xl bg-white  p-6 overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center"
            >
              <X />
            </button>
            <p className="text-purple-600 mb-2 font-semibold">
              ● Let’s Get Started
            </p>
            <h2 className="text-4xl font-semibold mb-5 leading-tight max-w-2xl">
              This Could Be the Start of Something Incredible!
            </h2>
            <div className="px-10">
              <div className="grid md:grid-cols-2 gap-4 ">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full border border-gray-300  px-5 rounded-md py-1  outline-none focus:border-purple-500"
                />
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="companyName*"
                  className="w-full border border-gray-300 px-5 rounded-md py-1 outline-none focus:border-purple-500"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone*"
                  className="w-full border border-gray-300 px-5 rounded-md py-1 outline-none focus:border-purple-500"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full border border-gray-300 px-5 rounded-md py-1 outline-none focus:border-purple-500"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-5 rounded-md py-1  outline-none focus:border-purple-500"
                >
                  <option value="">Service you are interested in*</option>
                  <option>Website Development</option>
                  <option>Digital Marketing</option>
                  <option>Mobile App Development</option>
                </select>
                <select
                  name="projectTimeline"
                  value={form.projectTimeline}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-5  outline-none focus:border-purple-500"
                >
                  <option value="">Project Timeline*</option>
                  <option>Immediately</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 justify-between  gap-6">
                <div className="mt-10">
                  <div className="flex justify-between text-sm mb-2 font-medium">
                    <span> 5K</span>
                    <span> 100K+</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full accent-purple-600"
                  />
                  <div className="flex justify-center">
                    <span className="text-center bg-amber-50 text-xs  rounded-lg font-semibold">
                      ₹{price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 max-w-md">
                    A transparent budget will help us ensure expectations are
                    met. Ballparks are fine.
                  </p>
                </div>
                <textarea
                  name="projectDescription"
                  value={form.projectDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="mt-8 w-full border border-gray-300 rounded-md px-5 py-1 outline-none focus:border-purple-500  resize-none"
                />
              </div>
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="mt-4 px-12 py-2 rounded-full text-white font-semibold bg-linear-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HireUsModal;
