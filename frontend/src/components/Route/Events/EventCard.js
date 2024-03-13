import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown.js";
import { backend_url } from "../../../server.js";

const EventCard = ({ active, data }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w-[50%] m-auto">
      <img 
         src={`${backend_url}${data.images[0]}`}
        alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center px-4 ml-5">
      <h2 className={`${styles.productTitle}`}>{data.name}</h2>
        <p>
        {data.description}
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 list-inside">
              15% OFF
            </h5> 

          </div>
          <span className="pr-3 font-[400] text-[17px] text-blue-500">
          </span>
        </div>
        <CountDown data={data} />
        <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
              PROMO CODE: <span className="text-[25px]">FREE10</span>
            </h5>
        <br />
      </div>
    </div>
  );
};

export default EventCard;
