/** @format */

import React from "react";
import { carrerData, careerAddressData } from "../../models/mockdata";
import { CardCareer, CardCareerAddress } from "../../components";
const Careers = () => {
  return (
    <div className=" w-[76%] mx-auto   pv:max-lg:w-[90%] ">
      <div className="pt-[10vw] flex ">
        <p className="font-nexa_bold text-[50px] pv:max-ph:text-[24px] text-primary">
          CAREER
        </p>
      </div>
      <div className="flex flex-col gap-20">
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
