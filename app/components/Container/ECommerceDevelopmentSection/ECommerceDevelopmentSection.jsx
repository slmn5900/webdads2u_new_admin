import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { ecommerce } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const ECommerceDevelopmentSection = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={ecommerce} />
      <StickyServicesSection
        heading={<>The best ecommerce development company in chennai</>}
        services={ecommerce?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="Why choose webdads2u for e-commerce web development services"
        items={ecommerce?.standOutData}
      />
      <ServiceRatingSection
        title="Sell Smarter Online with Our E-commerce Development Services"
        description="We build e-commerce websites that make selling easier and shopping smoother. From clear product pages to secure checkout flows, every store is developed to improve customer experience, simplify store management, and support steady online sales across all devices."
        stats={stats}
      />
      <OurProcessSection {...ecommerce?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={ecommerce?.faqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default ECommerceDevelopmentSection;
