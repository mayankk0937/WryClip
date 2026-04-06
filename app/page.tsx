"use client";
import { useState } from "react";
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
  const navbarHeight = 64;
  const extraOffset = 20;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.offsetTop - navbarHeight - extraOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        WryClip
      </h1>
      <div className="hidden md:flex gap-6 text-gray-300 items-center">
        {["hero", "sections", "testimonials", "register", "faq", "contact"].map(
          (id, i) => (
            <span
              key={i}
              onClick={() => scrollToSection(id)}
              className="cursor-pointer hover:text-white hover:underline transition"
            >
              {id === "hero"
                ? "Home"
                : id === "sections"
                ? "Explore"
                : id === "testimonials"
                ? "Testimonials"
                : id === "register"
                ? "Register"
                : id === "faq"
                ? "FAQ"
                : "Contact"}
            </span>
          )
        )}

        {/* Slide Toggle */}
        <div
          className="ml-4 relative w-16 h-8 flex items-center bg-gray-300 rounded-full cursor-pointer"
          onClick={toggleDarkMode}
        >
          <div
            className={`absolute top-0 left-0 w-8 h-8 rounded-full bg-purple-500 transform transition-transform duration-300 ${
              darkMode ? "translate-x-0" : "translate-x-8"
            }`}
          ></div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("register")}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
      >
        Register
      </button>
    </div>
  );
};

export default function Home() {
  const navbarHeight = 64;
  const extraOffset = 20;
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      const elementPosition = el.offsetTop - navbarHeight - extraOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black/80 text-white" : "bg-white text-black"
      } relative min-h-screen overflow-x-hidden overflow-y-auto transition-colors duration-500`}
    >
      {/* Cursor */}
      <CustomCursor />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-purple-600 opacity-40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-pink-500 opacity-40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* HERO */}
      <section
        id="hero"
        className="relative z-10 flex flex-col items-center text-center px-4 pt-36 pb-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          WryClip
        </motion.h1>
        <p className={`mt-4 text-lg max-w-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Shifting The World Of Content Creation
        </p>
        <button
          onClick={scrollToRegister}
          className="mt-6 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition font-semibold"
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
      className={`p-6 rounded-2xl border border-white/10 cursor-pointer backdrop-blur-lg ${
        darkMode ? "bg-white/5" : "bg-black/5"
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
            { name: "Alice", feedback: "WryClip transformed my content workflow!" },
            { name: "Bob", feedback: "Best platform for creators. Highly recommended!" },
            { name: "Charlie", feedback: "Intuitive, fast, and professional." },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl border border-white/10 cursor-pointer backdrop-blur-lg ${
                darkMode ? "bg-white/5" : "bg-black/5"
              }`}
            >
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} italic`}>
                "{t.feedback}"
              </p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
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
        <div className="bg-black/70 dark:bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-lg flex flex-col gap-4 shadow-lg">
          <input
            type="text"
            placeholder="Full Name"
            className={`p-3 rounded-lg border outline-none focus:border-purple-500 ${
              darkMode ? "bg-black/90 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
            }`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`p-3 rounded-lg border outline-none focus:border-purple-500 ${
              darkMode ? "bg-black/90 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
            }`}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={`p-3 rounded-lg border outline-none focus:border-purple-500 ${
              darkMode ? "bg-black/90 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
            }`}
          />
          <button className="py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition font-semibold">
            Submit
          </button>
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
      <section id="contact" className="relative mt-32 max-w-4xl mx-auto px-4 py-10">
        {/* Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-50px] left-[-50px] w-[250px] h-[250px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-[250px] h-[250px] bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className={`flex flex-col gap-4 text-center relative z-10 ${darkMode ? "text-white" : "text-black"}`}>
          <p className={darkMode ? "text-gray-400" : "text-gray-700"}>Reach out to us at:</p>
          <p>Kunj Shukla: +91 8076840003</p>
          <p>Mayank: +91 8766231150</p>
          <p>Email: <span className="text-purple-400">wryclip@gmail.com</span></p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/wryclip?igsh=MWo2b2Y5emo5aWNsdA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition"
            >
              <img src="/instagram.png" alt="Instagram" className="w-8 h-8"/>
            </a>
            <a
              href="https://www.linkedin.com/in/wryclip-504b03400?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`mt-32 py-10 px-4 ${darkMode ? "bg-black/80 text-gray-300" : "bg-white text-gray-700"}`}>
        <p className="text-center mt-6">© 2026 WryClip. All rights reserved.</p>
      </footer>
    </div>
  );
}