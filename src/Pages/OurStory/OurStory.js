/** @format */

import React from "react";
import imgBanner from "../../assets/OurStory/banner.webp";
import imgstory_1 from "../../assets/OurStory/story_1.png";
import imgstory_2 from "../../assets/OurStory/story_2.png";
const OurStory = () => {
  return (
    <div className="pb-10 pv:max-md:pt-[38vw] pv:max-md:flex flex-col items-center">
      <img
        className="object-cover h-[65vw] pv:max-md:h-fit w-full pv:max-md:w-[90%] pv:max-md:rounded-[10vw]"
        src={imgBanner}
      ></img>
      <div className="w-[82%] pv:max-md:w-[85vw] mx-auto  pt-[110px] pv:max-md:pt-[8vw] flex">
        <div className="text-start w-[53vw] pr-[3vw] pv:max-md:pr-0 pv:max-md:w-full">
          <p className="font-nexa_light pv:max-md:font-nexa_bold pv:max-md:font-normal text-[1.8vw] pv:max-md:text-[4.5vw] pb-[2vw] pv:max-md:pb-[7vw] font-black">
            JOYU TEA & COFFEE: A FUSION OF TRADITION, INNOVATION, AND CULINARY
            EXCELLENCE
          </p>
          <p className="font-nexa_light text-[1.7vw] pv:max-md:font-black pv:max-md:text-[5vw]">
            In the bustling metropolis of a modern city, Joyu Tea & Coffee
            stands as a testament to the harmonious fusion of tradition,
            innovation, and culinary excellence. From its inception, Joyu has
            been driven by a singular vision: to introduce the rich tapestry of
            popular Asian beverages to a global audience, infusing each cup with
            a touch of creativity and authenticity. Nestled within its welcoming
            walls, patrons are not merely customers but participants in a
            symphony of flavors, textures, and experiences carefully
            orchestrated to evoke joy and delight.
            <br /> <br />
            At the heart of Joyu's ethos lies a deep-rooted commitment to
            quality, evident in every sip of the robust Robusta coffee sourced
            from the verdant hills of Vietnam. As the world's second-largest
            coffee exporter, Vietnam's beans bring a bold and invigorating
            character to Joyu's brews, crafted using traditional methods that
            honor the heritage of coffee craftsmanship. This dedication to
            excellence extends to the realm of tea, where ancient blends are
            reimagined with a modern twist, creating a sensory journey that
            transcends borders and cultures.
            <br />
            <br />
          </p>
        </div>
        <div className="flex flex-col justify-evenly pv:max-md:hidden ">
          <img className="w-[40vw] rounded-[2vw]" src={imgstory_1}></img>
          <img className="w-[40vw] rounded-[2vw]" src={imgstory_2}></img>
        </div>
      </div>
      <div className=" w-[82%] pv:max-md:w-[85vw] mx-auto flex flex-col gap-2  pv:max-lg:pt-0 ">
        <p className=" font-nexa_light text-start   text-[1.7vw] pv:max-md:font-black pv:max-md:text-[5vw]">
          Through a seamless integration of tradition, innovation, and
          unwavering dedication to customer satisfaction, Joyu Tea & Coffee has
          carved a niche for itself as a beacon of culinary excellence in the
          competitive landscape of beverage hospitality. With a commitment to
          continuous improvement and a relentless pursuit of perfection, Joyu
          invites patrons to not merely partake in a beverage but to embark on a
          sensory journey that transcends boundaries and resonates with the
          universal anguage of joy. In every cup and on every plate, Joyu weaves
          a narrative of tradition, innovation, and culinary mastery, inviting
          customers to savor the flavors of a world united by the simple
          pleasures of a well-crafted brew and a delectable pastry.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
