"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 64; // Navbar ki height
      const elementPosition = el.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md ${scrolled ? "bg-black/80 shadow-2xl" : "bg-black/30"} border-b border-white/10 z-50`}>
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        WryClip
      </h1>

      <div className="hidden md:flex gap-6 text-gray-300">
        <span onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">About</span>
        <span onClick={() => scrollToSection("sections")} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">Sections</span>
        <span onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">People</span>
        <span onClick={() => scrollToSection("register")} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">Register</span>
        <span onClick={() => scrollToSection("faq")} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">FAQ</span>
        <span onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">Contact</span>
      </div>
    </div>
  );
}