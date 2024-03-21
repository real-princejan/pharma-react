import React, { useState, useEffect } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomProducts = () => {
      if (allProducts && allProducts.length > 0) {
        // Create a copy of allProducts before sorting
        const productsCopy = [...allProducts];
        const shuffledProducts = productsCopy.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 10);
        setRandomProducts(selectedProducts);
      }
    };

    getRandomProducts();

    const interval = setInterval(() => {
      getRandomProducts();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {randomProducts.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
