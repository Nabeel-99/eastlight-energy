"use client";

import { Button } from "@/components/ui/button";
import { solarProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Hotel,
  Plane,
  Sun,
  TrendingUp,
  Users,
  Wind,
  Wrench,
} from "lucide-react";
import { SolarProductForm } from "@/components/forms/SolarProductForm";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const startRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      title: "Product Information",
      description: "Detailed specification and features",
      icon: <Sun className="size-6" />,
    },
    {
      title: "Competitive Pricing",
      description: "Best reates on CWorth Energy products",
      icon: <Wrench className="size-6" />,
    },
    {
      title: "Expert Guidance",
      description: "Professional product recommendations",
      icon: <TrendingUp className="size-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">SOLAR SOLUTIONS</p>
      <h2 className="text-4xl text-center lg:text-6xl">CWORTH ENERGY SOLAR</h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Discover premium CWorth Energy solar products and systems.
        High-performance panels, inverters, and battery storage engineered for
        Nigerian conditions.
      </p>
      <Button className="p-6 rounded-full">Explore Products</Button>

      <section className="flex flex-col gap-6 mt-20 lg:mt-40 w-full">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-4xl text-center">Power Your World With Solar</p>
          <p className="text-center mx-auto text-lg lg:text-xl lg:max-w-xl">
            From panels to batteries, explore a range of products built for
            efficiency, reliability, and long-lasting performance.
          </p>
        </div>
        <div
          ref={startRef}
          className="flex flex-col lg:flex-row  lg:justify-between lg:gap-20 items-start mt-20 min-h-screen relative"
        >
          <section className="w-full flex flex-col gap-4 h-full pb-10">
            <img
              src={solarProducts[activeIndex].image}
              alt=""
              className="scale-90 w-[400px] aspect-square mx-auto"
            />
            <p className="text-2xl font-bold">
              {solarProducts[activeIndex].title}
            </p>
            <p className="uppercase text-xl font-bold italic">Description</p>
            <p className="text-lg">{solarProducts[activeIndex].description}</p>
            <p className="text-xl font-bold uppercase italic">Specification</p>
            <ul className="list-disc flex flex-col gap-2">
              {solarProducts[activeIndex].specs.map((item, index) => (
                <li key={index} className="ml-4 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-4 w-full lg:w-1/2 lg:sticky top-30">
            <h2 className="text-3xl text-center uppercase font-bold">
              CATALOGUE
            </h2>
            <div className="border rounded-lg p-4 flex flex-col gap-4">
              {solarProducts.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={cn(
                    "border rounded-xl p-5 lg:p-6 lg:text-xl text-left bg-transparent hover:bg-blue-900 text-black hover:text-white",
                    activeIndex === index ? "bg-blue-900 text-white" : ""
                  )}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10 mt-20 lg:mt-40">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-6xl">
            Interested in CWorth Solar products?
          </h2>
          <p className="text-lg">
            Submit your inquiry to learn more about CWorth Energy products and
            systems. Our team will provide detailed information and pricing.
          </p>
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="flex justify-start">
                  {" "}
                  <span className="bg-teal-500/20 p-2 rounded-full">
                    {" "}
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="">{item.title}</p>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SolarProductForm />
      </section>
    </div>
  );
};

export default page;
