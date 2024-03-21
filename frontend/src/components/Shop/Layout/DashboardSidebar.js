import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const DashboardSidebar = ({ active }) => {
  const [showOrders, setShowOrders] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div className="w-full h-[89vh] bg-white font-semibold shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">

      {/* First Item */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard size={30} color={`${active === 1 ? "#9F1515" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400 ${
              active === 1 ? "text-[#9F1515] font-semibold" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      {/* Orders Dropdown */}
      <div className="w-full">
        <div
          className="w-full flex items-center p-4 cursor-pointer"
          onClick={() => setShowOrders(!showOrders)}
        >
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#9F1515" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400 ${
              active === 2 ? "text-[#9F1515] font-semibold" : "text-[#555]"
            }`}
          >
            Orders
          </h5>
          {showOrders ? <FaAngleUp size={15} color="#555" /> : <FaAngleDown size={15} color="#555" />}
        </div>
        {showOrders && (
          <div className="pl-8">
            <div className="w-full flex items-center p-2">
              <Link to="/dashboard-orders" className="w-full flex items-center">
                <FiShoppingBag size={24} color="#555" />
                <h5 className="hidden 800px:block pl-2 text-[16px] font-[400]">All Orders</h5>
              </Link>
            </div>

            <div className="w-full flex items-center p-2">
              <Link to="/dashboard-refunds" className="w-full flex items-center">
                <HiOutlineReceiptRefund size={24} color="#555" />
                <h5 className="hidden 800px:block pl-2 text-[16px] font-[400]">Refunds</h5>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Products Dropdown */}
      <div className="w-full">
        <div
          className="w-full flex items-center p-4 cursor-pointer"
          onClick={() => setShowProducts(!showProducts)}
        >
          <FiPackage size={30} color={`${active === 3 ? "#9F1515" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400 ${
              active === 3 ? "text-[#9F1515] font-semibold" : "text-[#555]"
            }`}
          >
            Products
          </h5>
          {showProducts ? <FaAngleUp size={15} color="#555" /> : <FaAngleDown size={15} color="#555" />}
        </div>
        {showProducts && (
          <div className="pl-8">
            <div className="w-full flex items-center p-2">
              <Link to="/dashboard-products" className="w-full flex items-center">
                <FiPackage size={24} color="#555" />
                <h5 className="hidden 800px:block pl-2 text-[16px] font-[400]">All Products</h5>
              </Link>
            </div>
            <div className="w-full flex items-center p-2">
              <Link to="/dashboard-create-product" className="w-full flex items-center">
                <AiOutlineFolderAdd size={24} color="#555" />
                <h5 className="hidden 800px:block pl-2 text-[16px] font-[400]">Create Product</h5>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Events Dropdown */}
      <div className="w-full">
        <div
          className="w-full flex items-center p-4 cursor-pointer"
          onClick={() => setShowEvents(!showEvents)}
        >
          <AiOutlineGift size={30} color={`${active === 4 ? "#9F1515" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400 ${
              active === 4 ? "text-[#9F1515] font-semibold" : "text-[#555]"
            }`}
          >
            Events
          </h5>
          {showEvents ? <FaAngleUp size={15} color="#555" /> : <FaAngleDown size={15} color="#555" />}
        </div>
        {showEvents && (
          <div className="pl-8">
            <div className="w-full flex items-center p-2">
              <Link to="/dashboard-coupons" className="w-full flex items-center">
                <AiOutlineGift size={24} color="#555" />
                <h5 className="hidden 800px:block pl-2 text-[16px] font-[400]">Discount Codes</h5>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Fifth Item */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 5 ? "#9F1515" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400 ${
              active === 5 ? "text-[#9F1515] font-semibold" : "text-[#555]"
            }`}
          >
            Inbox
          </h5>
        </Link>
      </div>

      {/* Sixth Item */}
      <div className="w-full flex items-center p-4">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings size={30} color={`${active === 6 ? "#9F1515" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[16px] font-[400 ${
              active === 6 ? "text-[#9F1515] font-semibold" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default DashboardSidebar;
