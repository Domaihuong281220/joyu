/** @format */

import React from "react";
import { CardCareer, CardCareerAddress } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { replaceNewlinesWithBreaks } from "../../utils/Constant";
import { Select, Button } from "antd";

const Careers = () => {
  const [careerData, setCareerData] = useState([]);
  const [availablePositions, setAvailablePositions] = useState([]);
  const [selected, setSelected] = useState();
  const [linkform, setLinkform] = useState();
  const [addressPosition, setAddressPosition] = useState([]);
  const [filterPosition, setFilterPosition] = useState('All');
  const [filterAddress, setFilterAddress] = useState('All');
  const [filteredAddressPositions, setFilteredAddressPositions] = useState([]);

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
        setFilteredAddressPositions(response.data.data); // Initialize with all positions
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCareers();
    fetchaddressPosition();
  }, []);

  // Get unique address positions
  const getUniqueAddresses = (arr) => {
    const addresses = arr.map(item => item.address);
    return [...new Set(addresses)];
  };

  // Get unique positions
  const getUniquePositions = (arr) => {
    const positions = arr.map(item => item.careerId.position);
    return [...new Set(positions)];
  };

  // get Address Position Availability
  const availableItems = (arr) => {
    const result = arr.filter((item) => item.availability);
    return result;
  };

  // Filtered address positions
  const filterAddressPositions = () => {
    const filtered = availableItems(addressPosition).filter(
      (item) =>
        (filterPosition === 'All' || item.careerId.position === filterPosition) &&
        (filterAddress === 'All' || item.address === filterAddress)
    );
    setFilteredAddressPositions(filtered);
  };

  return (
    <div className="w-[76vw] mx-auto pv:max-md:pt-[30vw] pv:max-lg:w-[85%]">
      <div className="pt-[12vw] flex pb-[3.6vw] pv:max-md:pb-1">
        <p className="font-nexa_bold pv:max-md:font-nexa pv:max-md:font-black text-[2.6vw] pv:max-md:text-[7vw] text-primary">
          CAREERS
        </p>
      </div>
      <div className="h-[1px] w-full hidden pv:max-md:block bg-black my-10 pv:max-md:mt-0 pv:max-md:mb-4"></div>

      <div className="flex flex-col gap-[5vw]">
        {careerData?.length > 0 ? (
          careerData.map((item, index) => (
            <CardCareer
              key={index}
              description={replaceNewlinesWithBreaks(item.description)}
              Responsibilities={replaceNewlinesWithBreaks(item.responsibility)}
              position={item.position}
              img={item.image}
            ></CardCareer>
          ))
        ) : (
          <p>No available career data</p>
        )}
      </div>
      
      {/* Filter Section */}
      <div className="py-10">
        <div className="py-2">
          <p className="text-start text-[24px] md:max-lg:text-[20px] font-nexa_bold">
            Please submit your resume titled with Position-Location.
          </p>
        </div>
        <div className="flex gap-4 py-4 items-end">
          <div className="flex flex-col gap-3 ">
            <p  className="text-start">Filter by Position</p>
            <Select
              style={{ width: '30vw' }}
              value={filterPosition}
              onChange={(value) => setFilterPosition(value)}
            >
              <Select.Option value="All">All</Select.Option>
              {getUniquePositions(addressPosition).map((position, index) => (
                <Select.Option key={index} value={position}>
                  {position}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-start">Filter by Address</p>
            <Select
              style={{ width: '30vw' }}
              value={filterAddress}
              onChange={(value) => setFilterAddress(value)}
            >
              <Select.Option value="All">All</Select.Option>
              {getUniqueAddresses(addressPosition).map((address, index) => (
                <Select.Option key={index} value={address}>
                  {address}
                </Select.Option>
              ))}
            </Select>
          </div>
          <Button type="primary" onClick={filterAddressPositions}>
          Find Job
        </Button>
        </div>
       
      </div>
      
      {/* Filtered Address Positions (Desktop only) */}
      <div className="hidden md:block mb-[4vw]">
        {filteredAddressPositions.length > 0 ? (
          filteredAddressPositions.map((item, index) => (
            <CardCareerAddress
              key={index}
              title={item?.careerId.position}
              address={item.address}
            ></CardCareerAddress>
          ))
        ) : (
          <p className="text-start">No available address - positions</p>
        )}
      </div>
      
      {/* Mobile */}
      <div className="py-10 md:hidden">
        {filteredAddressPositions.length > 0 ? (
          filteredAddressPositions.map((item, index) => (
            <div className="flex flex-col py-4 gap-2" key={index}>
              <p className="text-start pv:max-ph:text-[20px] ph:max-md:text-[24px] text-primary font-nexa_bold">
                {item.careerId.position}
              </p>
              <p className="text-start pv:max-ph:text-[18px] ph:max-md:text-[22px]">
                {item.address}
              </p>
              <div className="flex justify-start">
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
          ))
        ) : (
          <p>No available address - positions</p>
        )}
      </div>
    </div>
  );
};

export default Careers;
