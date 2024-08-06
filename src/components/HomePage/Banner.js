import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";

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

      const desktopBanners = response.data.data.filter(
        (banner) => banner.bannerType === "desktop"
      );
      const mobileBanners = response.data.data.filter(
        (banner) => banner.bannerType === "mobile"
      );

      if (mobileBanners.length > 0) {
        setBannerMobile(mobileBanners[0].image);
      } else {
        console.warn("No mobile banners found.");
      }

      if (desktopBanners.length > 0) {
        setBannerDesktop(desktopBanners[0].image);
      } else {
        console.warn("No desktop banners found.");
      }
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  };

  return (
    <div className="relative">
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/${bannerDesktop}`}
        alt="Banner desktop image"
        width="1200"
        height="600"
        className="object-cover w-full pv:max-md:hidden"
      />

      <img
        src={`${process.env.REACT_APP_SERVER_URL}/${bannerMobile}`}
        alt="Banner mobile image"
        width="600"
        height="420"
        className="h-[70vh] object-cover w-full md:hidden"
      />

      <button
        className="font-nexa_bold text-primary uppercase bg-white absolute z-10 bottom-[5vw] right-[12vw] h-fit rounded-full px-[4vw] py-[1.1vw] text-[1.5vw]  pv:max-md:bg-black pv:max-md:font-nexa pv:max-md:font-black pv:max-md:leading-[4vw] pv:max-md:absolute pv:max-md:left-1/2  pv:max-md:transform pv:max-md:-translate-x-1/2 pvmax-md:h-fit pv:max-md:rounded-full pv:max-md:w-fit pv:max-md:px-[10vw] pv:max-md:pb-[5vw] pv:max-md:pt-[6vw] pv:max-md:bottom-[5vw] pv:max-md:mt-[12vw] pv:max-md:mb-[3vw] pv:max-md:text-white pv:max-md:text-[6.5vw] "
        onClick={() => navigate("../" + path.EVENT)}
      >
        See more
      </button>
    </div>
  );
}

export default Banner;
