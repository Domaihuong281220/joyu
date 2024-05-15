/** @format */

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";
import { isValidInputsUser } from "../../../../helpers/validInputs";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";
import { Input } from "antd";
const UserEdit = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  let userDetail = location.state;
  // console.log(userDetail);
  const [formData, setFormData] = useState({
    username: userDetail.username,
    phonenumber: userDetail.phonenumber,
    newpassword: userDetail.password,
    // newpassword: userDetail.password,
  });
  // console.log(formData);
  const handleEdit = async () => {
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/user/reset-password`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
            "x-secret-key": "Domoishi2024",
          },
        }
      )

      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit User successfully!");

          navigate("../" + path.USERMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Edit user wrong: " + err.message);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">USER EDIT</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        {/* Start Tabs User Edit */}

        <div className="bg-white border-[1px] rounded-md w-[50%] mx-auto p-10">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">User Name</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="User Name"
              defaultValue={userDetail.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <Input
              className="w-full h-auto"
              placeholder="Phone Number p-2"
              defaultValue={userDetail.phonenumber}
              onChange={(e) => {
                setFormData({ ...formData, phonenumber: e.target.value });
              }}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Current Password</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Current Password"
              defaultValue={userDetail.newpassword}
              onChange={(e) => {
                setFormData({ ...formData, newpassword: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={() => {
                handleEdit();
              }}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
