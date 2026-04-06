// components/CustomCursor.tsx
"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const clickCursor = () => setClicked(true);
    const releaseCursor = () => setClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", clickCursor);
    window.addEventListener("mouseup", releaseCursor);

    // Hover detection
    const interactiveElements = document.querySelectorAll("button, a, input, .cursor-link");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", clickCursor);
      window.removeEventListener("mouseup", releaseCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className={`
        pointer-events-none fixed z-50 rounded-full transform -translate-x-1/2 -translate-y-1/2
        transition-all duration-150 ease-out
        ${hovered ? "bg-pink-500 w-10 h-10 scale-125" : "bg-purple-500 w-6 h-6"}
        ${clicked ? "scale-50 bg-blue-500" : ""}
      `}
    />
  );
}