"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
  return (
    <nav
      className={`fixed  top-0 left-0 right-0  z-50 ${
        isOpen ? "bg-white" : ""
      }`}
    >
      <div className="2xl:container 2xl:mx-auto 2xl:max-w-6xl z-50 bg-white/80 max-sm:border-b lg:border lg:rounded-full lg:mx-20 xl:mx-30 lg:shadow-sm lg:mt-4  backdrop-blur-md flex px-4 py-2  justify-between items-center h-full">
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
        <ul className="hidden lg:flex items-center gap-6 text-lg">
          <li className="text-base">
            <Link href="/">Home</Link>
          </li>
          <li>
            <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
              <DropdownMenuTrigger
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
                className="flex items-center gap-2"
              >
                <span className="text-base"> Services </span>

                <span className="mt-1">
                  <ChevronDown className="size-6" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
                className="p-5 w-56"
                align="start"
              >
                <DropdownMenuItem className="">
                  <Link href="/services/solar-solutions"> Solar Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="">
                  Air Conditioning
                </DropdownMenuItem>
                <DropdownMenuItem className="">Hotel Booking</DropdownMenuItem>
                <DropdownMenuItem className="">Flight Booking</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="text-base">
            <Link href="/" className="">
              About
            </Link>
          </li>
          <li className="text-base text-nowrap">
            <Link href="/">Affiliate Program</Link>
          </li>
          <li>
            <span className="flex items-center gap-2">
              <Link href="/">
                <Button className="rounded-full  bg-[#ebebeb] text-black hover:bg-[#e9e8e8]">
                  {" "}
                  Contact Us
                </Button>
              </Link>
              <Link href="/">
                <Button className="rounded-full ">Join Program</Button>
              </Link>
            </span>
          </li>
        </ul>
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
                          href="/services/solar-solutions"
                          onClick={closeBurgerMenu}
                        >
                          Solar Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeBurgerMenu}>
                          Air Conditioning
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeBurgerMenu}>
                          Hotel Booking
                        </Link>
                      </li>
                      <li>
                        <Link href="/" onClick={closeBurgerMenu}>
                          Flight Booking
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/" onClick={closeBurgerMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeBurgerMenu}>
                    Affiliate Program
                  </Link>
                </li>
                <li className="mt-6">
                  <Link href="/" className="" onClick={closeBurgerMenu}>
                    <Button className="w-full"> Contact Us</Button>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeBurgerMenu}>
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
