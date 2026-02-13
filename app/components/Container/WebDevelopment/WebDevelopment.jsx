import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { webDevelopment } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const WebDevelopment = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={webDevelopment} />
      <StickyServicesSection
        heading={<>The Best Web Development Company in Chennai</>}
        services={webDevelopment?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="Why Choose Webdads2u for Website Development Services?"
        items={webDevelopment?.standOutData}
      />
      <ServiceRatingSection
        title="Custom Web Development Solutions for Every Industry "
        description="Our team plans, designs, and builds websites that match real business needs. Complex projects are handled through a clear and organized process, ensuring every website stays flexible, reliable, and ready to scale as the business grows.Our developers use modern technologies and trusted frameworks to create secure and high-performing websites. Strong knowledge across real estate, healthcare, retail, SaaS, education, and entertainment allows us to build websites that are clear, smooth, and easy to use."
        stats={stats}
      />
      <OurProcessSection {...webDevelopment?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={webDevelopment?.faqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default WebDevelopment;
