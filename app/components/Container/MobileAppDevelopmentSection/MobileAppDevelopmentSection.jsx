import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { mobileAppDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const MobileAppDevelopment = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={mobileAppDevelopment} />
      <StickyServicesSection
        heading={<>Our premier mobile application development Services</>}
        services={mobileAppDevelopment?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="How Is Webdads2u One of the Best Mobile Application Development Company in Chennai"
        items={mobileAppDevelopment?.standOutData}
      />
      <ServiceRatingSection
        title="Build Powerful Mobile Applications with Our App Development Services"
        description="We help businesses turn ideas into reliable mobile applications through careful planning and development. Our team works on app design, functionality, and performance to match real user needs and business goals. Every app is built to deliver smooth experiences, support growth, and perform consistently across devices and platforms."
        stats={stats}
      />
      <OurProcessSection {...mobileAppDevelopment?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={mobileAppDevelopment?.faqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default MobileAppDevelopment;
