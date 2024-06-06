/** @format */

import React, { useState } from "react";

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
  const handleEdit = async (id) => {
    navigate("../" + path.HOMEPAGEBANNEREDIT + `/${id}`, {
      state: mockdata[id],
    });
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={record.img}
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
            onClick={() => handleEdit(record._id)}
          >
            <p className="">Edit</p>
          </button>
        </div>
      ),
    },
  ];
  const [mockdata, setMockdata] = useState([
    { _id: "dakdhsak", img: imgCate_1 },
  ]);

  //   for (let i = 0; i < categoryData.length; i++) {
  //     data.push({
  //       id: categoryData[i].id,
  //       namecategories: categoryData[i].name,
  //       title: categoryData[i].title,
  //     });
  //   }
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
              dataSource={mockdata}
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
