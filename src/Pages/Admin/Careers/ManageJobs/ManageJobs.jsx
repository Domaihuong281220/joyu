/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message, Select, Spin } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Loading } from "../../../../components";
import { replaceNewlinesWithBreaks, path } from "../../../../utils/Constant.js";
import { Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const ManageJobs = () => {
  const navigate = useNavigate();
  const [CareersData, setCareersData] = useState([]);
  const [positions, setPositions] = useState([]);
  const [status, setStatus] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState({
    key: "All",
    value: "All",
  });
  const [selectedStatus, setSelectedStatus] = useState({
    key: "All",
    value: "All",
  });

  const handleEditJob = async (record) => {
    navigate("../" + path.EDITJOB + `/${record._id}`, {
      state: record,
    });
  };

  const [filterData, setFilterData] = useState({
    availability: "All",
    position: "All",
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    handlegetCareers();
    handlegetpositon();
    handlegetavailability();
  }, []);

  // Call API

  // Get News

  const handlegetCareers = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers`)
      .then((res) => {
        setCareersData(res.data.data);
        const tempArr = [];
        const availabilityValues = [
          ...new Set(CareersData.map((item) => item.availability)),
        ];

        for (let index = 0; index < availabilityValues?.length; index++) {
          const element = availabilityValues[index];
          tempArr.push({
            key: element,
            label: element,
          });
          setStatus(tempArr);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlegetpositon = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers/positions`)
      .then((res) => {
        const tempArr = [];
        for (let index = 0; index < res.data.data?.length; index++) {
          const element = res.data.data[index];
          tempArr.push({
            key: element,
            label: element,
          });
          setPositions(tempArr);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlegetavailability = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/careers/availability`)
      .then((res) => {
        const tempArr = [];
        for (let index = 0; index < res.data.data?.length; index++) {
          const element = res.data.data[index];
          tempArr.push({
            key: element,
            label: element,
          });
          setStatus(tempArr);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handlefilter = async () => {
    try {
      const response = await axios.post(
        // `${process.env.REACT_APP_SERVER_URL}/user`,
        `${process.env.REACT_APP_SERVER_URL}/joyu/careers/filter`,
        filterData
      );

      setCareersData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("create failed:", error);
    }
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
      render : (e)=>{
        return <p
        className="text-start pv:max-md:text-[8vw]"
        dangerouslySetInnerHTML={{
          __html: replaceNewlinesWithBreaks(e),
        }}
      ></p>
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

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this job?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => handledeleCareers(record._id)}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
          >
            <button>Delete</button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">JOBS MANAGE</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="flex items-center  px-4 py-4 gap-4 justify-between">
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
            <div className="flex gap-2 items-center">
              <Button
                className="flex items-center gap-2"
                type="primary"
                onClick={() => {
                  handlegetCareers();
                  setSelectedJobTitle({ key: "All", value: "All" });
                  setSelectedStatus({ key: "All", value: "All" });
                }}
              >
                <p className="">refresh All</p>
                <Icon icon={"mdi:reload"}></Icon>
              </Button>
              <Select
                style={{
                  width: 300,
                  height: 40,
                }}
                value={selectedJobTitle}
                placeholder={"Selected Position"}
                onChange={(value) => {
                  setSelectedJobTitle({
                    ...selectedJobTitle,
                    value: value,
                  });
                  setFilterData({ ...filterData, position: value });
                }}
              >
                <Select.Option key={"All"} value={"All"}>
                  All
                </Select.Option>
                {positions.map((position) => (
                  <Select.Option key={position.key} value={position.value}>
                    {position.value}
                  </Select.Option>
                ))}
              </Select>

              <Select
                style={{
                  width: 300,
                  height: 40,
                }}
                placeholder={"Selected status "}
                value={selectedStatus}
                onChange={(value) => {
                  setSelectedStatus({
                    ...selectedStatus,
                    value: value,
                  });
                  setFilterData({ ...filterData, availability: value });
                }}
              >
                <Select.Option key={"All"} value={"All"}>
                  All
                </Select.Option>
                {status.map((availability) => (
                  <Select.Option
                    key={availability.key}
                    value={availability.value}
                  >
                    {availability.key === "true" ? "Available" : "Unavailable"}
                  </Select.Option>
                ))}
              </Select>

              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  handlefilter();
                }}
              >
                <Icon
                  icon="material-symbols-light:search"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Find Job</p>
              </button>
            </div>
          </div>

          {isLoading ? (
            <Spin></Spin>
          ) : (
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
          )}
        </div>
        {/* End table categories Manage */}
      </div>
    </div>
  );
};

export default ManageJobs;
