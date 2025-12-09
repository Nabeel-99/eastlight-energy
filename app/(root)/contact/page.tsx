"use client";

import { Clock, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import Faqs from "@/components/sections/Faqs";
import ServiceHero from "@/components/ServiceHero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const page = () => {
  useGSAP(() => {
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
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full   text-white">
      <ServiceHero
        badge="CONTACT US"
        title="REACH US AT ANYTIME"
        description="We’re here to help — whether you need solar products, installation
            support, AC services, or travel assistance."
      />

      <section
        id="form-section"
        className="flex flex-col lg:flex-row gap-10 mt-10 w-full max-w-5xl"
      >
        <div className="flex flex-col gap-6 h-full lg:w-2/3">
          <div className="flex flex-col gap-2 form-items border border-teal-400/10 rounded-xl p-6 h-full max-w-xl mx-auto w-full bg-teal-800/10">
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
