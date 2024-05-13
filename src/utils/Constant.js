/** @format */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const path = {
  HOME: "/",
  CATERING: "/catering",
  EVENT: "/event",
  EVENTDATAIL: "/event",
  FRANCHISING: "/franchising",
  LOCATION: "/location",
  OURSTORY: "/ourstory",
  CAREERS: "/careers",
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
