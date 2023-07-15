import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="p-4 flex items-center justify-between">
      <h1 className="text-mC text-3xl font-bold">Collers</h1>
      <ul
        className={
          "fixed h-screen w-screen top-0 left-0 bg-amber-100 flex flex-col items-center justify-around z-50 " +
          (isHidden ? "hidden" : "block")
        }
      >
        <li>Products</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Log In</li>
        <li>Sign Up Now</li>
        <li onClick={() => setIsHidden(true)}>X</li>
      </ul>
      <button onClick={() => setIsHidden(false)}>
        <BiMenuAltRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Header;
