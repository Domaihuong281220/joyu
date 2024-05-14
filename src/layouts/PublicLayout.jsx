/** @format */

import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
function PublicLayout() {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <Outlet />
      {/* <BackToTopButton /> */}
      {/* <Footer /> */}
    </>
  );
}

export default PublicLayout;
