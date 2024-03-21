import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard.js";
import { useSelector } from "react-redux";

const BestDeals = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [mostClickedProducts, setMostClickedProducts] = useState([]);

  useEffect(() => {
    const productsWithClicks = allProducts.map((product) => {
      const clickCount = localStorage.getItem(`clickCount_${product._id}`) || 0;
      return { ...product, clickCount: parseInt(clickCount, 10) };
    });
    const sortedProducts = productsWithClicks.sort((a, b) => b.clickCount - a.clickCount);
    const top5MostClicked = sortedProducts.slice(0, 5);
    setMostClickedProducts(top5MostClicked);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section} `}>
        <div className={`${styles.heading}`}>
          <h1>Most searched</h1>
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {mostClickedProducts.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
