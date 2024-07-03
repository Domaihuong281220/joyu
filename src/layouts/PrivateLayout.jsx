/** @format */

import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SidebarAd } from "../components";
import { useNavigate } from "react-router-dom";
import { path } from "../utils/Constant";

function PrivateLayout() {
  const user = JSON.parse(sessionStorage.getItem("UserInformation"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate(path.LOGIN);
    }
  }, []);

  return (
    <>
      {user ? (
        <div className="flex  min-h-[100vh]">
          <SidebarAd />
          <div className=" w-full">
            <Outlet />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PrivateLayout;
