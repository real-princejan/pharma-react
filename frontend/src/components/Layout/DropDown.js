import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const handleSubmit = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-5 w-[270px] top-12 bg-white absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.normalFlex}`}
            onClick={() => handleSubmit(i)}
          >
            <img
              src={i.image_Url}
              alt="Image"
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
            />
            <h3 className="m-3 cursor-pointer select-none hover:text-gray-500">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
