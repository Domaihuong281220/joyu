/** @format */

import React from "react";

import axios from "axios";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
// import { eventProductDataDetail } from "../../models/mockdata";
import { useState } from "react";
import { useEffect } from "react";
const EventDetail = () => {
  let { code } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    handlegetNew();
  }, []);

  const handlegetNew = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/news/${code}`
      );
      // console.log(response);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="pt-[12vw] pv:max-md:pt-[40vw] pb-[3vw]">
      <div className="hidden pv:max-md:block w-[76%] mx-auto pv:max-ph:w-[90%] md:max-lg:w-[90%]">
        <p className="font-nexa_bold text-[50px] text-start pv:max-ph:text-[7vw]  text-primary">
          EVENTS
        </p>
        <div className="h-[1px] w-full bg-black my-10 pv:max-md:mt-2 pv:max-md:mb-4 "></div>
      </div>
      <div className="w-full h-full pt-[15px]">
        <img
          className="object-cover w-full pv:max-md:w-[90%] mx-auto rounded-lg h-[30vw]"
          src={`${process.env.REACT_APP_SERVER_URL}/${data.detailpic}`}
        ></img>
      </div>
      <div className="pt-[108px] pb-[10px]  mx-auto w-[76%] pv:max-ph:w-[90%] md:max-lg:w-[90%] pv:max-ph:pt-10">
        <p className="font-nexa_bold text-start text-[40px] pv:max-md:text-[8vw]">
          {data.title}
        </p>

        {/* <div className="w-full h-[1px] bg-black "></div> */}
        <div className="pt-[80px] pv:max-md:pt-4 ">
          <p className="font-nexa_light text-[30px] text-left pv:max-md:text-[4.5vw] ">
            {`${data.longdescription}`}
            {/* {data.longdescription} */}
          </p>
        </div>
        {/* <div className="flex justify-start pt-[172px] pv:max-md:pt-[16px] ">
          <button className="bg-[#cb1313] px-4 py-2">
            <p className="text-white font-shopee_bold text-[20px] pv:max-ph:text-[16px]  ">
              ORDER NOW
            </p>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default EventDetail;
