/** @format */

import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const CardLocation = ({ title, address, phone, status }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className=" text-start uppercase font-nexa_bold text-[24px]">
          {title}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Icon className="w-6 h-6" icon={"mdi:location"}></Icon>
            <p className="font-nexa_light text-start">{address}</p>
          </div>
          <div className="flex gap-2">
            <Icon className="w-6 h-6" icon={"ic:baseline-phone"}></Icon>
            <p className="font-nexa_light text-start">{phone}</p>
          </div>
        </div>

        <div className="flex justify-start pt-4">
          <button
            className={` px-4 py-2 ${
              status === "Coming Soon" ? "bg-primary " : "bg-[#cb1313]"
            } rounded-lg`}
          >
            <p className="text-white font-nexa_bold ">{status}</p>
          </button>
        </div>
        <div className="w-full h-[1px] bg-black my-4"></div>
      </div>
    </div>
  );
};

export default CardLocation;
