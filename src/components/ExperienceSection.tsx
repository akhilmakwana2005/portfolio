"use client";
import React, { useRef, useEffect, useState } from "react";
import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Stackdot",
    period: "Jun 2025 – Present",
    type: "Internship",
    color: "#818CF8",
    points: [
      "Building and maintaining a live CRM product used by real clients.",
      "Developed RESTful APIs with Node.js & Express using MVC architecture.",
      "Implemented JWT-based authentication and role-based access control.",
      "Worked on MongoDB schemas, query optimization, and data modeling.",
      "Collaborated with the team using Git, GitHub, and agile workflows.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Gujarat University",
    period: "2022 – 2025",
    color: "#22D3EE",
  },
];

export default function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top + window.innerHeight * 0.3);
      const total = sectionRef.current.offsetHeight;
      setLineHeight(Math.min((scrolled / total) * 100, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      className="bg-[#0A0A0F] px-5 sm:px-8 md:px-10 py-20 sm:py-28 w-full select-none"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[#E2E8F0] opacity-40 uppercase tracking-widest text-xs sm:text-sm font-light">
              Where I&apos;ve been
            </span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight mt-3 text-[3rem] sm:text-[6vw] md:text-[7vw] lg:text-[6rem]">
              Experience
            </h2>
          </div>
        </FadeIn>

        <div ref={sectionRef} className="relative flex gap-8 sm:gap-12">
          {/* Animated vertical line */}
          <div className="hidden sm:flex flex-col items-center pt-2 select-none">
            <div className="relative w-[2px] flex-1 bg-[#E2E8F0]/10 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full rounded-full transition-all duration-100"
                style={{
                  height: `${lineHeight}%`,
                  background: "linear-gradient(180deg, #818CF8, #22D3EE)",
                }}
              />
            </div>
          </div>

          {/* Timeline items */}
          <div className="flex-1 flex flex-col gap-12">
            {/* Work Experience */}
            <div>
              <FadeIn delay={0.05} y={20}>
                <p className="text-[#818CF8] uppercase tracking-widest text-xs font-light mb-6">
                  Work
                </p>
              </FadeIn>
              {experiences.map((exp, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.1} y={24}>
                  <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-4 group hover:border-[#818CF8]/40 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div>
                        <h3 className="text-[#E2E8F0] font-bold text-lg sm:text-xl leading-tight">
                          {exp.role}
                        </h3>
                        <p className="accent-text font-semibold text-base mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[#E2E8F0] opacity-40 text-xs uppercase tracking-widest font-light">
                          {exp.period}
                        </span>
                        <span
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: `${exp.color}18`,
                            color: exp.color,
                            border: `1px solid ${exp.color}33`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#E2E8F0] opacity-60 text-sm leading-relaxed group-hover:opacity-80 transition-opacity">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#818CF8] flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Education */}
            <div>
              <FadeIn delay={0.2} y={20}>
                <p className="text-[#22D3EE] uppercase tracking-widest text-xs font-light mb-6">
                  Education
                </p>
              </FadeIn>
              {education.map((edu, i) => (
                <FadeIn key={i} delay={0.25 + i * 0.1} y={24}>
                  <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#22D3EE]/40 transition-colors duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[#E2E8F0] font-bold text-lg sm:text-xl leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-[#22D3EE] font-semibold text-base mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-[#E2E8F0] opacity-40 text-xs uppercase tracking-widest font-light">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
