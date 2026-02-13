import ServiceSection from "@/app/components/Container/ServiceSection/ServiceSection";
const SITE_URL = "https://www.webdads2u.com";
export const metadata = {
  title: "Our Services | Web Development & Digital Marketing",
  description:
    "Discover our professional web development, UI/UX design, SEO, and digital marketing services tailored to grow your business.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};
export default function Service() {
  return <ServiceSection />;
}
