"use client";
import React from "react";
import Magnet from "./Magnet";

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export default function LiveProjectButton({ href, className = "" }: LiveProjectButtonProps) {
  return (
    <div className={className}>
      <Magnet padding={60} strength={5}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-center"
        >
          Live Project
        </a>
      </Magnet>
    </div>
  );
}
