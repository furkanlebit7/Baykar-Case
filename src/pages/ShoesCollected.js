import React from "react";

const ShoesCollected = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div className="absolute flex items-center justify-center top-0 left-7">
          <img src={require("../images/shoes.png")} width={"80%"} />
          <p className="bg-gray-200 top-40 absolute after:content-[' '] after:w-6 after:h-6 after:absolute after:bottom-0 after:rotate-45 after:bg-gray-200 text-sm px-4 py-2 rounded-md">
            Emma Simpson collected one pair
            <br />
            of
            <span className="font-semibold"> Cool Shoes</span>
          </p>
        </div>
        <div className="relative ">
          <span className="w-6 h-6 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 bottom-28 left-80">
            {" "}
          </span>
          <span className="w-6 h-6 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 top-40 left-80">
            {" "}
          </span>
          <span className="w-7 h-7 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 top-72 left-[24%]">
            {" "}
          </span>
          <span className="w-8 h-8 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 top-56 left-40">
            {" "}
          </span>
          <span className="w-3 h-3 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 top-20 left-[400px]">
            {" "}
          </span>
          <span className="w-3 h-3 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 bottom-36 left-[370px]">
            {" "}
          </span>
          <span className="w-6 h-6 rounded-full border-3 absolute border-lime-400 hover:bg-lime-200 bottom-44 left-[580px]">
            {" "}
          </span>
        </div>
        <img
          src={require("../images/chart.png")}
          alt="chart"
          className="bg-amber-900 min-w-min w-full max-w[1049px] max-h-[633px] object-contain"
        />
      </div>
    </div>
  );
};

export default ShoesCollected;
