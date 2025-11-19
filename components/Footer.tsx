import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-10 w-full bg-yellow-500/20 p-20">
      <div className="flex flex-col gap-10  lg:flex-row justify-between 2xl:container 2xl:mx-auto">
        <div className="flex flex-col items-start gap-6">
          <Link
            href={"/"}
            className="text-xl font-bold  border bg-black px-1 md:px-4 rounded-full"
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
          <p className="lg:max-w-sm text-lg">
            Major Distributor for Cworth Energy Systems. Quality solar products
            powering homes & businesses.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-bold mb-4">Services</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/">Solar Solutions</Link>
              </li>
              <li>
                <Link href="/">Air Conditioning</Link>
              </li>
              <li>
                <Link href="/">Hotel Booking</Link>
              </li>
              <li>
                <Link href="/">Flight Booking</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold mb-4">Quick Links</p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Affiliate Program</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold mb-4">Contact</p>
            <ul className="flex flex-col gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
