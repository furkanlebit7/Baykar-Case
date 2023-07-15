import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const BestOfCard = ({ image }) => {
  return (
    <div className="rounded-ten border border-blue-gray flex flex-col gap-8 shadow-mainShadow">
      <img
        src={require(`../images/${image}.png`)}
        alt="shoes"
        className="w-full overflow-hidden rounded-t-ten"
      />
      <div className="flex flex-col gap-4 mx-8 ">
        <p className="text-2xl font-bold leading-[110%]">Title</p>
        <p className="text-lg">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
      </div>
      <button className="mx-8 py-4 border-2 text-2xl font-bold rounded-lg tracking-half leading-[100%] flex items-center justify-center mb-8 ">
        <RiShoppingCart2Line />
        <p className="mx-4 tracking-half">Buy now</p>
      </button>
    </div>
  );
};

export default BestOfCard;
