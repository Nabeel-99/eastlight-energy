"use client";

import { MapPin, Phone, Star } from "lucide-react";
import { HotelBookingForm } from "@/components/forms/HotelBookingForm";
import MarqueeEffect, { MarqueeEffectRef } from "@/components/ui/MarqueeEffect";
import { Spotlight } from "@/components/ui/spotlight";
import { ShineBorder } from "@/components/ui/shine-border";
import { useRef, useState, useEffect } from "react";
import { SelectedHotel } from "@/lib/interface";
import CustomModal from "@/components/ui/CustomModal";
// import MobileSwiper from "@/components/ui/MobileSwiper";
// import { SwiperSlide } from "swiper/react";

const page = () => {
  const marqueeRef = useRef<MarqueeEffectRef>(null);
  const [selectedHotel, setSelectedHotel] = useState<SelectedHotel | null>(
    null
  );
  const formRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (card: SelectedHotel) => {
    setSelectedHotel(card);
    console.log(card);
    marqueeRef.current?.pause();
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
    marqueeRef.current?.resume();
  };

  const handleClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    handleCloseModal();
  };

  useEffect(() => {
    if (selectedHotel) {
      document.body.style.overflow = "hidden";
      marqueeRef.current?.pause();
    } else {
      document.body.style.overflow = "auto";
      marqueeRef.current?.resume();
    }
  }, [selectedHotel]);

  const cards = [
    {
      id: 1,
      thumbnail: "/hotel1.jpeg",
      heading: "Luxury Redefined",
      subheading:
        "Experience world-class hospitality with premium amenities, elegant rooms, and exceptional service in the heart of Nigeria.",
    },
    {
      id: 2,
      thumbnail: "/hotel2.webp",
      heading: "Five-Star Excellence",
      subheading:
        "Indulge in sophisticated comfort with stunning views, gourmet dining, and state-of-the-art facilities designed for your pleasure.",
    },
    {
      id: 8,
      thumbnail: "/hotel8.webp",
      heading: "Modern Luxury",
      subheading:
        "Contemporary design meets Nigerian warmth with cutting-edge technology and impeccable attention to detail.",
    },
    {
      id: 3,
      thumbnail: "/hotel3.webp",
      heading: "Unmatched Comfort",
      subheading:
        "Discover spacious suites, modern amenities, and personalized service that exceeds expectations at every turn.",
    },
    {
      id: 4,
      thumbnail: "/hotel4.webp",
      heading: "Premium Hospitality",
      subheading:
        "Immerse yourself in luxury with elegant interiors, fine dining restaurants, and world-class recreational facilities.",
    },
    {
      id: 5,
      thumbnail: "/hotel5.webp",
      heading: "Urban Elegance",
      subheading:
        "Perfect blend of contemporary style and traditional hospitality in Nigeria's most vibrant business districts.",
    },
    {
      id: 6,
      thumbnail: "/hotel6.webp",
      heading: "Executive Retreat",
      subheading:
        "Ideal for business travelers with fully-equipped conference rooms, high-speed internet, and dedicated business centers.",
    },
    {
      id: 7,
      thumbnail: "/hotel7.webp",
      heading: "Coastal Serenity",
      subheading:
        "Wake up to breathtaking views, enjoy infinity pools, and experience beachfront luxury like never before.",
    },

    {
      id: 9,
      thumbnail: "/hotel9.webp",
      heading: "Refined Living",
      subheading:
        "Experience bespoke service, curated cuisine, and thoughtfully designed spaces that celebrate comfort and style.",
    },
    {
      id: 10,
      thumbnail: "/hotel10.webp",
      heading: "Timeless Elegance",
      subheading:
        "Classic sophistication meets modern convenience in a setting designed for relaxation, celebration, and memorable stays.",
    },
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
    <div className="flex flex-col items-center w-full h-full overflow-x-hidden   text-white">
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
              HOTEL BOOKING
            </h2>
          </div>

          <p className="text-[3rem] lg:text-[4rem] xl:text-[5rem] lg:tracking-tight font-medium text-center xl:leading-tight bg-linear-to-tl from-yellow-500/70 from-30%   to-teal-400 to-70% bg-clip-text text-transparent lg:max-w-xl">
            Find Your Perfect Stay
          </p>
          <p className="lg:text-xl leading-loose text-center max-w-xl mx-auto text-gray-300">
            Discover premium 4-star and 5-star hotels across Nigeria. Book your
            stay with confidence and enjoy exceptional hospitality.
          </p>
        </div>
      </section>
      <MarqueeEffect ref={marqueeRef}>
        <div className="flex marquee-effect-left w-max items-center  h-[500px]">
          {cards.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="relative group w-96 h-[450px] mr-6 cursor-pointer overflow-hidden rounded-md  hover:border-4 hover:border-teal-400/40 transition-all duration-300   hover:drop-shadow-md hover:drop-shadow-teal-400"
            >
              <img
                key={index}
                src={item.thumbnail}
                alt={`hotel-${index + 1}`}
                onClick={() => handleCardClick(item)}
                className="object-cover h-full w-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all  duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-200 mt-1">{item.subheading}</p>
              </div>
            </div>
          ))}
          {cards.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="relative group w-96 h-[450px] mr-6 cursor-pointer overflow-hidden rounded-md  hover:border-4 hover:border-teal-400/40 transition-all duration-300   hover:drop-shadow-md hover:drop-shadow-teal-400"
            >
              <img
                key={index}
                src={item.thumbnail}
                alt={`hotel-${index + 1}`}
                onClick={() => handleCardClick(item)}
                className="object-cover h-full w-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all  duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-200 mt-1">{item.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </MarqueeEffect>
      {/* mobile swiper */}{" "}
      {/* <MobileSwiper>
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.thumbnail}
              alt={`hotel-${index + 1}`}
              onClick={() => handleCardClick(item)}
              className="object-cover rounded-sm h-[450px] w-full"
            />
          </SwiperSlide>
        ))}
      </MobileSwiper> */}
      {selectedHotel && (
        <CustomModal
          selectedHotel={selectedHotel}
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
        />
      )}
      <section
        ref={formRef}
        className="grid lg:grid-cols-2 gap-10  px-4 md:px-10  py-20 lg:py-40 2xl:container 2xl:mx-auto"
      >
        <div className="flex flex-col gap-6 ">
          <h2 className="text-3xl lg:text-5xl font-bold bg-linear-to-b from-red-200/70 lg:from-30%   to-teal-400 to-40% lg:to-70% bg-clip-text text-transparent">
            Book Your Stay
          </h2>
          <p className="text-base text-gray-300">
            Submit your hotel booking request and our team will assist you in
            finding the perfect accommodation for your needs.
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
        <HotelBookingForm />
      </section>
    </div>
  );
};

export default page;
