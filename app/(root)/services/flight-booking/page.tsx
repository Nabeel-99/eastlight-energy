"use client";

import { Button } from "@/components/ui/button";
import { solarProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Hotel,
  Mail,
  MapPin,
  Phone,
  Plane,
  PlaneIcon,
  Star,
  Sun,
  TrendingUp,
  Users,
  Users2Icon,
  Wind,
  Wrench,
} from "lucide-react";
import { ACServiceForm } from "@/components/forms/ACServiceForm";
import { FlightBookingForm } from "@/components/forms/FlightBookingForm";
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
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">FLIGHT BOOKING</p>
      <h2 className="text-4xl text-center lg:text-6xl">Plan Your Trip</h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Book flights to your dream destinations with ease. Enjoy competitive
        rates and excellent customer service.
      </p>

      <section className="flex flex-col gap-6  w-full">
        <div className="relative w-full">
          {" "}
          <img
            src={"/airplane2.jpg"}
            alt="flight"
            className="h-96 object-center  max-w-6xl mx-auto w-full rounded-full object-cover"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10 mt-20 lg:mt-40">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-6xl">Book Your Flight</h2>
          <p className="text-lg">
            Submit your flight booking request and our travel experts will help
            you find the best options for your journey.
          </p>
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="flex justify-start">
                  {" "}
                  <span className="bg-teal-500/20 p-2 rounded-full">
                    {" "}
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="">{item.title}</p>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FlightBookingForm />
      </section>
    </div>
  );
};

export default page;
