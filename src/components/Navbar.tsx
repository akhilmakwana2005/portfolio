"use client";
import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full flex justify-between items-center px-5 sm:px-8 md:px-10 pt-5 sm:pt-7 md:pt-8 z-50 relative">
      {/* Logo */}
      <span className="accent-text font-black uppercase tracking-widest text-sm md:text-base select-none">
        AM.
      </span>

      {/* Desktop Nav links */}
      <div className="hidden md:flex items-center gap-5 lg:gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[#E2E8F0] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-sm lg:text-base transition-opacity duration-200 hover:opacity-70 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#818CF8] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{
            background: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(16px)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#E2E8F0] font-black uppercase tracking-widest text-2xl hover:opacity-60 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </FadeIn>
  );
}
