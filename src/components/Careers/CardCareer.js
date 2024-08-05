/** @format */

import React from "react";
import { replaceNewlinesWithBreaks } from "../../utils/Constant";
const CardCareer = ({ position, description, Responsibilities, img }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 md:md:max-xl:grid-cols-2 gap-20 pv:max-md:gap-8  pv:max-md:hidden ">
        <div className="col-span-2 md:md:max-xl:col-span-1 ">
          <div className="text-start ">
            <p className="font-nexa_bold text-[1.875vw] ">{position}</p>
          </div>
          <div className="w-full h-[1px] bg-black my-4"></div>
          <div className="text-start pb-[2vw]">
            <p
              className="font-nexa_light text-[1.3vw] "
              dangerouslySetInnerHTML={{
                __html: replaceNewlinesWithBreaks(description),
              }}
            ></p>
          </div>

          <div className="text-start pb-[2vw]">
            <p className="font-nexa_bold text-[1.3vw] uppercase ">
              Responsibilities
            </p>
          </div>
          <div className="text-start flex flex-col gap-2">
            <p
              className="font-nexa_light text-[1.3vw] pv:max-md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: Responsibilities }}
            ></p>
          </div>
        </div>
        <div className="col-span-1 lg:max-2xl:col-span-1 h-full lg:max-xl:flex lg:max-xl:items-center flex justify-center items-center ">
          <img
            className="rounded-[49px] w-[26vw]  object-cover h-[600px] md:max-xl:w-[300px] "
            src={`${process.env.REACT_APP_SERVER_URL}/${img}`}
            alt="Responsibilities"
          ></img>
        </div>
        <div className="h-[1px] hidden pv:max-md:block w-full bg-black my-10 pv:max-md:mt-2 pv:max-md:mb-4 "></div>
      </div>
      <div className="grid grid-cols-1 gap-20  pv:max-md:gap-8 md:hidden ">
        <div className="col-span-1  ">
          <div className="text-start">
            <p className="font-nexa_bold text-[36px] pv:max-md:pb-4 pv:max-ph:text-[28px]">
              {position}
            </p>
          </div>
          <div className="w-full h-[1px] bg-black my-4 pv:max-md:hidden"></div>
          <div className="text-start py-2">
            <p
              className="font-nexa_light text-[25px] pv:max-ph:text-[20px]"
              dangerouslySetInnerHTML={{
                __html: replaceNewlinesWithBreaks(description),
              }}
            ></p>
          </div>

          <div className="text-start py-1">
            <p className="font-nexa_bold text-[25px] pv:max-ph:text-[20px] ">
              Responsibilities
            </p>
          </div>
          <div className="text-start flex flex-col gap-2"></div>
        </div>
        <div className="col-span-1  h-full">
          <img
            className="rounded-[20px] pv:max-md:h-[300px] h-full w-[100%] mx-auto object-cover pv:max-ph:object-cover  md:max-lg:w-[90%]"
            src={`${process.env.REACT_APP_SERVER_URL}/${img}`}
            alt="Responsibilities"
          ></img>
        </div>
        <div className="w-full hidden pv:max-md:block h-[1px]  bg-black"></div>
      </div>
    </div>
  );
};

export default CardCareer;
