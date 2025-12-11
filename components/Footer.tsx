"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/stateful-button";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
const Footer = () => {
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

  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/eastlightenergy/",
    },
    {
      icon: <FaXTwitter />,
      link: "https://x.com/Eastlightenergy",
    },
    {
      icon: <FaFacebookF />,
      link: "https://web.facebook.com/profile.php?id=61583476835088",
    },
  ];

  return (
    <footer className="footer w-full bg-teal-400/10 text-white border-t border-t-teal-400/20 z-20">
      <div className="flex flex-col  lg:flex-row  2xl:container 2xl:mx-auto">
        <section className="flex flex-col px-6 pt-10 lg:pt-20 lg:pl-20 lg:pr-40 items-start gap-6 lg:border-r lg:border-r-teal-400/20 pb-10 lg:pb-20">
          <Link
            href={"/"}
            className="text-xl font-bold  border border-yellow-500/10 bg-black px-1 md:px-4 rounded-full"
          >
            <div className="w-20 md:w-24">
              <img
                src="/logo.png"
                alt="logo"
                loading="eager"
                className="object-cover rounded-full w-full h-auto"
              />
            </div>
          </Link>
          <p className=" text-lg">
            Major Distributor for Cworth Energy Systems. Quality solar products
            powering homes & businesses.
          </p>
          <div className="flex flex-col gap-6">
            <Link href={"/affiliate-program"} className="max-lg:w-full">
              {" "}
              <Button className="flex bg-white/90 text-black hover:ring-yellow-500 hover:bg-white  hover:shadow-md hover:shadow-white max-lg:w-full items-center md:p-3 md:px-8  md:text-base md:rounded-full  gap-2">
                Contact Us
              </Button>
            </Link>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex items-center gap-2">
                <Phone className="size-4 w-4" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+2347072245877"
                    className="hover:text-teal-400 transition-colors"
                  >
                    +234 707 224 5877
                  </a>
                  <a
                    href="tel:+2347072252441"
                    className="hover:text-teal-400 transition-colors"
                  >
                    +234 707 225 2441
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Opening Hours</span>
                  <span className="text-sm">
                    Mon-Fri: 9:00 AM - 5:00 PM
                    <br />
                    Sat: 9:00 AM - 4:00 PM
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-6 w-4" />
                <a
                  href="mailto:info@eastlightenergy.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@eastlightenergy.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="size-4 w-4" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=16+Gwani+street+Wuse+Zone+4+Abuja+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  16 Gwani street, Wuse Zone 4 Abuja
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-400/50 hover:bg-teal-500 transition-colors duration-300 ease-in-out rounded-full p-2"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="flex  flex-col justify-between gap-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 w-full px-6 pt-10 lg:pt-20 lg:px-20 pb-10 lg:pb-20">
            <div className="flex flex-col gap-2">
              <p className="font-bold mb-4">Services</p>
              <ul className="flex flex-col gap-4">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      className="hover:text-teal-400 transition-colors duration-300 ease-in-out"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold mb-4">Quick Links</p>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-teal-400 transition-colors duration-300 ease-in-out"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-teal-400 transition-colors duration-300 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate-program"
                    className="hover:text-teal-400 transition-colors duration-300 ease-in-out"
                  >
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="border-t pt-4 border-t-teal-400/20 py-10">
        <p className="text-center text-sm">
          Copyright &copy; 2025 Eastlight Energy. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
