import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const DeliveryRating = ({ rating, deliveryRating }) => {
  const stars = [];

  const renderStars = (value, type) => {
    const starType =
      type === "rating"
        ? value <= rating
          ? <AiFillStar size={20} color="#f6b100" className="mr-2 cursor-pointer" />
          : value === Math.ceil(rating) && !Number.isInteger(rating)
          ? <BsStarHalf size={17} color="#f6ba00" className="mr-2 cursor-pointer" />
          : <AiOutlineStar size={20} color="#f6ba00" className="mr-2 cursor-pointer" />
        : value <= deliveryRating
        ? <AiFillStar size={20} color="#f6b100" className="mr-2 cursor-pointer" />
        : value === Math.ceil(deliveryRating) && !Number.isInteger(deliveryRating)
        ? <BsStarHalf size={17} color="#f6ba00" className="mr-2 cursor-pointer" />
        : <AiOutlineStar size={20} color="#f6ba00" className="mr-2 cursor-pointer" />;

    return starType;
  };

  for (let i = 1; i <= 5; i++) {
    stars.push(renderStars(i, "rating"));
  }

  const deliveryStars = [];
  for (let i = 1; i <= 5; i++) {
    deliveryStars.push(renderStars(i, "delivery"));
  }

  return (
    <div className="flex pr-2">
      <p className="pl-5">Delivery Rating:</p>
      {deliveryStars}
    </div>
  );
};

export default DeliveryRating;
