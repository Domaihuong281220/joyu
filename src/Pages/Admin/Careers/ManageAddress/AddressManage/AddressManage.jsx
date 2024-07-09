/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";
import { Button, Popconfirm, Spin } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";

const AddressManage = () => {
  const navigate = useNavigate();
  const [addressData, setAddressdata] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isloading, setloading] = useState(true);

  const handleGetAddress = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/address`
      );
      const addresses = response.data.data.map((address, index) => ({
        ...address,
        key: index + 1, // Add key property for STT column
      }));
      setAddressdata(addresses);
      setFilteredProducts(addresses); // Initialize filtered products
      setloading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleDeleteAddress = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/address/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete address success");
          handleGetAddress();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditAddress = (record) => {
    navigate("../" + path.ADDRESSEDIT + `/${record._id}`, {
      state: record,
    });
  };

  useEffect(() => {
    handleGetAddress();
  }, []);
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      width: 100,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      fixed: "left",
    },

    {
      title: "Position",
      dataIndex: ["careerId", "position"],
      key: "Position",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",

      render: (e, record) => {
        return (
          <div className="">
            <p
              className={`${
                record.availability === true ? "text-green-500" : "text-red-500"
              }`}
            >
              {record.availability === true ? "Available" : "Unavailable"}
            </p>
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <Button
            type="default"
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditAddress(record)}
          >
            <p className="">Edit</p>
          </Button>

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this Address?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => handleDeleteAddress(record._id)}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">ADDRESS JOB MANAGE</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4">
            <div className="flex items-center gap-x-3">
              <Button
                type="primary"
                className="w-auto h-auto p-2  flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.ADDRESSADD);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Address</p>
              </Button>
            </div>
          </div>
          {isloading ? (
            <Spin></Spin>
          ) : (
            <div className="w-[100%]">
              <Table
                columns={columns}
                dataSource={filteredProducts}
                pagination={{ pageSize: 15, position: ["bottomCenter"] }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressManage;
