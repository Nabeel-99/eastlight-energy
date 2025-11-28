"use client";

import { Button } from "@/components/ui/button";
import { solarProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Battery,
  CheckCircle,
  Hotel,
  Megaphone,
  Network,
  Plane,
  Sun,
  TrendingUp,
  UserPlus,
  Users,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { SolarProductForm } from "@/components/forms/SolarProductForm";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { AffiliateForm } from "@/components/forms/AffiliateForm";

const affiliateBenefits = [
  {
    title: "Competitive Commissions",
    content: (
      <div>
        <p className="mb-4 font-normal text-neutral-800 dark:text-neutral-200">
          Earn attractive rewards for every referral and sale you generate.
        </p>
        <div className="flex justify-start">
          <span className="bg-teal-500/20 p-2 rounded-full">
            <Zap size={24} className="text-teal-500" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Marketing Support",
    content: (
      <div>
        <p className="mb-4 font-normal text-neutral-800 dark:text-neutral-200">
          Access ready-to-use promotional materials and guidance to boost your
          referrals.
        </p>
        <div className="flex justify-start">
          <span className="bg-teal-500/20 p-2 rounded-full">
            <Megaphone size={24} className="text-teal-500" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Growing Market",
    content: (
      <div>
        <p className="mb-4 font-normal text-neutral-800 dark:text-neutral-200">
          Tap into Nigeria’s expanding renewable energy market with rising
          demand for solar solutions.
        </p>
        <div className="flex justify-start">
          <span className="bg-teal-500/20 p-2 rounded-full">
            <TrendingUp size={24} className="text-teal-500" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Strong Network",
    content: (
      <div>
        <p className="mb-4 font-normal text-neutral-800 dark:text-neutral-200">
          Connect with CWorth Energy’s certified installers and trusted partners
          across the country.
        </p>
        <div className="flex justify-start">
          <span className="bg-teal-500/20 p-2 rounded-full">
            <Network size={24} className="text-teal-500" />
          </span>
        </div>
      </div>
    ),
  },
];

const affiliateSteps = [
  {
    title: "Sign Up",
    description: "Register for our affiliate program to start your journey.",
    icon: <UserPlus size={24} className="text-teal-500" />,
  },
  {
    title: "Get Approved",
    description: "We review and approve your application quickly.",
    icon: <CheckCircle size={24} className="text-teal-500" />,
  },
  {
    title: "Start Promoting",
    description:
      "Share your referral links and promote CWorth Energy products.",
    icon: <Megaphone size={24} className="text-teal-500" />,
  },
  {
    title: "Earn Commissions",
    description: "Receive rewards for every successful referral you generate.",
    icon: <Zap size={24} className="text-teal-500" />,
  },
];

const page = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      title: "Access to Products",
      description: "Promote premium CWorth Energy solar solutions",
      icon: <Sun className="size-6" />,
    },
    {
      title: "Earn Commissions",
      description: "Receive rewards for every successful referral",
      icon: <TrendingUp className="size-6" />,
    },
    {
      title: "Partner Network",
      description: "Connect with a growing renewable energy community",
      icon: <Network className="size-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <div className="flex flex-col gap-6  lg:grid lg:grid-cols-2 lg:gap-40 xl:gap-20 2xl:container 2xl:mx-auto w-full">
        <div className="flex flex-col items-start gap-6 ">
          {" "}
          <p className="border rounded-full py-1 text-sm px-4">
            AFFILIATE PROGRAM
          </p>
          <h2 className="text-4xl leading-normal  lg:text-6xl">
            EARN WITH <br className="hidden lg:block" /> ENERGY
          </h2>
          <p className="text-lg lg:text-xl lg:max-w-xl">
            Partner with us and earn commissions by promoting CWorth Energy
            products across Nigeria.
          </p>
          <Button onClick={handleClick} className="p-6 rounded-full">
            JOIN PROGRAM
          </Button>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="rounded-lg w-full lg:w-fit shadow-md border overflow-hidden h-full">
            <Image
              src={"/affiliate.png.avif"}
              alt="solar"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <section className="mt-20 lg:mt-40">
        <div className="relative w-full overflow-clip">
          <Timeline
            header="Why Join Our Program"
            subheader="Follow these easy steps to get certified installers to set up your
          solar system."
            data={affiliateBenefits}
          />
        </div>
      </section>

      <section className="flex flex-col gap-6 w-full mt-20">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-4xl text-center">How It Works</p>
          <p className="text-center mx-auto text-lg lg:text-xl lg:max-w-xl">
            Getting started as an Eastlight Energy affiliate is simple and
            straightforward. Follow these four steps to begin earning
            commissions.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  lg:justify-between lg:gap-20 items-start relative">
          <div className="grid lg:grid-cols-4 gap-6">
            {affiliateSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 border rounded-lg p-4"
              >
                <div className="flex justify-start">
                  {" "}
                  <span className="bg-teal-500/20 aspect-square h-10 w-10 flex items-center justify-center text-center text-lg font-bold rounded-full">
                    {" "}
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10 mt-20 lg:mt-40">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-6xl">Join Our Network</h2>
          <p className="text-lg">
            Complete the application form to start your journey as an Eastlight
            Energy affiliate. Our team will review your application and provide
            you with everything needed to succeed.
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
        <div ref={formRef}>
          {" "}
          <AffiliateForm />
        </div>
      </section>
    </div>
  );
};

export default page;
