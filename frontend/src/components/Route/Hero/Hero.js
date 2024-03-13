import React from "react";
import styles from "../../../styles/styles";
import pharmaIMG from "../../../assets/images/pharma.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] sm:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage: `url(${pharmaIMG})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] flex flex-col items-center justify-center h-full text-center`}
      >
        <h1
          className={`shadows text-[60px] 800px:text-[80px] text-white font-[700] capitalize`}
        >
          Welcome to <br /> Pharma
        </h1>
        <p className="pt-5 text-[18px] font-[Poppins] font-[400] text-gray-600">
          Effective Medicine, New Medicine Everyday
        </p>
        <Link to="/products" className="inline-block">
          <div
            className={`${styles.button} mt-5 hover:bg-green-500 hover:text-white border-green-500`}
          >
            <span className="text-gray-700  font-Poppins font-[400] text-[18px]">
              Shop now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
