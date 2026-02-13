import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { reactDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const ReactDevelopment = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={reactDevelopment} />
      <StickyServicesSection
        heading={
          <>
            The Best Website &<br />
            Web Application
            <br />
            Development
            <br />
            Company In Chennai
          </>
        }
        services={reactDevelopment?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={reactDevelopment?.standOutData}
      />
      <OurProcessSection {...reactDevelopment?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default ReactDevelopment;
