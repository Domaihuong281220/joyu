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
      const reversedData = [...response.data.data].reverse(); // Copy and reverse the array
      setNewsData(reversedData);
      console.log(reversedData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" w-[76%] mx-auto pv:max-md:w-[90%] md:max-lg:w-[90%] ">
      <div className="pt-[12vw]  pv:max-md:pt-[18vw] flex ">
        <p className="font-nexa_bold text-[50px] pv:max-ph:text-[24px]  text-primary">
          EVENTS
        </p>
      </div>
      <div className=" md:h-[1000px] pv:max-md:mt-[-2.5rem] md:overflow-y-scroll  ">
        {newsData.map((item, index) => {
          if (newsData) {
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
        {/* {eventProductData.map((item, index) => {
          if (eventProductData) {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  imgTitle={item.img}
                  imgDetail={item.img}
                  shortdescription={item.desc}
                  longdescription={item.longdescription}
                  code={item._id}
                />
              </>
            );
          }
        })}
        {eventProductData.map((item, index) => {
          if (eventProductData) {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  imgTitle={item.img}
                  imgDetail={item.img}
                  shortdescription={item.desc}
                  longdescription={item.longdescription}
                  code={item._id}
                />
              </>
            );
          }
        })}
        {eventProductData.map((item, index) => {
          if (eventProductData) {
            return (
              <>
                <CardNewsProduct
                  title={item.title}
                  imgTitle={item.img}
                  imgDetail={item.img}
                  shortdescription={item.desc}
                  longdescription={item.longdescription}
                  code={item._id}
                />
              </>
            );
          }
        })} */}
      </div>
    </div>
  );
};

export default Event;
