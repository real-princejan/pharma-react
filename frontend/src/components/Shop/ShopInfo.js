import React, { useEffect, useState } from "react";
import { backend_url, server } from "../../server";
import styles from "../../styles/styles";
import axios from "axios";
import Loader from "../Layout/Loader";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.seller.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  console.log(data);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex items-center justify-center">
              <img
                src={`${backend_url}${seller?.avatar}`}
                alt="Profile"
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <h3 className="text-center py-2 text-[20px] ">{seller.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center ">
              {seller.description}
            </p>
          </div>
          {/* Address */}
          {/* <div className="p-3">
            <h5 className="font-[600] ">Cashier Address</h5>
            <h4 className="text-[#000000a6]">{seller.address}</h4>
          </div> */}
          {/* Products */}
          <div className="p-3">
            <h5 className="font-[600] ">Total Products</h5>
            <h4 className="text-[#000000a6]">{products && products.length}</h4>
          </div>
          {/* Ratings */}
          {/* <div className="p-3">
            <h5 className="font-[600] ">Overall Rating</h5>
            <h4 className="text-[#000000a6]">4/5</h4>
          </div> */}
          {/* Joined */}
          <div className="p-3">
            <h5 className="font-[600] ">Joined on</h5>
            <h4 className="text-[#000000a6]">{formatDate(seller.createdAt)}</h4>
          </div>
          {isOwner && (
            <div className="py-3 px-4 font-medium">
              <Link to="/settings">
                <div
                  className={`${styles.buttonR} !w-full !h-[42px] !rounded-[5px]`}
                >
                  <span className="text-white">Edit Profile</span>
                </div>
              </Link>
              <div
                className={`${styles.buttonR} !w-full !h-[42px] !rounded-[5px]`}
                onClick={logoutHandler}
              >
                <span className="text-white">Logout</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
