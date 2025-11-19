import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 border p-8 lg:p-20 rounded-3xl bg-black text-white lg:grid lg:grid-cols-2 lg:gap-20 2xl:container 2xl:mx-auto w-full">
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-lg lg:text-2xl text-gray-300">
          SUSTAINABLE ENERGY SOLUTIONS
        </h2>
        <p className="text-[3rem] lg:text-[6rem] lg:leading-30">
          EASTLIGHT <br /> ENERGY
        </p>
        <p className="lg:text-xl leading-loose">
          Powering your home with Cworth Energy solar solutions and simplifying
          your lifestyle. Professional installations, AC sales, and travel
          services nationwide.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
          <Button className="flex bg-yellow-500 hover:bg-yellow-400 text-black md:p-6 md:text-lg md:rounded-xl items-center max-sm:w-full gap-2">
            Explore services <ArrowRight />
          </Button>
          <Button className="flex bg-white/90 text-black hover:bg-white items-center md:p-6 md:text-lg md:rounded-xl max-sm:w-full gap-2">
            Join Affiliate Program
          </Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="rounded-lg shadow-md overflow-hidden h-full">
          <Image
            src={"/solar.jpg"}
            alt="solar"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
