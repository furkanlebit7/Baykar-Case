import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="p-4 flex items-center justify-between">
      <h1 className="text-mC text-3xl font-bold">Collers</h1>
      <ul
        className={
          "fixed h-screen w-screen top-0 left-0 bg-amber-100 flex flex-col items-center justify-around z-50 lg:flex lg:h-auto lg:w-auto lg:relative lg:bg-transparent lg:flex-row lg:gap-4  text-mC font-medium " +
          (isHidden ? "hidden" : "block")
        }
      >
        <li
          onClick={() => setIsHidden(true)}
          className="lg:hidden
        "
        >
          X
        </li>
        <li className="px-2 py-3">Products</li>
        <li className="px-2 py-3">Solutions</li>
        <li className="px-2 py-3">Pricing</li>
        <li className="px-2 py-3">Resources</li>
        <li className="px-2 py-3">Log In</li>
        <li className="px-7 py-3 border-2 rounded-lg border-mC">Sign Up Now</li>
      </ul>
      <button onClick={() => setIsHidden(false)} className="lg:hidden">
        <BiMenuAltRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Header;
