"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 64; // Navbar ki height
      const elementPosition = el.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "sections", label: "Sections" },
    { id: "testimonials", label: "People" },
    { id: "register", label: "Register" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md ${scrolled ? "bg-black/90 shadow-2xl" : "bg-black/30"} border-b border-white/10 z-50`}>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          WryClip
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          {navLinks.map((link) => (
            <span key={link.id} onClick={() => scrollToSection(link.id)} className="cursor-pointer hover:text-white hover:underline transition-all duration-200">
              {link.label}
            </span>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-[61px] left-0 w-full bg-gradient-to-b from-[#0a051a]/95 to-[#1c082b]/95 backdrop-blur-2xl rounded-b-3xl border-b border-white/10 z-40 flex flex-col items-center py-8 px-6 gap-4 md:hidden text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="w-full flex flex-col gap-3">
            {navLinks.map((link) => (
               <span
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="cursor-pointer text-lg font-medium tracking-wide bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-300 transition text-center w-full shadow-sm"
              >
                {link.label}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}