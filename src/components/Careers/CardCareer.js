/** @format */

import React from "react";

const CardCareer = ({ title, desc, subdesc, Responsibilities, img }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-20 lg:max-2xl:grid-cols-2 pv:max-lg:hidden ">
        <div className="col-span-2 lg:max-2xl:col-span-1 ">
          <div className="text-start ">
            <p className="font-nexa_bold text-[36px]">{title}</p>
          </div>
          <div className="w-full h-[1px] bg-black my-4"></div>
          <div className="text-start py-2">
            <p className="font-nexa_light text-[25px]">{desc}</p>
          </div>
          <div className="text-start py-2 ">
            <p className="font-nexa_light text-[25px]">{subdesc}</p>
          </div>
          <div className="text-start py-2">
            <p className="font-nexa_bold text-[25px] ">Responsibilities</p>
          </div>
          <div className="text-start flex flex-col gap-2">
            {Responsibilities.map((item, index) => {
              return <p className="font-nexa_light text-[25px]"> - {item}</p>;
            })}
          </div>
        </div>
        <div className="col-span-1 lg:max-2xl:col-span-1 h-full lg:max-xl:flex lg:max-xl:items-center">
          <img
            className="rounded-[49px] h-full lg:max-xl:h-[500px] object-cover"
            src={img}
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-20  lg:hidden  ">
        <div className="col-span-1  ">
          <div className="text-start ">
            <p className="font-nexa_bold text-[36px]">{title}</p>
          </div>
          <div className="w-full h-[1px] bg-black my-4"></div>
          <div className="text-start py-2">
            <p className="font-nexa_light text-[25px]">{desc}</p>
          </div>
          <div className="text-start py-2 ">
            <p className="font-nexa_light text-[25px]">{subdesc}</p>
          </div>
          <div className="text-start py-2">
            <p className="font-nexa_bold text-[25px] ">Responsibilities</p>
          </div>
          <div className="text-start flex flex-col gap-2">
            {Responsibilities.map((item, index) => {
              return <p className="font-nexa_light text-[25px]"> - {item}</p>;
            })}
          </div>
        </div>
        <div className="col-span-1  h-full">
          <img
            className="rounded-[20px] h-[400px] w-full object-cover"
            src={img}
          ></img>
        </div>
        {/* <div className="w-full h-[1px] bg-black"></div> */}
      </div>
    </div>
  );
};

export default CardCareer;
