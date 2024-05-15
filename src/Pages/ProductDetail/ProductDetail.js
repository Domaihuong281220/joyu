/** @format */

import React from "react";
import imgProduct from "../../assets/ProductDetail/product_1.png";
const ProductDetail = () => {
  return (
    <div className="pt-[160px] grid grid-cols-2 w-[76vw] pv:max-md:w-[90vw] mx-auto pv:max-md:grid-cols-1 pv:max-md:gap-10 py-5 ">
      <div className="w-[80%] pv:max-md:w-[100%]">
        <div className="text-start">
          <p className="text-[50px] font-nexa_bold text-primary pv:max-md:text-[36px] md:max-xl:text-[30px]">
            Matcha Joyu
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
            Mix of our premium matcha from Japan and sweet house milk creates
            our signature blended matcha frappe paired with a caramel brûlée
            cup.
          </p>
        </div>
      </div>
      <div className="h-[800px]  rounded-2xl flex justify-center pv:max-md:h-[400px] md:max-xl:h-[600px]">
        <img
          className="h-full rounded-[260px] w-[520px] pv:max-md:w-[100%] pv:max-md:rounded-full"
          src={imgProduct}
        ></img>
      </div>
    </div>
  );
};

export default ProductDetail;
