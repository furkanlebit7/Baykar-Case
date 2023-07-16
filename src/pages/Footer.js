import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="py-12 px-4 text-white bg-blue-gray flex flex-col items-center gap-12 text-center">
      <ul>
        <li className="font-medium py-3">Product</li>
        <li className="py-3">Pricing</li>
        <li className="py-3">Overview</li>
        <li className="py-3">Browse</li>
        <li className="py-3">Accessibility</li>
        <li className="py-3">Five</li>
      </ul>
      <ul>
        <li className="font-medium py-3">Solutions</li>
        <li className="py-3">Brainstorming</li>
        <li className="py-3">Ideation</li>
        <li className="py-3">Wireframing</li>
        <li className="py-3">Research</li>
        <li className="py-3">Design</li>
      </ul>
      <ul>
        <li className="font-medium py-3">Support</li>
        <li className="py-3">Contact Us</li>
        <li className="py-3">Developers</li>
        <li className="py-3">Documentation</li>
        <li className="py-3">Integrations</li>
        <li className="py-3">Reports</li>
      </ul>
      <ul className="flex flex-col gap-2 items-center">
        <li className="font-medium py-3">Get the App</li>
        <li>
          <img src={require("../images/googleplay.png")} />
        </li>
        <li>
          <img src={require("../images/appstore.png")} />
        </li>
        <li className="font-medium pb-3 pt-12">Follow Us</li>
        <li className="flex items-center gap-4 text-2xl">
          <AiFillYoutube />
          <AiFillFacebook />
          <AiOutlineTwitter />
          <AiFillInstagram />
          <AiFillLinkedin />
        </li>
      </ul>
      <hr className="w-full " />
      <ul className="flex flex-col items-center gap-6">
        <li>Collers @ 2023. All rights reserved.</li>
        <li className="flex items-center gap-8 py-3">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p className="flex items-center gap-2">
            <TfiWorld /> <span>EN</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
