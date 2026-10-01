"use client";
import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "+", label: "Year Experience" },
  { value: 100, suffix: "%", label: "Passion" },
];

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration, active]);

  return count;
}

function StatCard({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.value, 1500, active);
  return (
    <div className="flex flex-col items-center gap-2 px-4 sm:px-6 py-6 sm:py-8 glass-card rounded-2xl flex-1 min-w-[120px] max-w-[180px]">
      <span className="stat-number font-black text-4xl sm:text-5xl md:text-6xl leading-none">
        {count}{stat.suffix}
      </span>
      <span className="text-[#E2E8F0] opacity-50 uppercase tracking-widest text-[0.6rem] sm:text-xs font-light text-center">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#0A0A0F] py-16 sm:py-20 px-5 sm:px-8 md:px-10 w-full select-none"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
