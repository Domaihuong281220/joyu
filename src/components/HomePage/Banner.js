import React, { useEffect, useState } from 'react';

import BannerBG from "../../assets/HomePage/banner.png"
import axios from 'axios';



function Banner() {
    const [banner, setBanner] = useState();
    useEffect(() => {
        handleGetBanner();
      }, []);
    const handleGetBanner = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/joyu/banner`
          );
          console.log(response.data.data[0].image);
          setBanner(response.data.data[0].image)
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };
    return (
        <div className="relative">
            <img src={`${process.env.REACT_APP_SERVER_URL}/${banner}`} alt='' className='object-cover' />
            <button className='font-nexa_bold text-primary uppercase bg-white absolute z-10 bottom-[5vw] right-[12vw] h-fit rounded-full px-[4vw] py-[1.1vw] text-[1.5vw] '>See more</button>
        </div>
    );
}

export default Banner;