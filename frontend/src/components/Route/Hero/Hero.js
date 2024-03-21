import React from "react";
import styles from "../../../styles/styles";
import pharmaIMG from "../../../assets/images/pharma.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage: `url(${pharmaIMG})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] flex flex-col items-center justify-center h-full text-center`}
      >
        <h1
          className={`colors text-[60px] 800px:text-[80px] text-[#9F1515] font-[700] capitalize`}
        >
          Shop with Pharma
        </h1>
        <p className="pt-5 text-[18px] font-[Poppins] font-[400] text-gray-600">
          Effective Medicine, New Medicine Everyday
        </p>
        <Link to="/products" className="inline-block">
          <div
            className={`${styles.button} border mt-5 hover:bg-[#9F1515] border-[#9F1515]`}
          >
            <span className="text-gray-700 font-Poppins font-[400] text-[18px] hover:text-white">
              Shop now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
