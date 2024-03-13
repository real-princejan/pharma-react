import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/Animation - 1707854352158.json";

const Loader = () => {
  const style = {
    height: 300,
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie animationData={animationData} style={style} loop={true} />
    </div>
  );
};

export default Loader;
