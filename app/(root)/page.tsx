import About from "@/components/sections/About";
import ChooseUs from "@/components/sections/ChooseUs";
import Faqs from "@/components/sections/Faqs";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/Service";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-20 w-full h-full pt-20 md:pt-40 ">
      <div className="px-4 md:px-10">
        <Hero />
      </div>
      <div className="px-4 md:px-10">
        <Service />
      </div>
      <div className="px-4 md:px-10 bg-[#cffffb2a] t-white ">
        {" "}
        <About />
      </div>
      <div className="px-4 md:px-10">
        <ChooseUs />
      </div>
      <div className="px-4 md:px-10">
        <GetStarted />
      </div>
      <div className="px-4 md:px-10">
        <Faqs />
      </div>
      {/* <div className="px-4 md:px-10">
        <Service />
      </div>
      <div className="px-4 md:px-10">
        <Service />
      </div> */}
    </div>
  );
};

export default page;
