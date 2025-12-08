"use client";

import { Clock, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import Faqs from "@/components/sections/Faqs";
import { Spotlight } from "@/components/ui/spotlight";
import { ShineBorder } from "@/components/ui/shine-border";
const page = () => {
  return (
    <div className="flex flex-col items-center w-full h-full   text-white">
      <section className="relative flex flex-col items-center gap-6 bg-linear-to-b from-[#0A0F18] via-teal-950/20 to-[#0A0F18] p-10 lg:p-16 xl:p-24 w-full rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 w-full 2xl:container 2xl:mx-auto">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60 2xl:left-1/2 2xl:-translate-x-1/2"
            fill="#2DD4BF"
          />
        </div>
        <div className="absolute inset-0 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-[linear-gradient(rgba(45,212,191,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(45,212,191,0.07)_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="flex flex-col gap-2 lg:items-center  w-full z-40 pt-20  2xl:container 2xl:mx-auto pb-20 lg:pb-10">
          <div className="flex justify-center">
            {" "}
            <h2 className="text-base relative  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
              <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
              CONTACT US
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-xl">
            REACH US AT ANYTIME
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto text-gray-300">
            We’re here to help — whether you need solar products, installation
            support, AC services, or travel assistance.
          </p>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 mt-10 w-full max-w-5xl">
        <div className="flex flex-col gap-6 h-full lg:w-2/3">
          <div className="flex flex-col gap-2 border border-teal-400/10 rounded-xl p-6 h-full max-w-xl mx-auto w-full bg-teal-800/10">
            <p className="text-xl text-center lg:text-2xl font-bold">
              CONTACT INFORMATION
            </p>
            <p className="text-gray-600 mt-1 text-center">
              We’re here to help with any questions or requests.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-3 w-full bg-teal-500/10 rounded-lg p-4">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500"></span>
                    <span className="font-semibold">+2348069754944</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-3 w-full bg-teal-500/10 rounded-lg p-4">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500"></span>
                    <span className="font-semibold">
                      info@eastlightenergy.com
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex items-center gap-3 w-full bg-teal-500/10 rounded-lg p-4">
                  <Clock className="w-5 h-5 text-teal-400" />
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
        </div>
        <ContactForm />
      </section>

      <section className="py-20 w-full">
        <Faqs />
      </section>
    </div>
  );
};

export default page;
