/** @format */

import React from "react";
// import { carrerData } from "../../models/mockdata";
import { CardCareer, CardCareerAddress } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { replaceNewlinesWithBreaks } from "../../utils/Constant";
const Careers = () => {
  const [careerData, setCareerData] = useState([]);
  const [careersCount, setCareersCount] = useState(0);
  const [availablePositions, setAvailablePositions] = useState([]);
  const [selected, setSelected] = useState();
  const [linkform, setLinkform] = useState();
  const [addressPosition, setAddressPosition] = useState([]);
  // Updates the linkform state when selected position changes
  useEffect(() => {
    const selectedPosition = availablePositions.find(
      (available) => available.position === selected
    );
    if (selectedPosition) {
      setLinkform(selectedPosition.linkform); // Set the corresponding linkform from the found object
    } else {
      setLinkform("#"); // Clear linkform if no matching position found
    }
  }, [selected, availablePositions, linkform]); // React to changes in `selected` or `availablePositions`

  // Add another useEffect to observe changes in linkform
  useEffect(() => {}, [linkform]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/joyu/careers`
        );
        // Log the response to ensure your API returns the expected structure
        const availableCareers = response.data.data.filter(
          (position) => position.availability === "true"
        );
        setCareerData(availableCareers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchaddressPosition = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/joyu/address`
        );

        setAddressPosition(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCareers();
    fetchaddressPosition();
  }, []);

  // get Address Position Avaibility
  const availableItems = (arr) => {
    const result = arr.filter((item) => item.availability);
    return result;
  };

  return (
    <div className=" w-[76vw] mx-auto  pv:max-md:pt-[30vw] pv:max-lg:w-[85%] ">
      <div className="pt-[12vw] flex pb-[3.6vw] pv:max-md:pb-1">
        <p className="font-nexa_bold pv:max-md:font-nexa pv:max-md:font-black text-[2.6vw] pv:max-md:text-[7vw] text-primary">
          CAREERS
        </p>
      </div>
      <div className="h-[1px] w-full hidden pv:max-md:block bg-black my-10 pv:max-md:mt-0 pv:max-md:mb-4 "></div>

      <div className="flex flex-col gap-[5vw]">
        {careerData?.map((item, index) => {
          return (
            <>
              <CardCareer
                description={replaceNewlinesWithBreaks(item.description)}
                // subdesc={item.subde)sc}
                // title={item.title}
                Responsibilities={replaceNewlinesWithBreaks(
                  item.responsibility
                )}
                position={item.position}
                img={item.image}
              ></CardCareer>
            </>
          );
        })}
      </div>
      {/* Desktop */}
      <div className="py-10 pv:max-md:hidden ">
        <div className="py-2">
          <p className="text-start text-[24px] md:max-lg:text-[20px] font-nexa_bold">
            Please submit your resume titled with Position-Location.
          </p>
        </div>
        {availableItems(addressPosition).map((item, index) => {
          const isLastItem =
            index === availableItems(addressPosition).length - 1;

          return (
            <>
              <CardCareerAddress
                title={item?.careerId.position}
                address={item.address}
                // isLast={isLastItem}
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
        {availableItems(addressPosition).map((item, index) => {
          return (
            <>
              <div className="flex flex-col  py-4 gap-2">
                <p className="text-start pv:max-ph:text-[20px] ph:max-md:text-[24px] text-primary font-nexa_bold">
                  {item.careerId.position}
                </p>
                <p className="text-start pv:max-ph:text-[18px] ph:max-md:text-[22px]">
                  {item.address}
                </p>
                <div className="flex justify-start  ">
                  <button className="bg-[#a2a158] w-[50%] py-2 rounded-lg">
                    <a
                      href="mailto:info@joyuteacoffee.com"
                      className="text-white pv:max-md:font-nexa_bold pv:max-md:font-black pv:max-md:text-[4.5vw] pv:max-md:uppercase font-nexa_bold"
                    >
                      Apply
                    </a>
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
