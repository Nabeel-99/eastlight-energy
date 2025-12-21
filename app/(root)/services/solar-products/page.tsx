"use client";

import { solarProducts } from "@/lib/data";
import React, { useRef, useState, useEffect } from "react";
import { Sun, TrendingUp, Wrench } from "lucide-react";
import { SolarProductForm } from "@/components/forms/SolarProductForm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ServiceHero from "@/components/ServiceHero";
import SolarProductCatalogue from "@/components/SolarProductCatalogue";
import { useSearchParams } from "next/navigation";

const solarProductImages = [
  "/streetlightsolar2.webp",
  "/paneltwo.webp",
  "/streetlightsolar.png",
  "/solarpanel.avif",
  "/solarproductbg.jpg",
  "/solarbg.png",
];
const page = () => {
  const searchParams = useSearchParams();
  const activeParam = searchParams.get("active");

  const [activeIndex, setActiveIndex] = useState(
    activeParam ? parseInt(activeParam) : 0
  );

  const startRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const [selectedSeriesIndex, setSelectedSeriesIndex] = useState(0);
  const currentProduct = solarProducts[activeIndex];
  const currentDataSource = currentProduct.dataSource || [];
  const hasMultipleSeries = currentDataSource.length > 1;
  const currentSeries =
    currentDataSource[selectedSeriesIndex] || currentDataSource[0];

  const getSpecKeys = () => {
    if (!currentSeries?.models || currentSeries.models.length === 0) return [];
    const firstModel = currentSeries.models[0];
    return Object.keys(firstModel).filter((key) => key !== "model");
  };

  useEffect(() => {
    if (activeParam) {
      const index = parseInt(activeParam);
      if (!isNaN(index) && index >= 0 && index < solarProducts.length) {
        setActiveIndex(index);

        if (productsRef.current) {
          setTimeout(() => {
            productsRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [activeParam]);

  const handleSeriesClick = (seriesIndex: number) => {
    setSelectedSeriesIndex(seriesIndex);
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const specKeys = getSpecKeys();

  const handleProductClick = (index: number) => {
    setActiveIndex(index);
    setSelectedSeriesIndex(0);

    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollClick = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
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
      description: "Best rates on CWorth Energy products",
      icon: <Wrench className="size-6" />,
    },
    {
      title: "Expert Guidance",
      description: "Professional product recommendations",
      icon: <TrendingUp className="size-6" />,
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#form-section",
        start: "top 70%",
      },
    });
    tl.from(".form-title", {
      x: 50,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    })
      .from(
        ".form-desc",
        {
          x: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".form-items",
        {
          y: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".form-card",
        {
          y: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.2"
      );
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full text-white">
      <ServiceHero
        badge="SOLAR PRODUCTS"
        title="CWORTH SOLAR PRODUCTS"
        description="High-performance panels, inverters, and battery storage built for Nigeria. Get reliable power without equipment failure or compatibility issues."
        btnText="Explore Products"
        handleScrollClick={handleScrollClick}
        bgType="swiper"
        swiperImages={solarProductImages}
      />
      {/* products */}
      <SolarProductCatalogue
        productsRef={productsRef}
        startRef={startRef}
        selectedSeriesIndex={selectedSeriesIndex}
        specKeys={specKeys}
        currentSeries={currentSeries}
        hasMultipleSeries={hasMultipleSeries}
        currentProduct={currentProduct}
        activeIndex={activeIndex}
        handleProductClick={handleProductClick}
        handleSeriesClick={handleSeriesClick}
        solarProducts={solarProducts}
      />

      <section id="form-section" className="py-20 px-4 overflow-x-hidden">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl form-title lg:text-5xl text-center mx-auto max-w-xl font-bold xl:text-6xl lg:tracking-tight bg-linear-to-b from-red-500/70 to-teal-400 to-40% bg-clip-text text-transparent">
            Interested in CWorth Solar products?
          </h2>
          <p className="lg:text-lg form-desc max-w-xl text-center text-gray-300">
            Submit your inquiry to learn more about CWorth Energy products and
            systems. Our team will provide detailed information and pricing.
          </p>
          <div className="flex flex-col lg:flex-row form-items items-center gap-2 lg:max-w-5xl">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2">
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
