"use client";

export default function Footer() {
  return (
    <footer className="bg-black/90 mt-16 p-8 text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p>M: +91-XXXXXXXXXX</p>
          <p>M: +91-YYYYYYYYYY</p>
        </div>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-logo.png" alt="Instagram" className="w-6 h-6"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6"/>
          </a>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6 text-sm">© 2026 WryClip. All rights reserved.</p>
    </footer>
  );
}