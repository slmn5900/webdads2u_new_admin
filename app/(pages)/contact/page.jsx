import ContactSection from "@/app/components/Container/ContactSection/ContactSection";
import React from "react";

const SITE_URL = "https://www.webdads2u.com";
export const metadata = {
  title: "Contact Webdads2u | 24/7 Web Development Support",
  description:
    "Get in touch with Webdads2u for professional web development, website design, SEO, and digital marketing services. Contact us today.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
