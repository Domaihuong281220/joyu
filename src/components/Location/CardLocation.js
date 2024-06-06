/** @format */

import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const CardLocation = ({ title, address, phone, status, delivery }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-2">
        <p className=" text-start uppercase font-nexa_bold text-[1.2vw]">
          {title}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Icon className="w-[1.2vw] h-[1.2vw]" icon={"mdi:location"}></Icon>
            <p className="font-nexa_light text-start text-[1vw]">{address}</p>
          </div>
          <div className="flex gap-2">
            <Icon
              className="w-[1.2vw] h-[1.2vw]"
              icon={"ic:baseline-phone"}
            ></Icon>
            <p className="font-nexa_light text-start text-[1vw]">{phone}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <button
          className={` ${
            status === "PICK UP" ? "bg-primary " : "bg-white"
          } rounded-lg w-[8vw] py-[0.5vw] border-[0.1vw] border-gray-300`}
        >
          <p
            className={` font-nexa_bold text-[1vw] ${
              status === "PICK UP" ? "text-white " : "text-black"
            }   `}
          >
            {status}
          </p>
        </button>
        {delivery === true ? (
          <button
            className={` bg-black w-[8vw] py-[0.5vw] rounded-lg  border-[0.1vw]`}
          >
            <p className="text-white font-nexa_bold text-[1vw] ">DELIVERY</p>
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CardLocation;
