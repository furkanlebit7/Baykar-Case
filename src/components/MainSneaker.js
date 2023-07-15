import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const MainSneaker = () => {
  return (
    <div className="px-4 py-12 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-8 text-center ">
        <h1 className="text-6xl font-extrabold leading-[110%]">
          Collectible Sneakers
        </h1>
        <p className="text-lg leading-[160%]">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="p-4 text-xl font-medium leading-[120%] tracking-half text-mC border-2 border-mC rounded-lg">
            Sign up now
          </button>
          <button className="flex items-center gap-2 leading-[120%] tracking-half text-base px-2 py-3 font-medium text-mC">
            <AiOutlinePlayCircle />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-10 w-4/5 rounded-fifty  top-9 left-9 h-full bg-amber-400"></div>
        <img
          src={require("../images/mainsneaker.png")}
          alt="sneaker"
          className="z-20 relative"
        />
      </div>
    </div>
  );
};

export default MainSneaker;
