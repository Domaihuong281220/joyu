/** @format */

import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
const CardLocation = ({
  title,
  address,
  phone,
  delivery,
  pickup,
  available,
}) => {
  
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-[1vw] w-full locationcard">
      <div className="flex items-start gap-4 w-full">
        <div className="flex flex-col gap-2">
          <p className=" text-start uppercase font-nexa_bold text-[1.2vw]">
            {title}
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Icon
                className="w-[1.2vw] h-[1.2vw]"
                icon={"mdi:location"}
              ></Icon>
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
              available === true ? "bg-primary w-[8vw]" : "bg-white w-fit"
            } rounded-lg py-[0.5vw] border-[0.1vw] border-gray-300 flex justify-center`}
            onClick={
              available
                ? () => {
                    window.location.assign(pickup);
                  }
                : () => {
                    navigate("/location");
                  }
            }
          >
            <p
              className={` font-nexa_bold text-[1vw] ${
                available
                  ? "text-white "
                  : "text-black w-fit px-[0.5vw] text-center "
              }   `}
            >
              {available ? "PICK UP" : "COMING SOON"}
            </p>
          </button>
          {available ? (
            <button
              className={` bg-black rounded-lg w-[8vw] py-[0.5vw] border-[0.1vw] border-gray-300 flex justify-center`}
              onClick={() => {
                window.location.assign(delivery);
              }}
            >
              <p className="text-white font-nexa_bold text-[1vw] ">DELIVERY</p>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="">
        <div className="py-4">
          <p className="text-[1.2vw] font-nexa_bold text-start">WORKING HOUR</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">MONDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">TUESDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">WESNESDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">THURDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">FRIDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">SATURDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
        <div className="grid grid-cols-2 gap-[10vw] w-[70%]">
          <p className="text-[1.2vw] font-nexa_bold text-start">SUNDAY</p>
          <p className="text-[1.2vw] font-nexa text-start">10AM - 9PM</p>
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
