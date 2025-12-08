"use client";

import { MapPin, PlaneIcon, Users2Icon } from "lucide-react";
import { FlightBookingForm } from "@/components/forms/FlightBookingForm";
import { ShineBorder } from "@/components/ui/shine-border";
import { Spotlight } from "@/components/ui/spotlight";
import WorldMap from "@/components/ui/world-map";
const page = () => {
  const items = [
    {
      title: "Best Rates",
      description: "Competitive pricing on all flights",
      icon: <PlaneIcon className="size-6" />,
    },
    {
      title: "Global Destinations",
      description: "Flights to worldwide destinations",
      icon: <MapPin className="size-6" />,
    },
    {
      title: "Expert Support",
      description: "Professional booking assistance",
      icon: <Users2Icon className="size-6" />,
    },
  ];
  return (
    <div className="flex flex-col items-center w-full h-full   text-white">
      <section className="relative flex flex-col items-center gap-6 bg-linear-to-b from-[#0A0F18] via-teal-950/20 to-[#0A0F18] p-10 lg:p-16 xl:p-24 w-full rounded-b-[3rem] overflow-hidden">
        <div className="absolute inset-0 w-full 2xl:container 2xl:mx-auto">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60 2xl:left-1/2 2xl:-translate-x-1/2"
            fill="#2DD4BF"
          />
        </div>
        <div className="absolute inset-0 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% z-10 pt-20">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
          {/* <WorldMap
            dots={[
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: 9.0765, lng: 7.3986 },
              }, // Lagos → Abuja
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: 4.8156, lng: 7.0498 },
              }, // Lagos → Port Harcourt
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: -1.2921, lng: 36.8219 },
              }, // Lagos → Nairobi
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: -26.2041, lng: 28.0473 },
              }, // Lagos → Johannesburg
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: 31.2304, lng: 121.4737 },
              }, // Lagos → Shanghai
              {
                start: { lat: 9.0765, lng: 7.3986 },
                end: { lat: 23.1291, lng: 113.2644 },
              }, // Abuja → Guangzhou
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: 52.52, lng: 13.405 },
              }, // Lagos → Berlin
              {
                start: { lat: 9.0765, lng: 7.3986 },
                end: { lat: 25.2048, lng: 55.2708 },
              }, // Abuja → Dubai
              {
                start: { lat: 6.5244, lng: 3.3792 },
                end: { lat: 37.7749, lng: -122.4194 },
              }, // Lagos → San Francisco
            ]}
          /> */}
        </div>
        <div className="flex flex-col gap-2 lg:items-center  w-full z-40 pt-20  2xl:container 2xl:mx-auto pb-20 lg:pb-10">
          <div className="flex justify-center">
            {" "}
            <h2 className="text-base relative  px-4 py-1 bg-black/80 shadow-md rounded-full text-center text-gray-300">
              <ShineBorder duration={30} shineColor={["#2DD4BF", "#DC2626"]} />
              FLIGHT BOOKING
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-xl">
            Plan Your Trip
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto text-gray-300">
            Book flights to your dream destinations with ease. Enjoy competitive
            rates and excellent customer service.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10  px-4 md:px-10  py-20 lg:py-40 2xl:container 2xl:mx-auto">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-5xl font-bold bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Book Your Flight
          </h2>
          <p className="text-base text-gray-300">
            Submit your flight booking request and our travel experts will help
            you find the best options for your journey.
          </p>
          <div className="flex flex-col gap-8">
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
        <FlightBookingForm />
      </section>
    </div>
  );
};

export default page;
