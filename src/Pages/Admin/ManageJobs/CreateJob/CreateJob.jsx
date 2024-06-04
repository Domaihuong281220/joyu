/** @format */

import React, { useState } from "react";
import {  Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";
// import { isValidInputCategory } from "../../../../helpers/validInputs";

const CreateJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    position: "",
    description: "",
    availability: "",
    linkform: "",
  });

  const handleCreateJob = async (id) => {
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/joyu/careers`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Create new job successfully!");

          navigate("../" + path.JOBMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Create job wrong: " + err.message);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> CREATE JOB</p>
        </div>
        {/* Start form add categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Job</p>
            <Input
              type="text"
              className="w-full h-auto p-2 border-[1px] border-gray-200"
              placeholder="Name Job"
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Description</p>
            <textarea
              className="w-full h-[100px] border-[1px] p-2"
              placeholder="Subtitle"
              maxLength="260"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <div className="text-right w-full text-sm text-gray-600">
              {formData.description.length}/260
            </div>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Availability</p>
            <input
              className=" border-[1px] p-2"
              placeholder="Subtitle"
              type="checkbox"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  availability: e.target.checked,
                });
              }}
            />
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </button>
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => handleCreateJob()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
