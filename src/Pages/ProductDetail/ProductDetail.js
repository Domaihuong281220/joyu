import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  let product = location.state.product; // More concise nullish coalescing operator

  // console.log("Product name:", product.description);  // Use optional chaining to avoid errors
  const descriptionsplit = product.description.split("<br>")
  console.log(descriptionsplit);
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="pt-[12vw] pv:max-md:pt-[40vw] grid grid-cols-2 pv:max-md:grid-cols-1 w-[76vw] pv:max-md:w-[92vw] mx-auto pv:max-md:gap-10 py-5 ">

      <div className="w-[80%] pv:max-md:w-[100%] pv:max-md:pb-[7vw]">
        <div className="text-start pv:max-md:text-center">
          <p className="text-[50px] font-nexa_bold text-primary pv:max-md:text-black pv:max-md:font-nexa pv:max-md:font-black pv:max-md:uppercase pv:max-md:text-[8vw] md:max-xl:text-[30px]">
            {product.name}
          </p>
        </div>
        <div className="w-full h-fit flex justify-center items-center">
          <div className="h-[0.3vw] w-[88vw] hidden pv:max-md:block bg-gray-900 mb-[6vw]"></div>
        </div>

        <div className="h-[112vw] hidden rounded-2xl pv:max-md:flex justify-center mb-[5vw]">
          <img
            className="h-full object-cover rounded-[260px] w-[520px] pv:max-md:w-[80%] pv:max-md:rounded-full"
            src={`${process.env.REACT_APP_SERVER_URL}/${product.image}`}
            alt={product.name}
          />
        </div>
        <div className="h-[1px] bg-black pv:max-md:hidden"></div>
        <div className="text-start pv:max-md:text-center ">
          <p className="text-[#9c9b55] font-nexa_bold text-[40px] py-[1vw] pv:max-md:text-[6vw] md:max-xl:text-[30px]">
            Description
          </p>
        </div>
        <div className="">
          {descriptionsplit.map((descriptionrow,index) => 
          <p key={index} className="text-[30px] font-nexa_light pv:max-md:font-nexa text-start pv:max-md:text-center pv:max-md:text-[5vw] md:max-xl:text-[24px] pb-[2vw]">
          {descriptionrow}
          </p>
        )}
        </div>
      </div>
      <div className="h-[800px] pv:max-md:hidden rounded-2xl flex justify-center pv:max-md:h-[300px] md:max-xl:h-[600px]">
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