/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { path } from "../../../utils/Constant";
import { toast } from "react-toastify";
import { Loading } from "../../../components";

const ManageJobs = () => {
  const navigate = useNavigate();
  const [CareersData, setCareersData] = useState([]);
  // const [messageApi, contextHolder] = message.useMessage();
  const mockdata = [
    {
      key: "1",
      position: "JOYU STORE MANAGER",
      description:
        " Join the Joyu Tea & Coffee Team as a Store Manager!  Are you a dynamic and experienced leader with a passion for the bubble tea and coffee industry? We are searching for a talented Store Manager to oversee the operations of Joyu Tea & Coffee, ensuring exceptional customer experiences and a smoothly-running store. ",
      responsibilities:
        "Provide exceptional customer service, ensuring that each customer feels welcomed and valued Take orders accurately and efficiently, striving for speed and accuracy in a fast-paced environment  Skillfully prepare a variety of bubble tea and coffee beverages,   following recipes and maintaining quality standards",
      address: "429 Southgate Ave, Virginia Beach, VA 23462",
    },
    {
      key: "2",
      position: "JOYURISTA",
      description:
        " Join the Joyu Tea & Coffee Team as a Joyurista!  Are you passionate about creating delightful experiences for customers? Do you have a knack for crafting the perfect cup of bubble tea or coffee? We are seeking a dedicated and enthusiastic individual to join our team as a Joyurista at Joyu Tea & Coffee!",
      responsibilities:
        " Provide exceptional customer service, ensuring that each customer feels welcomed and valued Take orders accurately and efficiently, striving for speed and accuracy in a fast-paced environment  Skillfully prepare a variety of bubble tea and coffee beverages,   following recipes and maintaining quality standards",
      address: "429 Southgate Ave, Virginia Beach, VA 23462",
    },
  ];
  const handleEditJob = async (record) => {
    navigate("../" + path.EDITJOB + `/${record.key}`, {
      state: record,
    });
  };

  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   handlegetCareers();
  // }, []);

  // Call API

  // Get News
  // const handlegetCareers = async () => {
  //   await axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/careers`)
  //     .then((res) => {
  //       setCareersData(res.data.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Delete News

  // const handledeleCareers = async (id) => {
  //   await axios
  //     .delete(`${process.env.REACT_APP_SERVER_URL}/careers/${id}`)
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         toast.success("Delete jobs successfully!");
  //         handlegetCareers();
  //         navigate("../" + path.JOBMANAGE);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("Delete jobs wrong: " + err.message);
  //     });
  // };

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
    },
    // {
    //   title: "Availability",
    //   dataIndex: "availability",
    //   key: "availability",
    //   render: (availability) => (
    //     <p
    //       className={`${
    //         availability === "true" ? "text-green-500" : "text-black"
    //       }
    //         `}
    //     >
    //       {availability === "true" ? "Available" : "Unavailable"}
    //     </p>
    //   ),
    // },
    {
      title: "Responsibilities",
      dataIndex: "responsibilities",
      key: "responsibilities",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => handleEditJob(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            // onClick={() => handledeleCareers(record._id)}
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

export default ManageJobs;
