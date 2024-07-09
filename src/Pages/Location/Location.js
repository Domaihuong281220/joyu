/** @format */

import React, { useEffect, useState } from "react";
import { CardLocation, CardLocationMobile } from "../../components";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  const [frame, setFrame] = useState("");
  const [locations, setLocations] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleGetFrame = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locationframe`
      );
      setFrame(response.data[0].src);
    } catch (error) {
      console.error("Failed to fetch frame:", error);
    }
  };

  const handleGetLocations = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locations`
      );
      setLocations(response.data);
      setFilteredLocations(response.data);
    } catch (error) {
      console.error("Failed to fetch locations:", error);
    }
  };

  useEffect(() => {
    handleGetFrame();
    handleGetLocations();
  }, []);

  useEffect(() => {
    const filtered = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        location.address.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredLocations(filtered);
  }, [searchInput, locations]);

  return (
    <div className="w-[76vw] pv:max-md:mb-[-16vw] mx-auto pb-10 pv:max-md:pt-[27vw] pv:max-md:w-[100vw]">
      <div className="w-full flex justify-between items-center pt-[12vw]">
        <div className="pv:max-md:h-[10vw] pv:max-md:pl-[7vw]">
          <p className="text-[2.5vw] pv:max-md:absolute z-40 font-nexa_bold text-[#44614f] pv:max-md:text-[30px]">
            LOCATION
          </p>
        </div>
      </div>

      {/* mobile- tablet  */}
      <div className="w-[100%] mx-auto md:hidden">
        <div className="w-[100%] ">
          <div className=" w-full pv:max-ph:h-[48vh] ph:max-md:h-[50vh]  relative">
            <div className="w-full absolute h-[4vw] z-10 top-[-12vw] bg-white pv:max-md:h-[16vw] "></div>
            <iframe
              src={frame}
              className="w-full h-full mapframe absolute z-0 top-[-12vw]"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" md:hidden w-[80%] pv:max-md:mt-[-5vw] mx-auto">
        {filteredLocations.map((location) =>
          location.available ? (
            <CardLocationMobile
              key={location.id}
              title={location.name}
              address={location.address}
              phone={location.phone}
              available={location.available}
              delivery={location.deliverylink}
              pickup={location.pickuplink}
              hours={location.hours}
            />
          ) : (
            <CardLocationMobile
              key={location.id}
              title={location.name}
              address={location.address}
              phone={location.phone}
              available={location.available}
              hours={location.hours}
            />
          )
        )}
      </div>
      <div className="w-full h-[1px] bg-black pv:max-md:hidden"></div>

      <div className="grid grid-cols-2 gap-[1vw] pt-6  pv:max-md:hidden  ">
        {filteredLocations.map((location) =>
          location.available ? (
            <CardLocation
              key={location.id}
              title={location.name}
              address={location.address}
              phone={location.phone}
              available={location.available}
              delivery={location.deliverylink}
              pickup={location.pickuplink}
              hours={location.hours}
            />
          ) : (
            <CardLocation
              key={location.id}
              title={location.name}
              address={location.address}
              phone={location.phone}
              available={location.available}
              hours={location.hours}
            />
          )
        )}
      </div>

      <div className="w-[100%] mx-auto pv:max-md:hidden">
        <div className="h-[45vw] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh]">
          <div className="h-[800px] w-full mb-20 pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh] relative">
            <div className="w-full absolute h-[5vw] top-0 bg-white pv:max-md:h-[16vw] md:max-mdmax:h-[8vw] mdmax:max-lgmax:h-[6vw]"></div>
            <iframe
              src={frame}
              className="w-full h-full mapframe"
              title="map"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
