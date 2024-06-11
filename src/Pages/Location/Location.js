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
    const filtered = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        location.address.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredLocations(filtered);
    console.log(filteredLocations);
  }, [searchInput, locations]);

  return (
    <div className="w-[76vw] mx-auto pb-10 pv:max-md:w-[95vw]">
      <div className="w-full flex justify-between items-center pt-[12vw]">
        <div>
          <p className="text-[2.5vw] font-nexa_bold text-[#44614f] pv:max-md:text-[30px]">
            LOCATION
          </p>
        </div>
        <div className="flex py-6 w-[60%] pv:max-md:hidden">
          <input
            className="p-[0.5vw] rounded-l-[2vw] w-full border-[0.1vw] border-gray-400"
            placeholder="Find A Location By Zip Code Or City, State"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="bg-primary p-[0.5vw]"
            // onClick={filteredLocations[0].available?()=>{window.location.assign(filteredLocations[0].deliverylink)}:()=>{navigate("/location")}}
          >
            <Icon
              icon={"tabler:location-filled"}
              className="w-[2.5vw] h-[2.5vw] text-white"
            />
          </button>
        </div>
      </div>

      {/* mobile- tablet  */}
      <div className="w-[100%] mx-auto md:hidden">
        <div className="w-[100%]">
          <div className=" w-full pv:max-ph:h-[40vh] ph:max-md:h-[50vh]  relative">
            <div className="w-full absolute h-[5vw] top-0 bg-white pv:max-md:h-[16vw] "></div>
            <iframe
              src={frame}
              className="w-full h-full mapframe"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" md:hidden w-[90%] mx-auto">
        {filteredLocations.map((location) =>
          location.available ? (
            <div className="py-3">
              <div className="flex flex-col gap-4">
                <p className="text-[18px] font-nexa text-start">
                  {location.name}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6" icon={"mdi:location"}></Icon>
                    <p className="font-light text-start ">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6" icon={"ic:baseline-phone"}></Icon>
                    <p className="font-light text-start">{location.phone}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <button
                    className={` ${
                      location.available === true
                        ? "bg-primary "
                        : "bg-white w-fit"
                    } rounded-lg border-[0.1vw] border-gray-300 flex justify-center items-center w-[40%]   py-2`}
                    onClick={
                      location.available
                        ? () => {
                            window.location.assign(location.pickuplink);
                          }
                        : () => {
                            navigate("/location");
                          }
                    }
                  >
                    <p
                      className={` font-nexa_bold text-[14px] ${
                        location.available
                          ? "text-white "
                          : "text-black w-fit  text-start "
                      }   `}
                    >
                      {location.available ? "PICK UP" : "COMING SOON"}
                    </p>
                  </button>
                  {location.available ? (
                    <button
                      className={` bg-black rounded-lg  border-[0.1vw] border-gray-300 flex justify-center w-[40%] mx-auto py-2`}
                      onClick={() => {
                        window.location.assign(location.delivery);
                      }}
                    >
                      <p className="text-white font-nexa_bold text-[14px] ">
                        DELIVERY
                      </p>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="">
                <div className="py-4">
                  <p className=" font-nexa_bold text-start">OPERATION HOURS</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">MONDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">TUESDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">WESNESDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">THURDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">FRIDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">SATURDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">SUNDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-3">
              <div className="flex flex-col gap-4">
                <p className="text-[18px] font-nexa text-start">
                  {location.name}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6" icon={"mdi:location"}></Icon>
                    <p className="font-light text-start ">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6" icon={"ic:baseline-phone"}></Icon>
                    <p className="font-light text-start">{location.phone}</p>
                  </div>
                </div>
                <div className="flex items-center  gap-2 ">
                  <button
                    className={` ${
                      location.available === true
                        ? "bg-primary w-[40%] "
                        : "bg-white w-[40%] "
                    } rounded-lg border-[0.1vw] border-gray-300 flex justify-center items-center py-2`}
                    onClick={
                      location.available
                        ? () => {
                            window.location.assign(location.pickuplink);
                          }
                        : () => {
                            navigate("/location");
                          }
                    }
                  >
                    <p
                      className={` font-nexa_bold text-[14px] ${
                        location.available
                          ? "text-white "
                          : "text-black w-fit  "
                      }   `}
                    >
                      {location.available ? "PICK UP" : "COMING SOON"}
                    </p>
                  </button>
                  {location.available ? (
                    <button
                      className={` bg-black rounded-lg  border-[0.1vw] border-gray-300 flex justify-center w-[40%] mx-auto py-2`}
                      onClick={() => {
                        window.location.assign(location.delivery);
                      }}
                    >
                      <p className="text-white font-nexa_bold text-[14px] ">
                        DELIVERY
                      </p>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="">
                <div className="py-4">
                  <p className=" font-nexa_bold text-start">OPERATION HOURS</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">MONDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">TUESDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">WESNESDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">THURDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">FRIDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">SATURDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
                <div className="grid grid-cols-2 gap-[10vw] w-full">
                  <p className=" font-nexa_bold text-start">SUNDAY</p>
                  <p className=" font-nexa text-start">10AM - 9PM</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="w-full h-[1px] bg-black pv:max-md:hidden"></div>
      <div className="grid grid-cols-2 gap-[1vw] pt-6 overflow-x-scroll pv:max-md:hidden ">
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
        )}
      </div>
      <div className="w-[100%] mx-auto pt-20 pv:max-md:hidden">
        <div className="h-[500px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh]">
          <div className="h-[800px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh] relative">
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
