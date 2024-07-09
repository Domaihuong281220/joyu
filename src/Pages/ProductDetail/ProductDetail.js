import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {replaceNewlinesWithBreaks} from "../../utils/Constant"
const ProductDetail = () => {
  const location = useLocation();
  let product = location.state.product; // More concise nullish coalescing operator
  let categoryID = location.state.categoryID;
  // console.log("Product name:", product.description);  // Use optional chaining to avoid errors
  const descriptionsplit = product.description.split("<br>");
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

        <div
          className={` hidden rounded-2xl pv:max-md:flex justify-center mb-[5vw] ${
            categoryID == "topping" ? "h-fit" : "h-[112vw]"
          }`}
        >
          <img
            className={`h-full object-cover rounded-[260px] w-[520px] pv:max-md:w-[80%] pv:max-md:rounded-full ${
              categoryID == "topping" ? "object-contain" : "object-cover"
            }`}
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
          {descriptionsplit.map((descriptionrow, index) => (
            <div className="w-[95%] mx-auto"><p
            className="text-start pv:max-md:text-[5vw] font-nexa_light"
            dangerouslySetInnerHTML={{
      __html: replaceNewlinesWithBreaks(descriptionrow),
    }}
  ></p></div>
           
          ))}
        </div>
      </div>
      <div
        className={` pv:max-md:hidden rounded-2xl flex justify-center pv:max-md:h-[300px] md:max-xl:h-[600px] ${
          categoryID == "topping" ? "h-fit" : "h-[800px]"
        }`}
      >
        <img
          className={`h-full rounded-[260px] w-[520px] pv:max-md:w-[80%] pv:max-md:rounded-full ${
            categoryID == "topping" ? "object-contain pb-[3vw]" : "object-cover"
          }`}
          src={`${process.env.REACT_APP_SERVER_URL}/${product.image}`}
          alt={product.name}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
