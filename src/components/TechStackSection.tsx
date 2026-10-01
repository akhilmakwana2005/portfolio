"use client";
import React from "react";
import FadeIn from "./FadeIn";

const techStack = [
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Express.js", icon: "⚡", color: "#818CF8" },
  { name: "React.js", icon: "⚛️", color: "#22D3EE" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "JavaScript", icon: "✦", color: "#F7DF1E" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6" },
  { name: "MySQL", icon: "🐬", color: "#4479A1" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Tailwind CSS", icon: "🎨", color: "#22D3EE" },
  { name: "HTML5 / CSS3", icon: "🌐", color: "#E34F26" },
  { name: "Git & GitHub", icon: "🔗", color: "#818CF8" },
  { name: "REST APIs", icon: "🔌", color: "#10B981" },
  { name: "JWT Auth", icon: "🔐", color: "#F59E0B" },
  { name: "Vercel", icon: "▲", color: "#E2E8F0" },
  { name: "Render", icon: "☁️", color: "#46E3B7" },
  { name: "Netlify", icon: "🚀", color: "#00AD9F" },
];

export default function TechStackSection() {
  return (
    <section
      id="techstack"
      className="bg-[#0A0A0F] px-5 sm:px-8 md:px-10 py-20 sm:py-28 w-full select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[#E2E8F0] opacity-40 uppercase tracking-widest text-xs sm:text-sm font-light">
              What I work with
            </span>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight mt-3 text-[3rem] sm:text-[6vw] md:text-[7vw] lg:text-[6rem]">
              Tech Stack
            </h2>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {techStack.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.04} y={20}>
              <div
                className="glass-card rounded-xl sm:rounded-2xl px-4 py-5 flex flex-col items-center gap-2 group hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: `0 0 0 0 ${tech.color}00`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px 0 ${tech.color}33`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${tech.color}55`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${tech.color}00`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(129, 140, 248, 0.15)`;
                }}
              >
                <span className="text-2xl sm:text-3xl">{tech.icon}</span>
                <span className="text-[#E2E8F0] font-medium text-xs sm:text-sm text-center uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
