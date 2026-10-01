"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {characters.map((char, index) => {
        if (char === " ") {
          return <span key={index} className="w-[0.3em]">&nbsp;</span>;
        }
        return (
          <Character
            key={index}
            char={char}
            index={index}
            total={characters.length}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Character({ char, index, total, progress }: CharacterProps) {
  const start = index / total;
  const end = Math.min(1, (index + 3) / total); // slight overlap for smooth reading flow
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}
