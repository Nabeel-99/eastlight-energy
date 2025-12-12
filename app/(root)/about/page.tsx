"use client";

import { Hotel, Plane, Sun, Users, Wind, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChooseUs from "@/components/sections/ChooseUs";
import GetStarted from "@/components/sections/GetStarted";
import { ShineBorder } from "@/components/ui/shine-border";
import ServiceHero from "@/components/ServiceHero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const page = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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

  const values = [
    {
      title: "OUR MISSION",
      description:
        "To empower individuals and businesses across Nigeria with reliable energy solutions and travel services that enhance comfort, convenience, and operational efficiency in everyday life.",
    },
    {
      title: "OUR VISION",
      description:
        "To become Nigeria’s leading provider of sustainable energy solutions and customer-focused services, known for innovation, trustworthiness, and exceptional support.",
    },
  ];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#who-we-are",
        start: isMobile ? "top center" : "top 70%",
      },
    });
    tl.from(".who-we-are-title", {
      y: 20,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    })
      .from(
        ".who-we-are-desc",
        {
          x: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<0.2"
      )
      .from(
        ".who-we-are-img",
        {
          x: 20,
          opacity: 0,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#what-we-do",
        start: isMobile ? "top center" : "top 70%",
      },
    });
    tl2
      .from(".what-we-do-title", {
        y: 20,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
      })
      .from(
        ".what-we-do-desc",
        {
          x: 20,
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
    ScrollTrigger.batch(".value-card", {
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
    <div className="flex flex-col items-center w-full h-full   text-white">
      <ServiceHero
        badge="ABOUT US"
        title="POWERING NIGERIA'S FUTURE"
        description="Learn more about our mission and values."
      />
      <section
        id="who-we-are"
        className="grid lg:grid-cols-2 overflow-x-hidden gap-10 mt-20  px-4 md:px-10 2xl:container 2xl:mx-auto"
      >
        <div className="flex flex-col  items-center lg:items-start gap-6 lg:mt-20 ">
          <div className="p-[2px] rounded-full who-we-are-title bg-linear-to-br from-transparent from-30% to-teal-400 shadow-md shadow-teal-400/20">
            <h2 className="bg-[#111822] rounded-full  py-1 px-2">WHO WE ARE</h2>
          </div>
          <p className="text-justify who-we-are-desc lg:text-left lg:text-xl">
            Eastlight Energy is a Nigerian multi-service company dedicated to
            delivering reliable solutions in solar energy, air-conditioning, and
            travel support. Our goal is to make clean energy accessible, help
            homes and businesses stay comfortable, and provide convenient travel
            arrangements you can trust.
          </p>
        </div>
        <div className="w-full who-we-are-img">
          <img
            src="/about.png"
            alt="about"
            className="w-full h-[300px] lg:h-[500px] hover:shadow-md hover:shadow-teal-400 transition-all duration-300 ease-in-out border border-teal-400/10 rounded-2xl object-cover"
          />
        </div>
      </section>

      <section
        id="what-we-do"
        className="flex flex-col items-center overflow-x-hidden px-4 md:px-10 xl:px-0 mt-10 lg:mt-0 max-w-4xl gap-6"
      >
        <div className="flex flex-col items-center gap-6 lg:mt-20 ">
          <h2 className="text-base relative what-we-do-title  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
            <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
            WHAT WE DO
          </h2>

          <p className="lg:text-lg text-center max-w-lg what-we-do-desc ">
            We combine technical expertise, quality products, and
            customer-focused service across several key areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="opacity-0 translate-y-20 service-card">
              <Card className="bg-[#111822] h-full flex flex-col gap-4 text-gray-300 rounded-2xl border-2 border-teal-400/60 lg:border-teal-400/10 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/20  hover:drop-shadow-md  transition-all duration-300 ease-in-out group">
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
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 max-w-4xl  gap-6 px-4 md:px-10 xl:px-0  ">
        {values.map((value, index) => (
          <div key={index} className="opacity-0 translate-y-20 value-card">
            <div className="flex flex-col items-start gap-6 mt-10 lg:mt-20 ">
              <div className="p-[2px] rounded-full bg-linear-to-br from-transparent from-30% to-teal-400 shadow-md shadow-teal-400/20">
                <h2 className="bg-[#111822] rounded-full  py-1 px-2">
                  {value.title}
                </h2>
              </div>

              <p className="lg:text-lg text-left max-w-lg ">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="py-20 flex flex-col gap-20 px-4 md:px-10">
        <ChooseUs />
        <GetStarted />
      </section>
    </div>
  );
};

export default page;
