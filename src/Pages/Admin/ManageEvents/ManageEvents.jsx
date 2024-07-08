/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { path } from "../../../utils/Constant";
import { Button, Popconfirm  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {replaceNewlinesWithBreaks} from '../../../utils/Constant'
const ManageEvents = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);

  const handleEditEvents = (record) => {
    navigate("../" + path.EDITEVENT + `/${record._id}`, {
      state: record,
    });
  };

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    handlegetNews();
  }, []);

  // Call API

  // Get News
  const handlegetNews = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/news`)
      .then((res) => {
        setNewsData(res.data.data);
        // console.log(res.data.count,"respone");

        // setNewsData(sortedData);
      })
      .catch((err) => {
        setNewsData([]);
        console.log(err);
      });
  };

  // Delete News

  const hanldedeleNews = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/news/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete news successfully!");
          handlegetNews();
          navigate("../" + path.EVENTMANAGE);
          handlegetNews();
        }
      })
      .catch((err) => {
        toast.error("Delete news wrong: " + err.message);
      });
  };

  const columns = [
    {
      title: "News",
      dataIndex: "title",
      key: "title",
      fixed: "left",
      width: 100,
    },
    {
      title: "Image Title",
      dataIndex: "titlepic",
      key: "titlepic",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${record.titlepic}`}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
      width: 100,
    },

    {
      title: "Image Detail",
      dataIndex: "detailpic",
      key: "detailpic",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${record.detailpic}`}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
      width: 100,
    },

    {
      title: "Description",
      dataIndex: "longdescription",
      key: "longdescription",

      render : (e)=>{
        return <p
        className="text-start pv:max-md:text-[8vw]"
        dangerouslySetInnerHTML={{
          __html: replaceNewlinesWithBreaks(e),
        }}
      ></p>
      }
    },
    {
      title: "short Description",
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

          <Popconfirm placement="rightTop"
                      title="Confirm Deletion" 
                       description="Are you sure you want to delete this event?"
                        okText="Delete"
                        cancelText="Cancel"
                        onConfirm={() => hanldedeleNews(record._id)}
                       icon={
                        <QuestionCircleOutlined
                          style={{
                            color: 'red',
                          }}
                        /> }>
                             <button>Delete</button>
      </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      {contextHolder}

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
              dataSource={newsData}
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
