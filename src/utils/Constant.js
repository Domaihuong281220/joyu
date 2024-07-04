/** @format */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const path = {
  HOME: "/",
  CATERING: "/catering",
  EVENT: "/events",
  EVENTDATAIL: "/event_detail",
  FRANCHISING: "/franchising",
  LOCATION: "/location",
  OURSTORY: "/ourstory",
  CAREERS: "/careers",
  MENU: "/menu",
  PRODUCTDETAIL: "/product-detail",
  LOGIN: "/login",
  MANAGECATEGORY: "/manage-category",
  UNSUB: "/unsubscribe",

  // user
  USERMANAGE: "/manage-user",
  CREATEUSER: "/create-user",
  EDITUSER: "/eidt-user",
  MANAGECAREER: "/manage-career",

  //JOBS
  JOBMANAGE: "/manage-job",
  CREATEJOB: "/create-job",
  EDITJOB: "/edit-job",

  // EVENTS
  EVENTMANAGE: "/manage-event",
  CREATEVENT: "/create-event",
  EDITEVENT: "/edit-event",

  // Meta tags
  METATAG: "/metatag",

  // Products
  PRODUCTADD: "product-add",
  PRODUCTEDIT: "product-edit",
  PRODUCTMANAGE: "product-manage",
  PRODUCTVIEW: "product-view",
  // Categories
  CATEGORYADD: "category-add",
  CATEGORYEDIT: "category-edit",
  CATEGORYMANAGE: "category-manage",

  HOMEPAGEBANNER: "homepage-banner",
  HOMEPAGEBANNERADD: "homepage-banner-add",
  HOMEPAGEBANNEREDIT: "homepage-banner-edit",

  // Locations

  LOCATIONMANAGE: "/manage-location",
  CREATELOCATION: "/create-location",
  EDITLOCATION: "/edit-location",
  // Location Frame
  LOCATIONFRAME: "/location-frame",
  EDITLOCATIONFRAME: "/edit-location-frame",

  // customer
  CUSTOMERMANAGE: "/manage-customer",
  CREATECUSTOMER: "/create-customer",
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const useOnKeyPress = (callback, targetkey, searchKey) => {
  useEffect(() => {
    if (searchKey !== "") {
      const keyPressHandler = (event) => {
        if (event.key === targetkey) {
          callback();
        }
      };
      window.addEventListener("keydown", keyPressHandler);
      return () => {
        window.removeEventListener("keydown", keyPressHandler);
      };
    }
  }, [callback, targetkey]);
};

export const replaceNewlinesWithBreaks = (input) => {
  if (!input) return "";
  return input.replace(/(\r\n|\n|\r)/g, "<br></br>");
};
