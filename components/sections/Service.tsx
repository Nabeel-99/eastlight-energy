import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Hotel,
  Plane,
  Sun,
  Users,
  Wind,
  Wrench,
} from "lucide-react";

const Service = () => {
  const servicesCards = [
    {
      title: "Solar Solutions",
      description:
        "Premium Cworth Energy for residential and commercial installations.",
      image: "/solar-installation.avif",
      icon: <Sun className="size-6" />,
    },
    {
      title: "Air Conditioning",
      description: "Energy efficient cooling solutions for optimal comfort.",
      image: "/ac.avif",
      icon: <Wind className="size-6" />,
    },
    {
      title: "Flight Booking",
      description: "Convenient travel arrangements for business and leisure.",
      image: "/flight.avif",
      icon: <Plane className="size-6" />,
    },
    {
      title: "Hotel Booking",
      description: "Top tier hotel accomodations for your stay.",
      image: "/hotel.avif",
      icon: <Hotel className="size-6" />,
    },
    {
      title: "Solar Installers",
      description:
        "Professional solar installation services across all Nigerian states.",
      icon: <Wrench />,
      image: "/installer.avif",
    },
    {
      title: "Affiliate Program",
      description: "Earn commissions promoting our energy solutions.",
      icon: <Users />,
      image: "/affiliate.avif",
    },
  ];
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl lg:font-bold lg:text-5xl text-center">
        Comprehensive Energy Solutions
      </h2>
      <p className="text-center md:text-xl md:max-w-2xl md:mx-auto">
        From solar installations to travel services, we provide integrated
        solutions for modern energy needs and lifestyle convenience.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesCards.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="aspect-square w-full h-[200px] rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt="solar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex h-full items-end">
              <Link href={"/"}>
                <Button>
                  Learn More <ArrowRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Service;
