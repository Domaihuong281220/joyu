/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { path } from "../../../../../utils/Constant";

import { Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { toast } from "sonner";
const CategoriesManage = () => {
  const navigate = useNavigate();
  // Call API data
  const data = [];
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    handlergetCategoryList();
  }, []);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const [messageApi, contextHolder] = message.useMessage();

  const handleAPIDeleteCategory = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/categories/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("delete category success");
          handlergetCategoryList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlergetCategoryList = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/categories/`)
      .then((res) => {
        setcategoryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditCategory = (record) => {
    navigate("../" + path.CATEGORYEDIT + `/${record._id}`, {
      state: record,
    });
  };

  // Declare label for vairiable
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      fixed: "left",
      width: 100,
    },
    {
      title: "Name Category",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      // filters: [
      //   {
      //     text: "Liem",
      //     value: "Liem",
      //   },
      // ],
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.name.includes(value),
      // onFilter: (name, record) => record.name.indexOf(name) === 0,
    },
    // {
    //   title: "Image",
    //   dataIndex: "img",
    //   key: "img",
    //   render: (_, record) => (
    //     <div className="flex items-center justify-center">
    //       <div className="w-[200px] h-[200px]">
    //         <img
    //           src={record?.img}
    //           className="object-contain w-full h-full"
    //         ></img>
    //       </div>
    //     </div>
    //   ),
    // },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <Button
            className=" "
            type="default"
            onClick={() => handleEditCategory(record)}
          >
            <p className="">Edit</p>
          </Button>

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this category?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => handleAPIDeleteCategory(record._id)}
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

  for (let i = 0; i < categoryData.length; i++) {
    data.push({
      id: categoryData[i].id,
      namecategories: categoryData[i].name,
      title: categoryData[i].title,
    });
  }
  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">CATEGORIES MANAGE</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <Button
                type="primary"
                className="w-auto h-auto p-2 flex items-center gap-x-2"
                onClick={() => {
                  navigate("../" + path.CATEGORYADD);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Categories</p>
              </Button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={categoryData}
              pagination={{ pageSize: 15, position: ["bottomCenter"] }}

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

export default CategoriesManage;
