"use client";

import Link from "next/link";
import { Button } from "../ui/stateful-button";
import { ShineBorder } from "../ui/shine-border";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
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
  return (
    <section
      id="hero"
      className="flex relative flex-col gap-6 text-white  bg-linear-to-b from-[#010706] to-[#190606] p-8 lg:p-14 xl:p-20 rounded-b-3xl   w-full"
    >
      <div className="absolute  overflow-hidden inset-0 w-full h-full rounded-b-3xl shadow-xl shadow-cyan-500/10 z-0">
        <img
          src={"/herobg.jpeg"}
          alt=""
          className="w-full h-full  hero-img object-cover rounded-b-3xl object-top"
        />
      </div>
      <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-linear-to-b from-black/60 via-black/80 to-black/70  z-10" />

      <div className="flex flex-col gap-2 lg:items-center  w-full z-30 pt-20  2xl:container 2xl:mx-auto pb-20">
        <div className="flex justify-center">
          {" "}
          <h2 className="text-base relative shine-border px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
            <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
            SUSTAINABLE ENERGY SOLUTIONS
          </h2>
        </div>

        <p className="hero-title text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-30 bg-linear-to-tl from-red-500 from-30%   to-teal-400 to-70% bg-clip-text text-transparent">
          EASTLIGHT ENERGY
        </p>
        <p className="hero-desc lg:text-xl leading-loose text-center max-w-xl mx-auto">
          Powering your home with Cworth Energy solar solutions and simplifying
          your lifestyle. Professional installations, AC sales, and travel
          services nationwide.
        </p>
        <div className="flex flex-col cta-btns lg:flex-row lg:items-center lg:justify-center gap-4 mt-4">
          <Link
            href={"/services/solar-products"}
            className=" max-lg:w-full mx-auto"
          >
            {" "}
            <Button className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 max-lg:w-full   md:p-4 md:px-8 md:text-base max-lg:max-w-sm mx-auto  md:rounded-full  items-center  gap-2">
              Explore Solar Products
            </Button>
          </Link>

          <Link href={"/affiliate-program"} className=" max-lg:w-full mx-auto ">
            {" "}
            <Button className="flex bg-white/90 text-black hover:ring-yellow-500 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-white  max-lg:w-full items-center md:p-4 md:px-8  max-lg:max-w-sm mx-auto md:text-base md:rounded-full  gap-2">
              Join Affiliate Program
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
