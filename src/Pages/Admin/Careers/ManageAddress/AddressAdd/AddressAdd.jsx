/** @format */

import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";

const AddressAdd = () => {
  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [careersPosition, setcareersPosition] = useState([]);

  const [formData, setFormData] = useState({
    careerId: "",
    address: "",
    availability: "false",
  });
  const handlePostionChange = (e) => {
    const selectedposition = e.target.value;
    const positionobj = careers.filter(
      (position) => position.position === selectedposition
    );

    setFormData({ ...formData, careerId: positionobj[0]._id });
  };

  useEffect(() => {
    handlegetCareer();
    // console.log(formData);
  }, []);

  const handlegetCareer = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers`)
      .then((res) => {
        const positions = res.data.data.map((career) => career.position);
        setCareers(res.data.data);

        setcareersPosition(positions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/address`,
        formData
      );

      if (response.status === 201) {
        navigate("../" + path.MANAGEADDRESS);
        toast.success("Address created successfully!");
      } else {
        toast.error("Failed to create address.");
      }
    } catch (error) {
      toast.error("Failed to create address: " + error.message);
    }
  };

  return (
    <div className="">
      {/* Start Form Create Product */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> Create Address</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <Input
              className="w-full h-full border-[1px] p-2"
              placeholder="Address"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Position</p>
            <Select
              icon={false}
              placeholder="Please select position"
              className="border-[1px] p-2 w-full h-auto"
              onChange={handlePostionChange}
            >
              {careersPosition.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Availability</p>
            <input
              className=" border-[1px] p-2"
              placeholder="Subtitle"
              type="checkbox"
              onChange={(e) => {
                setFormData({ ...formData, availability: e.target.checked });
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
              onClick={() => handleUpload()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>

      {/* End Form Create Product  */}
    </div>
  );
};

export default AddressAdd;
