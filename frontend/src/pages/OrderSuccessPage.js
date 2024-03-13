import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "lottie-react";
import animationData from "../assets/animations/successfully-done.json";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const style = {
    height: 300,
  };

  return (
    <div>
      <Lottie animationData={animationData} style={style} loop={true} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1] font-Poppins font-semibold">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
