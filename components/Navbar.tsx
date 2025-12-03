"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button as StatefulButton } from "./ui/stateful-button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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

  const isServicesActive = pathname.startsWith("/services");
  return (
    <nav
      className={`fixed  top-0 left-0 right-0  z-50 ${
        isOpen ? "bg-white" : ""
      }`}
    >
      <div className="2xl:container 2xl:mx-auto 2xl:max-w-6xl z-50 max-sm:bg-white/80 max-sm:border-b lg:rounded-full lg:mx-20 xl:mx-30  lg:mt-4  max-sm:backdrop-blur-md flex px-4 py-2  justify-between items-center h-full">
        <Link
          href={"/"}
          className="text-xl font-bold z-50  border-yellow-500/10 border bg-black px-1 md:px-4 rounded-full"
        >
          <div className="w-20 md:w-24">
            <Image
              src="/logo.png"
              alt="logo"
              loading="eager"
              width={100}
              height={100}
              className="object-cover   rounded-full w-full h-auto"
            />
          </div>
        </Link>
        <div className="hidden lg:block relative rounded-3xl">
          <HoverBorderGradient
            duration={2}
            containerClassName="rounded-full border-yellow-500/10 border"
          >
            {" "}
            <ul className="hidden lg:flex text-white items-center gap-8 text-lg  px-6 py-1 rounded-3xl  ">
              <li className="text-base">
                <Link
                  href="/"
                  className={cn(
                    "transition-colors px-3 py-1.5 rounded-full",
                    pathname === "/"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "hover:bg-cyan-500/10"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <HoverCard openDelay={50} closeDelay={100}>
                  <HoverCardTrigger asChild className="">
                    <span
                      className={cn(
                        "no-underline text-white text-base hover:no-underline cursor-pointer transition-colors px-3 py-1.5 rounded-full inline-block",
                        isServicesActive
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "hover:bg-cyan-500/10"
                      )}
                    >
                      Services
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-full bg-linear-to-br from-[#0d1716] to-[#170d0c] border-cyan-500/20 text-white">
                    <ul className="flex flex-col gap-2">
                      {serviceLinks.map((link) => (
                        <li key={link.name}>
                          <Link
                            className={cn(
                              "hover:bg-[#00d4aa]/70 rounded-md px-4 py-2 block transition-colors"
                            )}
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
                <Link
                  href="/about"
                  className={cn(
                    "transition-colors px-3 py-1.5 rounded-full",
                    pathname === "/about"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "hover:bg-cyan-500/10"
                  )}
                >
                  About
                </Link>
              </li>
              <li className="text-base text-nowrap">
                <Link
                  href="/affiliate-program"
                  className={cn(
                    "transition-colors px-3 py-1.5 rounded-full",
                    pathname === "/affiliate-program"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "hover:bg-cyan-500/10"
                  )}
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </HoverBorderGradient>
        </div>

        <Link className="hidden lg:block cursor-pointer" href="/contact">
          <StatefulButton className="py-3 rounded-4xl border border-yellow-500/10 bg-linear-to-br from-[#0d1716]/80 to-[#170d0c]/80 backdrop-blur-xl text-white/80 hover:ring-yellow-500/40">
            Contact Us
          </StatefulButton>
        </Link>

        <div className="z-50 lg:hidden">
          <Button onClick={openBurgerMenu}>{isOpen ? <X /> : <Menu />}</Button>
        </div>

        {isOpen && (
          <div className="absolute h-screen mt-0 pt-14 bg-white  backdrop-blur-sm inset-0 z-40 ">
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
