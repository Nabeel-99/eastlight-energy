"use client";

import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";
import { ACServiceForm } from "@/components/forms/ACServiceForm";
import { Spotlight } from "@/components/ui/spotlight";
import { ShineBorder } from "@/components/ui/shine-border";
import { useRef } from "react";
const page = () => {
  const acDetails = [
    {
      title: "AC Purchase",
      description:
        "Purchase quality air conditioning units from trusted brands.",
      image: "/ac.webp",
    },
    {
      title: "AC Installation",
      description: "Professional installation of new air conditioning systems.",
      image: "/acinstallation.jpg",
    },
    {
      title: "AC Repair",
      description:
        "Fix cooling issues, electrical faults, and refrigerant recharge.",
      image: "/acrepair.jpeg",
    },
    {
      title: "AC Maintenance",
      description: "Regular cleaning, filter replacement, and system checks.",
      image: "/acmaintenance.webp",
    },
  ];

  const formRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
              AIR CONDITIONING
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-xl">
            AC SERVICES
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto text-gray-300">
            Professional air conditioning installation, maintenance, and repair
            services. Stay cool and comfortable year-round with our expert
            solutions.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6 px-4 md:px-10  w-full">
        <div className="grid lg:grid-cols-2 gap-10 2xl:container 2xl:mx-auto">
          {acDetails.map((detail, index) => (
            <div
              key={index}
              className="border-2 rounded-2xl   p-4 grid lg:grid-cols-2 gap-6         bg-[#111822] overflow-hidden md:mask-b-from-70% hover:mask-none  text-gray-300   border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-1 hover:drop-shadow-md  transition-all duration-300 ease-in-out group"
            >
              <div className="aspect-square border-4 border-teal-400/10 group-hover:border-teal-400/20 w-full h-[300px] lg:h-[375px] rounded-xl overflow-hidden">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full   aspect-square object-cover  group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>

              <div className="flex flex-col items-start gap-3 h-full justify-between py-8">
                <h2 className="text-xl lg:text-3xl font-semibold">
                  {detail.title}
                </h2>
                <div className="flex flex-col gap-2">
                  <p>{detail.description}</p>
                  <div className="flex justify-start">
                    {" "}
                    <Button
                      onClick={handleClick}
                      className="cursor-pointer hover:bg-teal-400/50 bg-teal-400/60"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={formRef}
        className="flex flex-col items-center  gap-6 px-4 md:px-10 py-20 lg:py-40 w-full"
      >
        <h2 className="text-4xl lg:text-7xl font-bold text-center bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent">
          Need AC Services?
        </h2>
        <p className="text-center text-lg lg:text-xl text-gray-300">
          Call us Directly or fill out the form below and we'll respond as soon
          as possible.
        </p>
        <div className="flex flex-col gap-10  2xl:container mx-auto w-full">
          <div className="flex flex-col gap-2 border border-teal-400/10 rounded-xl p-6 h-full max-w-xl mx-auto w-full bg-teal-800/10">
            <p className="text-xl text-center lg:text-2xl font-bold">
              CONTACT INFORMATION
            </p>
            <p className="text-gray-600 mt-1 text-center">
              Available for AC sales, installation, and repairs
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <div className="flex items-center max-w-72 mx-auto   gap-3 w-full  rounded-lg p-4">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <div className="flex flex-col ">
                    <span className="text-sm text-gray-500">Phone</span>
                    <span className="font-semibold">+2348069754944</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-3 w-full  max-w-72 mx-auto   rounded-lg p-4">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Opening Hours</span>
                    <span className="font-semibold">
                      Mon-Sun: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ACServiceForm />
        </div>
      </section>
    </div>
  );
};

export default page;
