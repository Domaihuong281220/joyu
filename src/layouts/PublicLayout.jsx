import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

function PublicLayout() {
  const [openSidebar, setOpenSidebar] = useState(sessionStorage.getItem('openSidebar') === 'true');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentSidebarState = sessionStorage.getItem('openSidebar') === 'true';
      if (currentSidebarState !== openSidebar) {
        setOpenSidebar(currentSidebarState);
      }
    }, 1000); // Check every 1000 milliseconds (1 second)

    return () => clearInterval(interval);
  }, [openSidebar]);

  return openSidebar ? (
    <Sidebar />
  ) : (
    <>
      <div id="content-wrapper"><Outlet /></div>
    </>
  );
}

export default PublicLayout;
