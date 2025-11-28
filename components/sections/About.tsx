import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col gap-2 py-20 2xl:mx-auto 2xl:container">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col gap-4">
          {" "}
          <h2 className="font-bold max-lg:text-center text-4xl lg:text-5xl xl:text-7xl leading-tight ">
            Smart Solar. <br className="" /> Smooth Services. <br />
            Better Living.
          </h2>
          <p className="text-xl text-center lg:text-left">
            We provide high-quality Cworth Energy solar installations, reliable
            AC services, and seamless flight and hotel bookings.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href={"/about"}>
              {" "}
              <Button className="flex items-center gap-2 p-6 mt-10 rounded-xl ">
                Learn About Us{" "}
                <span>
                  <ArrowRight />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="h-[300px] max-sm:scale-90 lg:h-[400px] rotate-4 aspect-square md:w-[500px] mx-auto lg:w-full rounded-xl overflow-hidden">
            {" "}
            <Image
              src={"/buildingsolar.jpg"}
              alt="solar"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-[300px] max-sm:scale-90 lg:h-[400px] lg:mt-10 -rotate-4 aspect-square md:w-[500px] mx-auto lg:w-full rounded-xl overflow-hidden">
            {" "}
            <Image
              src={"/solartwo.png.avif"}
              alt="solar"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
