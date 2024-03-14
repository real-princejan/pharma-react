import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";

import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.js";
import { backend_url } from "../../../server.js";
import { addToCart } from "../../../redux/actions/cart.js";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings.js";

const ProductCard = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const d = data.name;

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock <= 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addToCart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${data._id}`}>
          <img
            src={`${backend_url}${data.images && data.images[0]}`}
            alt="Product Image"
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h4 className="pb-3 font-[500] ">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          {/* Stars */}
          <div className="flex ">
            <Ratings rating={data?.ratings} />
          </div>

          {/* Stock */}
          <div className="flex items-center mt-2">
            <span
              className={`${
                data.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {data.stock > 0 ? `${data.stock} left` : "Out of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                PHP{" "}
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
              </h5>
              <h4 className={`${styles.price}`}>
                {data.originalPrice ? "PHP " + data.originalPrice : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-blue-500">
              {data?.sold_out} Sold
            </span>
          </div>
        </Link>

        {/* Side Options */}
        <div className="">
          {click ? (
            <AiFillHeart
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
              size={22}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Preview"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
