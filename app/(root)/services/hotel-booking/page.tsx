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
const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const startRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Luxury Redefined
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Experience world-class hospitality with premium amenities, elegant
          rooms, and exceptional service in the heart of Nigeria.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Five-Star Excellence
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Indulge in sophisticated comfort with stunning views, gourmet dining,
          and state-of-the-art facilities designed for your pleasure.
        </p>
      </div>
    );
  };

  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Unmatched Comfort
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Discover spacious suites, modern amenities, and personalized service
          that exceeds expectations at every turn.
        </p>
      </div>
    );
  };

  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Premium Hospitality
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Immerse yourself in luxury with elegant interiors, fine dining
          restaurants, and world-class recreational facilities.
        </p>
      </div>
    );
  };

  const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Urban Elegance
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perfect blend of contemporary style and traditional hospitality in
          Nigeria's most vibrant business districts.
        </p>
      </div>
    );
  };

  const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Executive Retreat
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Ideal for business travelers with fully-equipped conference rooms,
          high-speed internet, and dedicated business centers.
        </p>
      </div>
    );
  };

  const SkeletonSeven = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Coastal Serenity
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Wake up to breathtaking views, enjoy infinity pools, and experience
          beachfront luxury like never before.
        </p>
      </div>
    );
  };

  const SkeletonEight = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Modern Luxury
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Contemporary design meets Nigerian warmth with cutting-edge technology
          and impeccable attention to detail.
        </p>
      </div>
    );
  };

  const SkeletonNine = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Refined Living
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Experience bespoke service, curated cuisine, and thoughtfully designed
          spaces that celebrate comfort and style.
        </p>
      </div>
    );
  };

  const SkeletonTen = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Timeless Elegance
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Classic sophistication meets modern convenience in a setting designed
          for relaxation, celebration, and memorable stays.
        </p>
      </div>
    );
  };
  const cards = [
    {
      id: 1,
      className: "md:col-span-2 h-44 w-full lg:h-96",
      thumbnail: "/hotel8.webp",
      content: <SkeletonOne />,
    },
    {
      id: 2,

      className: "col-span-1 h-44 w-full lg:h-96",
      thumbnail: "/hotel2.webp",
      content: <SkeletonTwo />,
    },
    {
      id: 3,

      className: "col-span-1   h-44 w-full lg:h-96",
      thumbnail: "/hotel3.webp",
      content: <SkeletonThree />,
    },
    {
      id: 4,
      className: "md:col-span-2   h-44 w-full lg:h-96",
      thumbnail: "/hotel5.webp",
      content: <SkeletonFour />,
    },
    // {
    //   id: 5,
    //   className: "col-span-1   h-44",
    //   thumbnail: "/hotel5.webp",
    //   content: <SkeletonFive />,
    // },
    // {
    //   id: 6,
    //   className: "col-span-1   h-44",
    //   thumbnail: "/hotel6.webp",
    //   content: <SkeletonSix />,
    // },
    // {
    //   id: 7,
    //   className: "md:col-span-2   h-44",
    //   thumbnail: "/hotel7.webp",
    //   content: <SkeletonSeven />,
    // },
    // {
    //   id: 8,
    //   className: "col-span-1   h-44",
    //   thumbnail: "/hotel8.webp",
    //   content: <SkeletonEight />,
    // },
    // {
    //   id: 9,
    //   className: "col-span-1   h-44",
    //   thumbnail: "/hotel9.webp",
    //   content: <SkeletonNine />,
    // },
    // {
    //   id: 10,
    //   className: "md:col-span-2   h-44",
    //   thumbnail: "/hotel10.webp",
    //   content: <SkeletonTen />,
    // },
  ];

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
      <p className="border rounded-full p-2 px-4">HOTEL BOOKING</p>
      <h2 className="text-4xl text-center lg:text-6xl">
        Find Your Perfect Stay
      </h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Discover premium 4-star and 5-star hotels across Nigeria. Book your stay
        with confidence and enjoy exceptional hospitality.
      </p>

      <div className="min-h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>

      <section className="grid lg:grid-cols-2 gap-10 mt-20 lg:mt-40">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-6xl">Book Your Stay</h2>
          <p className="text-lg">
            Submit your hotel booking request and our team will assist you in
            finding the perfect accommodation for your needs.
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
        <HotelBookingForm />
      </section>
    </div>
  );
};

export default page;
