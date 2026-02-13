import React from "react";
import ServiceDetailsHero from "../ServiceDetailSection/ServiceDetailsHero";
import StickyServicesSection from "../ServiceDetailSection/StickyServicesSection";
import PartnersRecognition from "../HomeSection/PartnersRecognition";
import TechStackSection from "../AboutSection/TechStackSection";
import StandOutSection from "../ServiceDetailSection/StandOutSection";
import { digitalMarketing } from "@/app/utils/serviceDetailsMockdata";
import IndustryStackedCards from "../AboutSection/IndustryShowcase";
import OurProcessSection from "../ServiceDetailSection/OurProcessSection";
import TestimonialsSection from "../AboutSection/TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import FAQAccordion from "@/app/common/FAQAccordion";
import ServiceRatingSection from "../ServiceSection/ServiceRatingSection";
import ServiceWorkShowcase from "../ServiceSection/ServiceWorkShowcase";

const DigitalMarketing = () => {
  const stats = [
    { value: "200+", label: "Successful Projects" },
    { value: "300+", label: "Sales Closed" },
    { value: "12+", label: "Years of Experience" },
  ];
  return (
    <>
      <ServiceDetailsHero serviceData={digitalMarketing} />
      <StickyServicesSection
        heading={<>The best Digital marketing company in Chennai</>}
        services={digitalMarketing?.servicesData}
      />
      <PartnersRecognition />
      <ServiceWorkShowcase />
      <TechStackSection />
      <StandOutSection
        title="Why Choose Webdads2u for Digital marketing"
        items={digitalMarketing?.standOutData}
      />
      <ServiceRatingSection
        title="Grow Your Brand Online with a Results-Driven Digital Marketing Agency"
        description="We help businesses build strong online visibility and strong growth through practical digital marketing. Our team plans and manages SEO, paid ads, social media, and content campaigns that reach the right audience and drive real engagement. Every strategy is built around clear goals, performance tracking, and consistent improvement, helping brands gain attention, generate leads, and stay competitive across digital platforms."
        stats={stats}
      />
      <OurProcessSection {...digitalMarketing?.processData} />
      <IndustryStackedCards />
      <TestimonialsSection />
      <BlogSection />
      <FAQAccordion
        faqs={digitalMarketing?.faqData}
        title="FAQs"
        heading="Frequently Asked Questions"
        description="Clear answers to common questions about our web development services in Chennai."
      />
    </>
  );
};

export default DigitalMarketing;
