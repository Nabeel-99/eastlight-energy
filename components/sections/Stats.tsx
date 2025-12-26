"use client";

import React from "react";
import { Zap, Award, Star, Building2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { NumberTicker } from "../ui/number-ticker";

const Stats = () => {
  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Solar Installations",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: 36,
      suffix: "",
      label: "States Covered",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      number: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: 4,
      suffix: "+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#stats",
        start: "top 70%",
      },
    });

    tl.from(".stats-title", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    ScrollTrigger.batch(".stats-card", {
      start: "top 80%",
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="stats" className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="stats-title text-3xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 bg-gradient-to-b from-red-200/70 to-teal-400 bg-clip-text text-transparent">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card opacity-0 translate-y-20">
              <div
                className="bg-gradient-to-br from-teal-900/20 h-full to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-teal-400/20 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-full bg-gradient-to-br from-teal-400/20 to-yellow-500/20 text-teal-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-1">
                    <NumberTicker value={stat.number} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm lg:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
