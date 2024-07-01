/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

import { Icon } from "@iconify/react";
import { Table } from "antd";
// import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { path } from "../../../../../utils/Constant";
import imgCate_1 from "../../../assets/cate_1.png";
import { path } from "../../../utils/Constant";
// import imgCate_2 from "../../../../../assets/cate_2.png";
// import imgCate_3 from "../../../../../assets/cate_3.png";
// import imgCate_4 from "../../../../../assets/cate_4.png";
// import imgCate_5 from "../../../../../assets/cate_5.png";

const HomePageBanner = () => {
  const navigate = useNavigate();
  const handleEdit = async (record) => {
    navigate("../" + path.HOMEPAGEBANNEREDIT + `/${record._id}`, {
      state: record,
    });
  };

  const columns = [
    {
      title: "Type",
      dataIndex: "bannerType",
      key: "bannerType",
      fixed: "left",
      width: 200,
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${record.image}`}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEdit(record)}
          >
            <p className="">Edit</p>
          </button>
        </div>
      ),
    },
  ];
  const [data, setData] = useState();

  const handlegetHomePageBanner = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/banner`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handlegetHomePageBanner();
  }, []);
  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">Home Page Banner</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5, position: ["bottomCenter"] }}

              // scroll={{
              //   x: "max-content",
              // }}
            />
          </div>
        </div>
        {/* End table categories Manage */}
      </div>
    </div>
  );
};

export default HomePageBanner;
