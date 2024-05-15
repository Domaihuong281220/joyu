/** @format */
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import { path } from "../../../../utils/Constant";
const ManageUser = () => {
  console.log("hihi");
  // const [messageApi, contextHolder] = message.useMessage();
  // const [userData, setUserData] = useState([]);
  const [ismarked, setIsMasked] = useState(true);
  // API Get ALL user
  // const handlegetUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_SERVER_URL}/users`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-secret-key": "Domoishi2024",
  //         },
  //       }
  //     );

  //     if (response.status === 200 || response.status === 201) {
  //       setUserData(response.data);
  //     } else {
  //       setUserData([]);
  //     }
  //   } catch (error) {
  //     console.log("error ", error);
  //   }
  // };
  // API delete User

  // const handledeleUser = async (id) => {
  //   await axios
  //     .delete(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "x-secret-key": `${process.env.REACT_APP_SECRET_KEY}`,
  //         "x-secret-key": "Domoishi2024",
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         toast.success("Delete User successfully!");
  //         handlegetUsers();
  //         navigate("../" + path.USERMANAGE);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error("Delete User wrong: " + err.message);
  //     });
  // };
  // useEffect(() => {
  //   handlegetUsers();
  // }, []);
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
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditUser(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            // onClick={() => handledeleUser(record._id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  // Mock data
  const data = [
    {
      key: "1",

      name: "John Doe",
      username: "John Doe",
      phonenumber: "0909090909",
      role: "Admin",
      dateofbirth: "20/12/2000",
      password: "123456",
    },
  ];

  // useEffect(() => {
  //   handleGetUserList();
  // }, []);

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">USER LIST</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATEUSER)}
              >
                <Icon icon="mdi:user-add" width={24} height={24}></Icon>

                <p className="">Add New User</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={data}
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
