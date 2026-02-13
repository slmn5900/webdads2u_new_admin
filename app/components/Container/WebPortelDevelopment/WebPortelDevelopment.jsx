import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import { webPortalDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQSection from "../HomeSection/FaqSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const WebPortalDevelopment = () => {
  return (
    <>
      <ServiceDetailsHero serviceData={webPortalDevelopment} />
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
        services={webPortalDevelopment?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How We Stand Out?"
        items={webPortalDevelopment?.standOutData}
      />
      <OurProcessSection {...webPortalDevelopment?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
};

export default WebPortalDevelopment;
