import React from "react";

import coldbrew from "../../assets/HomePage/coldbrew.png";
import fruitjuice from "../../assets/HomePage/fruitjuice.png";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";

function Signature() {
  const navigate = useNavigate();
  return (
    <div className=" h-[69.5vw] pv:max-md:h-[360vw] flex flex-col space-y-[4.5vw] justify-center items-center px-[9%] pv:max-md:px-[5%]">
      {/* desktop */}
      <div className="pv:max-md:hidden flex w-full h-[27vw] space-x-6">
        <div className="bg-[#F0F0F0] rounded-bl-[5vw] w-[59.1%] flex flex-col justify-center px-[4.5vw]">
          <p className="uppercase text-start font-nexa_light font-black text-[2.8vw]">
            Dreamy new cold brew
          </p>
          <div className="h-[0.1vw] w-[39vw] pr-[1vw] bg-black"></div>
          <p className="uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]">
            Introducing our super-smooth <br></br>Chocolate Cream Cold Brew
            topped <br></br>with a cloud of silky, chocolaty cold foam.
          </p>
          <button
            className="font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]"
            onClick={() => navigate("../" + path.LOCATION)}
          >
            Order now
          </button>
        </div>
        {/* <img src={coldbrew} alt="" className="w-[37%] rounded-se-[120px]" /> */}
        <img
          src={coldbrew}
          alt="Description of the image" // Always provide a descriptive alt text
          width="600" // Set the width
          height="400" // Set the height
          className="w-[37%]  rounded-se-[125px]"
        />
      </div>
      <div className="pv:max-md:hidden flex w-full h-[27vw] space-x-6">
        {/* <img src={fruitjuice} alt="" className="w-[37%] rounded-ss-[120px]" /> */}
        <img
          src={fruitjuice}
          alt="Description of the image" // Always provide a descriptive alt text
          width="600" // Set the width
          height="400" // Set the height
          className="w-[37%] rounded-ss-[125px] "
        />
        <div className="bg-[#FCD990] rounded-br-[5vw] w-[59.1%] flex flex-col justify-center px-[4.5vw]">
          <p className="uppercase text-start font-shopee_regular text-[2.8vw]">
            Make a splash
          </p>
          <div className="h-[0.1vw] w-[39vw] pr-[1vw] bg-black"></div>
          <p className="uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]">
            Dive into the vibrant flavors of the <br></br>Mango Dragonfruit and
            Strawberry <br></br>JOYU Refreshers beverages, both with <br></br>
            bright lemonade.
          </p>
          <button
            className="font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]"
            onClick={() => navigate("../" + path.LOCATION)}
          >
            Order now
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden pv:max-md:flex flex-col w-full h-[190vw] space-y-6">
        {/* <img src={coldbrew} alt="" className="w-full rounded-se-[125px]" /> */}
        <img
          src={coldbrew}
          alt="A refreshing fruit juice" // Always provide a descriptive alt text
          width="800" // Set the width in pixels
          height="600" // Set the height in pixels
          className="w-full rounded-se-[125px]"
        />
        <div className="bg-[#F0F0F0] w-full flex flex-col justify-center items-center h-fit p-[4vw]">
          <p className="uppercase  font-nexa font-black text-[5vw] mt-[8vw]">
            Dreamy new cold brew
          </p>
          <div className="h-[0.3vw] w-full pr-[1vw] mb-[5vw] mt-[2vw] bg-gray-600"></div>
          <p className=" text-center font-nexa font-black text-[4.2vw] leading-[6vw]">
            Introducing our super-smooth <br></br>Vietnamese Phin Coffee for a
            sweet <br></br>and energetic day.
          </p>
          <button
            className="font-nexa font-black leading-[4vw] bg-[#1E1B1A] text-white uppercase rounded-full w-fit px-[10vw] pt-[6vw] pb-[5vw] text-[5.5vw] mt-[18vw] mb-[5vw]"
            onClick={() => navigate("/location")}
          >
            Order now
          </button>
        </div>
      </div>
      <div className="hidden pv:max-md:flex flex-col w-full h-[180vw] space-y-6">
        {/* <img src={fruitjuice} alt="" className="w-full rounded-ss-[125px]" /> */}
        <img
          src={fruitjuice}
          alt="A refreshing fruit juice" // Always provide a descriptive alt text
          width="800" // Set the width in pixels
          height="600" // Set the height in pixels
          className="w-full rounded-ss-[125px] "
        />
        <div className="bg-[#FCD990] w-full flex flex-col justify-center items-center h-fit p-[4.5vw]">
          <p className="uppercase  font-nexa font-black text-[5vw] mt-[8vw]">
            Make a splash
          </p>
          <div className="h-[0.3vw] w-full pr-[1vw] mb-[5vw] mt-[2vw] bg-gray-600"></div>
          <p className="text-center font-nexa font-black text-[4vw] leading-[6vw]">
            Let try out our Sunset matcha made <br></br>from sweetened premium
            matcha <br></br>layered with any choice of milk and <br></br>
            bottomed with honey mandarin.
          </p>
          <button
            className="font-nexa font-black leading-[4vw] bg-[#1E1B1A] text-white uppercase rounded-full w-fit px-[10vw] pt-[6vw] pb-[5vw] text-[5.5vw] mt-[18vw] mb-[5vw]"
            onClick={() => navigate("/location")}
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signature;
