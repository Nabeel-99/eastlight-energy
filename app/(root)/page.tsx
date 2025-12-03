import About from "@/components/sections/About";
import ChooseUs from "@/components/sections/ChooseUs";
import Faqs from "@/components/sections/Faqs";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import Service from "@/components/sections/Service";

const page = () => {
  return (
    <div className="flex flex-col  w-full h-full  ">
      <div className=" bg-[#0A0F18]">
        <Hero />
      </div>
      <div className="px-4 pt-20 lg:pb-20 md:px-10 bg-linear-to-b from-[#0A0F18] to-[#0f1218]">
        <Service />
      </div>
      <div className="px-4 md:px-10 lg:pt-20 lg:pb-20 bg-linear-to-b from-[#0f1218] via-[#241d16] via-70%  to-[#0A0F18]  text-white">
        {" "}
        <About />
      </div>
      <div className="px-4 py-20 md:px-10 bg-[#0A0F18]">
        <ChooseUs />
      </div>
      <div className="px-4 md:px-10 py-10 lg:py-20 bg-[#0A0F18]">
        <GetStarted />
      </div>
      <div className="px-4 md:px-10 py-10 lg:py-20 bg-[#0A0F18]">
        <Faqs />
      </div>
    </div>
  );
};

export default page;
