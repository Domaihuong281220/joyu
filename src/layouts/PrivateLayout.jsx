/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarAd } from "../components";

function PrivateLayout() {
  return (
    <>
      {/* <HeaderAd /> */}
      <div className="flex  min-h-[100vh]">
        <SidebarAd />
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PrivateLayout;
