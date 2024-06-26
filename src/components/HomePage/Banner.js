import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [bannerDesktop, setBannerDesktop] = useState();
  const [bannerMobile, setBannerMobile] = useState();
  useEffect(() => {
    handleGetBanner();
  }, []);
  const handleGetBanner = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/banner`
      );

      // Filter the banners to find the one with bannerType "desktop"
      const desktopBanners = response.data.data.filter(
        (banner) => banner.bannerType === "desktop"
      );
      // Filter the banners to find the one with bannerType "mobile"
      const mobileBanners = response.data.data.filter(
        (banner) => banner.bannerType === "mobile"
      );
      // If there's at least one mobile banner, set it
      if (mobileBanners.length > 0) {
        // console.log(mobileBanners); // Log filtered banners
        setBannerMobile(mobileBanners[0].image);
      } else {
        console.warn("No mobile banners found.");
      }
      // If there's at least one desktop banner, set it
      if (desktopBanners.length > 0) {
        // console.log(desktopBanners); // Log filtered banners
        setBannerDesktop(desktopBanners[0].image);
      } else {
        console.warn("No desktop banners found.");
      }

      // If there's at least one desktop banner, set it
      if (desktopBanners.length > 0) {
        // console.log(desktopBanners); // Log filtered banners
        setBannerDesktop(desktopBanners[0].image);
      } else {
        console.warn("No desktop banners found.");
      }
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  };
  console.log(`${process.env.REACT_APP_SERVER_URL}/${bannerDesktop}`);

  return (
    <div className="relative">
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/${bannerDesktop}`}
        alt=""
        className="object-cover pv:max-md:hidden"
      />
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/${bannerMobile}`}
        alt=""
        className="object-cover w-full pv:max-md:block hidden"
      />
      <button
        className="font-nexa_bold text-primary uppercase bg-white absolute z-10 bottom-[5vw] right-[12vw] h-fit rounded-full px-[4vw] py-[1.1vw] text-[1.5vw] pv:max-md:hidden "
        onClick={() => navigate("/event")}
      >
        See more
      </button>
      <button
        className="font-nexa font-black leading-[4vw] hidden pv:max-md:block bg-black text-white uppercase absolute z-10 bottom-[5vw] left-1/2 transform -translate-x-1/2 h-fit rounded-full w-fit px-[10vw] pb-[5vw] pt-[6vw] text-[6.5vw] mt-[12vw] mb-[3vw]"
        onClick={() => navigate("/event")}
      >
        See more
      </button>
    </div>
  );
}

export default Banner;
