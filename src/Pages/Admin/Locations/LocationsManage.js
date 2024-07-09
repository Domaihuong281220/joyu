import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Table, Modal, Input, Button } from "antd";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const LocationsManage = () => {
  const [locationData, setlocationData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    src: "",
  });

  const handlegetLocations = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locations`
      );

      if (response.status === 200 || response.status === 201) {
        setlocationData(response.data);
      } else {
        setlocationData([]);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handleDeleteLocation = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/locations/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": "Domoishi2024",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete Locations successfully!");
          handlegetLocations();
          navigate("../" + path.LOCATIONMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Delete Location wrong: " + err.message);
      });
  };

  const handleGetFrame = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locationframe`
      );
      setLink(response.data[0].src);
      // console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch frame:", error);
    }
  };

  useEffect(() => {
    handlegetLocations();
    handleGetFrame();
  }, []);

  const handleEditLoaction = (record) => {
    navigate("../" + path.EDITLOCATION, {
      state: record,
    });
  };

  const columns = [
    {
      title: "Location Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Location Detail",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <Button className="" onClick={() => handleEditLoaction(record)}>
            <p className="">Edit</p>
          </Button>

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this location?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => handleDeleteLocation(record._id)}
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setFormData({ ...formData, src: link });
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/joyu/locationframe/66619e7176088a4a740dd8a8`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-secret-key": "Domoishi2024",
          },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit Location successfully!");
          navigate("../" + path.LOCATIONMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Edit Location wrong: " + err.message);
      });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">Location List</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <Button
                className="w-auto h-auto p-2  flex items-center gap-x-2 "
                onClick={() => navigate("../" + path.CREATELOCATION)}
                type="primary"
              >
                <Icon
                  icon="material-symbols:add-location"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Create New Location</p>
              </Button>
              <Button
                className="w-auto h-auto p-2 flex items-center "
                onClick={showModal}
              >
                <Icon
                  icon="material-symbols:add-location"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Edit LocationFrame</p>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[95%]">
              <Table
                columns={columns}
                dataSource={locationData}
                pagination={{ pageSize: 5, position: ["bottomCenter"] }}
                scroll={{
                  x: "max-content",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Edit LocationFrame"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <Input
          placeholder="LINK"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default LocationsManage;
