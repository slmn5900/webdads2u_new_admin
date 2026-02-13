import AboutSection from "@/app/components/Container/AboutSection/AboutSection";
import React from "react";

const SITE_URL = "https://www.webdads2u.com";

export const metadata = {
  title: "About Webdads2u | Web Design & Development Experts",
  description:
    "Learn more about Webdads2u, our mission, vision, and expertise in web development, SEO, and digital marketing solutions.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
