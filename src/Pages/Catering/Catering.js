/** @format */

import React from "react";
import imgbg_phone from "../../assets/Catering/bg_phone.png";
const Catering = () => {
  return (
    <div className="pt-[150px] w-[76vw] mx-auto grid grid-cols-2 gap-20 pv:max-lg:grid-cols-1">
      <div className="w-[100%] mx-auto">
        <div className="flex  text-[36px] font-bold text-primary">
          <p className="uppercase">Catering</p>
        </div>
        <div className="h-[1px] w-full bg-black my-10"></div>
        <div className="">
          <p className="text-start text-[#a2a158] font-nexa_bold text-[24px]">
            BRING JOYU TO YOUR NEXT PARTY!
          </p>
          <p className="text-start text-[24px] font-nexa_light">
            Enjoy JOYU tea at your next special occasion. Tell us about your
            plans and let our talented catering coordinators help plan the
            perfect event!<br></br> <br></br>A catering order is not processed
            until a contract has been signed. After submitting this form one of
            our talented catering coordinators will contact you to discuss your
            event. All catering events require a minimum advanced notice of 3
            business days and a minimum order of 30 drinks or more. To better
            assists you, please email us at cater@omomoteashoppe.com
            <br></br> <br></br>
            You may also call any of our locations for assistance. Our catering
            service is available for pick up only.*
          </p>
        </div>
        <div className="h-[1px] w-full bg-black my-10"></div>

        <div className="mb-10">
          <p className="flex text-[36px] font-bold text-primary uppercase">
            Catering
          </p>
          <p className="text-start text-[#a2a158] font-nexa_bold text-[24px]">
            PLEASE SUBMIT ALL THE INFORMATION AND WE WILL REACH OUT TO YOU AS
            SOON AS POSSIBLE.
          </p>
        </div>
      </div>
      <div
        className="  mb-10 relative w-[100%] pv:max-lg:w-[80%] mx-auto"
        // style={{
        //   backgroundImage: `url(${imgbg_phone})`,
        // }}
      >
        <img
          className="h-[960px] w-full pv:max-md:h-[600px] md:max-lg:h-[960px]"
          src={imgbg_phone}
        ></img>
        <p className="custom_input absolute w-full top-[30px] font-shopee_bold text-[22px] text-primary pv:max-md:text-[14px]">
          CUSTOMER INFORMATION
        </p>
        <div className="custom_input absolute top-[80px] w-[70%] mx-auto flex flex-col  h-[800px] justify-between pv:max-md:w-[80%] pv:max-md:h-[500px]">
          <input
            className=" w-full pv:max-md:w-full  md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px]  md:max-lg:h-10 md:max-lg:text-[14px] border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Name: "
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px]  md:max-lg:h-10 md:max-lg:text-[14px] border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Phone Ex: +1 (757) xxxxx"
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px] md:max-lg:h-10 md:max-lg:text-[14px] border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Email Ex: Doce@gmail.com"
          ></input>

          <p className=" font-shopee_bold text-[22px] text-primary pv:max-md:text-[14px]">
            EVENT DESCRIPTION
          </p>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px] md:max-lg:h-10 md:max-lg:text-[14px] border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Date Ex: November 12, 2022"
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px] md:max-lg:h-10 md:max-lg:text-[14px] border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Type Ex: Wedding, Birthday, etc"
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px] border-[1px] md:max-lg:h-10 md:max-lg:text-[14px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Location Ex: Virginia "
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px] border-[1px] md:max-lg:h-10 md:max-lg:text-[14px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Guest Count Ex: 100 "
          ></input>
          <textarea
            className=" w-full h-[150px] pv:max-md:w-full md:max-2xl:w-full pv:max-md:h-14 pv:max-md:text-[12px]  md:max-lg:text-[14px] md:max-lg:h-16 border-[1px] border-[#707070] rounded-xl py-2 px-6"
            placeholder="Event Detail: 
            Please explain your event in dept here"
          ></textarea>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 pv:max-md:h-8 pv:max-md:text-[12px] md:max-lg:h-10 md:max-lg:text-[14px] border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Special Request:"
          ></input>
          <div className="">
            <button className="py-2 px-8 rounded-full bg-black">
              <p className="text-white font-bold text-[20px] ">Send</p>
            </button>
          </div>
        </div>

        {/* <div className=" text-right gap-10 items-center  absolute">
          <div className="col-span-1">
            <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
              ZIP / POSTAL CODE:
            </p>
          </div>
          <div className="col-span-2">
            <input
              className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
              placeholder="Zip / Postal Code"
            ></input>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Catering;
