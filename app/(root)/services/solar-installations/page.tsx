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
        <p className="mb-4  font-normal text-neutral-800 dark:text-neutral-200">
          Submit your installation request with your location and system type.
        </p>
        <div className="flex justify-start">
          {" "}
          <span className="bg-teal-500/20 p-2 rounded-full">
            {" "}
            <Captions size={24} className="text-teal-500" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "02",
    content: (
      <div>
        <p className="mb-4  font-normal text-neutral-800 dark:text-neutral-200">
          Get matched with certified installers in your area for your system.
        </p>
        <div className="flex justify-start">
          {" "}
          <span className="bg-teal-500/20 p-2 rounded-full">
            {" "}
            <Link size={24} className="text-teal-500" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "03",
    content: (
      <div>
        <p className="mb-4  font-normal text-neutral-800 dark:text-neutral-200">
          Professional installation of your solar panels, inverters, and
          batteries.
        </p>
        <div className="flex justify-start">
          {" "}
          <span className="bg-teal-500/20 p-2 rounded-full">
            {" "}
            <Check size={24} className="text-teal-500" />
          </span>
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
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">SOLAR INSTALLERS</p>
      <h2 className="text-4xl text-center lg:text-6xl lg:max-w-2xl">
        PROFESSIONAL INSTALLATION SERVICES
      </h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Connect with certified solar installers across Nigeria. Professional
        installation services for CWorth Energy products and other solar
        systems.
      </p>

      <section className="flex flex-col gap-6 mt-20 lg:mt-40 w-full">
        <div className="flex flex-col gap-3">
          {" "}
          <h2 className="text-center text-2xl font-bold lg:text-6xl">
            Installation Services
          </h2>
          <p className="text-lg lg:text-xl text-center">
            Fast and reliable solar installation services
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {installationServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 border rounded-lg p-4"
            >
              <div className="flex justify-start">
                {" "}
                <span className="bg-teal-500/20 p-2 rounded-full">
                  {" "}
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg text-center font-bold">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 lg:mt-40">
        <div className="relative w-full overflow-clip">
          <Timeline
            header="Simple Steps to Solar Installation"
            subheader="Follow these easy steps to get certified installers to set up your
          solar system."
            data={installationSteps}
          />
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-10 mt-20 lg:mt-40">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-6xl">
            Book a Professional Installer
          </h2>
          <p className="text-lg">
            Submit your installation request and we'll connect you with the best
            certified installer for your project. Our installers work with
            CWorth Energy products and other quality solar systems.
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
        <SolarInstallerForm />
      </section>
    </div>
  );
};

export default page;
