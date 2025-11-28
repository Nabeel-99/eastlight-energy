import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const GetStarted = () => {
  return (
    <section className="relative  overflow-hidden flex flex-col items-center p-10 lg:p-20 justify-center bg-black rounded-3xl  text-white  2xl:container 2xl:mx-auto w-full">
      <div className="flex flex-col gap-2 w-full">
        <p className="text-[3rem] lg:text-[6rem] lg:leading-30 text-center">
          READY TO <br /> <span className="">GO SOLAR?</span>
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link href={"/services/solar-installations"}>
            <Button className="flex bg-yellow-500 hover:bg-yellow-400 text-black md:p-6 md:text-lg md:rounded-xl items-center max-sm:w-full gap-2">
              Book Solar Installation <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full ">
        <div className="rounded-xl shadow-md  hidden md:block -right-10  absolute  xl:right-20 -top-10  lg:w-56 lg:h-56">
          <Image
            src={"/solar.jpg"}
            alt="solar"
            width={150}
            height={150}
            className="object-cover rounded-xl rotate-12 w-full h-full"
          />
        </div>
        <div className="rounded-xl shadow-md  hidden md:block  absolute -left-10 -bottom-30  xl:left-20 lg:-bottom-10  lg:w-56 lg:h-56">
          <Image
            src={"/solartwo.png.avif"}
            alt="solar"
            width={150}
            height={150}
            className="object-cover rounded-xl rotate-12 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
