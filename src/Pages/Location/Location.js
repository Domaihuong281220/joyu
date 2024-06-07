/** @format */

import React, { useEffect, useState } from "react";
import { CardLocation } from "../../components";
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
      // console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch locations:", error);
    }
  };

  useEffect(() => {
    handleGetFrame();
    handleGetLocations();
  }, []);

  useEffect(() => {
    const filtered = locations.filter((location) =>
      location.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      location.address.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredLocations(filtered);
    console.log(filteredLocations);
  }, [searchInput, locations]);

  return (
    <div className="w-[76vw] mx-auto pb-10">
      <div className="w-full flex justify-between items-center pt-[12vw]">
        <div>
          <p className="text-[2.5vw] font-nexa_bold text-[#44614f]">LOCATION</p>
        </div>
        <div className="flex py-6 w-[60%]">
          <input
            className="p-[0.5vw] rounded-l-[2vw] w-full border-[0.1vw] border-gray-400"
            placeholder="Find A Location By Zip Code Or City, State"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="bg-primary p-[0.5vw]" 
          // onClick={filteredLocations[0].available?()=>{window.location.assign(filteredLocations[0].deliverylink)}:()=>{navigate("/location")}}
          >
            <Icon
              icon={"tabler:location-filled"}
              className="w-[2.5vw] h-[2.5vw] text-white"
            />
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      <div className="grid grid-cols-2 gap-[1vw] pt-6 overflow-x-scroll">
        {filteredLocations.map((location) => (
          location.available ? (
            <CardLocation
              key={location.id}
              title={location.name}
              address={location.address}
              phone={location.phone}
              available={location.available}
              delivery={location.deliverylink}
              pickup={location.pickuplink}
            />
          ) : (
            <CardLocation
              key={location.id}
              title={location.name}
              address={location.address}
              phone={location.phone}
              available={location.available}
            />
          )
        ))}
      </div>
      <div className="w-[100%] mx-auto pt-20">
        <div className="h-[500px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh]">
          <div className="h-[800px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh] relative">
            <div className="w-full absolute h-[5vw] top-0 bg-white pv:max-md:h-[16vw] md:max-mdmax:h-[8vw] mdmax:max-lgmax:h-[6vw]"></div>
            <iframe src={frame} className="w-full h-full mapframe" title="map" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
