import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { wordpressData } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const WordPressDevelopment = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={wordpressData} />
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
        services={wordpressData.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={wordpressData?.standOutData}
      />
      <OurProcessSection {...wordpressData?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default WordPressDevelopment;
