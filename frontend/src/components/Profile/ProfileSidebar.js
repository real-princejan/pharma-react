import React from "react";

import { AiOutlineMessage } from "react-icons/ai";
import {
  HiLogout,
  HiOutlineReceiptRefund,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { TbAddressBook } from "react-icons/tb";

import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8  font-[500]">
      {/* Profile */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins "
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[#9F1515]" : " "
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>

      {/* Orders */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[#9F1515]" : " "
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>

      {/* Refunds */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund
          size={20}
          color={active === 3 ? "#9F1515" : " "}
        />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[#9F1515]" : " "
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      {/* Inbox */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[#9F1515]" : " "
          }800px:block hidden`}
        >
          Inbox
        </span>
      </div>

      {/* Track Order */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[#9F1515]" : " "
          } 800px:block hidden`}
        >
          Track Order
        </span>
      </div>

      {/* Change Password */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[#9F1515]" : " "
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      {/* Address */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[#9F1515]" : " "
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      {/* Admin Access */}
      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 8 ? "#9F1515" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[#9F1515]" : ""
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}

      {/* Logout */}
      <div
        className="flex items-center cursor-pointer w-full mb-8 font-Poppins"
        onClick={() => setActive(9) || logoutHandler()}
      >
        <HiLogout size={20} color={active === 9 ? "#9F1515" : " "} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[#9F1515]" : " "
          }800px:block hidden`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
