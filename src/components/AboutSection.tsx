"use client";
import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

export default function AboutSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bioText = "I'm a Full Stack Web Developer with a strong foundation in MERN stack development, focused on building scalable, production-ready applications. I'm currently working at Stackdot on a live CRM product, and I enjoy writing clean, maintainable code. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 select-none overflow-hidden"
    >
      {/* 3D Decorative Corner Assets */}
      
      {/* Top Left Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Asset"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </FadeIn>
      </div>

      {/* Bottom Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Abstract 3D Object"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </FadeIn>
      </div>

      {/* Top Right Lego */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Asset"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </FadeIn>
      </div>

      {/* Bottom Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Shapes Group"
            className="w-full h-auto object-contain pointer-events-none"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[3rem] sm:text-[6vw] md:text-[8vw] lg:text-[10vw] mb-10 sm:mb-14 md:mb-16">
            About me
          </h2>
        </FadeIn>

        {/* Scroll-Driven Character Reveal Text */}
        <div className="w-full max-w-[560px] mb-16 sm:mb-20 md:mb-24 px-4">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium leading-relaxed text-center text-[1rem] sm:text-[1.2rem] md:text-[1.35rem]"
          />
        </div>

        {/* Contact CTA */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={handleContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
