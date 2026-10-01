"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";

const projects = [
  {
    num: "01",
    category: "Full Stack (MERN)",
    name: "AI Job Hunter Pro",
    img1: "/projects/job_hunter_1.jpg",
    img2: "/projects/job_hunter_2.jpg",
    img3: "/projects/job_hunter_hero.jpg",
    link: "https://github.com/akhilmakwana",
  },
  {
    num: "02",
    category: "Full Stack App",
    name: "MoneyTrackFlow",
    img1: "/projects/money_track_1.png",
    img2: "/projects/money_track_2.png",
    img3: "/projects/money_track_hero.png",
    link: "https://moneytrackflow.vercel.app/",
  },
  {
    num: "03",
    category: "Frontend Dev",
    name: "Personal Portfolio",
    img1: "/projects/portfolio_1.png",
    img2: "/projects/portfolio_2.webp",
    img3: "/projects/portfolio_hero.png",
    link: "https://akhilmakwana302.vercel.app/",
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 pb-40 w-full select-none"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[3rem] sm:text-[6vw] md:text-[8vw] lg:text-[10vw] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
            Project
          </h2>
        </FadeIn>

        {/* Stacking Cards List */}
        <div className="w-full flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => {
            const total = projects.length;
            const targetScale = 1 - (total - 1 - i) * 0.03;
            const startScroll = i / total;
            
            return (
              <ProjectCard
                key={project.num}
                index={i}
                num={project.num}
                category={project.category}
                name={project.name}
                img1={project.img1}
                img2={project.img2}
                img3={project.img3}
                link={project.link}
                progress={scrollYProgress}
                range={[startScroll, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardComponentProps {
  index: number;
  num: string;
  category: string;
  name: string;
  img1: string;
  img2: string;
  img3: string;
  link: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progress: any;
  range: number[];
  targetScale: number;
}

function ProjectCard({
  index,
  num,
  category,
  name,
  img1,
  img2,
  img3,
  link,
  progress,
  range,
  targetScale,
}: ProjectCardComponentProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const topOffset = index * 28;

  return (
    <div
      ref={cardRef}
      className="sticky w-full flex items-center justify-center"
      style={{
        top: `calc(72px + ${topOffset}px)`,
        height: "clamp(420px, 85vh, 900px)",
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Top Row: Number, Category, Name, Live Project CTA */}
        <div className="flex justify-between items-start sm:items-center w-full border-b border-[#D7E2EA]/15 pb-3 sm:pb-6 gap-2">
          <div className="flex items-baseline gap-2 sm:gap-6">
            <span className="font-black text-[1.8rem] sm:text-[3.5vw] md:text-[4.5rem] text-[#D7E2EA] leading-none flex-shrink-0">
              {num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-50 uppercase tracking-widest text-[0.55rem] sm:text-[0.8rem] font-light">
                {category}
              </span>
              <h3 className="text-[#D7E2EA] uppercase font-medium text-[0.9rem] sm:text-[1.5vw] md:text-[1.8rem] leading-tight tracking-wide">
                {name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={link} />
        </div>

        {/* Bottom: Image Grid — stacked on mobile, side-by-side on md+ */}
        <div className="flex-1 w-full mt-3 sm:mt-6 overflow-hidden">
          {/* Mobile: single image only */}
          <div className="block md:hidden w-full h-full rounded-[20px] overflow-hidden bg-[#171717]" style={{ height: "clamp(180px, 45vw, 300px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img3} alt={`${name} Hero View`} className="w-full h-full object-cover select-none pointer-events-none" />
          </div>
          {/* Desktop: two-column grid */}
          <div className="hidden md:grid grid-cols-10 gap-4 md:gap-6 h-full">
            <div className="col-span-4 flex flex-col justify-between h-full gap-4">
              <div style={{ height: "clamp(130px, 16vw, 230px)" }} className="w-full rounded-[36px] md:rounded-[40px] overflow-hidden bg-[#171717]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img1} alt={`${name} Screenshot 1`} className="w-full h-full object-cover select-none pointer-events-none" />
              </div>
              <div style={{ height: "clamp(160px, 22vw, 340px)" }} className="w-full rounded-[36px] md:rounded-[40px] overflow-hidden bg-[#171717] flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img2} alt={`${name} Screenshot 2`} className="w-full h-full object-cover select-none pointer-events-none" />
              </div>
            </div>
            <div className="col-span-6 h-full">
              <div className="w-full h-full rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#171717]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img3} alt={`${name} Hero View`} className="w-full h-full object-cover select-none pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
