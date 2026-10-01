"use client";
import React from "react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  const email = "akhilmakwana745@gmail.com";
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer
      id="contact"
      className="bg-[#0A0A0F] text-[#E2E8F0] border-t border-[#818CF8]/10 px-5 sm:px-8 md:px-10 py-16 sm:py-24 w-full select-none relative z-20"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Subtitle */}
        <FadeIn delay={0} y={20}>
          <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-xs sm:text-sm font-light">
            Get In Touch
          </span>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.15} y={30}>
          <h2 className="hero-heading font-black uppercase text-[2.5rem] sm:text-[5vw] md:text-[6vw] lg:text-[5.5rem] leading-tight my-4 sm:my-6">
            Let&apos;s build<br />something together
          </h2>
        </FadeIn>

        {/* CTA Contact Button */}
        <FadeIn delay={0.3} y={20} className="mb-12 sm:mb-16">
          <ContactButton onClick={handleEmailClick} />
        </FadeIn>

        {/* Bottom Metadata */}
        <div className="w-full border-t border-[#D7E2EA]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-[#D7E2EA] opacity-50">
          <div>
            &copy; {new Date().getFullYear()} AKHIL. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/akhilmakwana2005" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akhil-makwana-700772305/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
