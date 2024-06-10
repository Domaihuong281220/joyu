import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  let product = location.state.product; // More concise nullish coalescing operator

  console.log("Product name:", product);  // Use optional chaining to avoid errors
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="pt-[12vw] grid grid-cols-2 w-[76vw] pv:max-md:w-[90vw] mx-auto pv:max-md:gap-10 py-5 ">
      <div className="w-[80%] pv:max-md:w-[100%]">
        <div className="text-start">
          <p className="text-[50px] font-nexa_bold text-primary pv:max-md:text-[20px] md:max-xl:text-[30px]">
            {product.name}
          </p>
        </div>
        <div className="h-[1px] bg-black"></div>
        <div className="text-start">
          <p className="text-[#9c9b55] font-nexa_bold text-[40px] py-[1vw] pv:max-md:text-[20px] md:max-xl:text-[30px]">
            Description
          </p>
        </div>
        <div className="">
          <p className="text-[30px] font-nexa_light text-start pv:max-md:text-[16px] md:max-xl:text-[24px]">
            {product.description}
          </p>
        </div>
      </div>
      <div className="h-[800px] rounded-2xl flex justify-center pv:max-md:h-[300px] md:max-xl:h-[600px]">
        <img
          className="h-full object-cover rounded-[260px] w-[520px] pv:max-md:w-[80%] pv:max-md:rounded-full"
          src={`${process.env.REACT_APP_SERVER_URL}/${product.image}`}
          alt={product.name}
        />
      </div>
    </div>
  );
};

export default ProductDetail;