/** @format */

import React, { useState, useEffect } from "react";
import { eventProductData } from "../../models/mockdata";
import { CardNewsProduct } from "../../components";
import axios from "axios";

const Event = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    handlegetNews();
  }, []);

  const handlegetNews = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/news`
      );
      // const reversedData = [...response.data.data].reverse(); // Copy and reverse the array
      setNewsData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" w-[76%] mx-auto pv:max-md:w-[85%] md:max-lg:w-[90%] ">
      <div className="pt-[12vw]  pv:max-md:pt-[40vw] flex ">
        <p className="font-nexa_bold text-[50px] pv:max-ph:text-[7vw]  text-primary">
          EVENTS
        </p>
      </div>
      <div className="h-[1px] w-full bg-black my-10 pv:max-md:mt-2 pv:max-md:mb-0 "></div>

      <div className=" md:h-[1000px] pv:max-md:mt-[-2.5rem] md:overflow-y-scroll  ">
        {newsData.map((item, index) => {
          if (newsData && index < newsData.length - 1) {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  imgTitle={item.titlepic}
                  imgDetail={item.detailpic}
                  shortdescription={item.shortdescription}
                  longdescription={item.longdescription}
                  code={item._id}
                />
                <div className="h-[1px] hidden pv:max-md:block w-full bg-black pv:max-md:mt-[-2vw] pv:max-md:mb-[-8vw] "></div>
              </>
            );
          } else {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  imgTitle={item.titlepic}
                  imgDetail={item.detailpic}
                  shortdescription={item.shortdescription}
                  longdescription={item.longdescription}
                  code={item._id}
                />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Event;
