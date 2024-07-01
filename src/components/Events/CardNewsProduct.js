/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
const CardNewsProduct = ({
  title,
  shortdescription,
  longdescription,
  imgTitle,
  imgDetail,
  code,
}) => {
  const navigate = useNavigate();
  const handleClick = (newID) => {
    navigate("../" + path.EVENTDATAIL + `/${newID}`);
  };

  // const handleClick = (code) => {
  //   navigate("../" + path.NEWS_DETAIL + `/${code}`, {
  //     state: {
  //       title: title,
  //       shortdescription: shortdescription,
  //       longdescription: longdescription,
  //       imgTitle: imgTitle,
  //       imgDetail: imgDetail,
  //       code: code,
  //     },
  //   });
  // };

  return (
    <div className="py-10">
      {/* <div className="w-[98%] h-[1px] hidden pv:max-md:block bg-black pv:max-md:hidden"></div> */}

      {/* desktop  */}
      <div className="pv:max-md:hidden pt-[72px] grid grid-cols-2 gap-[15vw]  pv:max-md:grid-cols-1  pv:max-md:pt-10 pv:max-md:gap-0 md:max-xl:grid-cols-2 md:max-xl:grid">
        <div className="flex flex-col gap-[30px] pv:max-ph:gap-4 md:max-xl:gap-4 ph:max-md:gap-2">
          <div className="flex  flex-col  gap-[20px]  pv:max-md:gap-4 ">
            <p className="  font-nexa_bold text-[36px] text-start pv:max-md:text-[5vw] lg:max-xl:text-[24px] ph:max-md:text-[24px] ">
              {title}
            </p>
          </div>
          <div className="flex justify-start">
            <button
              className="text-start text-[#a2a158] font-nexa_bold text-[40px] pv:max-md:text-[16px] lg:max-xl:text-[20px] ph:max-md:text-[20px] underline hover:underline cursor-pointer "
              onClick={() => {
                handleClick(code);
              }}
            >
              <p className="pv:max-md:text-[25px] ">Detail</p>
            </button>
          </div>

          <div className="pv:max-md:pb-5">
            <p className=" md:line-clamp-4 text-start font-nexa_light text-[30px] pv:max-md:text-[16px] md:max-xl:text-[20px] ">
              {shortdescription}
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="object-cover xl:object-fill w-[90%] mx-auto rounded-[30px] 2xl:h-[700px] "
            src={`${process.env.REACT_APP_SERVER_URL}/${imgTitle}`}
          ></img>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-[30px] pv:max-ph:gap-4 md:max-xl:gap-4 ph:max-md:gap-2 md:hidden">
        <div className="w-full">
          <img
            className="object-fill  pv:max-ph:w-[100%] ph:max-md:w-[60%] pv:max-md:mx-auto pv:max-md:h-[300px] pv:max-md:my-[8vw] rounded-[30px]"
            src={`${process.env.REACT_APP_SERVER_URL}/${imgTitle}`}
          ></img>
        </div>
        <div className="flex  flex-col  gap-[20px]  pv:max-md:gap-4 ">
          <p className="  font-nexa_bold text-[36px] text-start pv:max-md:text-[7vw] md:max-xl:text-[24px] ph:max-md:text-[24px] ">
            {title}
          </p>
        </div>
        <div className="flex justify-start">
          <button
            className="text-start text-[#a2a158] font-nexa_bold text-[40px] pv:max-md:text-[16px] md:max-xl:text-[20px] ph:max-md:text-[20px] underline hover:underline cursor-pointer "
            onClick={() => {
              handleClick(code);
            }}
          >
            <p className="pv:max-md:text-[25px] ">Detail</p>
          </button>
        </div>

        <div className="pv:max-md:pb-5">
          <p className=" md:line-clamp-4 text-start font-nexa_light text-[30px] pv:max-md:text-[4.5vw] md:max-xl:text-[20px] ">
            {shortdescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNewsProduct;
