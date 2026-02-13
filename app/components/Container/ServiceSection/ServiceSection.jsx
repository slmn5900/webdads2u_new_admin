import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesShowcase from "./ServicesShowcase";
import ITServicesSection from "./ITServicesSection";
import AdvertisingCreativeSection from "./AdvertisingCreativeSection";
import EmergingTechSection from "./EmergingTechSection";
import DigitalMarketingSection from "./DigitalMarketingService";

const ServiceSection = () => {
  return (
    <>
      <ServicesHero />
      <ServicesShowcase />
      <ITServicesSection />
      <AdvertisingCreativeSection />
      <EmergingTechSection />
      <DigitalMarketingSection />
    </>
  );
};

export default ServiceSection;
