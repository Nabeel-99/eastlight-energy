"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import StarBorder from "../components/StarBorder";
import { ShinyButton } from "./ui/shiny-button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const openBurgerMenu = () => setIsOpen(!isOpen);
  const closeBurgerMenu = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const serviceLinks = [
    {
      name: "Cworth Solar Products",
      link: "/services/solar-products",
    },
    {
      name: "Solar Installations",
      link: "/services/solar-installations",
    },
    {
      name: "Air Conditioning",
      link: "/services/air-conditioning",
    },
    {
      name: "Hotel Booking",
      link: "/services/hotel-booking",
    },
    {
      name: "Flight Booking",
      link: "/services/flight-booking",
    },
  ];
  return (
    <nav
      className={`fixed  top-0 left-0 right-0  z-50 ${
        isOpen ? "bg-white" : ""
      }`}
    >
      <div className="2xl:container 2xl:mx-auto 2xl:max-w-6xl z-50 max-sm:bg-white/80 max-sm:border-b lg:rounded-full lg:mx-20 xl:mx-30  lg:mt-4  max-sm:backdrop-blur-md flex px-4 py-2  justify-between items-center h-full">
        <Link
          href={"/"}
          className="text-xl font-bold z-50 border bg-black px-1 md:px-4 rounded-full"
        >
          <div className="w-20 md:w-24">
            <Image
              src="/logo.png"
              alt="logo"
              loading="eager"
              width={100}
              height={100}
              className="object-cover rounded-full w-full h-auto"
            />
          </div>
        </Link>
        <ul className="hidden lg:flex items-center gap-8 text-lg border px-6 py-2 rounded-3xl">
          <li className="text-base">
            <Link href="/">Home</Link>
          </li>
          <li>
            <HoverCard openDelay={50} closeDelay={100}>
              <HoverCardTrigger asChild className="">
                <Button
                  variant="link"
                  className="no-underline text-base hover:no-underline"
                >
                  Services
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-full">
                <ul className="flex flex-col gap-2">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="hover:bg-gray-100 rounded-md px-4 py-1"
                        href={link.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </li>
          <li className="text-base">
            <Link href="/about" className="">
              About
            </Link>
          </li>
          <li className="text-base text-nowrap">
            <Link href="/affiliate-program">Affiliate Program</Link>
          </li>
        </ul>

        <Link className="hidden lg:block cursor-pointer" href="/contact">
          <ShinyButton className="py-4 rounded-4xl">Contact Us</ShinyButton>
        </Link>

        <div className="z-50 lg:hidden">
          <Button onClick={openBurgerMenu}>{isOpen ? <X /> : <Menu />}</Button>
        </div>

        {isOpen && (
          <div className="absolute h-screen mt-0 pt-14 bg-white  backdrop-blur-sm inset-0 z-20 ">
            <div className="flex flex-col gap-10 p-4 h-full ">
              <ul className="flex flex-col  gap-2 text-lg">
                <li>
                  <Link href="/" onClick={closeBurgerMenu}>
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="w-full flex  gap-2 items-center"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services
                    <ChevronDown
                      className={`transition-transform mt-1 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion items */}
                  {isServicesOpen && (
                    <ul className="flex flex-col gap-2 pl-4 mt-2">
                      <li>
                        <Link
                          href="/services/solar-products"
                          onClick={closeBurgerMenu}
                        >
                          Cworth Solar Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/solar-installations"
                          onClick={closeBurgerMenu}
                        >
                          Solar Installations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/air-conditioning"
                          onClick={closeBurgerMenu}
                        >
                          Air Conditioning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/hotel-booking"
                          onClick={closeBurgerMenu}
                        >
                          Hotel Booking
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/flight-booking"
                          onClick={closeBurgerMenu}
                        >
                          Flight Booking
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/about" onClick={closeBurgerMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate-program" onClick={closeBurgerMenu}>
                    Affiliate Program
                  </Link>
                </li>
                <li className="mt-6">
                  <Link href="/contact" className="" onClick={closeBurgerMenu}>
                    <Button className="w-full"> Contact Us</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate-program" onClick={closeBurgerMenu}>
                    <Button className="w-full">Join Program</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
