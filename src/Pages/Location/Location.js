/** @format */

import React from "react";
import { CardLocation } from "../../components";
import { Icon } from "@iconify/react/dist/iconify.js";
import GoogleMapReact from "google-map-react";

const Location = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="w-[76%] mx-auto pv:max-md:w-[95%] lg:max-xl:w-[95%] pv:max-lg:w-[90%] pb-10">
      <div className="w-[100%] pt-[10vw] mx-auto grid grid-cols-2 pv:max-md:w-[95%] lg:max-xl:w-[95%] pv:max-lg:grid-cols-1">
        <div className="col-span-1  w-[76%] mx-auto pv:max-lg:col-span-1 pv:max-lg:w-[90%]">
          <div className="">
            <p className="text-[30px] font-nexa_bold text-start text-primary">
              LOCATION
            </p>
          </div>

          <div className="w-full flex py-6">
            <input
              className=" p-2 rounded-l-[30px] w-full border-[1px] border-gray-400"
              placeholder="Find A Location By Zip Code Or City, State"
            ></input>
            <button className=" bg-primary p-2">
              <Icon
                icon={"tabler:location-filled"}
                className="w-6 h-6 text-white"
              ></Icon>
            </button>
          </div>
          <div className="pt-10 h-[500px] overflow-y-scroll pv:max-md:h-[300px] lg:max-xl:h-[400px]  xl:max-2xl:h-[550px] ">
            <CardLocation
              title={"Virginia Beach"}
              address={"429 Southgate Ave, Virginia Beach,VA 23462"}
              phone={"(757) 264 888 1"}
              status={"Coming Soon"}
            />
            <CardLocation
              title={"Virginia Beach"}
              address={"429 Southgate Ave, Virginia Beach,VA 23462"}
              phone={"(757) 264 888 1"}
              status={"Pick"}
            />
            <CardLocation
              title={"Virginia Beach"}
              address={"429 Southgate Ave, Virginia Beach,VA 23462"}
              phone={"(757) 264 888 1"}
              status={"Coming Soon"}
            />
            <CardLocation
              title={"Virginia Beach"}
              address={"429 Southgate Ave, Virginia Beach,VA 23462"}
              phone={"(757) 264 888 1"}
              status={"Coming Soon"}
            />
            <CardLocation
              title={"Virginia Beach"}
              address={"429 Southgate Ave, Virginia Beach,VA 23462"}
              phone={"(757) 264 888 1"}
              status={"Coming Soon"}
            />
            <CardLocation
              title={"Virginia Beach"}
              address={"429 Southgate Ave, Virginia Beach,VA 23462"}
              phone={"(757) 264 888 1"}
              status={"Coming Soon"}
            />
          </div>
          <div className="w-full h-[1px] bg-gray-400 mt-2 md:hidden"></div>
        </div>
        <div className="col-span-1 py-10">
          <p className="text-primary font-nexa_bold text-[50px] xl:max-2xl:text-[36px] lg:max-xl:text-[30px] pv:max-sm:text-4xl">
            Working Hour
          </p>
          <div className="flex justify-center gap-10 pt-10 pv:max-sm:hidden">
            <div className="uppercase font-nexa_bold text-[30px] text-start lg:max-xl:text-[20px] xl:max-2xl:text-[24px] md:max-lg:text-[24px] pv:max-md:text-[20px]">
              <p className="">Monday</p>
              <p className="">Tuesday</p>
              <p className="">Wednesday</p>
              <p className="">Thurday</p>
              <p className="">Friday</p>
              <p className="">Saturday</p>
              <p className="">Sunday</p>
            </div>
            <div className="h-[full] w-[1px] bg-black"></div>
            <div className=" font-nexa_light text-[30px] xl:max-2xl:text-[24px] lg:max-xl:text-[20px] md:max-lg:text-[24px] pv:max-md:text-[20px] text-start ">
              <p className="">10AM - 9PM</p>
              <p className="">11AM - 9:30PM</p>
              <p className="">11AM - 9:30PM</p>
              <p className="">11AM - 9:30PM</p>
              <p className="">11AM - 9:30PM</p>
              <p className="">11AM - 9:30PM</p>
              <p className="">10AM - 10PM</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 pt-4 sm:hidden">
            <div className="">
              <p className="uppercase  font-nexa_bold">Monday</p>
              <p className="">10AM - 9PM</p>
            </div>
            <div className="">
              <p className=" font-nexa_bold">Tuesday</p>
              <p className="">10AM - 9PM</p>
            </div>
            <div className="">
              <p className=" font-nexa_bold">Wednesday</p>
              <p className="">10AM - 9PM</p>
            </div>{" "}
            <div className="">
              <p className=" font-nexa_bold">Thurday</p>
              <p className="">10AM - 9PM</p>
            </div>{" "}
            <div className="">
              <p className=" font-nexa_bold">Friday</p>
              <p className="">10AM - 9PM</p>
            </div>{" "}
            <div className="">
              <p className=" font-nexa_bold">Saturday</p>
              <p className="">10AM - 9PM</p>
            </div>
            <div className="">
              <p className=" font-nexa_bold">Sunday</p>
              <p className="">10AM - 9PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto pt-20">
        <div
          className="h-[500px] w-full pv:max-lg:h-[50vh] lg:max-2xl:h-[70vh]"
          // style={{ height: "800px", width: "100%" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB116ei7Yo4JSPj9_7zOVJJc06eykeZRmQ",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Location;
