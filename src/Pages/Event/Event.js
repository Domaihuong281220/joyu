/** @format */

import React, { useState, useEffect } from "react";
import { eventProductData } from "../../models/mockdata";
import { CardNewsProduct } from "../../components";

const Event = () => {
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   handlegetNews();
  // }, []);

  // const handlegetNews = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_SERVER_URL}/news`
  //     );
  //     const reversedData = [...response.data.data].reverse(); // Copy and reverse the array
  //     setNewsData(reversedData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className=" w-[76%] mx-auto pv:max-ph:w-[90%] md:max-lg:w-[90%] ">
      <div className="pt-[12vw] flex ">
        <p className="font-nexa_bold text-[50px] pv:max-ph:text-[24px]  text-primary">
          EVENTS
        </p>
      </div>
      <div className=" h-[1000px] overflow-y-scroll ">
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
        })}
      </div>
    </div>
  );
};

export default Event;
