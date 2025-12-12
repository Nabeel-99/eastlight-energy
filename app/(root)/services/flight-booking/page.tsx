"use client";

import { MapPin, PlaneIcon, Users2Icon } from "lucide-react";
import { FlightBookingForm } from "@/components/forms/FlightBookingForm";
import React from "react";
import ServiceHero from "@/components/ServiceHero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const page = () => {
  const items = [
    {
      title: "Best Rates",
      description: "Competitive pricing on all flights",
      icon: <PlaneIcon className="size-6" />,
    },
    {
      title: "Global Destinations",
      description: "Flights to worldwide destinations",
      icon: <MapPin className="size-6" />,
    },
    {
      title: "Expert Support",
      description: "Professional booking assistance",
      icon: <Users2Icon className="size-6" />,
    },
  ];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#form-section",
        start: "top center",
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
    <div className="flex flex-col items-center w-full h-full   text-white">
      <ServiceHero
        badge="FLIGHT BOOKING"
        title="Plan Your Trip"
        description="Book flights to your dream destinations with ease. Enjoy competitive rates and excellent customer service."
        bgType="custom"
      />
      <section id="form-section" className="py-20 overflow-x-hidden px-4">
        <div className="flex flex-col items-center gap-6 ">
          <h2 className="text-3xl form-title lg:text-5xl text-center mx-auto max-w-xl  font-bold  xl:text-6xl lg:tracking-tight  bg-linear-to-b from-red-500/70   to-teal-400 to-40% bg-clip-text text-transparent ">
            Book Your Flight
          </h2>
          <p className="lg:text-lg max-w-xl form-desc text-center text-gray-300">
            Submit your flight booking request and our travel experts will help
            you find the best options for your journey.
          </p>
          <div className="flex flex-col lg:flex-row items-center form-items gap-2 lg:max-w-5xl">
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
        <FlightBookingForm />
      </section>
    </div>
  );
};

export default page;
