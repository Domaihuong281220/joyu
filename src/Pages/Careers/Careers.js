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
      <div className="py-10">
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
    </div>
  );
};

export default Careers;
