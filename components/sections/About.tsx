import { Button } from "../ui/stateful-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col gap-2 py-20 2xl:mx-auto 2xl:container">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col gap-4">
          {" "}
          <h2 className="font-bold max-lg:text-center text-4xl lg:text-5xl xl:text-7xl leading-tight bg-linear-to-r from-red-500/70 via-40% lg:via-20%  via-yellow-500 to-50%  to-teal-400  bg-clip-text text-transparent">
            Smart Solar. <br className="" /> Smooth Services. <br />
            Better Living.
          </h2>
          <p className="text-base lg:text-xl text-center lg:text-left text-gray-300">
            We provide high-quality Cworth Energy solar installations, reliable
            AC services, and seamless flight and hotel bookings.
          </p>
          <div className="flex justify-center lg:justify-start mt-4">
            <Link href={"/about"} className="max-lg:w-full">
              {" "}
              <Button className="flex bg-[#24a090] text-white hover:bg-teal-800 hover:ring-yellow-500 hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500  md:p-4 md:px-8 md:text-base max-lg:w-full md:rounded-full  items-center  gap-2">
                Learn about us
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row gap-2">
          <div className="h-[300px] max-sm:scale-90 lg:h-[400px] rotate-4 aspect-square md:w-[500px] mx-auto lg:w-full rounded-xl overflow-hidden">
            {" "}
            <img
              src={"/buildingsolar.jpg"}
              alt="solar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-[300px] max-sm:scale-90 lg:h-[400px] lg:mt-10 -rotate-4 aspect-square md:w-[500px] mx-auto lg:w-full rounded-xl overflow-hidden">
            {" "}
            <img
              src={"/solartwo.png.avif"}
              alt="solar"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}
        <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
          <div className="col-span-2 max-sm:scale-90 lg:col-span-1 h-[280px] lg:h-[350px] rotate-3 rounded-2xl overflow-hidden shadow-xl shadow-teal-500/10 hover:rotate-2 transition-transform duration-300">
            <img
              src="/panel.jpeg"
              alt="Commercial solar panel installation"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="col-span-2 max-sm:scale-90 lg:col-span-1 h-[280px] lg:h-[350px] lg:mt-12 -rotate-3 rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/10 hover:-rotate-2 transition-transform duration-300">
            <img
              src="/livingsolar.jpeg"
              alt="ac comfort"
              className="object-cover  w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rotate-6 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 border-4 border-white/10 hover:rotate-3 transition-transform duration-300">
            <img
              src="/accomfort.jpeg"
              alt="solar panel"
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
