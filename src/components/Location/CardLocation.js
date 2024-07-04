import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const CardLocation = ({
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
      <div className="flex-col pb-[2vw] pt-[1vw] w-full">
        <div className="flex items-start gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-start uppercase font-nexa_bold text-[1.2vw]">
              {title}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <Icon className="w-[1.2vw] h-[1.2vw]" icon={"mdi:location"} />
                <p className="font-nexa_light text-start text-[1vw]">
                  {address}
                </p>
              </div>
              <div className="flex gap-2">
                <Icon
                  className="w-[1.2vw] h-[1.2vw]"
                  icon={"ic:baseline-phone"}
                />
                <p className="font-nexa_light text-start text-[1vw]">{phone}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              className={` ${
                available === true ? "bg-primary w-[8vw]" : "bg-white w-fit"
              } rounded-lg py-[0.5vw] border-[0.1vw] border-gray-300 flex justify-center`}
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
                className={` font-nexa_bold text-[1vw] ${
                  available ? "text-white " : "text-black w-fit px-[0.5vw] text-center "
                }`}
              >
                {available ? "PICK UP" : "COMING SOON"}
              </p>
            </button>
            {available ? (
              <button
                className={` bg-black rounded-lg w-[8vw] py-[0.5vw] border-[0.1vw] border-gray-300 flex justify-center`}
                onClick={() => {
                  window.location.assign(delivery);
                }}
              >
                
                <p className="text-white font-nexa_bold text-[1vw] ">DELIVERY</p>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="">
          <div className="py-4">
            <p className="text-[1.2vw] font-nexa_bold text-start">WORKING HOURS</p>
          </div>
          <div className="grid grid-cols-2 w-[70%]">
            {Object.keys(formattedHours).map((day) => (
              <React.Fragment key={day}>
                <p className="text-[1.2vw] font-nexa_bold text-start">
                  {day.toUpperCase()}
                </p>
                <p className="text-[1.2vw] font-nexa text-start">
                  {formattedHours[day].open === "Closed"
                    ? "Closed"
                    : `${formattedHours[day].open} - ${formattedHours[day].close}`}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CardLocation;
  