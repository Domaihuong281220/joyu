/** @format */
// @ts-expect-error

import React, { useState, useEffect } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
// import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Radio, message } from "antd";
import { isValidInputsUser } from "../../../../helpers/validInputs";
import { path } from "../../../../utils/Constant";
const CreateLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    website: "",
  });
  // console.log(formData)
  // const handleCreateLocation = async () => {
  //   try {
  //     const response = await axios.post(
  //       // `${process.env.REACT_APP_SERVER_URL}/user`,
  //       `${process.env.REACT_APP_SERVER_URL}/locations`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-secret-key": "Domoishi2024",
  //         },
  //       }
  //     );

  //     if (Object.keys(response.data).length < 2) {
  //       toast.error(response.data.error);
  //     } else {
  //       toast.success("Create new localtion successfully!");
  //       navigate("../" + path.LOCATIONMANAGE);
  //     }
  //   } catch (error) {
  //     console.error("create failed:", error);
  //   }
  // };

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">Create Location</p>

          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="flex pb-8">
            <p className="text-3xl">Create Location</p>
          </div>{" "}
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">location Name</p>
            <input
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="location name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Location Detail</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="location detail"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="phonenumber"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Link Order</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="link order"
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              // onClick={() => handleCreateLocation()}
            >
              <p className="">Save</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-red-50 border-2 border-red-300 rounded-lg hover:bg-red-200 hover:shadow-lg"
              // onClick={() => navigate(-1)}
            >
              <p className="">Cancel</p>
            </button>
          </div>
        </div>
        {/* End form Add User */}
      </div>
      {/* End form Add User */}
    </div>
  );
};

export default CreateLocation;
