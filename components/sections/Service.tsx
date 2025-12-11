"use client";

import Link from "next/link";
import {
  Hotel,
  MoveRight,
  Plane,
  Sun,
  Users,
  Wind,
  Wrench,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Service = () => {
  const servicesCards = [
    {
      title: "Cworth Solar Products",
      description:
        "Premium Cworth Energy solar panels, inverters, and batteries for residential and commercial use.",
      image: "/solar.jpg",
      icon: <Sun className="size-6" />,
      link: "/services/solar-products",
    },
    {
      title: "Solar Installers",
      description:
        "Professional solar installation services across all Nigerian states.",
      image: "/solarinstaller.png",
      icon: <Wrench className="size-6" />,
      link: "/services/solar-installations",
    },
    {
      title: "Air Conditioning",
      description: "Energy efficient cooling solutions for optimal comfort.",
      image: "/acservice.png",
      icon: <Wind className="size-6" />,
      link: "/services/air-conditioning",
    },
    {
      title: "Hotel Booking",
      description: "Top-tier hotel accommodations for your stay.",
      image: "/hotelbooking.png",
      icon: <Hotel className="size-6" />,
      link: "/services/hotel-booking",
    },
    {
      title: "Flight Booking",
      description: "Convenient travel arrangements for business and leisure.",
      image: "/flightbooking.png",
      icon: <Plane className="size-6" />,
      link: "/services/flight-booking",
    },
    {
      title: "Affiliate Program",
      description: "Earn commissions promoting our energy solutions.",
      image: "/affiliate.jpg",
      icon: <Users className="size-6" />,
      link: "/affiliate-program",
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
    ScrollTrigger.batch(".service-card", {
      start: "top center",
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          duration: 0.8,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      id="services"
      className="flex  flex-col gap-4 w-full 2xl:container 2xl:mx-auto"
    >
      <h2 className="text-3xl service-title font-bold lg:text-5xl xl:text-6xl lg:tracking-tight  text-center xl:leading-30 bg-linear-to-b from-red-200/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent">
        Our Services
      </h2>
      <p className="text-center service-desc md:text-xl md:max-w-2xl md:mx-auto text-gray-300">
        From solar installations to travel services, we provide integrated
        solutions for modern energy needs and lifestyle convenience.
      </p>
      <div className="grid md:grid-cols-2  gap-6 lg:grid-cols-3 lg:gap-10 mt-6">
        {servicesCards.map((item, index) => (
          <div className="service-card opacity-0 translate-y-20" key={index}>
            <Link
              href={item.link}
              className="bg-[#111822] h-full  overflow-hidden  p-0 flex flex-col gap-4 text-gray-300 rounded-2xl border-2 border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-1 hover:drop-shadow-md  transition-all duration-300 ease-in-out group"
            >
              <section className="p-1">
                <div className="aspect-square border-4 border-teal-400/10 group-hover:border-teal-400/20 w-full h-[300px] lg:h-[375px] rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt="solar"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out"
                  />
                </div>
              </section>
              <section className="px-4 pb-4 flex flex-col gap-3  w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
                      <div className="bg-[#111822] rounded-full p-3 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <MoveRight className="text-teal-400 lg:text-teal-700  lg:group-hover:text-teal-500 group-hover:-rotate-20 transition-all duration-300" />
                </div>
                <p className="text-sm">{item.description}</p>
              </section>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
