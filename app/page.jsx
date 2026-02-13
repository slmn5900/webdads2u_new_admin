import React from "react";
import HeroSection from "./components/Container/HomeSection/HeroSection";
import CaseStudySlider from "./components/Container/HomeSection/OurServices";
import WorkShowcase from "./components/Container/HomeSection/WorkShowcase";
import PartnersRecognition from "./components/Container/HomeSection/PartnersRecognition";
import ServicesSection from "./components/Container/HomeSection/ServicesSection";
import TestimonialsSection from "./components/Container/HomeSection/TestimonialsSection";
import OurClients from "./components/Container/HomeSection/OurClientSection";
import BlogSection from "./components/Container/HomeSection/OurBlog";
import FAQSection from "./components/Container/HomeSection/FaqSection";



function page() {
  return (
    <>
      <HeroSection />
      <CaseStudySlider />
      <WorkShowcase />
      <PartnersRecognition />
      <ServicesSection />
      <TestimonialsSection />
      <OurClients />
      <BlogSection />
      <FAQSection />
    </>
  );
}

export default page;
