"use client";

import {
  Battery,
  Lightbulb,
  Sun,
  Users,
  Zap,
  Link,
  Check,
  Captions,
  MapPin,
  Phone,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { SolarInstallerForm } from "@/components/forms/SolarInstallerForm";
import gsap from "gsap";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ServiceHero from "@/components/ServiceHero";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const installationServices = [
  {
    title: "Complete Solar Systems",
    description:
      "Full turnkey installation including panels, inverters, batteries, and wiring",
    icon: <Zap />,
  },
  {
    title: "Solar Panels",
    description:
      "Rooftop and ground-mounted panel installation with optimal positioning",
    icon: <Sun />,
  },
  {
    title: "Inverters & Batteries",
    description:
      "Hybrid inverter setup with LiFePO₄ or Gel battery integration",
    icon: <Battery />,
  },
  {
    title: "Solar Street Lights",
    description:
      "All-in-one street light installation for communities and compounds",
    icon: <Lightbulb />,
  },
];

const installationSteps = [
  {
    title: "01",
    content: (
      <div>
        <p className="mb-4  font-normal text-gray-300">
          Submit your installation request with your location and system type.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <Captions size={24} />
            </div>
          </div>{" "}
        </div>
      </div>
    ),
  },
  {
    title: "02",
    content: (
      <div>
        <p className="mb-4  font-normal text-gray-300">
          Get matched with certified installers in your area for your system.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <Link size={24} />
            </div>
          </div>{" "}
        </div>
      </div>
    ),
  },
  {
    title: "03",
    content: (
      <div>
        <p className="mb-4  font-normal text-gray-300">
          Professional installation of your solar panels, inverters, and
          batteries.
        </p>
        <div className="flex justify-start">
          {" "}
          <div className="p-[2px] rounded-full bg-linear-to-br from-[#39D3C8]/60 from-30% to-[#810303] shadow-md shadow-teal-400/20">
            <div className="bg-[#111822] text-white rounded-full p-3 flex items-center justify-center">
              <Check size={24} />
            </div>
          </div>{" "}
        </div>
      </div>
    ),
  },
];

const page = () => {
  const items = [
    {
      title: "Certified Professionals",
      description: "Experienced and qualified installers",
      icon: <Users className="size-6" />,
    },
    {
      title: "Nationwide Coverage",
      description: "Installers across Nigeria",
      icon: <MapPin className="size-6" />,
    },
    {
      title: "Direct Contact",
      description: "Easy communication with installers",
      icon: <Phone className="size-6" />,
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
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        });
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline",
        start: "top 70%",
      },
    });
    tl2.from(".timeline-section", {
      y: 50,
      opacity: 0,
      duration: 1.8,
      filter: "blur(10px)",
      ease: "power3.out",
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#form-section",
        start: "top center",
      },
    });
    tl3
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
        badge="SOLAR INSTALLERS"
        title="PROFESSIONAL INSTALLATION SERVICES"
        description=" Connect with certified solar installers across Nigeria. Professional
            installation services for CWorth Energy products and other solar
            systems."
      />
      <section
        id="services"
        className="flex flex-col gap-6 mt-20 px-4 lg:px-10  w-full"
      >
        <div className="flex flex-col gap-3">
          {" "}
          <h2 className="text-3xl service-title font-bold lg:text-5xl xl:text-6xl lg:tracking-tight  text-center xl:leading-30 bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Installation Services
          </h2>
          <p className="text-lg service-desc lg:text-xl text-center text-gray-300">
            Fast and reliable solar installation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 2xl:container 2xl:mx-auto">
          {installationServices.map((service, index) => (
            <div key={index} className="service-card opacity-0 translate-y-20">
              <Card className="bg-[#111822] h-full  flex flex-col gap-4 text-gray-300 rounded-2xl border-2 border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20  hover:drop-shadow-md  transition-all duration-300 ease-in-out group">
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
                    <p className="text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
      <section
        id="timeline"
        className="mt-20 relative timeline-section lg:mt-40  w-full mx-auto"
      >
        <div className=" absolute mask-radial-at-bottom mask-radial-from-70%  inset-0 w-full h-full z-0">
          <img
            src={"/panelone.webp"}
            alt=""
            className="w-full h-full object-cover  object-top"
          />
        </div>
        <div className="absolute inset-0 w-full  h-full bg-black opacity-92   z-10" />
        <div className=" mx-auto relative lg:max-w-4xl pt-20 overflow-clip z-30">
          <Timeline
            header="Simple Steps to Solar Installation"
            subheader="Follow these easy steps to get certified installers to set up your
          solar system."
            data={installationSteps}
          />
        </div>
      </section>
      <section
        id="form-section"
        className="grid lg:grid-cols-2 gap-10  px-4 md:px-10  py-20 lg:py-40 2xl:container 2xl:mx-auto"
      >
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-5xl form-title font-bold bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Book a Professional Installer
          </h2>
          <p className="text-base form-desc text-gray-300">
            Submit your installation request and we'll connect you with the best
            certified installer for your project. Our installers work with
            CWorth Energy products and other quality solar systems.
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
        <SolarInstallerForm />
      </section>
    </div>
  );
};

export default page;
