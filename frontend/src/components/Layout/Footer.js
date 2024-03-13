import React from "react";
import pharmaLogo from "../../assets/images/pharmaLogo.png";
import { AiOutlineYoutube } from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white text-black">
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={pharmaLogo}
            style={{ filter: "brightness(1) invert(0)" }}
            alt="Pharma Logo"
          />
          <br />
          <p className="font-Poppins text-[#525252c4]">"Empowering Health, Enriching Lives: Your Trusted Pharma Partner"</p>

        </ul>

        {/* Pharma */}
        {/* <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">
            Pharma
            {footerProductLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="text-gray-400 hover:text-green-500 duration-300 text-sm cursor-pointer leading-6"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </h1>
        </ul> */}

        {/* Shop */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">
            Shop
            {footercompanyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="text-gray-400 hover:text-green-500 duration-300 text-sm cursor-pointer leading-6"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </h1>
        </ul>

        {/* Support */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">
            Support
            {footerSupportLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="text-gray-400 hover:text-green-500 duration-300 text-sm cursor-pointer leading-6"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </h1>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>
          <p></p>
          <p>Developed by Group 10 &copy; {new Date().getFullYear()} Pharma</p>
          <p></p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
