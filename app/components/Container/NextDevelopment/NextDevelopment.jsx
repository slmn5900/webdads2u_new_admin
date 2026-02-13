import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { nextDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const NextDevelopment = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={nextDevelopment} />
      <StickyServicesSection
        heading={
          <>
            The Best Website &<br />
            Web Application
            <br />
            Development
            <br />
            Company In Dubai
          </>
        }
        services={nextDevelopment?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={nextDevelopment?.standOutData}
      />
      <OurProcessSection {...nextDevelopment?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default NextDevelopment;
