import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { webDesign } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const WebDesignSection = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={webDesign} />
      <StickyServicesSection
        heading={<>The best web design company in Chennai</>}
        services={webDesign?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How Our Website Design Services Supports Business Growth?"
        items={webDesign?.standOutData}
      />
      <ServiceRatingSection
        title="Build a Strong Brand Identity with Our Branding Design Services"
        description="We help businesses create clear and consistent brand identities through thoughtful branding and design. Our team works on brand visuals, design systems, and brand direction that reflect your business values and communicate clearly. Every branding effort is aligned to build trust, improve recognition, and present your brand confidently across digital and offline platforms."
        stats={stats}
      />
      <OurProcessSection {...webDesign?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={webDesign?.webDesignFaqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default WebDesignSection;
