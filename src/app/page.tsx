"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="w-full bg-[#0A0A0F] min-h-screen overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <StatsSection />
        <TechStackSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
