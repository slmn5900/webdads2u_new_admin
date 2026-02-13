"use client";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/webdads2u-digital-marketing-5559913a7/",
  },
  { icon: Facebook, href: "https://www.facebook.com/Webdads2u" },
  { icon: Instagram, href: "https://www.instagram.com/webdads2u/" },
  { icon: Youtube, href: "https://www.youtube.com/webdads2u" },
];

const smoothEase = [0.22, 1, 0.36, 1];

export default function FixedSocialBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.2); // 👈 20%
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
        >
          {socials.map((Item, i) => (
            <a
              key={i}
              href={Item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-10 h-10
                rounded-full
                flex items-center justify-center
                bg-black/60
                backdrop-blur-md
                border border-white/10
                text-white
                transition-all duration-300
                hover:scale-110
                hover:border-purple-500/50
                hover:bg-purple-600/20
              "
            >
              <Item.icon className="w-5 h-5 opacity-80 group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
