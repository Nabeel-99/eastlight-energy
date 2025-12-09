import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

type BurgerMenuProps = {
  closeBurgerMenu: () => void;
  isServicesOpen: boolean;
  setIsServicesOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const BurgerMenu = ({
  closeBurgerMenu,
  isServicesOpen,
  setIsServicesOpen,
}: BurgerMenuProps) => {
  return (
    <div className="nav-menu fixed inset-0 z-40  lg:hidden">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-lg"
        onClick={closeBurgerMenu}
      />

      {/* MENU CONTENT */}
      <div className="relative h-full pt-24 px-4 overflow-y-auto">
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-2 text-lg text-white">
            <li className="nav-menu-item">
              <Link href="/" onClick={closeBurgerMenu}>
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <button
                type="button"
                className="w-full flex gap-2 items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`transition-transform duration-300 mt-1 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
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
              </div>
            </li>
            <li className="nav-menu-item">
              <Link href="/about" onClick={closeBurgerMenu}>
                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link href="/affiliate-program" onClick={closeBurgerMenu}>
                Affiliate Program
              </Link>
            </li>
            <li className="mt-6 nav-menu-item">
              <Link href="/contact" onClick={closeBurgerMenu}>
                <Button className="w-full bg-[#24a090] hover:bg-[#24a090] text-white">
                  Contact Us
                </Button>
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link href="/affiliate-program" onClick={closeBurgerMenu}>
                <Button className="w-full bg-white hover:bg-white text-black">
                  Join Program
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
