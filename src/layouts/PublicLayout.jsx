/** @format */

import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { Sidebar } from "../Component";
function PublicLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <BackToTopButton /> */}
      {/* <Footer /> */}
    </>
  );
}

export default PublicLayout;
