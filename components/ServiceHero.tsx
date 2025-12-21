"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Spotlight } from "./ui/spotlight";
import { ShineBorder } from "./ui/shine-border";
import { Button as StatefulButton } from "./ui/stateful-button";
import WorldMap from "./ui/world-map";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

type ServiceHeroProps = {
  bgImage?: string;
  badge: string;
  title: string;
  description: string;
  btnText?: string;
  bgType?: "default" | "custom" | "video" | "image" | "swiper";
  swiperImages?: string[];
  handleScrollClick?: () => void;
};

const ServiceHero = ({
  bgImage,
  badge,
  title,
  description,
  btnText,
  bgType = "default",
  swiperImages,
  handleScrollClick,
}: ServiceHeroProps) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 70%",
      },
    });
    tl.from(".hero-img", {
      scale: 1.2,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    })
      .from(
        ".shine-border",
        {
          filter: "blur(10px)",
          opacity: 0,
          y: -20,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".hero-title",
        {
          y: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".hero-desc",
        {
          y: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.5"
      )
      .from(
        ".cta-btns",
        {
          y: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.5"
      );
  }, []);

  const renderBg = () => {
    switch (bgType) {
      case "default":
        return (
          <>
            <div className="absolute inset-0 w-full 2xl:container 2xl:mx-auto">
              <Spotlight
                className="-top-40 z-20 left-0 md:-top-20 md:left-60 2xl:left-1/2 2xl:-translate-x-1/2"
                fill="#2DD4BF"
              />
            </div>
            <div className="absolute inset-0 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-[linear-gradient(rgba(45,212,191,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(45,212,191,0.07)_1px,transparent_1px)] bg-size-[32px_32px]" />
          </>
        );

      case "swiper":
        return (
          <>
            {/* Swiper Background */}
            <div className="absolute inset-0 w-full h-full rounded-b-3xl overflow-hidden z-0">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="slide"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={1500}
                className="w-full h-full"
              >
                {swiperImages?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full relative">
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-black/30 z-10" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-black/50 z-10" />
          </>
        );

      case "video":
        return (
          <>
            <div className="absolute inset-0 w-full h-full rounded-b-3xl overflow-hidden z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover pointer-events-none"
                src="/affiliatevideo.mp4"
              />
            </div>
            <div className="absolute inset-0 bg-black/80 rounded-b-3xl z-10 pointer-events-none" />
          </>
        );

      case "image":
        return (
          <>
            <div className="absolute inset-0 w-full h-full rounded-b-3xl shadow-xl shadow-cyan-500/10 z-0">
              <img
                src={bgImage}
                alt=""
                className="w-full h-full object-cover rounded-b-3xl"
              />
            </div>
            <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-black opacity-70 z-10" />
          </>
        );

      case "custom":
        return (
          <>
            <div className="absolute inset-0 w-full 2xl:container 2xl:mx-auto">
              <Spotlight
                className="-top-40 z-20 left-0 md:-top-20 md:left-60 2xl:left-1/2 2xl:-translate-x-1/2"
                fill="#2DD4BF"
              />
            </div>
            <div className="absolute inset-0 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% z-10 pt-20">
              <WorldMap
                dots={[
                  {
                    start: { lat: 64.2008, lng: -149.4937 },
                    end: { lat: 34.0522, lng: -118.2437 },
                  },
                  {
                    start: { lat: 64.2008, lng: -149.4937 },
                    end: { lat: -15.7975, lng: -47.8919 },
                  },
                  {
                    start: { lat: -15.7975, lng: -47.8919 },
                    end: { lat: 38.7223, lng: -9.1393 },
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278 },
                    end: { lat: 28.6139, lng: 77.209 },
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 },
                    end: { lat: 43.1332, lng: 131.9113 },
                  },
                  {
                    start: { lat: 28.6139, lng: 77.209 },
                    end: { lat: -1.2921, lng: 36.8219 },
                  },
                ]}
              />
            </div>
          </>
        );
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center gap-6 bg-linear-to-b from-[#0A0F18] via-teal-950/20 to-[#0A0F18] p-10 lg:p-16 xl:p-24 w-full rounded-b-[3rem] overflow-hidden"
    >
      {renderBg()}
      <div className="flex flex-col gap-2 lg:items-center w-full z-30 pt-20 2xl:container 2xl:mx-auto pb-20 lg:pb-10">
        <div className="flex justify-center">
          <h2 className="text-base relative shine-border px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
            <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
            {badge}
          </h2>
        </div>

        <p className="text-[2rem] hero-title lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30% to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-2xl">
          {title}
        </p>
        <p className="lg:text-xl hero-desc leading-loose text-center max-w-xl mx-auto text-gray-300">
          {description}
        </p>
        {btnText && (
          <div className="flex flex-col cta-btns lg:flex-row lg:items-center lg:justify-center gap-4 mt-4">
            <StatefulButton
              onClick={handleScrollClick}
              className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 md:p-4 md:px-8 md:text-base max-lg:w-full max-lg:max-w-sm mx-auto md:rounded-full items-center gap-2"
            >
              {btnText}
            </StatefulButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceHero;
