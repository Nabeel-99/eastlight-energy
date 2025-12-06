"use client";

import { Button } from "@/components/ui/button";
import { solarProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { Check, ChevronRight, Sun, TrendingUp, Wrench } from "lucide-react";
import { SolarProductForm } from "@/components/forms/SolarProductForm";
import { ShineBorder } from "@/components/ui/shine-border";
import { Spotlight } from "@/components/ui/spotlight";

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
    <div className="flex flex-col items-center w-full h-full   text-white">
      <section className="relative flex flex-col items-center gap-6 bg-linear-to-b from-[#0A0F18] via-teal-950/20 to-[#0A0F18] p-10 lg:p-16 xl:p-24 w-full rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 w-full 2xl:container 2xl:mx-auto">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60 2xl:left-1/2 2xl:-translate-x-1/2"
            fill="#2DD4BF"
          />
        </div>
        <div className="absolute inset-0 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-[linear-gradient(rgba(45,212,191,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(45,212,191,0.07)_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="flex flex-col gap-2 lg:items-center  w-full z-40 pt-20  2xl:container 2xl:mx-auto pb-20 lg:pb-10">
          <div className="flex justify-center">
            {" "}
            <h2 className="text-base relative  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
              <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
              SOLAR PRODUCTS
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-xl">
            CWORTH ENERGY SOLAR
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto text-gray-300">
            Discover premium CWorth Energy solar products and systems.
            High-performance panels, inverters, and battery storage engineered
            for Nigerian conditions.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 mt-4">
            <Button className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500  md:p-6 md:px-8 md:text-base max-lg:w-full md:rounded-full  items-center  gap-2">
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="flex flex-col px-4 md:px-20 w-full lg:pt-20 pb-32 text-black bg-[#ffffff] ">
        {/* <div className="flex flex-col gap-2 w-full">
          <p className="text-4xl text-center">Power Your World With Solar</p>
          <p className="text-center mx-auto text-lg lg:text-xl lg:max-w-xl">
            From panels to batteries, explore a range of products built for
            efficiency, reliability, and long-lasting performance.
          </p> 
        </div> */}
        <div
          ref={startRef}
          className="flex flex-col lg:flex-row  2xl:container 2xl:mx-auto lg:justify-between lg:gap-20 items-start mt-20  relative"
        >
          <section className="flex flex-col gap-4 w-full lg:w-1/2 lg:sticky top-30">
            <h2 className="text-2xl lg:text-4xl text-left uppercase bg-linear-to-t from-gray-900 from-10% to-[#313131] bg-clip-text text-transparent font-bold">
              PRODUCT CATALOGUE
            </h2>
            <div className="border bg-white/30 shadow-md border-black/10 rounded-lg p-4 flex flex-col gap-4">
              {solarProducts.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={cn(
                    "border flex items-center justify-between border-black/10 text-gray-900 rounded-xl p-5 lg:p-6 lg:text-xl text-left bg-white/20 hover:bg-black hover:text-yellow-500",
                    activeIndex === index ? "bg-black text-yellow-300" : ""
                  )}
                >
                  {item.title}
                  <ChevronRight className="size-6" />
                </Button>
              ))}
            </div>
          </section>
          <section className="w-full flex flex-col gap-4 h-full pb-10 mt-10 order-first lg:order-0">
            <div className="border border-black/10 shadow-md bg-white/30 rounded-3xl p-10">
              <img
                src={solarProducts[activeIndex].image}
                alt=""
                className=" w-[400px] aspect-square mx-auto"
              />
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {solarProducts[activeIndex].title}
              </h3>
              <div className="h-1 w-20 bg-linear-to-r from-black to-yellow-500 rounded-full" />
            </div>
            <p className="uppercase text-sm font-bold  text-black">
              Description
            </p>
            <p className="text-lg">{solarProducts[activeIndex].description}</p>
            <p className="text-sm font-bold uppercase text-black">
              Specification
            </p>
            <ul className="flex flex-col gap-2">
              {solarProducts[activeIndex].specs.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-lg">
                  <span className=" w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <Check className="w-4 h-4 text-yellow-500  transition-colors" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="flex flex-col items-center gap-6 ">
          <h2 className="text-3xl lg:text-5xl text-center mx-auto max-w-xl  font-bold  xl:text-6xl lg:tracking-tight  bg-linear-to-b from-red-500/70   to-teal-400 to-40% bg-clip-text text-transparent ">
            Interested in CWorth Solar products?
          </h2>
          <p className="lg:text-lg max-w-xl text-center text-gray-300">
            Submit your inquiry to learn more about CWorth Energy products and
            systems. Our team will provide detailed information and pricing.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:max-w-5xl">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2" key={index}>
                  <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
                    <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-center font-bold text-lg lg:text-xl">
                      {item.title}
                    </p>
                    <span className="text-center text-sm text-gray-300">
                      {item.description}
                    </span>
                  </div>
                </div>
                <div className="h-20 w-1 last:h-0 lg:w-44 lg:last:w-0 lg:h-1 rounded-full mask-x-from-40% bg-linear-to-b from-[#39D3C8]/60 from-30% to-[#810303]" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <SolarProductForm />
      </section>
    </div>
  );
};

export default page;
