import MainLayout from "@/app/common/MainLayout";
import React from "react";
import AboutHeader from "./AboutHeader";
import MissionVisionSection from "./MissionVisionSection";
import TechStackSection from "./TechStackSection";
import IndustryShowcase from "./IndustryShowcase";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "../HomeSection/OurBlog";
import SocialAutoScroll from "./SocialAutoScroll";

const AboutSection = () => {
  return (
    <MainLayout>
      <AboutHeader />
      <MissionVisionSection />
      <TechStackSection />
      <IndustryShowcase />
      <TestimonialsSection />
      <BlogSection />
      <SocialAutoScroll />
    </MainLayout>
  );
};

export default AboutSection;
