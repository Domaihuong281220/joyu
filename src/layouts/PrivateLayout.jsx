/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarAd } from "../components";

function PrivateLayout() {
  return (
    <>
      {/* <HeaderAd /> */}
      <div className=" grid grid-cols-5 h-full bg-gray-100 ">
        <div className="col-span-1 h-full">
          <SidebarAd />
        </div>

        <div className="col-span-4 h-full mt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PrivateLayout;
