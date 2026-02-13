import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import FAQSection from "../HomeSection/FaqSection";
import BlogSection from "../HomeSection/OurBlog";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import OurProcessSection from "./OurProcessSection";
import ServiceDetailsHero from "./ServiceDetailsHero";
import StickyServicesSection from "./StickyServicesSection";

const ServiceDetailSection = () => {

  return (
    <>
      <ServiceDetailsHero  />
      <StickyServicesSection />
      <OurProcessSection />
      <PartnersRecognition />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};
export default ServiceDetailSection;
