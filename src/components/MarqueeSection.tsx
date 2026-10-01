"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaAws, FaFigma } from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiGraphql, 
  SiRedux, 
  SiPrisma, 
  SiDocker, 
  SiFirebase 
} from "react-icons/si";

const techStackRow1 = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
];

const techStackRow2 = [
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Git & GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" }, // Filler to balance
];

// Duplicate items twice to create a seamless infinite loop
const row1 = [...techStackRow1, ...techStackRow1];
const row2 = [...techStackRow2, ...techStackRow2];

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-20 overflow-hidden w-full flex flex-col gap-8 sm:gap-12 select-none relative">
      
      {/* Decorative Gradients for smooth fade in/out on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Moves Left */}
      <div className="w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          className="flex gap-6 sm:gap-8 flex-nowrap"
          style={{ width: "max-content" }}
        >
          {row1.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div 
                key={`r1-${i}`} 
                className="flex items-center gap-4 px-8 py-5 rounded-full bg-[#171717] border border-[#222] shadow-[0_0_20px_rgba(129,140,248,0.02)] hover:border-[#818CF8]/40 hover:shadow-[0_0_30px_rgba(129,140,248,0.15)] transition-all duration-300 cursor-default group flex-shrink-0"
              >
                <Icon className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                <span className="text-xl sm:text-2xl font-bold text-[#D7E2EA] tracking-wide whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2 - Moves Right */}
      <div className="w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 45,
            repeat: Infinity,
          }}
          className="flex gap-6 sm:gap-8 flex-nowrap"
          style={{ width: "max-content" }}
        >
          {row2.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div 
                key={`r2-${i}`} 
                className="flex items-center gap-4 px-8 py-5 rounded-full bg-[#171717] border border-[#222] shadow-[0_0_20px_rgba(34,211,238,0.02)] hover:border-[#22D3EE]/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 cursor-default group flex-shrink-0"
              >
                <Icon className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                <span className="text-xl sm:text-2xl font-bold text-[#D7E2EA] tracking-wide whitespace-nowrap opacity-90 group-hover:opacity-100">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
