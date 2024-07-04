/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { path } from "../../../utils/Constant";
import { toast } from "sonner";
import { Loading } from "../../../components";
import { replaceNewlinesWithBreaks } from "../../../utils/Constant";
import { Button, Popconfirm  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const ManageJobs = () => {
  const navigate = useNavigate();
  const [CareersData, setCareersData] = useState([]);
  // const [messageApi, contextHolder] = message.useMessage();

  const handleEditJob = async (record) => {
    navigate("../" + path.EDITJOB + `/${record._id}`, {
      state: record,
    });
  };

  const [messageApi, contextHolder] = message.useMessage();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    handlegetCareers();
  }, []);

  // Call API

  // Get News
  const handlegetCareers = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers`)
      .then((res) => {
        setCareersData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete News

  const handledeleCareers = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/careers/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete jobs successfully!");
          handlegetCareers();
          navigate("../" + path.JOBMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Delete jobs wrong: " + err.message);
      });
  };

  const columns = [
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      fixed: "left",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description) => {
        return (
          <div className="">
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceNewlinesWithBreaks(description),
                }}
              />
            </div>
          </div>
        );
      },
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (availability) => (
        <p
          className={`${
            availability === "true" ? "text-green-500" : "text-black"
          }   
            `}
        >
          {availability === "true" ? "Available" : "Unavailable"}
        </p>
      ),
    },
    {
      title: "Responsibility",
      dataIndex: "responsibility",
      key: "responsibility",
      render: (responsibility) => {
        return (
          <div className="">
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceNewlinesWithBreaks(responsibility),
                }}
              />
            </div>
          </div>
        );
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${record.image}`}
              className="object-contain w-full h-full"
              alt={record.name}
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
            className="hover:underline cursor-pointer"
            onClick={() => handleEditJob(record)}
          >
            <p className="">Edit</p>
          </button>

          <Popconfirm placement="rightTop"
                      title="Confirm Deletion" 
                       description="Are you sure you want to delete this job?"
                        okText="Delete"
                        cancelText="Cancel"
                        onConfirm={() => handledeleCareers(record._id)}
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
          <p className="text-2xl">JOBS MANAGE</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.CREATEJOB);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Job</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={CareersData}
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

export default ManageJobs;
