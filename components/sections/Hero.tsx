import Image from "next/image";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Button } from "../ui/stateful-button";

const Hero = () => {
  return (
    <section className="flex relative flex-col gap-6 text-white  bg-linear-to-b from-[#010706] to-[#190606] p-8 lg:p-14 xl:p-20 rounded-b-3xl   2xl:container 2xl:mx-auto w-ful lg:min-h-[90vh]">
      <div className="absolute mask-b-from-20% mask-b-from-[#000000] inset-0 w-full h-full">
        <img
          src={"/herobg.jpeg"}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/50 rounded-b-3xl" />
      <div className="flex flex-col gap-2 w-full z-40 pt-20">
        <h2 className="text-lg lg:text-2xl text-center text-gray-300">
          SUSTAINABLE ENERGY SOLUTIONS
        </h2>
        <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-30">
          EASTLIGHT ENERGY
        </p>
        <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto">
          Powering your home with Cworth Energy solar solutions and simplifying
          your lifestyle. Professional installations, AC sales, and travel
          services nationwide.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-4">
          <Link
            href={"/services/solar-products"}
            className=" max-lg:w-full z-50"
          >
            {" "}
            <Button className="flex bg-yellow-500 hover:bg-yellow-400 text-black md:p-4 md:px-8 md:text-base max-lg:w-full md:rounded-full  items-center  gap-2">
              Explore Solar Products
            </Button>
          </Link>

          <Link href={"/affiliate-program"} className="max-lg:w-full z-50">
            {" "}
            <Button className="flex bg-white/90 text-black hover:bg-white max-lg:w-full items-center md:p-4 md:px-8  md:text-base md:rounded-full  gap-2">
              Join Affiliate Program
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center">
        <div className="rounded-lg shadow-md overflow-hidden h-full">
          <Image
            src={"/solar.jpg"}
            alt="solar"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
