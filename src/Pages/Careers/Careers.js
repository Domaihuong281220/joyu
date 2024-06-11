/** @format */

import React from "react";
import { carrerData, careerAddressData } from "../../models/mockdata";
import { CardCareer, CardCareerAddress } from "../../components";
const Careers = () => {
  return (
    <div className=" w-[76vw] mx-auto   pv:max-lg:w-[90%] ">
      <div className="pt-[12vw] flex pb-[3.6vw]">
        <p className="font-nexa_bold text-[2.6vw]  text-primary">CAREER</p>
      </div>
      <div className="flex flex-col gap-[5vw]">
        {carrerData.map((item, index) => {
          return (
            <>
              <CardCareer
                desc={item.desc}
                subdesc={item.subdesc}
                title={item.title}
                Responsibilities={item.Responsibilities}
                img={item.img}
              ></CardCareer>
            </>
          );
        })}
      </div>
      {/* Desktop */}
      <div className="py-10 pv:max-md:hidden ">
        {careerAddressData.map((item, index) => {
          const isLastItem = index === careerAddressData.length - 1;

          return (
            <>
              <CardCareerAddress
                title={item.title}
                address={item.address}
                isLast={isLastItem}
              ></CardCareerAddress>
            </>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="py-10 md:hidden ">
        <div className="">
          <p className="text-start pv:max-ph:text-[18px] ph:max-md:text-[22px] font-nexa_bold">
            Please submit your remuse <br></br>
            titled with Position-Location
          </p>
        </div>
        {careerAddressData.map((item, index) => {
          return (
            <>
              <div className="flex flex-col  py-4 gap-2">
                <p className="text-start pv:max-ph:text-[20px] ph:max-md:text-[24px] text-primary font-nexa_bold">
                  {item.title}
                </p>
                <p className="text-start pv:max-ph:text-[18px] ph:max-md:text-[22px]">
                  {item.address}
                </p>
                <div className="flex justify-start  ">
                  <button className="bg-[#a2a158] w-[30%] py-2 rounded-lg">
                    <p className="text-white font-nexa_bold">Apply</p>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Careers;
