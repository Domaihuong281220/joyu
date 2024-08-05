/** @format */

import React, { useState } from "react";
import img_Frachising from "../../assets/Frachising/frachising_1.webp";
import axios from "axios";
import { toast } from "sonner";
import { isValidInputFrachising } from "../../utils/common/validators";
const Franchising = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    stateProvince: "",
    city: "",
    zipPostalCode: "",
    email: "",
    mobile: "",
    preferredCity1: "",
    businessBackground: "",
    netWorth: "",
    cashAvailable: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    let check = isValidInputFrachising(formData, toast);

    if (check === true) {
      setIsloading(true);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/sendEmailFranchising`,
          // `http://localhost:4000/api/sendEmailFranchising`,
          formData
        );

        // alert("Form submitted successfully!");
        setIsloading(false);

        toast.success("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          country: "",
          stateProvince: "",
          city: "",
          zipPostalCode: "",
          email: "",
          mobile: "",
          preferredCity1: "",
          businessBackground: "",
          netWorth: "",
          cashAvailable: "",
        });
      } catch (error) {
        console.error("Error submitting form", error);
        toast.error("Failed to submit form.");
        setIsloading(false);

        // alert("Failed to submit form.");
      }
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      stateProvince: "",
      city: "",
      zipPostalCode: "",
      email: "",
      mobile: "",
      preferredCity1: "",
      businessBackground: "",
      netWorth: "",
      cashAvailable: "",
    });
    window.location.reload();
  };

  return (
    <div>
      <div className="w-[76%] mx-auto pt-[12vw] pv:max-md:pt-[40vw] pv:max-md:w-[85%]  ">
        <div className=" flex">
          <p className=" text-primary font-nexa_bold text-[2.5vw] mb-[-2vw] pv:max-md:text-[30px]">
            FRANCHISING
          </p>
        </div>
        <div className="h-[1px] w-full hidden pv:max-md:block bg-black my-10 pv:max-md:mt-4 pv:max-md:mb-0 "></div>

        <div className="w-full h-[1px] bg-black mt-10 pv:max-md:hidden"></div>
        <div className="pv:max-md:hidden">
          <div className="flex space-x-[3vw] py-[2vw] pv:max-md:grid-cols-1">
            <div className="flex flex-col gap-[1vw] col-span-3">
              <p className="text-start font-nexa_light pv:max-md:font-nexa text-[1.3vw]">
                Have you ever thought about owning a Tea & Coffee shop but
                worried about how to get it started and a lot more barriers to
                keep you away from it!!!!
              </p>
              <p className=" text-start font-nexa_light font-black text-[1.1vw] underline uppercase">
                JOYU Tea & Coffee team will make it much more easier for you.
                Please take a quick look on what we can offer:
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
                  Please contact us via info@joyuteacoffe.com or (757) 264 8881
                  for any concerns or questions
                </p>
              </div>
            </div>

            <div className="xl:w-[74%] w-full col-span-2 pv:max-md:col-span-3  flex flex-col justify-center items-center">
              <img
                className="w-[90%] pv:max-md:w-full rounded-[2vw] h-full"
                src={img_Frachising}
              ></img>
            </div>
          </div>

          {/* <div className="w-full h-[1px] bg-black mb-10"></div> */}
        </div>
        <div className="md:hidden flex flex-col gap-4 pt-10">
          <div className="text-[18px] font-nexa">
            <img className="w-[90vw]" src={img_Frachising}></img>
          </div>
          <p className="text-start  pv:max-md:pt-[6vw] pv:max-md:font-nexa pv:max-md:text-[4vw] pv:max-md:font-extralight">
            Have you ever thought about owning a Tea & Coffee shop but worried
            about how to get it started and a lot more barriers to keep you away
            from it!!!!
          </p>
          <p className="font-bold underline pv:max-md:font-nexa pv:max-md:leading-[5vw]  pv:max-md:text-[4vw]  pv:max-md:uppercase text-start">
            JOYU Tea & Coffee team will make it much more easier for you. Please
            take a quick look on what we can offer:
          </p>
          <ul className="list-disc font-nexa text-start font-bold pv:max-md:text-[3.8vw]  pv:max-md:uppercase w-[90%] mx-auto">
            <li>Low and less risky investment.</li>
            <li> Market & location survey.</li>
            <li>Store construction & other related topics.</li>
            <li>Operation managements.</li>
            <li>Brand promoting and marketing.</li>
            <li>Transparent reports.</li>
          </ul>
        </div>

        {/* Mobile */}
        <div className=" xl:hidden flex  justify-center gap-10 pt-10 pv:max-md:grid  pv:max-md:grid-cols-1 md:max-2xl:grid  md:max-2xl:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start 2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
              <input
                className="w-full pv:max-md:w-full  pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="First Name"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *LAST NAME :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full  pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Last Name:"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *ADDRESS :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
                name="address"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                COUNTRY :
              </p>
              <div className="w-full">
                <input
                  className="w-full pv:max-md:w-full  pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                  placeholder="Country"
                  onChange={handleChange}
                  value={formData.country}
                  name="country"
                ></input>
              </div>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *STATE PROVIDE:
              </p>
              <div className="w-full">
                <input
                  className="w-full pv:max-md:w-full  pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                  placeholder="State provide"
                  onChange={handleChange}
                  value={formData.stateProvince}
                  name="stateProvince"
                ></input>
              </div>
              {/* </div>
            <div className="flex flex-col  pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
              <div className="w-full flex justify-end">
                <p className="w-[600px] text-right pv:max-md:text-center md:max-2xl:text-center  text-[20px] font-nexa_bold md:max-2xl:text-[14px]  2xl:max-dh_max:text-left pv:max-md:text-[4.5vw] uppercase ">
                  *Please describe your business background/restaurant
                  experience including name(s) of franchise brands :
                </p>
              </div> */}
              {/* <div className="flex justify-end pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full">
                <textarea
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full 2xl:max-dh_max:w-full  h-[150px] border-[1px] border-[#707070] rounded-md p-2"
                  onChange={handleChange}
                  value={formData.businessBackground}
                  name="businessBackground"
                ></textarea>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start  ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                CITY:{" "}
              </p>
              <div className="w-full">
                <input
                  className="w-full pv:max-md:w-full pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                  placeholder="City"
                  onChange={handleChange}
                  value={formData.city}
                  name="city"
                ></input>
              </div>
            </div>
            <div className="flex items-center justify-between  pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] pv:max-md:flex-col pv:max-md:items-start md:max-2xl:text-[14px]">
                ZIP CODE:{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full  pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Zip Code"
                onChange={handleChange}
                value={formData.zipPostalCode}
                name="zipPostalCode"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *EMAIL :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Email Ex: Doce@gmail.com"
                type="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4 pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *MOBILE :{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full  pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Phone Ex: 1234567890"
                onChange={handleChange}
                value={formData.mobile}
                name="mobile"
              ></input>
            </div>
            <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start  2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px] ">
                *PREFERRED CITY 1:{" "}
              </p>
              <input
                className="w-full pv:max-md:w-full pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                placeholder="Preferred City 1"
                onChange={handleChange}
                value={formData.preferredCity1}
                name="preferredCity1"
              ></input>
            </div>
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                  *Net Worth :
                </p>
                <div className="w-full">
                  <input
                    className="w-full pv:max-md:w-full pv:max-md:pl-[5vw] pv:max-md:font-nexa_bold pv:max-md:text-[4.5vw]  md:max-2xl:w-full h-14 pv:max-md:h-[15vw] border-[1px] border-[#707070] rounded-full p-2"
                    placeholder="  *Net Worth :"
                    onChange={handleChange}
                    value={formData.netWorth}
                    name="netWorth"
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start   md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                  *Cash Available <br /> for Investment :
                </p>
                <div className="w-full">
                  <textarea
                    className="w-full  pv:max-md:w-full md:max-2xl:w-full  h-14 pv:max-md:h-[30vw] border-[1px] border-[#707070] rounded-2xl p-2"
                    // placeholder="Cash Available for Investment :"
                    onChange={handleChange}
                    value={formData.cashAvailable}
                    name="cashAvailable"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-between pv:max-md:gap-4  pv:max-md:flex-col pv:max-md:items-start   md:max-2xl:flex-col md:max-2xl:items-start   2xl:max-dh_max:flex-col 2xl:max-dh_max:items-start ">
                <p className="font-nexa_bold text-[20px] uppercase pv:max-md:text-[4.5vw] md:max-2xl:text-[14px] text-start">
                  *Please describe your business background/restaurant
                  experience including name(s) of franchise brands :
                </p>
              </div>
              <div className="col-span-3 ">
                <textarea
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[200px] border-[1px] border-[#707070] rounded-md py-2 px-6"
                  placeholder=""
                  onChange={handleChange}
                  value={formData.businessBackground}
                  name={"businessBackground"}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop  */}

        <div className="grid grid-cols-2 pt-[2vw] gap-5 pv:max-xl:hidden">
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *FIRST NAME :
              </p>
            </div>

            <div className="col-span-2">
              <input
                name="firstName"
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                CITY :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Location Ex: Virginia "
                onChange={handleChange}
                name="city"
                value={formData.city}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *LAST NAME :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Last Name:"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                ZIP CODE:
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Zip Code"
                onChange={handleChange}
                name="zipPostalCode"
                value={formData.zipPostalCode}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *ADDRESS :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                value={formData.address}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *EMAIL :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Email Ex: Doce@gmail.com"
                onChange={handleChange}
                type="email"
                value={formData.email}
                name="email"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                COUNTRY :
              </p>
            </div>
            <div className="col-span-2 ">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Country"
                onChange={handleChange}
                value={formData.country}
                name="country"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *MOBILE :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Phone Ex: 1234567890"
                onChange={handleChange}
                value={formData.mobile}
                name="mobile"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                *STATE / PROVINCE :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="*STATE / PROVINCE :"
                onChange={handleChange}
                name="stateProvince"
                value={formData.stateProvince}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3 text-right gap-10 items-center ">
            <div className="col-span-1">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                PREFERRED CITY 1 :
              </p>
            </div>
            <div className="col-span-2">
              <input
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                placeholder="Preferred City 1"
                onChange={handleChange}
                value={formData.preferredCity1}
                name="preferredCity1"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-3 text-right gap-5  items-center ">
            <div className="col-span-3">
              <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px] uppercase">
                *Please describe your business background/restaurant experience
                including name(s) of franchise brands :
              </p>
            </div>
            <div className="col-span-3 ">
              <textarea
                className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[200px] border-[1px] border-[#707070] rounded-md py-2 px-6"
                placeholder=""
                onChange={handleChange}
                value={formData.businessBackground}
                name={"businessBackground"}
              ></textarea>
            </div>
          </div>
          <div className=" flex flex-col justify-end">
            <div className="grid grid-cols-3 text-right gap-10 items-center py-5">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px]">
                  *NET WORTH :
                </p>
              </div>
              <div className="col-span-2">
                <input
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                  placeholder="*NET WORTH :"
                  onChange={handleChange}
                  value={formData.netWorth}
                  name="netWorth"
                ></input>
              </div>
            </div>
            <div className="grid grid-cols-3 text-right gap-10 items-center ">
              <div className="col-span-1">
                <p className="font-nexa_bold text-[20px] pv:max-md:text-[4.5vw] md:max-2xl:text-[14px] uppercase">
                  Cash Available for Investment :
                </p>
              </div>
              <div className="col-span-2">
                <input
                  className=" w-full pv:max-md:w-full md:max-2xl:w-full h-14 border-[1px] border-[#707070] rounded-full py-2 px-6"
                  placeholder="* Cash Available for Investment :"
                  onChange={handleChange}
                  value={formData.cashAvailable}
                  name={"cashAvailable"}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[76%] pv:max-md:w-[84%] mx-auto  gap-10 pv:max-md:gap-4 pt-10 flex justify-center py-20">
        <div className="">
          <button
            className="bg-[#cb1313] pv:max-md:py-[3.5vw] pv:max-md:w-[38vw] pv:max-md:px-auto px-6 py-2 rounded-lg pv:max-md:bg-[#a2a157]"
            onClick={() => {
              handleSubmit();
            }}
          >
            <p className=" text-white font-shopee_bold text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px]">
              SUBMIT
            </p>
          </button>
        </div>
        <div className="">
          <button
            className="bg-black px-6 pv:max-md:py-[3.5vw] pv:max-md:w-[38vw] pv:max-md:px-auto py-2 rounded-lg"
            onClick={() => {
              handleReset();
            }}
          >
            <p className="text-white text-[27px] pv:max-xl:text-[16px] xl:max-2xl:text-[20px]">
              RESET
            </p>
          </button>
        </div>
      </div>

      {isloading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50 z-50 flex justify-center items-center">
          <p className="text-white text-xl">Your form is being submitted...</p>
        </div>
      )}
    </div>
  );
};

export default Franchising;
