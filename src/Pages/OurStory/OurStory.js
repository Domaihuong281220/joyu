/** @format */

import React from "react";
import imgBanner from "../../assets/OurStory/banner.png";
import imgstory_1 from "../../assets/OurStory/story_1.png";
import imgstory_2 from "../../assets/OurStory/story_2.png";
const OurStory = () => {
  return (
    <div className="">
      <img
        className="object-fill h-[100vh] w-full pv:max-lg:h-[50vh]"
        src={imgBanner}
      ></img>
      <div className="w-[82%] mx-auto grid grid-cols-2 pt-[110px] gap-[160px] pv:max-lg:grid-cols-1">
        <div className="text-start">
          <p className="font-nexa_light text-[30px] pv:max-lg:text-[20px] lg:max-xl:text-[20px]">
            Here at JOYU, our mission is simple: To create high quality drinks
            without compromising quality. This also applies to our team members!
            We encourage those who are serious about self-development, eager to
            learn, hardworking, and responsible to join our team. If you know
            you have these qualities and want to refine them, you are in the
            right place. <br />
            <br />
            We believe that JOYU is much more than a part time job. We know that
            you will acquire new and useful skills to adapt anywhere in the
            world while refining your current skills and passions in the
            customer service and food industry. <br />
            <br />
            We have created a fun and fast paced environment that is focused on
            teamwork and developing interpersonal skills. We offer a wide range
            of benefits including: higher starting wages, flexible schedules to
            accommodate school and other activities, and opportunities to grow
            within the company. If you’re hardworking, eager to challenge
            yourself, and have a strong growth mindset, come be a part of the
            JOYU family!!
          </p>
        </div>
        <div className="flex flex-col justify-between pv:max-lg:flex-row">
          <img
            className="w-[490px] rounded-[50px] lg:max-xl:w-[400px] pv:max-lg:w-[40%] pv:max-md:rounded-sm"
            src={imgstory_1}
          ></img>
          <img
            className="w-[490px] rounded-[50px] lg:max-xl:w-[400px]  pv:max-lg:w-[40%] pv:max-md:rounded-sm"
            src={imgstory_2}
          ></img>
        </div>
      </div>
      <div className="pt-[105px] w-[80%] mx-auto flex flex-col gap-2">
        <p className="text-start text-[50px] font-nexa_bold text-primary">
          Brewing Happiness
        </p>
        <div className="w-full  h-[1px] bg-black  mb-10"></div>
        <p className="text-[30px] font-nexa_light text-start  pv:max-lg:text-[20px] lg:max-xl:text-[20px] ">
          JOYU Is A Viet Nam Term For The Act Of Offering The Best Tea To The
          Emperor. It Represents Teas And Beverages Of The Highest And Finest
          Quality, Fit For Royalty. Today, Gong Cha Is Dedicated To The Same
          Principal Of Providing Premium Products To Its Customers Around The
          Globe. Gong Cha Promises To Inspire The Human Spirit And Create
          Happiness With A Perfect Cup Of Tea.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
