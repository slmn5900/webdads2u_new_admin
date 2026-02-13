"use client";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footerbottomimg from "@/app/assets/footerbottomimg.svg";
import schedule from "@/app/assets/footer-logo.svg";
import { servicesData } from "@/app/utils/commonMockdata";

const slugify = (text) =>
  text.toLowerCase().trim().replace(/&/g, "and").replace(/\s+/g, "-");

const Footer = () => {
  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/webdads2u-digital-marketing-5559913a7/",
    },
    { icon: Facebook, href: "https://www.facebook.com/Webdads2u" },
    { icon: Instagram, href: "https://www.instagram.com/webdads2u/" },
    { icon: Youtube, href: "https://www.youtube.com/webdads2u" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1c1c1c] text-gray-400">
      <div className="relative z-10 px-4 md:px-30  py-10  md:pt-20 md:mb-pb-40 2xl:pb-50">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Image
              src={schedule}
              alt="Webdads"
              className="w-20 h-20 rounded-full"
            />
          </motion.div>
          <div className="flex items-center w-full mt-6 gap-8">
            <span className="flex-1 h-[3px] bg-linear-to-r from-transparent via-purple-500 to-transparent" />
            <div className="flex gap-6 text-white">
              {socials?.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon className="w-5 h-5 hover:opacity-70 transition" />
                </a>
              ))}
            </div>
            <span className="flex-1 h-[3px] bg-linear-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </div>
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <ul className="space-y-4 text-lg text-white ">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Work", path: "/our-work" },
                { label: "Contact", path: "/contact" },
                { label: "Career", path: "/career" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {servicesData?.slice(0, 3).map((service) => (
            <div key={service.title}>
              <h4 className="mb-6 text-white font-semibold text-lg">
                {service.title}
              </h4>
              <ul className="space-y-3 text-lg">
                {service.children.slice(0, 6).map((child) => (
                  <li key={child}>
                    <Link
                      href={`/${slugify(child)}`}
                      className="hover:text-white transition capitalize text-white"
                    >
                      {child}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-30 left-1/2 -translate-x-1/2 w-[700px] h-[60px] bg-linear-to-r from-transparent via-purple-800/40 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute bottom-6 2xl:bottom-4 left-0 w-full px-6 md:px-30">
        <img
          src={Footerbottomimg.src}
          alt="Footer Decoration"
          className="w-full opacity-25 translate-y-6"
        />
      </div>
      <div className="relative z-20 border-t border-white/10 bg-linear-to-r from-[#0f0f14] via-[#14141c] to-[#0f0f14]">
        <div className="px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="h-4 w-px bg-white/30" />
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </div>
          <div className="uppercase">
            © {new Date().getFullYear()} WEBDADS2U PRIVATE LIMITED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
