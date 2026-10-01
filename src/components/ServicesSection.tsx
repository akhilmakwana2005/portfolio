"use client";
import React from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    name: "Frontend Development",
    desc: "Building responsive, modern user interfaces using HTML5, CSS3, JavaScript (ES6+), React.js, React Hooks, Context API, and Tailwind CSS.",
  },
  {
    num: "02",
    name: "Backend Development",
    desc: "Designing robust RESTful APIs and server-side logic with Node.js, Express.js, JWT Authentication, and MVC Architecture.",
  },
  {
    num: "03",
    name: "Database Management",
    desc: "Optimizing relational and non-relational databases including MongoDB, MySQL, and PostgreSQL, focusing on scalable schema design.",
  },
  {
    num: "04",
    name: "Deployment & Tools",
    desc: "Deploying full-stack applications and managing version control using tools like Git, GitHub, Render, Vercel, and Netlify.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#050505] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full select-none relative z-10"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#D7E2EA] font-black uppercase text-center text-[3rem] sm:text-[6vw] md:text-[8vw] lg:text-[160px] mb-4 leading-none tracking-tight">
            Skills
          </h2>
          <p className="text-[#D7E2EA] opacity-40 text-center uppercase tracking-widest text-xs sm:text-sm font-light mb-16 sm:mb-20 md:mb-28">
            What I bring to the table
          </p>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(215,226,234,0.1)]">
          {services.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 0.1} y={30}>
              <div className="flex items-center gap-4 sm:gap-10 md:gap-16 py-6 sm:py-10 md:py-12 border-b border-[rgba(215,226,234,0.1)] hover:bg-[#0C0C0C]/50 transition-colors rounded-xl px-4 -mx-4 group cursor-default">
                {/* Left: Number */}
                <div className="font-black text-transparent text-[2.2rem] sm:text-[5vw] md:text-[7vw] lg:text-[100px] leading-none select-none min-w-[50px] sm:min-w-[100px] md:min-w-[150px] flex-shrink-0 group-hover:text-[#818CF8] transition-colors" style={{ WebkitTextStroke: "2px rgba(215, 226, 234, 0.2)" }}>
                  {svc.num}
                </div>

                {/* Right: Title & Description */}
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <h3 className="font-medium uppercase text-[#D7E2EA] group-hover:text-[#22D3EE] transition-colors text-[0.95rem] sm:text-[1.5vw] md:text-[1.8rem] leading-tight tracking-wide">
                    {svc.name}
                  </h3>
                  <p className="font-light leading-relaxed text-[#D7E2EA] opacity-60 text-[0.8rem] sm:text-[1.2vw] md:text-[1.1rem] max-w-2xl">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
