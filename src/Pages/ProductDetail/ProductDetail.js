/** @format */

import React from "react";
import imgProduct from "../../assets/ProductDetail/product_1.png";
import { useNavigate, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className="pt-[12vw] grid grid-cols-2 w-[76vw] pv:max-md:w-[90vw] mx-auto pv:max-md:grid-cols-1 pv:max-md:gap-10 py-5 ">
      <div className="w-[80%] pv:max-md:w-[100%]">
        <div className="text-start">
          <p className="text-[50px] font-nexa_bold text-primary pv:max-md:text-[36px] md:max-xl:text-[30px]">
            {data.title}
          </p>
        </div>
        <div className="  h-[1px] bg-black"></div>
        <div className="text-start">
          <p className="text-[#9c9b55] font-nexa_bold text-[40px] pv:max-md:text-[30px] md:max-xl:text-[30px]">
            Description
          </p>
        </div>
        <div className="">
          <p className="text-[30px] font-nexa_light text-start pv:max-md:text-[24px] md:max-xl:text-[24px]">
            {data.description}
          </p>
        </div>
      </div>
      <div className="h-[800px]  rounded-2xl flex justify-center pv:max-md:h-[400px] md:max-xl:h-[600px]">
        <img
          className="h-full object-cover rounded-[260px] w-[520px] pv:max-md:w-[100%] pv:max-md:rounded-full"
          src={data.img}
        ></img>
      </div>
    </div>
  );
};

export default ProductDetail;
