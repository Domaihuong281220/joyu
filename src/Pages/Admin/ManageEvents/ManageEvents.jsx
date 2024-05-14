/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";

import { useNavigate } from "react-router-dom";
import { path } from "../../../utils/Constant";
import img_1 from "../../../assets/news_1.png";
import img_2 from "../../../assets/news_2.png";
const ManageEvents = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const mockdata = [
    {
      title: "LOVE IS BREWING AT JOYU TEA & COFFEE.",
      titlepic: img_1,
      detailpic: img_1,
      longdescription:
        "$2 Off Any 2 Drinks + Croffle this February! Indulge in a Variety of Special Slushy Drinks, Traditional Milk Teas, and Vietnamese Phin Brewed Coffee along with a Delicious Range of Pastries. Offer Valid from 02/01 to 02/29",
      shortdescription:
        "$2 Off Any 2 Drinks + Croffle this February! Indulge in a Variety of Special Slushy Drinks, Traditional Milk Teas, and Vietnamese Phin Brewed Coffee along with a Delicious Range of Pastries. Offer Valid from 02/01 to 02/29.",
    },
    {
      title:
        "THE HOT CHOCOLATE CHRONICLES: A WINTER TALE OF DECADENT DELIGHTS AT JOYU TEA & COFFEE.",
      titlepic: img_2,
      detailpic: img_2,
      longdescription:
        "Join us at Joyu Tea & Coffee for The Hot Chocolate Chronicles, a limited-time series of indulgent winter hot chocolates, including Hot S’Mores Delight, Strawberry Snowfall, Taro Chocolate, and Matcha Chocolate. Hurry in to experience these seasonal delights before they disappear in March 2024!",
      shortdescription:
        "Join us at Joyu Tea & Coffee for The Hot Chocolate Chronicles, a limited-time series of indulgent winter hot chocolates, including Hot S’Mores Delight, Strawberry Snowfall, Taro Chocolate, and Matcha Chocolate. Hurry in to experience these seasonal delights before they disappear in March 2024!",
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleEditEvents = (record) => {
    navigate("../" + path.EDITEVENT + `/${record._id}`, {
      state: record,
    });
  };

  const [messageApi, contextHolder] = message.useMessage();

  // useEffect(() => {
  //   handlegetNews();
  // }, []);

  // Call API

  // Get News
  // const handlegetNews = async () => {
  //   await axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/news`)
  //     .then((res) => {
  //       setNewsData(res.data.data);
  //       console.table(newsData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Delete News

  // const hanldedeleNews = async (id) => {
  //   await axios
  //     .delete(`${process.env.REACT_APP_SERVER_URL}/news/${id}`)
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         toast.success("Delete news successfully!");
  //         handlegetNews();
  //         navigate("../" + path.EVENTMANAGE);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("Delete news wrong: " + err.message);
  //     });
  // };

  const columns = [
    {
      title: "News",
      dataIndex: "title",
      key: "title",
      fixed: "left",
      width: 200,
    },
    {
      title: "Image Title",
      dataIndex: "titlepic",
      key: "titlepic",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              // src={`${process.env.REACT_APP_SERVER_URL}/${record.titlepic}`}
              src={record.titlepic}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },
    {
      title: "Image Detial",
      dataIndex: "detailpic",
      key: "detailpic",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              // src={`${process.env.REACT_APP_SERVER_URL}/${record.detailpic}`}
              src={record.detailpic}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },

    {
      title: "Description",
      dataIndex: "longdescription",
      key: "longdescription",
    },
    {
      title: "Short Description",
      dataIndex: "shortdescription",
      key: "shortdescription",
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditEvents(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            // onClick={() => hanldedeleNews(record._id)}
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
          <p className="text-2xl">NEWS MANAGEMENT</p>
        </div>
        {/* Start Table Product Manage */}
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4 ">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.CREATEVENT);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add News</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={mockdata}
              pagination={{ pageSize: 5, position: ["bottomCenter"] }}
              // scroll={{
              //   x: 1500,
              // }}
            />
          </div>
        </div>
        {/* End Table Product Manage */}
      </div>
    </div>
  );
};

export default ManageEvents;
