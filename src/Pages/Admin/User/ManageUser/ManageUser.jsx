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
import { Button, Popconfirm, Spin } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const ManageUser = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [userData, setUserData] = useState([]);
  const [ismarked, setIsMasked] = useState(true);
  // API Get ALL user
  const handlegetUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/users`,
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
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/user/${id}`, {
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
          navigate("../" + path.USERMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Delete User wrong: " + err.message);
      });
  };
  useEffect(() => {
    handlegetUsers();
  }, []);

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
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: " User Name",
      dataIndex: "username",
      key: "username",
      fixed: "left",
    },
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   key: "avatar",
    //   width: 100,
    //   render: (_, record) => (
    //     <div className="flex items-center justify-center gap-x-2">
    //       <img src={record.avatar} className="w-10 h-10 rounded-full"></img>
    //     </div>
    //   ),
    // },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
      // width: 100,
    },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    //   // width: 200
    // },
    { title: "Role", dataIndex: "role", key: "role" },

    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      render: (password) => {
        return (
          <p className="">
            {ismarked ? "*".repeat(password.length) : password}
          </p>
        );
      },
    },

    // {
    //   title: "Date Of Birth",
    //   dataIndex: "dateofbirth",
    //   key: "dateofbirth",
    //   // width: 100,
    // },

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

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this User?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => handledeleUser(record._id)}
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

  // Mock data
  const data = [
    {
      key: "1",

      name: "John Doe",
      phone: "0909090909",
      role: "Admin",
      dateofbirth: "20/12/2000",
    },
  ];
  // const [userData, setuserData] = useState([]);
  // for (let i = 0; i < userData.length; i++) {
  //   data.push({
  //     key: i,
  //     id: userData[i].id,
  //     name: userData[i].name,
  //     avatar: userData[i].avatar,
  //     phone: userData[i].phone,
  //     address: userData[i].address,
  //     email: userData[i].email,
  //     role: userData[i].role,
  //     dateofbirth: "20/12/2000",
  //     // status: ["Online"],
  //   });
  // }

  // useEffect(() => {
  //   handleGetUserList();
  // }, []);

  return (
    <div className="">
      {contextHolder}

      {/* Start Table UserList */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">USER LIST</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <Button
                type="primary"
                className="w-auto h-auto p-2 rounded-lg  flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATEUSER)}
              >
                <Icon icon="mdi:user-add" width={24} height={24}></Icon>
                <p className="">Add New User</p>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={userData}
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

export default ManageUser;
