/** @format */

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CardCareerAddress = ({ title, address, isLast }) => {
  return (
    <div className="">
      <div className="w-[76vw]  grid grid-cols-4 py-2 pv:max-md:w-[100%] items-center pv:max-ph:w-[100%] md:max-lg:w-[100%]  ">
        <div className="col-span-1">
          <p className="text-start text-[24px] font-nexa_bold pv:max-md:text-[16px] lg:max-2xl:text-[16px] pv:max-ph:text-[10px] ph:max-md:text-[12px] md:max-lg:text-[14px]">
            {title}
          </p>
        </div>

        <div className="col-span-2 flex items-center justify-center gap-2 ">
          <Icon icon={"mdi:location"} className=""></Icon>
          <p className="text-[20px] font-nexa_bold text-start pv:max-md:text-[16px] lg:max-2xl:text-[16px] pv:max-ph:text-[10px] ph:max-md:text-[12px] md:max-lg:text-[14px]">
            {address}
          </p>
        </div>
        <div className="">
          <button className="col-span-1 bg-[#a2a158] px-6 py-2 rounded-xl text-[20px] font-nexa_bold pv:max-md:text-[16px] lg:max-2xl:text-[16px] pv:max-ph:text-[10px] ph:max-md:text-[12px] md:max-lg:text-[14px]">
            <a className="text-white" href="mailto:info@joyuteacoffee.com">APPLY</a>
          </button>
        </div>
      </div>
      <div
        className={`${isLast === true ? "hidden" : ""} h-[1px] w-full bg-black`}
      ></div>
    </div>
  );
};

export default CardCareerAddress;
