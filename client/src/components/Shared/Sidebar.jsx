import React from "react";
import Logo from "../../assets/Logo.png";
import { GoCalendar } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[14%] h-full p-4 text-custom-gray">
      <NavLink to={""}>
        <h1 className="flex flex-col text-center h-80">
          <img
            className="w-14 self-center mb-2"
            src={Logo}
            alt="Harmony logo"
          />
          <span className="text-lg font-bold">Harmony Reservations</span>
        </h1>
      </NavLink>
      <div className="flex-col flex items-center">
        <ul className="flex flex-col items-center gap-6 font-medium text-[#6b706b] uppercase h-96">
          <li>
            <NavLink to={"/lodge"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"hotels"}>Hotels</NavLink>
          </li>
          <li>
            <NavLink to={"rooms"}>Rooms</NavLink>
          </li>
          <li>
            <NavLink to={"services"}>Room services</NavLink>
          </li>
          <button className="px-3 py-2 rounded-md bg-gray-500 hover:bg-gray-600 duration-200 uppercase text-white font-Inter w-48 flex items-center gap-3">
            <GoCalendar />
            <NavLink to={"rooms"}>Book Online</NavLink>
          </button>
        </ul>
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
          }}
          className=" text-xl font-medium border border-gray-400 w-48 py-2 mt-28 hover:text-white hover:bg-gray-500 duration-200 hover:border-none rounded-md"
        >
          <NavLink
            className={"flex justify-center items-center gap-2"}
            to={"/"}
          >
            <FiLogOut /> Logout
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
