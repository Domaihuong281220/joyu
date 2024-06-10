/** @format */

import React from "react";
import img_Frachising from "../../assets/Frachising/frachising_1.png";
const Franchising = () => {
  return (
    <div>
      <div className="w-[76%] mx-auto pt-[12vw]  ">
        <div className=" flex">
          <p className=" text-primary font-nexa_bold text-[2.5vw] mb-[-2vw]">
            FRANCHISING
          </p>
        </div>
        <div className="w-full h-[1px] bg-black mt-10"></div>
        <div className="">
          
          <div className="flex space-x-[3vw] py-[2vw] pv:max-md:grid-cols-1">
            <div className="flex flex-col gap-[1vw] col-span-3">
              <p className="text-start font-nexa_light text-[1.3vw]">
              Have you ever thought about owning a Tea & Coffee shop but worried about how to get it started and a lot more barriers to keep you away from it!!!!
              </p>
              <p className=" text-start font-nexa_light font-black text-[1.1vw] underline uppercase">
              JOYU Tea & Coffee team will make it much more easier for you. Please take a quick look on what we can offer:
              </p>
              <ul className="font-nexa_light font-bold text-[1.1vw] pl-[1vw] list-circle  uppercase text-start list-disc">
                <li>Low and less risky investment.</li>
                <li> Market & location survey.</li>
                <li>Store construction & other related topics.</li>
                <li>Operation managements.</li>
                <li>Brand promoting and marketing.</li>
                <li>Transparent reports.</li>
              </ul>
              <div className="">
                <p className="text-start font-nexa_light text-[1.3vw]">
                  Visit www.joyupro.com for more detail and please contact us
                  via info@joyuteacoffe.com or (757) 264 8881 for any concerns
                  or questions
                </p>
              </div>
            </div>

            <div className="xl:w-[74%] w-full col-span-2 pv:max-md:col-span-3  flex flex-col justify-center items-center">
              <img
                className="w-[90%] rounded-[2vw] h-full"
                src={img_Frachising}
              ></img>
            </div>
          </div>

          {/* <div className="w-full h-[1px] bg-black mb-10"></div> */}
        </div>

        {/* Mobile */}
        <div className=" xl:hidden flex  justify-center gap-10 pt-10 pv:max-md:grid  pv:max-md:grid-cols-1 md:max-2xl:grid  md:max-2xl:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start 2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="First Name"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Last Name:"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Address"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :{" "}
              </p>
              <div className="custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE PROVIDE:
              </p>
              <div className="custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-10 pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <div className="w-full flex justify-end">
                <p className="w-[600px] text-right pv:max-md:text-center md:max-2xl:text-center  text-[20px] font-nexa_bold md:max-2xl:text-[14px]  2xl:max-dh_max:text-left pv:max-md:text-[14px] uppercase ">
                  *Please describe your business background/restaurant
                  experience including name(s) of franchise brands :
                </p>
              </div>
              <div className="flex justify-end pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full">
                <textarea className=" w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full  h-[150px] border-[1px] border-[#707070] rounded-md p-2"></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start  ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY:{" "}
              </p>
              <div className="custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between  pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] pv:max-md:flex-col pv:max-md:items-start md:max-2xl:text-[14px]">
                ZIP/POSTAL CODE:{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Zip / Postal Code"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Email Ex: Doce@gmail.com"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *MOBILE :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Phone Ex: +1 (757) xxxxx"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] ">
                *PREFERRED CITY 1:{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Preferred City 1"
              ></input>
            </div>
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Net Worth :
                </p>
                <div className="custom-select">
                  <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start   md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *Cash Available <br /> for Investment :
                </p>
                <div className="custom-select">
                  <select className="w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full   h-14 border-[1px] border-[#707070] rounded-full p-2">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop  */}

        <div className="grid grid-cols-2 pt-[2vw] gap-5 pv:max-xl:hidden">
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
            </div>

            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="First Name"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                CITY :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Location Ex: Virginia "
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *LAST NAME :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Last Name:"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
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
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *ADDRESS :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Address"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *EMAIL :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Email Ex: Doce@gmail.com"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                COUNTRY :
              </p>
            </div>
            <div className="col-span-2 custom-select">
              <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *MOBILE :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Phone Ex: +1 (757) xxxxx"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                *STATE / PROVINCE :
              </p>
            </div>
            <div className="col-span-2 custom-select ">
              <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                PREFERRED CITY 1 :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Preferred City 1"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-3 text-right gap-5  items-center ">
            <div className="col-span-3">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] uppercase">
                *Please describe your business background/restaurant experience
                including name(s) of franchise brands :
              </p>
            </div>
            <div className="col-span-3 ">
              <textarea
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[200px] border-[1px] border-[#707070] rounded-md py-2 px-6"
                placeholder=""
              ></textarea>
            </div>
          </div>
          <div className=" flex flex-col justify-end">
            <div className="grid grid-cols-3 text-right gap-10 items-center py-5">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px]">
                  *NET WORTH :
                </p>
              </div>
              <div className="col-span-2 custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 text-right gap-10 items-center ">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[20px] pv:max-md:text-[14px] md:max-2xl:text-[14px] uppercase">
                  Cash Available for Investment :
                </p>
              </div>
              <div className="col-span-2 custom-select">
                <select className="w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-4">
                  <option value="1">option 1</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[76%] mx-auto  gap-10 pt-10 flex justify-center py-20">
        <div className="">
          <button className="bg-[#cb1313] px-6 py-2 rounded-lg">
            <p className=" text-white font-shopee_bold text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px]">
              SUBMIT
            </p>
          </button>
        </div>
        <div className="">
          <button className="bg-black px-6 py-2 rounded-lg">
            <p className="text-white text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px]">
              RESET
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Franchising;
