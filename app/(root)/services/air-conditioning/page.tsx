"use client";

import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";
import { ACServiceForm } from "@/components/forms/ACServiceForm";
import { useRef } from "react";
import ServiceHero from "@/components/ServiceHero";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
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

  useGSAP(() => {
    ScrollTrigger.batch(".service-card", {
      start: "top 70%",
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        });
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#form-section",
        start: "top 70%",
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="flex flex-col items-center w-full h-full   text-white">
      <ServiceHero
        badge="AIR CONDITIONING"
        title="AC SERVICES"
        description="Professional air conditioning installation, maintenance, and repair
            services. Stay cool and comfortable year-round with our expert
            solutions."
      />

      <section className="flex flex-col gap-6 px-4 md:px-10  w-full">
        <div className="grid lg:grid-cols-2 gap-10 2xl:container 2xl:mx-auto">
          {acDetails.map((detail, index) => (
            <div key={index} className="service-card opacity-0 translate-y-20">
              <div className="border-2 rounded-2xl    p-4 grid lg:grid-cols-2 gap-6         bg-[#111822] overflow-hidden  text-gray-300   border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-1 hover:drop-shadow-md  transition-all duration-300 ease-in-out group">
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
            </div>
          ))}
        </div>
      </section>

      <section
        id="form-section"
        ref={formRef}
        className="flex flex-col overflow-x-hidden items-center  gap-6 px-4 md:px-10 py-20 lg:py-40 w-full"
      >
        <h2 className="text-4xl form-title lg:text-7xl font-bold text-center bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent">
          Need AC Services?
        </h2>
        <p className="text-center form-desc text-lg lg:text-xl text-gray-300">
          Call us Directly or fill out the form below and we'll respond as soon
          as possible.
        </p>
        <div className="flex flex-col gap-10  2xl:container mx-auto w-full">
          <div className="flex flex-col form-items gap-2 border border-teal-400/10 rounded-xl p-6 h-full max-w-xl mx-auto w-full bg-teal-800/10">
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
                    <a
                      href="tel:+2347072245877"
                      className="hover:text-teal-400 font-semibold transition-colors"
                    >
                      +234 707 224 5877
                    </a>
                    <a
                      href="tel:+2347072252441"
                      className="hover:text-teal-400 font-semibold transition-colors"
                    >
                      +234 707 225 2441
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-3 w-full  max-w-72 mx-auto   rounded-lg p-4">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Opening Hours</span>
                    <span className="font-semibold">
                      Mon-Fri: 9:00 AM - 5:00 PM
                      <br />
                      Sat: 9:00 AM - 4:00 PM
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
