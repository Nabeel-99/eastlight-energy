"use client";

import { useGSAP } from "@gsap/react";
import { Button } from "../ui/button";
import Link from "next/link";
import gsap from "gsap";
const GetStarted = () => {
  useGSAP(() => {
    gsap.from("#get-started", {
      scrollTrigger: {
        trigger: "#get-started",
        start: "top 70%",
      },
      y: 50,
      filter: "blur(10px)",
      opacity: 0,
      delay: 0.5,
      duration: 1.8,
      ease: "power3.out",
    });
  }, []);
  return (
    <section
      id="get-started"
      className="relative  overflow-hidden flex flex-col items-center p-10 lg:p-20 justify-center bg-black rounded-3xl border-2 border-teal-400/60 lg:border-teal-400/20 hover:border-teal-400 hover:shadow-md hover:shadow-teal-400 transition-colors duration-300 ease-in-out text-white max-w-6xl  2xl:container mx-auto w-full"
    >
      <div className="absolute  inset-0 w-full h-full rounded-b-3xl shadow-xl shadow-cyan-500/10 z-0">
        <img
          src={"/panelfour.jpg"}
          alt=""
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </div>
      <div className="absolute inset-0 w-full rounded-b-3xl h-full bg-linear-to-t from-[#010706]/60 via-[#010706]/80 to-[#010706]  z-10" />
      <div className="flex flex-col gap-2 w-full z-30">
        <p className="text-[3rem] lg:text-[6rem] lg:leading-30 text-center">
          READY TO <br /> <span className="">GO SOLAR?</span>
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            href={"/services/solar-installations"}
            className="max-lg:w-full"
          >
            {" "}
            <Button className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500  md:p-6 md:px-8 md:text-base max-lg:w-full md:rounded-full  items-center  gap-2">
              Book Solar Installation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
