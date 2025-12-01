"use client";

import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";
import { ACServiceForm } from "@/components/forms/ACServiceForm";
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
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">AIR CONDITIONING</p>
      <h2 className="text-4xl text-center lg:text-6xl">AC SERVICES</h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Professional air conditioning installation, maintenance, and repair
        services. Stay cool and comfortable year-round with our expert
        solutions.
      </p>

      <section className="flex flex-col gap-6 mt-20  w-full">
        <div className="grid lg:grid-cols-2 gap-10">
          {acDetails.map((detail, index) => (
            <div
              key={index}
              className="border-2 rounded-2xl   p-4 grid lg:grid-cols-2 gap-6"
            >
              <img
                src={detail.image}
                alt={detail.title}
                className="w-full h-60 lg:h-full rounded-3xl border aspect-square object-cover"
              />
              <div className="flex flex-col items-start gap-3 h-full justify-between py-8">
                <h2 className="text-xl lg:text-3xl font-semibold">
                  {detail.title}
                </h2>
                <div className="flex flex-col gap-2">
                  <p>{detail.description}</p>
                  <div className="flex justify-start">
                    {" "}
                    <Button className="">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-20 lg:mt-40 w-full">
        <h2 className="text-4xl lg:text-7xl font-bold text-center">
          Need AC Services?
        </h2>
        <p className="text-center text-lg lg:text-xl">
          Call us Directly or fill out the form below and we'll respond as soon
          as possible.
        </p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-2 border rounded-xl p-6 h-full">
            <p className="text-xl text-center lg:text-2xl font-bold">
              CONTACT INFORMATION
            </p>
            <p className="text-gray-600 mt-1 text-center">
              Available for AC sales, installation, and repairs
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-3 w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500"></span>
                    <span className="font-semibold">+2348069754944</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center gap-3 w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Opening Hours</span>
                    <span className="font-semibold">
                      Mon-Sun: 9:00 AM - 6:00 PM
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
