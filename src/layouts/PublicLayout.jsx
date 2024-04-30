/** @format */

import React, { useState } from "react";

import { Outlet } from "react-router-dom";
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
