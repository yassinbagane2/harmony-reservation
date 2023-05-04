import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen float-right w-[86%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
