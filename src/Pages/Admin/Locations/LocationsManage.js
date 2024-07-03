import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Table, Modal, Input, Button } from "antd";

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
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditLoaction(record)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => handleDeleteLocation(record._id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async() => {
    setFormData({ ...formData, src: link })
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
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => navigate("../" + path.CREATELOCATION)}
              >
                <Icon
                  icon="material-symbols:add-location"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Create New Location</p>
              </button>
            </div>
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-red-500 hover:border-red-700 flex items-center gap-x-2 hover:shadow-lg"
                onClick={showModal}
              >
                <Icon
                  icon="material-symbols:add-location"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Edit LocationFrame</p>
              </button>
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
