import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { brandingDesign } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const BrandingDesignSection = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={brandingDesign} />
      <StickyServicesSection
        heading={<>The best branding company in Chennai </>}
        services={brandingDesign?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How Strong Branding Accelerates Business Growth"
        items={brandingDesign?.brandStandOutData}
      />
      <ServiceRatingSection
        title="What Makes Businesses Choose Webdads2u for Branding & Graphic Designing Services"
        description="Businesses choose Webdads2u because it offers branding built on clarity, consistency, and long-term value. Every design choice helps brands appear confident, communicate clearly, and grow steadily across all platforms"
        stats={stats}
      />
      <OurProcessSection {...brandingDesign?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={brandingDesign?.brandingFaqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default BrandingDesignSection;
