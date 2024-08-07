/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Input, Select } from "antd";
import { Icon } from "@iconify/react";
import { path } from "../../../../../utils/Constant";

const ProductEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [addressPosition, setaddressPosition] = useState([]);
  const [careers, setCareers] = useState([]);
  const [careersPosition, setcareersPosition] = useState([]);
  const [formData, setFormData] = useState({
    address: data.address,
    position: data.position,
    careerId: data.careerId._id,
    availability: data.availability,
  });

  useEffect(() => {
    handleGetAddress();
    handlegetCareer();
  }, []);

  // const handlegetpositon = async () => {
  //   await axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers/positions`)
  //     .then((res) => {
  //       const tempArr = [];
  //       for (let index = 0; index < res.data.data?.length; index++) {
  //         const element = res.data.data[index];
  //         tempArr.push({
  //           key: element,
  //           label: element,
  //         });
  //         setaddressPosition(tempArr);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Remove duplicate elements
  const getUniquePositions = (positions) => {
    const unique = [];
    const map = new Map();
    for (const position of positions) {
      if (!map.has(position.careerId._id)) {
        map.set(position.careerId._id, true);
        unique.push(position);
      }
    }
    return unique;
  };
  const uniquePositions = getUniquePositions(addressPosition);

  const handleGetAddress = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/address`
      );
      setaddressPosition(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
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
  const handleEdit = async (id) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/joyu/address/${id}`,
        formData
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Address updated successfully!");
        navigate("../" + path.MANAGEADDRESS);
      }
    } catch (err) {
      toast.error("Edit Address failed: " + err.message);
    }
  };
  const handlePostionChange = (e) => {
    const selectedposition = e;

    const positionobj = careers.filter(
      (position) => position.position === selectedposition
    );

    setFormData({ ...formData, careerId: positionobj[0]._id });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">ADDRESS EDIT</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        <div className="bg-white border-[1px] rounded-md w-[50%] mx-auto p-10">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address </p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Product Name"
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Job Position</p>
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
              checked={formData.availability}
              onChange={(e) => {
                setFormData({ ...formData, availability: e.target.checked });
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={() => {
                handleEdit(data._id);
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

export default ProductEdit;
