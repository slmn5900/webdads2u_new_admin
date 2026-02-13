import CareerSection from "@/app/components/Container/CareerSection/CareerSection";

const SITE_URL = "https://www.webdads2u.com";
export const metadata = {
  title: "Careers at Webdads2u | Join Our Team",
  description:
    "Explore exciting career opportunities at Webdads2u. Join our team of web developers, designers, and digital marketing professionals.",
  alternates: {
    canonical: `${SITE_URL}/career`,
  },
};

export default function CareerPage() {
  return <CareerSection />;
}
