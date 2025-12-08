"use client";

import React, { useRef } from "react";
import {
  CheckCircle,
  Megaphone,
  Network,
  Sun,
  TrendingUp,
  UserPlus,
  Zap,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { AffiliateForm } from "@/components/forms/AffiliateForm";
import { ShineBorder } from "@/components/ui/shine-border";
import { Button } from "@/components/ui/stateful-button";

const affiliateBenefits = [
  {
    title: "Competitive Commissions",
    content: (
      <div>
        <p className="mb-4 font-normal">
          Earn attractive rewards for every referral and sale you generate.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <Zap size={24} className="text-teal-500" />
            </div>
          </div>{" "}
        </div>
      </div>
    ),
  },
  {
    title: "Marketing Support",
    content: (
      <div>
        <p className="mb-4 font-normal">
          Access ready-to-use promotional materials and guidance to boost your
          referrals.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <Megaphone size={24} className="text-teal-500" />
            </div>
          </div>{" "}
        </div>
      </div>
    ),
  },
  {
    title: "Growing Market",
    content: (
      <div>
        <p className="mb-4 font-normal">
          Tap into Nigeria’s expanding renewable energy market with rising
          demand for solar solutions.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <TrendingUp size={24} className="text-teal-500" />
            </div>
          </div>{" "}
        </div>
      </div>
    ),
  },
  {
    title: "Strong Network",
    content: (
      <div>
        <p className="mb-4 font-normal">
          Connect with CWorth Energy’s certified installers and trusted partners
          across the country.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <Network size={24} className="text-teal-500" />
            </div>
          </div>{" "}
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
    <div className="flex flex-col items-center w-full h-full   text-white">
      <section className="flex relative flex-col gap-6 text-white  bg-linear-to-b from-[#010706] to-[#190606] p-8 lg:p-14 xl:p-20 rounded-b-3xl   w-full">
        <div className="absolute  inset-0 w-full h-full rounded-b-3xl shadow-xl shadow-cyan-500/10 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-b-3xl"
            src={"/affiliatevideo.mp4"}
            preload="auto"
          />
        </div>
        <div className="absolute  inset-0 w-full rounded-b-3xl h-full bg-black opacity-80 z-10" />

        <div className="flex flex-col gap-2 lg:items-center  w-full z-30 pt-20  2xl:container 2xl:mx-auto pb-20">
          <div className="flex justify-center">
            {" "}
            <h2 className="text-base relative  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
              <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
              AFFILIATE PROGRAM
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-30 bg-linear-to-tl from-red-500 from-30%   to-teal-400 to-70% bg-clip-text text-transparent">
            EARN WITH ENERGY
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto">
            Partner with us and earn commissions by promoting CWorth Energy
            products across Nigeria.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 mt-4">
            {" "}
            <Button
              onClick={handleClick}
              className="flex bg-[#24a090] text-white hover:bg-teal-500 hover:ring-teal-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500  md:p-4 md:px-8 md:text-base max-lg:w-full md:rounded-full  items-center  gap-2"
            >
              Join Program
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-20 lg:mt-40">
        <div className="relative w-full overflow-clip  mx-auto max-w-5xl">
          <Timeline
            header="Why Join Our Program"
            subheader="Discover the key advantages of partnering with CWorth Energy."
            data={affiliateBenefits}
          />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="flex flex-col items-center gap-6 ">
          <h2 className="text-3xl lg:text-5xl text-center mx-auto max-w-xl  font-bold  xl:text-6xl lg:tracking-tight  bg-linear-to-b from-red-500/70   to-teal-400 to-40% bg-clip-text text-transparent ">
            How It Works
          </h2>
          <p className="lg:text-lg max-w-xl text-center text-gray-300">
            Getting started as an Eastlight Energy affiliate is simple and
            straightforward. Follow these four steps to begin earning
            commissions.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:max-w-6xl">
            {affiliateSteps.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-2" key={index}>
                  <div className="p-[-2px] h-10 w-10 rounded-full bg-linear-to-br from-transparent from-30% to-teal-400 shadow-md shadow-teal-400/20">
                    <div className="bg-[#111822] font-bold text-xl h-10 w-10 text-white rounded-full  flex items-center justify-center">
                      {index + 1}
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
                <div className="h-20 w-1 last:h-0 lg:w-44 lg:last:w-0 lg:h-1 rounded-full mask-x-from-40% bg-linear-to-b from-[#39D3C8]/60 from-30% to-teal-400" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={formRef}
        className="grid lg:grid-cols-2 gap-10  px-4 md:px-10  py-20 lg:py-40 2xl:container 2xl:mx-auto"
      >
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-5xl font-bold bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Join Our Network
          </h2>
          <p className="text-base text-gray-300">
            Complete the application form to start your journey as an Eastlight
            Energy affiliate. Our team will review your application and provide
            you with everything needed to succeed.
          </p>
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div className="flex items-center gap-2" key={index}>
                <div className="flex justify-start">
                  {" "}
                  <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
                    <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>{" "}
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold">{item.title}</p>
                  <span className="text-sm text-gray-300">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AffiliateForm />
      </section>
    </div>
  );
};

export default page;
