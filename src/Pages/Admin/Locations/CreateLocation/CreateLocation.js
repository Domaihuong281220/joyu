/** @format */
// @ts-expect-error

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { toast } from "sonner";
// import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "antd";
import { isValidInputCreateLocation } from "../../../../utils/common/validators";
import { path } from "../../../../utils/Constant";
const CreateLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    pickuplink: "",
    deliverylink: "",
    available: false,
    hours: {
      monday: { start: "", end: "" },
      tuesday: { start: "", end: "" },
      wednesday: { start: "", end: "" },
      thursday: { start: "", end: "" },
      friday: { start: "", end: "" },
      saturday: { start: "", end: "" },
      sunday: { start: "", end: "" },
    },
  });
  // console.log(formData)
  const handleCreateLocation = async () => {
    let check = isValidInputCreateLocation(formData, toast);
    if (check) {
      try {
        const response = await axios.post(
          // `${process.env.REACT_APP_SERVER_URL}/user`,
          `${process.env.REACT_APP_SERVER_URL}/joyu/locations`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              "x-secret-key": "Domoishi2024",
            },
          }
        );

        if (Object.keys(response.data).length < 2) {
          toast.error(response.data.error);
        } else {
          toast.success("Create new localtion successfully!");
          navigate("../" + path.LOCATIONMANAGE);
        }
      } catch (error) {
        console.error("create failed:", error);
      }
    }
  };

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleHoursChange = (day, type, value) => {
    const newHours = {
      ...formData.hours,
      [day]: { ...formData.hours[day], [type]: value },
    };

    if (type === "end" && newHours[day].start && value < newHours[day].start) {
      setErrors({
        ...errors,
        [day]: "End time cannot be earlier than start time.",
      });
    } else {
      setErrors({ ...errors, [day]: "" });
    }

    setFormData({ ...formData, hours: newHours });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">Create Location</p>

          <Button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </Button>
        </div>

        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="flex pb-8">
            <p className="text-3xl">Create Location</p>
          </div>{" "}
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">location Name</p>
            <input
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Location name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Location Detail</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Location detail"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Phone number"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Pickup link</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Pickup link"
              onChange={(e) =>
                setFormData({ ...formData, pickuplink: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Delivery link</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Delivery link"
              onChange={(e) =>
                setFormData({ ...formData, deliverylink: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Available</p>
            <input
              type="checkbox"
              className="w-4 h-4"
              checked={formData.available}
              onChange={(e) =>
                setFormData({ ...formData, available: e.target.checked })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Operating Hours</p>
            {Object.keys(formData.hours).map((day) => (
              <div key={day} className="flex justify-between w-full">
                <p className="capitalize">{day}</p>
                <div className="flex gap-x-2 items-center">
                  <input
                    type="time"
                    className="border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400"
                    value={formData.hours[day].start}
                    onChange={(e) =>
                      handleHoursChange(day, "start", e.target.value)
                    }
                  />
                  <input
                    type="time"
                    className="border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400"
                    value={formData.hours[day].end}
                    onChange={(e) =>
                      handleHoursChange(day, "end", e.target.value)
                    }
                  />
                </div>
                {errors[day] && (
                  <p className="text-red-500 text-sm">{errors[day]}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <Button
              className="w-auto h-auto py-2 px-4  "
              type="primary"
              onClick={() => handleCreateLocation()}
            >
              <p className="">Save</p>
            </Button>

            <Button
              className="w-auto h-auto py-2 px-4 "
              danger
              onClick={() => navigate(-1)}
            >
              <p className="">Cancel</p>
            </Button>
          </div>
        </div>
        {/* End form Add User */}
      </div>
      {/* End form Add User */}
    </div>
  );
};

export default CreateLocation;
