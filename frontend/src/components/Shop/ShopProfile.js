import React, { useEffect, useState } from "react";
import ProductCard from "../Route/ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { backend_url } from "../../server";
import Ratings from "../Products/Ratings";
import DeliveryRating from "../Products/DeliveryRating";

const ShopProfile = ({ isOwner }) => {
  const { allProducts } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(new Date());

  const getTimeDifference = (timestamp) => {
    const now = new Date();
    const createdDate = new Date(timestamp);
    const timeDifference = now - createdDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return `a day ago`;
    } else if (hours > 1) {
      return `${hours} hours ago`;
    } else if (hours === 1) {
      return `an hour ago`;
    } else if (minutes > 1) {
      return `${minutes} minutes ago`;
    } else if (minutes === 1) {
      return `a minute ago`;
    } else {
      return "just now";
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute

    return () => {
      clearInterval(timer); // Cleanup interval on component unmount
    };
  }, []);

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch]);

  const [active, setActive] = useState(1);

  const allReviews =
    allProducts &&
    allProducts
      .map((product) =>
        product.reviews.map((review) => ({ ...review, product: product }))
      )
      .flat();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-semibold text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Products
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-semibold text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Product Reviews
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-semibold text-[20px] ${
                active === 3 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Delivery Reviews
            </h5>
          </div>
        </div>

        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.buttonR} !rounded-[4px] h-[42px]`}>
                  <span className="text-white font-medium">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {allProducts &&
            allProducts.map((i, index) => (
              <ProductCard data={i} key={index} isShop={true} />
            ))}
        </div>
      )}

{/* Product Reviews */}
      {active === 2 && (
        <div className="w-full">
          {allReviews &&
            allReviews.map((item, index) => (
              <div className="w-full flex my-4" key={index}>
                <img
                  src={`${backend_url}/${item.user.avatar}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-2">
                  <div className="flex w-full items-center">
                    <h1 className="font-[600] pr-2">{item.user.name}</h1>
                    <Ratings rating={item.rating} deliveryRating={item.delivery_rating} />
                  </div>
                  <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                  <p className="text-[#000000a7] text-[14px]">
                    {getTimeDifference(item?.createdAt)}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={`${backend_url}/${item.product.images}`}
                      className="w-[50px] h-[50px] rounded-lg"
                      alt=""
                    />
                    <span className="pl-2">{item.product.name}</span>
                  </div>
                </div>
              </div>
            ))}
          {allReviews && allReviews.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Reviews have for this shop!
            </h5>
          )}
        </div>
      )}

      {/* Delivery Review */}
      {active === 3 && (
        <div className="w-full">
          {allReviews &&
            allReviews.map((item, index) => (
              <div className="w-full flex my-4" key={index}>
                <img
                  src={`${backend_url}/${item.user.avatar}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-2">
                  <div className="flex w-full items-center">
                   
                    <DeliveryRating deliveryRating={item.delivery_rating} />
                    <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                  </div>

                  <p className="text-[#000000a7] text-[14px]">
                    {getTimeDifference(item?.createdAt)}
                  </p>
     
                </div>
              </div>
            ))}
          {allReviews && allReviews.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No Delivery Reviews yet!
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopProfile;
