import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const CardLocationMobile = ({
  title,
  address,
  phone,
  delivery,
  pickup,
  available,
  hours,
}) => {
  const navigate = useNavigate();

  // Function to format hours data
  const formatHours = (hours) => {
    const formattedHours = {};
    // Loop through each day
    for (let day in hours) {
      if (hours[day].start !== "" && hours[day].end !== "") {
        formattedHours[day] = {
          open: formatTime(hours[day].start),
          close: formatTime(hours[day].end),
        };
      } else {
        formattedHours[day] = { open: "Closed", close: "" };
      }
    }
    return formattedHours;
  };

  // Function to format time from 24h to AM/PM
  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hourNum = parseInt(hours, 10);
    const suffix = hourNum >= 12 ? "PM" : "AM";
    const formattedHour =
      hourNum === 0 ? 12 : hourNum > 12 ? hourNum - 12 : hourNum;
    return `${formattedHour}:${minutes} ${suffix}`;
  };

  const formattedHours = formatHours(hours);

  return (
    <div className="py-3">
      <div className="flex flex-col gap-4">
        <p className="text-[4.1vw] font-nexa font-bold text-start">{title}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Icon className="h-6 w-6" icon={"mdi:location"}></Icon>
            <p className="font-light text-start ">{address}</p>
          </div>
          <div className="flex items-center gap-4">
            <Icon className="h-6 w-6" icon={"ic:baseline-phone"}></Icon>
            <p className="font-light text-start">{phone}</p>
          </div>
        </div>
        <div className="flex items-center pv:max-md:w-[90%] justify-center gap-2 pv:max-md:gap-0 pt-[5vw] ">
          <button
            className={` ${
              available === true ? "bg-primary " : "bg-white w-fit"
            } rounded-lg border-[0.1vw] border-gray-300 flex justify-center items-center w-[40%] pv:max-md:w-[35vw]   py-[2.5vw]`}
            onClick={
              available
                ? () => {
                    window.location.assign(pickup);
                  }
                : () => {
                    navigate("/location");
                  }
            }
          >
            <p
              className={` font-nexa_bold text-[14px] ${
                available ? "text-white " : "text-black w-fit  text-start "
              }   `}
            >
              {available ? "PICK UP" : "COMING SOON"}
            </p>
          </button>
          {available ? (
            <button
              className={` bg-black rounded-lg py-[2.5vw] border-[0.1vw] pv:max-md:w-[35vw] border-gray-300 flex justify-center w-[40%] mx-auto`}
              onClick={() => {
                window.location.assign(delivery);
              }}
            >
              <p className="text-white font-nexa_bold text-[14px] ">DELIVERY</p>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="">
        <div className="py-4">
          <p className=" font-nexa_bold text-start text-[5.5vw]">
            OPERATION HOURS
          </p>
        </div>

        {Object.keys(formattedHours).map((day) => (
          <React.Fragment key={day}>
            <div className="grid grid-cols-5 gap-[10vw] pv:max-md:gap-0 w-full">
              <p className="font-nexa_bold pv:max-md:text-[4vw] text-start col-span-2">
                {day.toUpperCase()}
              </p>
              <p className="font-nexa pv:max-md:text-[4vw] text-start col-span-3">
                {formattedHours[day].open === "Closed"
                  ? "Closed"
                  : `${formattedHours[day].open} - ${formattedHours[day].close}`}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="h-[0.3vw] w-full bg-gray-800 mt-[10vw] mb-[3vw]"></div>
    </div>
  );
};

export default CardLocationMobile;
