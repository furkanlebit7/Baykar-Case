import React from "react";
import BestOfCard from "../components/BestOfCard";
const BestOfBest = () => {
  return (
    <div className="px-4 py-12 bg-blue-gray text-white  flex flex-col items-center gap-8 lg:px-20 lg:py-20">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:w-full">
        <h1 className="text-3xl font-bold leading-[110%] text-center lg:text-6xl">
          The best of the best
        </h1>
        <button className="px-12 py-5 border-2 text-2xl font-bold rounded-lg tracking-half leading-[100%] ">
          Sign up now
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <BestOfCard image={"bou1"} />
        <BestOfCard image={"bou2"} />
        <BestOfCard image={"bou3"} />
      </div>
    </div>
  );
};

export default BestOfBest;
