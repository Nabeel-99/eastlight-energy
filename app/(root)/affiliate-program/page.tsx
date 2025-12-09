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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ServiceHero from "@/components/ServiceHero";
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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top 70%",
      },
    });
    tl.from(".service-title", {
      y: 50,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    }).from(
      ".service-desc",
      {
        y: 50,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
      },
      "<0.2"
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline",
        start: "top 70%",
      },
    });
    tl2.from(".timeline-section", {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.8,
      ease: "power3.out",
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#how-it-works",
        start: "top center",
      },
    });
    tl3
      .from(".how-it-works-title", {
        x: 50,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
      })
      .from(
        ".how-it-works-desc",
        {
          x: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".how-it-works-items",
        {
          y: 50,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.2"
      );

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#form-section",
        start: "top center",
      },
    });
    tl4
      .from(".form-title", {
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
        badge="AFFILIATE PROGRAM"
        title="EARN WITH ENERGY"
        description="Partner with us and earn commissions by promoting CWorth Energy
            products across Nigeria."
        bgType="video"
        btnText="Join Program"
        handleScrollClick={handleClick}
      />

      <section id="timeline" className="mt-20 lg:mt-40">
        <div className="relative w-full timeline-section overflow-clip  mx-auto max-w-5xl">
          <Timeline
            header="Why Join Our Program"
            subheader="Discover the key advantages of partnering with CWorth Energy."
            data={affiliateBenefits}
          />
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4">
        <div className="flex flex-col items-center gap-6 ">
          <h2 className="text-3xl how-it-works-title lg:text-5xl text-center mx-auto max-w-xl  font-bold  xl:text-6xl lg:tracking-tight  bg-linear-to-b from-red-500/70   to-teal-400 to-40% bg-clip-text text-transparent ">
            How It Works
          </h2>
          <p className="lg:text-lg max-w-xl how-it-works-desc text-center text-gray-300">
            Getting started as an Eastlight Energy affiliate is simple and
            straightforward. Follow these four steps to begin earning
            commissions.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:max-w-6xl how-it-works-items">
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
        id="form-section"
        ref={formRef}
        className="grid lg:grid-cols-2 gap-10  px-4 md:px-10  py-20 lg:py-40 2xl:container 2xl:mx-auto"
      >
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl form-title lg:text-5xl font-bold bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Join Our Network
          </h2>
          <p className="text-base form-desc text-gray-300">
            Complete the application form to start your journey as an Eastlight
            Energy affiliate. Our team will review your application and provide
            you with everything needed to succeed.
          </p>
          <div className="flex flex-col gap-8 form-items">
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
