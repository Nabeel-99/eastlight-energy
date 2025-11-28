"use client";

import { Button } from "@/components/ui/button";
import { solarProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
  Hotel,
  Mail,
  MapPin,
  Phone,
  Plane,
  Star,
  Sun,
  TrendingUp,
  Users,
  Wind,
  Wrench,
} from "lucide-react";
import { ACServiceForm } from "@/components/forms/ACServiceForm";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { HotelBookingForm } from "@/components/forms/HotelBookingForm";
import { ContactForm } from "@/components/forms/ContactForm";
import Faqs from "@/components/sections/Faqs";
const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const startRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      title: "Multiple Locations",
      description: "Hotels across Nigeria",
      icon: <MapPin className="size-6" />,
    },
    {
      title: "Premium Quality",
      description: "4-star and 5-star accommodations",
      icon: <Star className="size-6" />,
    },
    {
      title: "24/7 Support",
      description: "Dedicated booking assistance",
      icon: <Phone className="size-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">CONTACT</p>
      <h2 className="text-4xl text-center lg:text-6xl">REACH US AT ANYTIME</h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        We’re here to help — whether you need solar products, installation
        support, AC services, or travel assistance.
      </p>

      <section className="flex flex-col lg:flex-row gap-10 mt-10 w-full max-w-5xl">
        <div className="flex flex-col gap-6 h-full lg:w-2/3">
          <div className="flex flex-col gap-2 border rounded-xl p-6 h-full">
            <p className="text-xl text-center lg:text-2xl font-bold">
              CONTACT INFORMATION
            </p>
            <p className="text-gray-600 mt-1 text-center">
              We’re here to help with any questions or requests.
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
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-3 w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500"></span>
                    <span className="font-semibold">
                      info@eastlightenergy.com
                    </span>
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
        </div>
        <ContactForm />
      </section>

      <section className="mt-20 lg:mt-40 w-full">
        <Faqs />
      </section>
    </div>
  );
};

export default page;
