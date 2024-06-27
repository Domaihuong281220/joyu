/** @format */

import React, { useState } from "react";
import imgbg_phone from "../../assets/Catering/bg_phone.png";
import axios from "axios";
import { toast } from "sonner";
import { isValidInputCatering } from "../../utils/common/validators";
import { notification } from "antd";
const Catering = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    type: "",
    location: "",
    guestCount: "",
    eventDetail: "",
    specicalRequest: "",
  });
  console.log(`${process.env.REACT_APP_SERVER_URL}/api/sendEmailCatering`);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    let check = isValidInputCatering(formData, toast);
    if (check === true) {
      try {
        const response = await axios.post(
          // `http://localhost:4000/api/sendEmailCatering`,
          `${process.env.REACT_APP_SERVER_URL}/api/sendEmailCatering`,

          formData
        );

        // alert("Form submitted successfully!");
        toast.success("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form", error);
        toast.error("Failed to submit form.");
        // alert("Failed to submit form.");
      }
    }
  };

  return (
    <div className="pt-[12vw] pv:max-md:pt-[40vw] w-[76vw] pv:max-md:w-full mx-auto grid grid-cols-5 gap-20 pv:max-lg:grid-cols-1 pv:max-lg:gap-0">
      <div className="w-[100%] pv:max-md:w-[85vw] mx-auto col-span-3">
        <div className="flex  text-[2.5vw] md:max-lg:text-[30px] pv:max-md:text-[30px] font-nexa_bold text-primary">
          <p className="uppercase">Catering</p>
        </div>
        <div className="h-[1px] w-full bg-black my-10 pv:max-md:mt-2 pv:max-md:mb-4 "></div>
        <div className="">
          <p className="text-start text-[#a2a158] font-nexa_bold text-[1.4vw] pb-[1.2vw] pv:max-md:pb-[8vw] md:max-lg:text-[24px] pv:max-md:text-[4.5vw]">
            BRING JOYU TO YOUR NEXT PARTY!
          </p>
          <p className="text-start text-[1.5vw] md:max-lg:text-[20px] pv:max-md:font-black pv:max-md:font-nexa pv:max-md:text-[3.7vw] font-nexa_light">
            Enjoy JOYU tea at your next special occasion. Tell us about your
            plans and let our talented catering coordinators help plan the
            perfect event!<br></br> <br></br>A catering order is not processed
            until a contract has been signed. After submitting this form one of
            our talented catering coordinators will contact you to discuss your
            event. All catering events require a minimum advanced notice of 3
            business days and a minimum order of 30 drinks or more. To better
            assists you, please email us at cater@omomoteashoppe.com
            <br></br> <br></br>
            You may also call any of our locations for assistance.
            <br></br>
            <span className="text-primary font-bold">
              Our catering service is available for pick up and qualified free
              delivery
            </span>
          </p>
        </div>
        {/* <div className="h-[1px] w-full bg-black my-10"></div> */}

        <div className="height-available pv:max-md:!h-fit pv:max-md:pt-[10vw] flex flex-col justify-end">
          <p className="flex font-nexa_bold text-primary uppercase  text-[2.5vw] md:max-lg:text-[30px] md:max-lg:pb-2 pv:max-md:text-[8vw] pv:max-sm:pb-2">
            Catering Form
          </p>
          <div className="h-[1px] w-full bg-black my-10 pv:max-md:mt-2 pv:max-md:mb-2 "></div>

          <p className="text-start text-[#a2a158] font-nexa_bold text-[1.4vw] md:max-lg:text-[24px]  pv:max-sm:text-[4.2vw] pv:max-md:pt-4 pv:max-md:pb-12">
            PLEASE SUBMIT ALL THE INFORMATION AND WE WILL REACH OUT TO YOU AS
            SOON AS POSSIBLE.
          </p>
        </div>
      </div>
      <div
        className="  mb-10 relative w-[100%] col-span-2 pv:max-ph:w-[95%] ph:max-lg:w-[80%] mx-auto"
        // style={{
        //   backgroundImage: `url(${imgbg_phone})`,
        // }}
      >
        <img
          className="h-[60vw] pv:max-md:h-full md:max-lg:h-[80vw] w-full md:max-lg:w-[50vw] mx-auto"
          src={imgbg_phone}
        ></img>
        <p className="custom_input absolute w-full top-[1.5625vw] pv:max-md:top-[10vw]  font-nexa_bold text-[1.2vw] text-primary pv:max-md:text-[3.5vw] md:max-lg:text-[16px]">
          CUSTOMER INFORMATION
        </p>
        <div className="custom_input absolute top-[4.1vw] pv:max-md:top-[18vw]  w-[70%] mx-auto flex flex-col gap-[0.625vw]  justify-between pv:max-md:space-y-[1vw] pv:max-md:w-[80%] pv:max-md:h-[165vw]">
          <input
            className=" w-full pv:max-md:w-full  md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[18vw] pv:max-md:text-[3.5vw]  md:max-lg:h-12 md:max-lg:text-[14px]  md:max-lg:w-[90%] mx-auto border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Name: "
            value={formData.name}
            name="name"
            onChange={handleChange}
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[18vw] pv:max-md:text-[3.5vw]  md:max-lg:h-12 md:max-lg:text-[14px] md:max-lg:w-[90%] mx-auto border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Phone Ex: +1 (757) xxxxx"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[18vw] pv:max-md:text-[3.5vw] md:max-lg:h-12 md:max-lg:text-[14px]  md:max-lg:w-[90%] mx-auto border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Email Ex: Doce@gmail.com"
            value={formData.email}
            name="email"
            onChange={handleChange}
          ></input>

          <p className=" font-shopee_bold text-[1.2vw] text-primary pv:max-md:text-[14px] md:max-lg:text-[16px]">
            EVENT DESCRIPTION
          </p>
          <input
            className=" w-full pv:max-md:w-full lg:max-2xl:w-full h-[4.2vw] pv:max-md:h-[16vw] pv:max-md:text-[3.5vw] md:max-lg:h-12 md:max-lg:text-[14px] md:max-lg:w-[90%] mx-auto border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Date Ex: November 12, 2022"
            value={formData.date}
            name="date"
            onChange={handleChange}
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[16vw] pv:max-md:text-[3.5vw] md:max-lg:h-12 md:max-lg:text-[14px] md:max-lg:w-[90%] mx-auto border-[1px] border-[#707070] rounded-full py-2 px-6"
            placeholder="Type Ex: Wedding, Birthday, etc"
            value={formData.type}
            name="type"
            onChange={handleChange}
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[16vw] pv:max-md:text-[3.5vw] border-[1px] md:max-lg:h-12 md:max-lg:text-[14px] md:max-lg:w-[90%] mx-auto border-[#707070] rounded-full py-2 px-6"
            placeholder="Location Ex: Virginia "
            value={formData.location}
            name="location"
            onChange={handleChange}
          ></input>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[16vw] pv:max-md:text-[3.5vw] border-[1px] md:max-lg:h-12 md:max-lg:text-[14px] md:max-lg:w-[90%] mx-auto border-[#707070] rounded-full py-2 px-6"
            placeholder="Guest Count Ex: 100 "
            value={formData.guestCount}
            name="guestCount"
            onChange={handleChange}
          ></input>
          <textarea
            className=" w-full h-[7.8125vw] pv:max-md:w-full md:max-2xl:w-full pv:max-md:h-[35vw] pv:max-md:text-[3.5vw]  md:max-lg:text-[14px] md:max-lg:h-20 md:max-lg:w-[90%] mx-auto border-[1px] border-[#707070] rounded-xl py-2 px-6"
            placeholder="Event Detail: 
            Please explain your event in dept here"
            value={formData.eventDetail}
            name="eventDetail"
            onChange={handleChange}
          ></textarea>
          <input
            className=" w-full pv:max-md:w-full md:max-2xl:w-full h-[4.2vw] pv:max-md:h-[16vw] pv:max-md:text-[3.5vw] md:max-lg:h-12 md:max-lg:text-[14px] border-[1px] md:max-lg:w-[90%] mx-auto border-[#707070] rounded-full py-2 px-6"
            placeholder="Special Request:"
            value={formData.specicalRequest}
            name="specicalRequest"
            onChange={handleChange}
          ></input>
          <div className="">
            <button
              className="w-[13.3vw] h-[3.65vw] pv:max-md:w-[40vw] pv:max-md:h-[10vw] pv:max-md:mt-[2vw]  rounded-full bg-black"
              onClick={() => {
                handleSubmit();
              }}
            >
              <p className="text-white pv:max-md:uppercase font-nexa_bold text-[1.05vw] pv:max-md:text-[4vw] ">
                Send
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
