/** @format */

import React from "react";
import { carrerData } from "../../models/mockdata";
import { CardCareer, CardCareerAddress } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
const Careers = () => {
  const [careerData, setCareerData] = useState([]);
  const [careersCount, setCareersCount] = useState(0);
  const [careerAddressData, setCareerAddressData] = useState([]);
  const [availablePositions, setAvailablePositions] = useState([]);
  const [selected, setSelected] = useState();
  const [linkform, setLinkform] = useState();

  const handleChange = (event) => {
    // console.log("Selected:", event.target.value);
    setSelected(event.target.value);
  };

  // Updates the linkform state when selected position changes
  useEffect(() => {
    const selectedPosition = availablePositions.find(
      (available) => available.position === selected
    );
    if (selectedPosition) {
      setLinkform(selectedPosition.linkform); // Set the corresponding linkform from the found object
      // console.log(linkform);
    } else {
      setLinkform("#"); // Clear linkform if no matching position found
    }
  }, [selected, availablePositions, linkform]); // React to changes in `selected` or `availablePositions`

  // Add another useEffect to observe changes in linkform
  useEffect(() => {
    // console.log(linkform);
  }, [linkform]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers`);
        // Log the response to ensure your API returns the expected structure
        const availableCareers = response.data.data.filter((position) => position.availability==="true");
        setCareerData(availableCareers);

        const careerAddresses = availableCareers.map((career) => career.address);
        setCareerAddressData(careerAddresses)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCareers();
  }, []);
  console.log(careerData);
  return (
    <div className=" w-[76vw] mx-auto  pv:max-md:pt-[30vw] pv:max-lg:w-[85%] ">
      <div className="pt-[12vw] flex pb-[3.6vw] pv:max-md:pb-1">
        <p className="font-nexa_bold pv:max-md:font-nexa pv:max-md:font-black text-[2.6vw] pv:max-md:text-[7vw] text-primary">CAREERS</p>
      </div>
      <div className="h-[1px] w-full hidden pv:max-md:block bg-black my-10 pv:max-md:mt-0 pv:max-md:mb-4 "></div>

      <div className="flex flex-col gap-[5vw]">
        {carrerData.map((item, index) => {
          return (
            <>
              <CardCareer
                desc={item.desc}
                subdesc={item.subdesc}
                title={item.title}
                Responsibilities={item.Responsibilities}
                img={item.img}
              ></CardCareer>
            </>
          );
        })}
      </div>
      {/* Desktop */}
      <div className="py-10 pv:max-md:hidden ">
        {careerData.map((item, index) => {
          const isLastItem = index === careerAddressData.length - 1;

          return (
            <>
              <CardCareerAddress
                title={item.position}
                address={item.address}
                isLast={isLastItem}
              ></CardCareerAddress>
            </>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="py-10 md:hidden ">
        <div className="">
          <p className="text-start pv:max-ph:text-[18px] ph:max-md:text-[22px] font-nexa_bold">
            Please submit your resume <br></br>
            titled with Position-Location
          </p>
        </div>
        {careerData.map((item, index) => {
          return (
            <>
              <div className="flex flex-col  py-4 gap-2">
                <p className="text-start pv:max-ph:text-[20px] ph:max-md:text-[24px] text-primary font-nexa_bold">
                  {item.position}
                </p>
                <p className="text-start pv:max-ph:text-[18px] ph:max-md:text-[22px]">
                  {item.address}
                </p>
                <div className="flex justify-start  ">
                  <button className="bg-[#a2a158] w-[50%] py-2 rounded-lg">
                    <a href="mailto:info@joyuteacoffee.com" className="text-white pv:max-md:font-nexa_bold pv:max-md:font-black pv:max-md:text-[4.5vw] pv:max-md:uppercase font-nexa_bold">Apply</a>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Careers;
