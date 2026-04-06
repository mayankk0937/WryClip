"use client";
import { useState, useEffect } from "react";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero */}
      <section id="about" className="relative z-10 text-center pt-32 pb-16 px-4">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          WryClip
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Shifting the world of content creation
        </p>
        <button
          onClick={() => document.getElementById("register")?.scrollIntoView({behavior: 'smooth'})}
          className="mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
        >
          Join WryClip
        </button>
      </section>

      {/* Sections */}
      <section id="sections" className="mt-32 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {["For Writers", "For Creators", "Talent Discovery"].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400">Build, create and grow with next-gen tools.</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mt-32 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-gray-400 mb-4">“Amazing platform, love it!”</p>
            <p className="text-sm text-gray-500">- User 1</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-gray-400 mb-4">“Content creation made easy.”</p>
            <p className="text-sm text-gray-500">- User 2</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-gray-400 mb-4">“Highly recommended!”</p>
            <p className="text-sm text-gray-500">- User 3</p>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="mt-32 max-w-md mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-3 rounded-lg bg-black border border-gray-600 outline-none focus:border-purple-500"/>
          <input type="tel" placeholder="Phone" className="p-3 rounded-lg bg-black border border-gray-600 outline-none focus:border-purple-500"/>
          <button className="py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition">Submit</button>
        </div>
        <p className="text-gray-400 mt-2 text-sm">Or register using Google</p>
        <button className="mt-2 flex items-center justify-center gap-2 p-3 rounded-lg bg-white text-black font-medium hover:scale-105 transition mx-auto">
          <img src="https://img.icons8.com/color/24/google-logo.png"/> Google
        </button>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-32 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <p className="font-semibold">How does WryClip work?</p>
            <p className="text-gray-400 mt-2">You upload stories, creators pick, and videos are created easily.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <p className="font-semibold">Is it free?</p>
            <p className="text-gray-400 mt-2">Basic version is free, premium features coming soon.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}