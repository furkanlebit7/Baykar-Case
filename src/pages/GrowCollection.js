import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlScreenDesktop } from "react-icons/sl";
import { GiAerialSignal, GiSettingsKnobs } from "react-icons/gi";

const GrowCollection = () => {
  return (
    <div className="pt-12 pb-24 px-4 flex flex-col gap-8 items-center relative lg:items-start lg:p-20 overflow-hidden">
      <div className="flex flex-col gap-8 items-center lg:items-start ">
        <h1 className="text-3xl font-bold lg:text-6xl">Grow your collection</h1>
        <p className="text-center leading-[140%] text-blue-gray lg:text-start">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <ul className="flex items-center overflow-hidden gap-4 px-4 w-screen z-1 lg:flex-col lg:w-1/3">
          <li className="p-4 flex items-center shadow-boxShadow3 rounded-lg text-xl font-medium tracking-half">
            <BsSearch />
            <span className="w-max px-4">Bibendum tellus</span>
          </li>
          <li className="p-4 flex items-center text-xl font-medium tracking-half">
            <BiCheckShield />
            <span className="w-max px-4">Cras eget</span>
          </li>
          <li className="p-4 flex items-center text-xl font-medium tracking-half">
            <HiOutlineRocketLaunch />
            <span className="w-max px-4">Dolor pharetra</span>
          </li>
          <li className="p-4 flex items-center text-xl font-medium tracking-half">
            <SlScreenDesktop />
            <span className="w-max px-4">Amet, fringilla</span>
          </li>
          <li className="p-4 flex items-center text-xl font-medium tracking-half">
            <GiAerialSignal />
            <span className="w-max px-4">Amet nibh</span>
          </li>
          <li className="p-4 flex items-center text-xl font-medium tracking-half">
            <GiSettingsKnobs />
            <span className="w-max px-4">Sed velit</span>
          </li>
        </ul>
        <div className="relative px-4 z-10 md:self-center z-1">
          <div className="shadow-boxShadow2 p-1 rounded-3xl w-72 bg-white lg:w-[750px]">
            <div className="flex items-center gap-1 text-xs my-3 mx-2">
              <span>🔴</span>
              <span>🟡</span>
              <span>🟢</span>
            </div>
            <img
              src={require("../images/grow1.png")}
              alt="join us"
              className="rounded-b-3xl lg:w-[700px]"
            />
          </div>
          <div className="shadow-boxShadow2 p-1 rounded-3xl w-72 absolute top-10 left-14 lg:top-14 lg:left-28 bg-white z-10 lg:w-[710px]">
            <div className="flex items-center gap-1 text-xs my-3 mx-2">
              <span>🔴</span>
              <span>🟡</span>
              <span>🟢</span>
            </div>
            <img
              src={require("../images/grow2.png")}
              alt="join us"
              className="rounded-b-3xl lg:w-[700px]"
            />
          </div>
          <img
            src={require("../images/grow3.png")}
            alt="join us"
            className="absolute left-64 w-1/4 sm:w-1/2 z-20 top-24 lg:w-[50%] lg:left-[652px]"
          />
        </div>
      </div>
      <img
        src={require("../images/Vector 10.png")}
        className="absolute bottom-0 left-0 w-full -z-30"
      />
      <img
        src={require("../images/Vector 11.png")}
        className="absolute bottom-0 left-0 w-full -z-20"
      />
      <img
        src={require("../images/Vector 12.png")}
        className="absolute  left-0 bottom-[-3px] w-full -z-10"
      />
    </div>
  );
};

export default GrowCollection;
