/** @format */

import React from "react";

const CardCareer = ({ title, desc, subdesc, Responsibilities, img }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-20  pv:max-md:hidden ">
        <div className="col-span-2  ">
          <div className="text-start ">
            <p className="font-nexa_bold text-[1.875vw] ">{title}</p>
          </div>
          <div className="w-full h-[1px] bg-black my-4"></div>
          <div className="text-start pb-[2vw]">
            <p className="font-nexa_light text-[1.3vw]">{desc}</p>
          </div>
          <div className="text-start pb-[2vw] ">
            <p className="font-nexa_light text-[1.3vw]">{subdesc}</p>
          </div>
          <div className="text-start pb-[2vw]">
            <p className="font-nexa_bold text-[1.3vw] uppercase ">
              Responsibilities
            </p>
          </div>
          <div className="text-start flex flex-col gap-2">
            {Responsibilities.map((item, index) => {
              return (
                <p className="font-nexa_light text-[1.3vw] pb-[1vw] pv:max-md:text-[18px]">
                  - {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 lg:max-2xl:col-span-1 h-full lg:max-xl:flex lg:max-xl:items-center">
          <img
            className="rounded-[49px] h-full w-[26vw]  object-cover "
            src={img}
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-20  md:hidden ">
        <div className="col-span-1  ">
          <div className="text-start">
            <p className="font-nexa_bold text-[36px] pv:max-ph:text-[28px]">
              {title}
            </p>
          </div>
          <div className="w-full h-[1px] bg-black my-4"></div>
          <div className="text-start py-2">
            <p className="font-nexa_light text-[25px] pv:max-ph:text-[20px]">
              {desc}
            </p>
          </div>
          <div className="text-start py-2 ">
            <p className="font-nexa_light text-[25px] pv:max-ph:text-[20px] ">
              {subdesc}
            </p>
          </div>
          <div className="text-start py-2">
            <p className="font-nexa_bold text-[25px] pv:max-ph:text-[20px] ">
              Responsibilities
            </p>
          </div>
          <div className="text-start flex flex-col gap-2">
            {Responsibilities.map((item, index) => {
              return (
                <p className="font-nexa_light text-[25px] pv:max-ph:text-[20px]">
                  {" "}
                  - {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="col-span-1  h-full">
          <img
            className="rounded-[20px] pv:max-md:h-[300px] h-full w-[100%] mx-auto object-cover pv:max-ph:object-fill  md:max-lg:w-[90%]"
            src={img}
          ></img>
        </div>
        {/* <div className="w-full h-[1px] bg-black"></div> */}
      </div>
    </div>
  );
};

export default CardCareer;
