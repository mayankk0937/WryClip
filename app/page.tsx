"use client";
import { useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import { motion } from "framer-motion";

// Navbar
const Navbar = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navbarHeight = 64;
  const extraOffset = 20;

  // Track scroll and screen size
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleScroll();
    handleResize();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.offsetTop - navbarHeight - extraOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "sections", label: "Explore" },
    { id: "testimonials", label: "Testimonials" },
    { id: "register", label: "Register" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const isFloating = scrolled && isMobile;

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          top: isFloating ? 16 : 0,
          width: isFloating ? "92%" : "100%",
          maxWidth: isFloating ? 1200 : "100%",
          borderRadius: isFloating ? 100 : 0,
          paddingLeft: isFloating ? 32 : 24,
          paddingRight: isFloating ? 32 : 24,
          paddingTop: isFloating ? 10 : 16,
          paddingBottom: isFloating ? 10 : 16,
          scale: isFloating ? 0.98 : 1,
          x: isFloating ? "-50%" : "0%",
          left: isFloating ? "50%" : "0%",
          backgroundColor: darkMode 
            ? (scrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.2)") 
            : (scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.8)"),
          borderColor: darkMode 
            ? (scrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)") 
            : "rgba(0, 0, 0, 0.1)",
          boxShadow: isFloating 
            ? "0 30px 60px rgba(0,0,0,0.4)" 
            : scrolled 
              ? "0 4px 20px rgba(0,0,0,0.1)" 
              : "0 1px 2px rgba(0,0,0,0.05)",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.6
        }}
        className={`fixed z-50 flex justify-between items-center backdrop-blur-xl border-b`}
      >
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          WryClip
        </h1>

        <div className={`hidden md:flex gap-6 items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {navLinks.map(({ id, label }, i) => (
            <span
              key={i}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer hover:underline transition ${darkMode ? "hover:text-white" : "hover:text-black"}`}
            >
              {label}
            </span>
          ))}

          {/* Premium Theme Toggle - Desktop */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`ml-4 relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none group
              ${darkMode
                ? "bg-white/5 border border-purple-500/40 shadow-[0_0_14px_rgba(168,85,247,0.35)] hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] hover:border-purple-400"
                : "bg-amber-50 border border-amber-400/60 shadow-[0_0_14px_rgba(251,191,36,0.4)] hover:shadow-[0_0_22px_rgba(251,191,36,0.7)] hover:border-amber-300"
              }`}
          >
            <motion.div
              key={darkMode ? "moon" : "sun"}
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {!darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("register")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
          >
            Register
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* Premium Theme Toggle - Mobile */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none
              ${darkMode
                ? "bg-white/5 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                : "bg-amber-50 border border-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.4)] hover:shadow-[0_0_20px_rgba(251,191,36,0.7)]"
              }`}
          >
            <motion.div
              key={darkMode ? "moon-m" : "sun-m"}
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {!darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </motion.div>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className={`focus:outline-none ${darkMode ? "text-white" : "text-black"}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            top: scrolled ? 80 : 70, // Adjust based on floating header height
            width: scrolled ? "92%" : "100%",
            left: scrolled ? "4%" : "0%",
            borderRadius: scrolled ? 24 : "0 0 24px 24px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed backdrop-blur-2xl border z-40 flex flex-col items-center py-8 px-6 gap-4 md:hidden 
            ${darkMode 
              ? "bg-black/80 border-white/10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "bg-white/90 border-black/10 text-black shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            }`}
        >
          <div className="w-full flex flex-col gap-3">
            {navLinks.map(({ id, label }, i) => (
              <span
                key={i}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer text-lg font-medium tracking-wide py-3 rounded-xl transition text-center w-full shadow-sm ${darkMode ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-300" : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-purple-500/50 hover:text-purple-600"}`}
              >
                {label}
              </span>
            ))}
          </div>
          <button
            onClick={() => scrollToSection("register")}
            className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-[1.02] active:scale-95 transition-all font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white"
          >
            Register Now
          </button>
        </motion.div>
      )}
    </>
  );
};

export default function Home() {
  const navbarHeight = 64;
  const extraOffset = 20;
  const [darkMode, setDarkMode] = useState(true);

  // Focus: Form states
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name && !formData.email && !formData.phone) return;

    setPhoneError("");
    const strippedPhone = formData.phone.replace(/\D/g, "");
    if (strippedPhone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number! 📱");
      return;
    }

    setIsSubmitting(true);

    const params = new URLSearchParams();
    params.append('name', formData.name);
    params.append('email', formData.email);
    params.append('phone', formData.phone);

    try {
      await fetch("https://script.google.com/macros/s/AKfycby4M8nyS0fkpE9sNfkUWSJmtOkhyCm3fPDtiUSKk4-9ytuO-o4JFcyhQGkzjnsdM-EptQ/exec", {
        method: "POST",
        body: params,
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => setIsSuccess(false), 5000); // Reset animation state after 5 seconds
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      const elementPosition = el.offsetTop - navbarHeight - extraOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${darkMode ? "bg-transparent text-white" : "bg-white text-black"
        } relative min-h-screen overflow-x-hidden overflow-y-auto transition-colors duration-500`}
    >
      {/* Cursor */}
      <CustomCursor />


      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* HERO */}
      <section
        id="hero"
        className="relative z-10 flex flex-col items-center text-center px-4 pt-36 pb-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent tracking-tight"
        >
          WryClip
        </motion.h1>
        <p className={`mt-4 text-lg max-w-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Shifting The World Of Content Creation
        </p>
        <button
          onClick={scrollToRegister}
          className="mt-6 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition font-semibold"
        >
          Join WryClip
        </button>
      </section>

      {/* Sections */}
      <section id="sections" className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {[
          {
            title: "For Writers",
            desc: "Discover a powerful community of writers and unlock earning opportunities through your stories"
          },
          {
            title: "For Creators",
            desc: "Bring your imagination to life and profit from your content."
          },
          {
            title: "Talent Discovery",
            desc: "Experience stories with a cinematic edge."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl border border-white/10 cursor-pointer backdrop-blur-lg ${darkMode ? "bg-white/5" : "bg-black/5"
              }`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mt-32 max-w-5xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-10 ${darkMode ? "text-white" : "text-black"}`}>What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "~ Mansi",
              handle: "@mansi.hihihi_",
              link: "https://www.instagram.com/mansi.hihihi_?igsh=ZzhxOGlqbzU1bjRk",
              feedback: "Social media feels so filtered lately, so this concept is a breath of fresh air! We really needed a platform like this. Can’t wait for the launch! something big is brewing! The idea is super fresh and honestly, game-changing. Can't wait for the launch, counting down the days!"
            },
            {
              name: "~ Aakanksha Bhat (Author)",
              handle: "",
              link: "",
              bookTitle: "How To Read When You Hate Reading",
              bookLink: "https://amzn.in/d/05m16rck",
              feedback: "An app that thoughtfully bridges the gap between story writer and story teller. Can't wait for the launch! honestly that's a great initiative. What’s particularly compelling is the underlying philosophy valuing originality as an asset rather than a byproduct. Looking forward to seeing this platform come to life."
            },
            {
              name: "~ Dhruv",
              handle: "@why_should.i_care",
              link: "https://www.instagram.com/why_should.i_care?igsh=MTgyazUxeXhnZWN4ag==",
              feedback: "Bringing writers, creators, and the audience together in one place, that’s where the real magic happens. If the execution is strong, this could seriously change how we consume stories. Honestly, this feels like something new and meaningful. Definitely excited to see how this turns out. Waiting for the launch! 🚀✨"
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl border border-white/10 cursor-pointer backdrop-blur-lg flex flex-col justify-between ${darkMode ? "bg-white/5" : "bg-black/5"
                }`}
            >
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} italic leading-relaxed text-sm`}>
                "{t.feedback}"
              </p>
              <div className="mt-4 flex flex-col items-center text-center">
                <h4 className="font-semibold">{t.name}</h4>
                {t.handle && (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium hover:opacity-80 transition inline-flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    {t.handle}
                  </a>
                )}
                {t.bookTitle && t.bookLink && (
                  <a
                    href={t.bookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent font-medium hover:opacity-80 transition inline-flex items-center gap-1.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                    {t.bookTitle}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Registration */}
      <section
        id="register"
        className="mt-32 max-w-2xl mx-auto px-4 text-center"
      >
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-black"}`}>
          Register Now
        </h2>

        {/* Boxed Form */}
        <div className="bg-black/70 dark:bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-3xl shadow-2xl relative overflow-hidden min-h-[300px] flex flex-col justify-center">
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-6"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)] relative">
                <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </motion.svg>
              </div>
              <h3 className={`text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-green-500"}`}>Successfully Submitted!</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Thank you. We have saved your details securely.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className={`p-3 rounded-lg border outline-none focus:border-purple-500 transition-all duration-300 [&:not(:placeholder-shown)]:border-purple-500 ${darkMode ? "bg-black/90 border-gray-600 text-white [&:not(:placeholder-shown)]:bg-purple-900/40" : "bg-white border-gray-300 text-black [&:not(:placeholder-shown)]:bg-purple-50"}`}
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className={`p-3 rounded-lg border outline-none focus:border-purple-500 transition-all duration-300 [&:not(:placeholder-shown)]:border-purple-500 ${darkMode ? "bg-black/90 border-gray-600 text-white [&:not(:placeholder-shown)]:bg-purple-900/40" : "bg-white border-gray-300 text-black [&:not(:placeholder-shown)]:bg-purple-50"}`}
              />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (phoneError) setPhoneError("");
                }}
                placeholder="Phone Number"
                className={`p-3 rounded-lg border outline-none focus:border-purple-500 transition-all duration-300 [&:not(:placeholder-shown)]:border-purple-500 ${darkMode ? "bg-black/90 border-gray-600 text-white [&:not(:placeholder-shown)]:bg-purple-900/40" : "bg-white border-gray-300 text-black [&:not(:placeholder-shown)]:bg-purple-50"}`}
              />
              {phoneError && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm font-medium px-1">
                  {phoneError}
                </motion.div>
              )}
              <button disabled={isSubmitting} type="submit" className="py-3 mt-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-[1.02] active:scale-95 transition-all font-semibold shadow-[0_0_15px_rgba(168,85,247,0.4)] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center min-h-[50px] text-white">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : "Submit Details"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-32 max-w-4xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? "text-white" : "text-black"}`}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            { q: "Is WryClip free to use?", a: "Yes, WryClip offers a free plan for creators to get started with basic tools." },
            { q: "Can I publish my videos directly?", a: "Absolutely! You can publish videos directly from our platform to multiple social media channels." },
            { q: "Who is the target audience of WryClip ?", a: "WryClip targets wide range of audience including writers , content creators and curious viewers." },
            { q: "Is there customer support available?", a: "Yes, our support team is available 24/7 to help you with any issues." },
            { q: "Can I integrate with other platforms?", a: "Yes, WryClip supports integration with major platforms like YouTube, Instagram, and TikTok." },
          ].map((item, i) => (
            <details key={i} className={`p-4 rounded-lg cursor-pointer ${darkMode ? "bg-white/5" : "bg-black/5"}`}>
              <summary className="font-medium">{item.q}</summary>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-700"} mt-2`}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mt-32 max-w-5xl mx-auto px-4 py-10">
        <h2 className={`text-3xl font-bold mb-10 text-center ${darkMode ? "text-white" : "text-black"}`}>
          Reach Out to Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">

          {/* Phone Box */}
          <motion.div whileHover={{ scale: 1.05 }} className={`p-6 rounded-2xl border border-white/10 backdrop-blur-lg flex flex-col items-center text-center gap-2 shadow-xl ${darkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              Kunj Shukla: <br />
              <a href="tel:+918076840003" className={`font-medium ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-500"} transition mt-1 inline-block`}>+91 8076840003</a>
            </p>
            <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
              Mayank: <br />
              <a href="tel:+918766231150" className={`font-medium ${darkMode ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-500"} transition mt-1 inline-block`}>+91 8766231150</a>
            </p>
          </motion.div>

          {/* Email Box */}
          <motion.div whileHover={{ scale: 1.05 }} className={`p-6 rounded-2xl border border-white/10 backdrop-blur-lg flex flex-col items-center text-center gap-2 shadow-xl ${darkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>Drop us a line anytime.</p>
            <a href="mailto:wryclip@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium transition mt-1">wryclip@gmail.com</a>
          </motion.div>

          {/* Social Box */}
          <motion.div whileHover={{ scale: 1.05 }} className={`p-6 rounded-2xl border border-white/10 backdrop-blur-lg flex flex-col items-center text-center gap-2 shadow-xl ${darkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
            <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mb-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">Connect & Follow</h3>
            <p className={`mt-2 mb-2 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>Stay updated on our socials.</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wryclip?igsh=MWo2b2Y5emo5aWNsdA=="
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${darkMode ? "bg-white/5 hover:bg-pink-500/20 text-white hover:text-pink-400" : "bg-black/5 hover:bg-pink-500/10 text-black hover:text-pink-500 border border-black/10"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/wryclip-504b03400?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${darkMode ? "bg-white/5 hover:bg-blue-500/20 text-white hover:text-blue-400" : "bg-black/5 hover:bg-blue-500/10 text-black hover:text-blue-500 border border-black/10"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-16 py-6 px-4 ${darkMode ? " text-gray-400" : "bg-white text-gray-700"}`}>
        <p className="text-center text-sm">© 2026 WryClip. All rights reserved.</p>
      </footer>
    </div>
  );
}