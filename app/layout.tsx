import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WryClip",
  description: "From story to screen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        
        {/* Cursor */}
        <CustomCursor />

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {children}
      </body>
    </html>
  );
}