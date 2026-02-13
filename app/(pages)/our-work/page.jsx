import OurWorkSection from "@/app/components/Container/OurWorkSection/OurWorkSection";

const SITE_URL = "https://www.webdads2u.com";
export const metadata = {
  title: "Our Work | Web Design & Development Projects",
  description:
    "Explore our portfolio showcasing web design, development, and digital marketing projects delivered by Webdads2u.",
  alternates: {
    canonical: `${SITE_URL}/our-work`,
  },
};

export default function OurWorkPage() {
  return <OurWorkSection />;
}
