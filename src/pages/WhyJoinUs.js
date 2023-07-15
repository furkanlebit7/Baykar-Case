import React from "react";
import { BsCheckLg } from "react-icons/bs";

const WhyJoinUs = () => {
  return (
    <div className="pt-4 pb-14 px-4 flex ">
      <div className="py-8 px-4 shadow-boxShadow rounded-4xl flex-col gap-8">
        <div className="flex flex-col items-center gap-6 ">
          <h1 className="text-blue-gray text-3xl font-bold">Why Join Us</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <BsCheckLg className="text-2xl text-green-500" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex gap-2">
              <BsCheckLg className="text-2xl text-green-500" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="flex gap-2">
              <BsCheckLg className="text-2xl text-green-500" />
              Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>
          <button className="px-8 py-4 border-2 border-mC rounded-lg text-xl font-medium tracking-half text-mC">
            Sign up now
          </button>
        </div>
        <div className="shadow-boxShadow2 p-1 rounded-3xl">
          <div className="flex items-center gap-1 text-xs my-3 mx-2">
            <span>🔴</span>
            <span>🟡</span>
            <span>🟢</span>
          </div>
          <img
            src={require("../images/bou1.png")}
            alt="join us"
            className="rounded-b-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
