import React from "react";
import { Zap, Award, Star, Building2 } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      number: "500+",
      label: "Solar Installations",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: "36",
      label: "States Covered",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-card bg-gradient-to-br from-teal-900/20 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-teal-400/20 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-3 rounded-full bg-gradient-to-br from-teal-400/20 to-yellow-500/20 text-teal-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-300">
                  {stat.label}
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
