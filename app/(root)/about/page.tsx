"use client";

import { Hotel, Plane, Sun, Users, Wind, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChooseUs from "@/components/sections/ChooseUs";
import GetStarted from "@/components/sections/GetStarted";
import { Spotlight } from "@/components/ui/spotlight";
import { ShineBorder } from "@/components/ui/shine-border";
const page = () => {
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
              ABOUT US
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-xl">
            POWERING NIGERIA'S FUTURE
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto text-gray-300">
            Learn more about our mission and values.
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-2  gap-10 mt-20  px-4 md:px-10">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:mt-20 ">
          <div className="p-[2px] rounded-full bg-linear-to-br from-transparent from-30% to-teal-400 shadow-md shadow-teal-400/20">
            <h2 className="bg-[#111822] rounded-full  py-1 px-2">WHO WE ARE</h2>
          </div>
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
            className="w-full h-[300px] lg:h-[500px] border border-teal-400/10 rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col items-center mt-10 lg:mt-0 max-w-4xl gap-6">
        <div className="flex flex-col items-center gap-6 lg:mt-20 ">
          <h2 className="text-base relative  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
            <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
            WHAT WE DO
          </h2>

          <p className="lg:text-lg text-center max-w-lg ">
            We combine technical expertise, quality products, and
            customer-focused service across several key areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#111822]  flex flex-col gap-4 text-gray-300 rounded-2xl border-2 border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20  hover:drop-shadow-md  transition-all duration-300 ease-in-out group"
            >
              <CardHeader>
                {" "}
                <div className="flex justify-start">
                  {" "}
                  <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
                    <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{service.title}</p>
                  <p>{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 px-4 md:px-10 ">
        <div className="flex flex-col items-start gap-6  lg:mt-20 ">
          <div className="p-[2px] rounded-full bg-linear-to-br from-transparent from-30% to-teal-400 shadow-md shadow-teal-400/20">
            <h2 className="bg-[#111822] rounded-full  py-1 px-2">
              OUR MISSION
            </h2>
          </div>

          <p className="lg:text-lg text-left max-w-lg ">
            To empower individuals and businesses across Nigeria with reliable
            energy solutions and travel services that enhance comfort,
            convenience, and operational efficiency in everyday life.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 lg:mt-20 ">
          <div className="p-[2px] rounded-full bg-linear-to-br from-transparent from-30% to-teal-400 shadow-md shadow-teal-400/20">
            <h2 className="bg-[#111822] rounded-full  py-1 px-2">
              {" "}
              OUR VISION
            </h2>
          </div>

          <p className="lg:text-lg text-left max-w-lg ">
            To become Nigeria’s leading provider of sustainable energy solutions
            and customer-focused services, known for innovation,
            trustworthiness, and exceptional support.
          </p>
        </div>
      </section>
      <section className="py-20 flex flex-col gap-20 px-4 md:px-10">
        <ChooseUs />
        <GetStarted />
      </section>
    </div>
  );
};

export default page;
