"use client";
import { useEffect, useState, useRef } from "react";

const WORDS = ["Web Apps.", "REST APIs.", "Dashboards.", "CRM Systems.", "Full Stack Apps."];

export default function TypingAnimation() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (!deleting && charIndex < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === currentWord.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setWordIndex((w) => (w + 1) % WORDS.length);
      }, 0);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="accent-text font-black">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}
