import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/stateful-button";
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
  return (
    <footer className=" w-full bg-teal-400/10 text-white border-t border-t-teal-400/20 z-20">
      <div className="flex flex-col  lg:flex-row  2xl:container 2xl:mx-auto">
        <section className="flex flex-col px-6 pt-10 lg:pt-20 lg:pl-20 lg:pr-40 items-start gap-6 lg:border-r lg:border-r-teal-400/20 pb-10 lg:pb-20">
          <Link
            href={"/"}
            className="text-xl font-bold  border border-yellow-500/10 bg-black px-1 md:px-4 rounded-full"
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
          <p className=" text-lg">
            Major Distributor for Cworth Energy Systems. Quality solar products
            powering homes & businesses.
          </p>
          <div className="flex flex-col gap-2">
            <Link href={"/affiliate-program"} className="max-lg:w-full">
              {" "}
              <Button className="flex bg-white/90 text-black hover:ring-yellow-500 hover:bg-white  hover:shadow-md hover:shadow-white max-lg:w-full items-center md:p-3 md:px-8  md:text-base md:rounded-full  gap-2">
                Contact Us
              </Button>
            </Link>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex items-center gap-2">
                <Phone className="size-4 w-4" />
                <span>+234 806 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-6 w-4" />
                <span>info@eastlightenergy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 w-4" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-8 w-full">
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
          <div className="border-t mt-10 pt-4 border-t-teal-400/20 pb-10">
            <p className="text-center text-sm">
              Copyright &copy; 2025 Eastlight Energy. All Rights Reserved
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
