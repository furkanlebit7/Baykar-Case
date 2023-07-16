import React, { useEffect, useRef, useState } from "react";
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
    <div className="lg:p-12 relative">
      <h1 className="text-blue-gray text-3xl font-bold text-center lg:text-6xl lg:text-start lg:pb-20 pb-8">
        Because they love us
      </h1>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative"
      >
        <div className="absolute w-full h-96 bg-amber-200 top-4">{""}</div>

        <SwiperSlide>
          <div className="shadow-boxShadow4 bg-white rounded-3xl p-8 gap-4">
            <p className="flex items-center gap-2 text-2xl font-bold text-gray-600 py-4">
              <AiOutlineComment />
              <span>SHELLS</span>
            </p>
            <p className="text-2xl">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </p>
            <div className="flex items-center pt-4 gap-4">
              <img src={require("../images/user1.png")} alt="user" />
              <p className="text-lg">
                Hellena John <br />{" "}
                <span className="text-gray-600 text-base">Co-founder</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-boxShadow4 bg-white rounded-3xl p-8 gap-4">
            <p className="flex items-center gap-2 text-2xl font-bold text-gray-600 py-4">
              <AiOutlineComment />
              <span>SHELLS</span>
            </p>
            <p className="text-2xl">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </p>
            <div className="flex items-center pt-4 gap-4">
              <img src={require("../images/user1.png")} alt="user" />
              <p className="text-lg">
                Hellena John <br />{" "}
                <span className="text-gray-600 text-base">Co-founder</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-boxShadow4 bg-white rounded-3xl p-8 gap-4">
            <p className="flex items-center gap-2 text-2xl font-bold text-gray-600 py-4">
              <AiOutlineComment />
              <span>SHELLS</span>
            </p>
            <p className="text-2xl">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </p>
            <div className="flex items-center pt-4 gap-4">
              <img src={require("../images/user1.png")} alt="user" />
              <p className="text-lg">
                Hellena John <br />{" "}
                <span className="text-gray-600 text-base">Co-founder</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-boxShadow4 bg-white rounded-3xl p-8 gap-4">
            <p className="flex items-center gap-2 text-2xl font-bold text-gray-600 py-4">
              <AiOutlineComment />
              <span>SHELLS</span>
            </p>
            <p className="text-2xl">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </p>
            <div className="flex items-center pt-4 gap-4">
              <img src={require("../images/user1.png")} alt="user" />
              <p className="text-lg">
                Hellena John <br />{" "}
                <span className="text-gray-600 text-base">Co-founder</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-boxShadow4 bg-white rounded-3xl p-8 gap-4">
            <p className="flex items-center gap-2 text-2xl font-bold text-gray-600 py-4">
              <AiOutlineComment />
              <span>SHELLS</span>
            </p>
            <p className="text-2xl">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </p>
            <div className="flex items-center pt-4 gap-4">
              <img src={require("../images/user1.png")} alt="user" />
              <p className="text-lg">
                Hellena John <br />{" "}
                <span className="text-gray-600 text-base">Co-founder</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-boxShadow4 bg-white rounded-3xl p-8 gap-4">
            <p className="flex items-center gap-2 text-2xl font-bold text-gray-600 py-4">
              <AiOutlineComment />
              <span>SHELLS</span>
            </p>
            <p className="text-2xl">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </p>
            <div className="flex items-center pt-4 gap-4">
              <img src={require("../images/user1.png")} alt="user" />
              <p className="text-lg">
                Hellena John <br />{" "}
                <span className="text-gray-600 text-base">Co-founder</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TheyLoveUs;
