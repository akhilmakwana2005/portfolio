"use client";
import React from "react";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import TypingAnimation from "./TypingAnimation";

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/1ut4oeT1gXOFolveUQr86fGQKml-8JyrX/view?usp=drive_link", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-[#0A0A0F] overflow-x-clip">

      {/* Background radial glows */}
      <div
        className="absolute right-0 top-0 w-[60vw] h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 85% 50%, rgba(129,140,248,0.10) 0%, rgba(34,211,238,0.04) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-[40vw] h-[60vh] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 10% 90%, rgba(129,140,248,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16 gap-6 sm:gap-8 pb-10 sm:pb-14 pt-4 sm:pt-6 relative z-10">

        {/* LEFT — Text Content */}
        <div className="flex-1 flex flex-col justify-center z-10 w-full lg:max-w-2xl text-center lg:text-left items-center lg:items-start">

          {/* Open to Work badge */}
          <FadeIn delay={0.1} y={10}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-5 sm:mb-6 w-fit">
              <span className="relative w-2.5 h-2.5 flex-shrink-0 open-to-work-dot">
                <span className="absolute inset-0 rounded-full bg-[#22C55E]" />
              </span>
              <span className="text-[#22C55E] text-xs sm:text-sm font-medium uppercase tracking-widest">
                Open to Work
              </span>
            </div>
          </FadeIn>

          {/* Heading */}
          <div className="overflow-hidden w-full">
            <FadeIn delay={0.2} y={50}>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none select-none text-[2.8rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8.5rem]">
                Hi,<br />I&apos;m Akhil
              </h1>
            </FadeIn>
          </div>

          {/* Typing Line */}
          <FadeIn delay={0.4} y={20}>
            <div className="mt-4 sm:mt-5 text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] font-medium text-[#E2E8F0] opacity-75 flex items-center gap-2 flex-wrap justify-center lg:justify-start">
              I build&nbsp;<TypingAnimation />
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.55} y={20}>
            <div className="mt-7 sm:mt-10 flex items-center gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
              <ContactButton onClick={handleContactClick} />
              <button
                onClick={handleResumeDownload}
                className="group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(18, 18, 26, 0.6)",
                  border: "1px solid rgba(129, 140, 248, 0.4)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(129, 140, 248, 0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(129, 140, 248, 0.8)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(129, 140, 248, 0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(129, 140, 248, 0.4)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(129, 140, 248, 0.08)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(129,140,248,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span className="text-[#E2E8F0] font-medium text-xs sm:text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                  View Resume
                </span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(129,140,248,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT — Avatar Photo (hidden on small mobile, shown from sm up) */}
        <div className="flex-shrink-0 flex items-end justify-center z-10 w-[200px] xs:w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[440px] mt-2 lg:mt-0 self-center lg:self-end">
          <FadeIn delay={0.5} y={30}>
            <Magnet
              padding={80}
              strength={2}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div
                className="relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
                style={{
                  border: "1.5px solid rgba(129, 140, 248, 0.5)",
                  boxShadow: "0 0 40px rgba(129, 140, 248, 0.2), 0 0 80px rgba(34, 211, 238, 0.08), inset 0 0 30px rgba(129, 140, 248, 0.05)",
                  background: "rgba(18, 18, 26, 0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avatar.jpg"
                  alt="Akhil Makwana — MERN Developer"
                  className="w-full h-auto object-cover select-none pointer-events-none block"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, rgba(10,10,15,0.65) 0%, transparent 100%)" }}
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
