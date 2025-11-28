"use client";

import { Button } from "@/components/ui/button";
import { solarProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Globe,
  Hotel,
  Mail,
  MapPin,
  Phone,
  Plane,
  PlaneIcon,
  Shield,
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
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import ChooseUs from "@/components/sections/ChooseUs";
import GetStarted from "@/components/sections/GetStarted";
const page = () => {
  const whyChooseUs = [
    {
      title: "Certified & Trusted",
      description:
        "Our products and installers are fully certified, ensuring safe and reliable service.",
      icon: <Shield size={24} className="text-teal-500" />,
    },
    {
      title: "Nationwide Coverage",
      description:
        "We provide services across all Nigerian states, reaching homes and businesses wherever they are.",
      icon: <Globe size={24} className="text-teal-500" />,
    },
    {
      title: "High-Quality Products",
      description:
        "We supply durable solar panels, inverters, batteries, and energy solutions built to last.",
      icon: <Star size={24} className="text-teal-500" />,
    },
    {
      title: "Personalized Support",
      description:
        "Our team offers guidance and assistance tailored to your specific energy and travel needs.",
      icon: <Users size={24} className="text-teal-500" />,
    },
  ];
  const services = [
    {
      title: "Cworth Solar Products",
      description:
        "Durable and efficient solar panels, inverters, and batteries from trusted global manufacturers.",
      icon: <Sun className="size-6" />,
    },
    {
      title: "Solar Installations",
      description:
        "Certified installers for residential and commercial projects, ensuring smooth setup and long-term performance.",
      icon: <Wrench className="size-6" />,
    },
    {
      title: "Air Conditioning",
      description:
        "Modern cooling solutions with installation, servicing, and maintenance for homes and offices.",
      icon: <Wind className="size-6" />,
    },
    {
      title: "Hotel Booking",
      description:
        "Reliable hotel options for business or leisure, arranged at competitive rates.",
      icon: <Hotel className="size-6" />,
    },
    {
      title: "Flight Booking",
      description:
        "Convenient flight arrangements with trusted airlines for local and international travel.",
      icon: <Plane className="size-6" />,
    },
    {
      title: "Affiliate Program",
      description:
        "Earn commissions by referring customers to our energy products and services.",
      icon: <Users className="size-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">ABOUT US</p>
      <h2 className="text-4xl text-center lg:text-6xl ">
        POWERING NIGERIA'S FUTURE
      </h2>

      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Learn more about our mission and values.
      </p>

      <section className="grid lg:grid-cols-2  gap-10 mt-20 lg:mt-40">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:mt-20 ">
          <h2 className="border rounded-full bg-gray-100  py-1 px-2">
            WHO WE ARE
          </h2>
          <p className="text-justify lg:text-left lg:text-xl">
            Eastlight Energy is a Nigerian multi-service company dedicated to
            delivering reliable solutions in solar energy, air-conditioning, and
            travel support. Our goal is to make clean energy accessible, help
            homes and businesses stay comfortable, and provide convenient travel
            arrangements you can trust.
          </p>
        </div>
        <div className="w-full">
          <img
            src="/about.png"
            alt="about"
            className="w-full h-[300px] lg:h-[500px] border rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col items-center mt-10 lg:mt-0 max-w-4xl gap-6">
        <div className="flex flex-col items-center gap-6 lg:mt-20 ">
          <h2 className="border rounded-full bg-gray-100  py-1 px-2">
            WHAT WE DO
          </h2>
          <p className="lg:text-lg text-center max-w-lg ">
            We combine technical expertise, quality products, and
            customer-focused service across several key areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="">
              <CardHeader>
                <div className="flex justify-start">
                  {" "}
                  <span className="bg-teal-500/20 p-2 rounded-full">
                    {" "}
                    {service.icon}
                  </span>
                </div>
              </CardHeader>

              <CardFooter className="flex flex-col mt-6 gap-2 items-start">
                <h3 className="text-lg lg:text-xl font-bold">
                  {service.title}
                </h3>
                <p className="">{service.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 ">
        <div className="flex flex-col items-start gap-6  lg:mt-20 ">
          <h2 className="border rounded-full bg-gray-100  py-1 px-2">
            OUR MISSION
          </h2>
          <p className="lg:text-lg text-left max-w-lg ">
            To empower individuals and businesses across Nigeria with reliable
            energy solutions and travel services that enhance comfort,
            convenience, and operational efficiency in everyday life.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 lg:mt-20 ">
          <h2 className="border rounded-full bg-gray-100  py-1 px-2">
            OUR VISION
          </h2>
          <p className="lg:text-lg text-left max-w-lg ">
            To become Nigeria’s leading provider of sustainable energy solutions
            and customer-focused services, known for innovation,
            trustworthiness, and exceptional support.
          </p>
        </div>
      </section>
      <section className="mt-20 flex flex-col gap-20">
        <ChooseUs />
        <GetStarted />
      </section>
    </div>
  );
};

export default page;
