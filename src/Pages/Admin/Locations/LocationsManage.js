/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Table } from "antd";
const LocationsManage = () => {
  const [locationData, setlocationData] = useState([]);

  const handlegetLocations = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locations`
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "x-secret-key": "Domoishi2024",
        //   },
        // }
      );

      if (response.status === 200 || response.status === 201) {
        setlocationData(response.data);
      } else {
        setlocationData([]);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  console.log(locationData);
  const handleDeleteLocation = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/locations/${id}`, {
        headers: {
          "Content-Type": "application/json",
          // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
          "x-secret-key": "Domoishi2024",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete Locations successfully!");
          handlegetLocations();
          navigate("../" + path.LOCATIONMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Delete Location wrong: " + err.message);
      });
  };
  useEffect(() => {
    handlegetLocations();
  }, []);

  const handleEditLoaction = (record) => {
    navigate("../" + path.EDITLOCATION, {
      state: record,
    });
  };
  const navigate = useNavigate();
  const columns = [
    {
      title: "Location Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },

    {
      title: "Location Detail",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },

    // {
    //   title: "Link Order",
    //   dataIndex: "website",
    //   key: "website",
    // },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditLoaction(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => handleDeleteLocation(record._id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">Location List</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATELOCATION)}
              >
                <Icon
                  icon="material-symbols:add-location"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Create New Location</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={locationData}
                pagination={{ pageSize: 5, position: ["bottomCenter"] }}
                scroll={{
                  x: "max-content",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* End Table User List */}
    </div>
  );
};

export default LocationsManage;
