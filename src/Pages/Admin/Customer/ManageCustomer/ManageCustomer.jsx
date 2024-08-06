/** @format */
import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../utils/Constant";
import { Button, Popconfirm, Modal, Spin } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { isValidInputsignUpFooter } from "../../../../utils/common/validators";

const ManageCustomer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [userData, setUserData] = useState([]);
  const [ismarked, setIsMasked] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //Add Customer
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    let check = isValidInputsignUpFooter(formData, toast);

    if (check === true) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/joyu/customer`,
          formData
        );

        if (response.status === 200) {
          toast.success("Thank you for subscribing!");
          setIsModalOpen(false);
          handlegetUsers();
          setIsLoading(false);
        } else {
          toast.error("Something went wrong, please try again!");
        }
      } catch (err) {
        if (err.response && err.response.status === 409) {
          // Assuming 409 Conflict for email already exists
          toast.error("Email already exists!");
        } else {
          toast.error("An unexpected error occurred!");
        }
        console.log(err);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let check = isValidInputsignUpFooter(formData, toast);

    if (check === true) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/joyu/customer`,
          formData
        );
        if (response.status === 200) {
          toast.success("Thank you for subscribing!");
        } else {
          toast.error("Email already exists!");
        }
      } catch (err) {
        toast.error("Email already exists!");
        console.log(err);
      }
    }
  };
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
        const usersWithStt = response.data.map((user, index) => ({
          ...user,
          stt: index + 1,
        }));
        setUserData(usersWithStt);
        setIsLoading(false);
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
          setIsLoading(false);
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

  // navigate
  const navigate = useNavigate();
  // Declare label for table
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      fixed: "left",
    },
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

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this customer?"
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
            <Button danger>Delete</Button>
          </Popconfirm>
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
              <Button
                className="w-auto h-auto p-2  flex items-center gap-x-2"
                type="primary"
                onClick={() => navigate("../" + path.CREATECUSTOMER)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
                    class="clr-i-solid clr-i-solid-path-1"
                  />
                  <path
                    fill="currentColor"
                    d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
                    class="clr-i-solid clr-i-solid-path-2"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <p className="">Send email</p>
              </Button>
            </div>

            {/* Add Customer */}
            <div>
              <>
                <Button type="primary" onClick={showModal}>
                  +
                </Button>
                <Modal
                  title="Add Customer"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex justify-start items-center  "
                  >
                    <input
                      className="font-nexa_light h-[100%] text-black  text-[1vw]  px-6 py-[0.5vw] w-full rounded-xl border border-green-300 "
                      placeholder="Enter customer email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleOk();
                        }
                      }}
                    />
                  </form>
                </Modal>
              </>
            </div>
          </div>
          {isLoading ? (
            <Spin></Spin>
          ) : (
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
          )}
        </div>
      </div>

      {/* End Table User List */}
    </div>
  );
};

export default ManageCustomer;
