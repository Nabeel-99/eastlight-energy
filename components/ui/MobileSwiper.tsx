"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";

const MobileSwiper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex md:hidden flex-col justify-center items-center px-6 gap-6 mt-10">
      <Swiper
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper md:hidden w-full"
      >
        {children}
        <div className="custom-pagination mt-4  py-2 flex justify-center w-full "></div>
      </Swiper>
    </div>
  );
};

export default MobileSwiper;
