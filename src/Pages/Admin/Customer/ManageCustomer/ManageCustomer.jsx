/** @format */
import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../utils/Constant";
const ManageCustomer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [userData, setUserData] = useState([]);
  const [ismarked, setIsMasked] = useState(true);
  // API Get ALL user
  const handlegetUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/customer`,
        {
          headers: {
            "Content-Type": "application/json", 
            "x-secret-key": "Domoishi2024",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setUserData(response.data);
      } else {
        setUserData([]);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
  // API delete User

  const handledeleUser = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/customer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
          "x-secret-key": "Domoishi2024",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete User successfully!");
          handlegetUsers();
          navigate("../" + path.CUSTOMERMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Delete User wrong: " + err.message);
      });
  };
  useEffect(() => {
    handlegetUsers();
  }, []);
  // console.log(userData);

  // console.log(user)
  const handleEditUser = (record) => {
    navigate("../" + path.EDITUSER, {
      state: record,
    });
  };
  // navigate
  const navigate = useNavigate();
  // Declare label for table
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      fixed: "left",
    },
    
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          {/* <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => handleEditUser(record)}
          >
            <p className="">Edit</p>
          </button> */}

          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => handledeleUser(record._id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  

  // useEffect(() => {
  //   handleGetUserList();
  // }, []);

  return (
    <div className="">
      {contextHolder}

      {/* Start Table UserList */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">CUSTOMERS LIST</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATECUSTOMER)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                <p className="">Send email</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={userData}
                pagination={{ pageSize: 15, position: ["bottomCenter"] }}
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

export default ManageCustomer;
