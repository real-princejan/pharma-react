import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[89vh] bg-white font-semibold shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* first item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard size={30} color={`${active === 1 ? "green" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px]  ${
              active === 1 ? "text-green-600 font-semibold" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px]  ${
              active === 2 ? "text-green-600 font-semibold" : "text-[#555]"
            }`}
          >
            Order Management
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-sellers" className="w-full flex items-center">
          <GrWorkshop size={30} color={`${active === 3 ? "green" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px]  ${
              active === 3 ? "text-green-600 font-semibold" : "text-[#555]"
            }`}
          >
            Seller Management
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px]  ${
              active === 4 ? "text-green-600 font-semibold" : "text-[#555]"
            }`}
          >
            Users Management
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-products" className="w-full flex items-center">
          <BsHandbag size={30} color={`${active === 5 ? "green" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px]  ${
              active === 5 ? "text-green-600 font-semibold" : "text-[#555]"
            }`}
          >
            Products Management
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/profile" className="w-full flex items-center">
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "green" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px]  ${
              active === 8 ? "text-green-600 font-semibold" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
