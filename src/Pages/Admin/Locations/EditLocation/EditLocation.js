/** @format */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "antd";

const EditLocation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state;
  console.log(data);
  const [formData, setFormData] = useState({
    name: data.name,
    address: data.address,
    phone: data.phone,
    pickuplink: data.pickuplink,
    deliverylink: data.deliverylink,
    available: data.available,
  });

  const handleEdit = async (id) => {
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locations/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-secret-key": "Domoishi2024",
          },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit Location successfully!");
          navigate("../" + path.LOCATIONMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Edit Location wrong: " + err.message);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">LOCATION EDIT</p>
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
            <p className="text-lg">Location Name</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Location Name"
              defaultValue={data.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Location Detail</p>
            <Input
              className="w-full h-auto"
              placeholder="Location Detail"
              defaultValue={data.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Phone Number"
              defaultValue={data.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Pickup Link</p>
            <Input
              className="w-full h-auto"
              placeholder="Pickup Link"
              defaultValue={data.pickuplink}
              onChange={(e) => {
                setFormData({ ...formData, pickuplink: e.target.value });
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Delivery Link</p>
            <Input
              className="w-full h-auto"
              placeholder="Delivery Link"
              defaultValue={data.deliverylink}
              onChange={(e) => {
                setFormData({ ...formData, deliverylink: e.target.value });
              }}
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

export default EditLocation;
