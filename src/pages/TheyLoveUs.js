import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { AiOutlineComment } from "react-icons/ai";
const TheyLoveUs = () => {
  return (
    <div className="py-12 flex flex-col gap-8">
      <h1 className="text-blue-gray text-3xl font-bold text-center">
        Because they love us
      </h1>
    </div>
  );
};

export default TheyLoveUs;
