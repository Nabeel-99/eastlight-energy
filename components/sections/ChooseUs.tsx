"use client";

import { Handshake, Navigation, Zap } from "lucide-react";

import { Card, CardContent, CardHeader } from "../ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ChooseUs = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#choose-us",
        start: "top 70%",
      },
    });
    tl.from(".choose-us-title", {
      opacity: 0,
      y: 50,
      duration: 1.8,
      ease: "power3.out",
    }).from(
      ".choose-us-desc",
      {
        opacity: 0,
        y: 50,
        duration: 1.8,
        ease: "power3.out",
      },
      "<0.2"
    );

    ScrollTrigger.batch(".choose-us-card", {
      start: "top center",
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const chooseDetails = [
    {
      icon: <Zap />,
      title: "Nationwide coverage",
      description:
        "Professional solar installation services across all Nigerian states.",
    },
    {
      icon: <Navigation />,
      title: "Comprehensive Solutions",
      description:
        "From solar power to air conditioning and travel booking, we've got you covered.",
    },
    {
      icon: <Handshake />,
      title: "Customer-First Approach",
      description: "Dedicated support to help you every step of the way.",
    },
  ];
  return (
    <section
      id="choose-us"
      className="flex flex-col gap-6 w-full h-full 2xl:container 2xl:mx-auto"
    >
      <h2 className="text-3xl choose-us-title font-bold lg:text-5xl xl:text-6xl lg:tracking-tight  text-center xl:leading-30 bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
        Why Choose Us?
      </h2>
      <p className="text-xl choose-us-desc text-center text-gray-300">
        Your trusted partner in clean energy solutions.
      </p>
      <div className="grid max-lg:max-w-xl max-lg:mx-auto  lg:grid-cols-3 gap-10">
        {chooseDetails.map((item, index) => (
          <div key={index} className="choose-us-card opacity-0 translate-y-20">
            <Card className="bg-[#111822] h-full flex flex-col gap-4 text-gray-300 rounded-2xl border-2 border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20  hover:drop-shadow-md  transition-all duration-300 ease-in-out group">
              <CardHeader>
                {" "}
                <div className="flex justify-start">
                  {" "}
                  <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
                    <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
