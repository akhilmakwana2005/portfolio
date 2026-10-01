"use client";
import React, { useRef, useEffect } from "react";

const techStackRow1 = [
  "REACT.JS",
  "NODE.JS",
  "EXPRESS",
  "MONGODB",
  "NEXT.JS",
  "TYPESCRIPT",
];

const techStackRow2 = [
  "TAILWINDCSS",
  "FRAMER MOTION",
  "REDUX",
  "GRAPHQL",
  "JAVASCRIPT",
  "GIT & GITHUB",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Triple the arrays to ensure infinite scroll illusion
  const row1 = [...techStackRow1, ...techStackRow1, ...techStackRow1, ...techStackRow1];
  const row2 = [...techStackRow2, ...techStackRow2, ...techStackRow2, ...techStackRow2];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.4;

      // Row 1: moves right on scroll
      row1Ref.current.style.transform = `translate3d(${offset - 800}px, 0px, 0px)`;
      // Row 2: moves left on scroll
      row2Ref.current.style.transform = `translate3d(${-(offset - 200)}px, 0px, 0px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-20 overflow-hidden w-full flex flex-col gap-6 sm:gap-10 select-none"
    >
      {/* Row 1 */}
      <div className="w-full overflow-hidden flex">
        <div
          ref={row1Ref}
          style={{ willChange: "transform" }}
          className="flex gap-8 sm:gap-16 transition-transform duration-75 ease-out items-center"
        >
          {row1.map((tech, i) => (
            <div key={`row1-${i}`} className="flex items-center gap-8 sm:gap-16 flex-shrink-0">
              <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black uppercase text-transparent whitespace-nowrap" style={{ WebkitTextStroke: "2px rgba(215, 226, 234, 0.15)" }}>
                {tech}
              </span>
              <span className="text-[#818CF8] text-[2rem] sm:text-[3rem]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full overflow-hidden flex">
        <div
          ref={row2Ref}
          style={{ willChange: "transform" }}
          className="flex gap-8 sm:gap-16 transition-transform duration-75 ease-out items-center"
        >
          {row2.map((tech, i) => (
            <div key={`row2-${i}`} className="flex items-center gap-8 sm:gap-16 flex-shrink-0">
              <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black uppercase text-[#D7E2EA] opacity-80 whitespace-nowrap">
                {tech}
              </span>
              <span className="text-[#22D3EE] text-[2rem] sm:text-[3rem]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
