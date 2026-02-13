"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-xl"
      >
        <h1 className="text-8xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          It might have been moved or deleted.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
