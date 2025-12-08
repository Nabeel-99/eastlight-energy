"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full bg-[#0A0F18] h-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
