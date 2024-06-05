/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { path } from "../../../../../utils/Constant";

const ProductManage = () => {
  const navigate = useNavigate();
  const [productData, setproductData] = useState([]);
  const data = [];
  

  for (let i = 0; i < productData.length; i++) {
    data.push({
      key: i,
      id: productData[i].id,
      nameproduct: productData[i].name,
      image: productData[i].image,
      description: productData[i].description,
      price: productData[i].price,
      quatity: "100",
      categories: productData[i].categoryId,
    });
  }

  // Set state for variable
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // const handleClickView = (id) => {
  //   navigate("../" + path.PRODUCTVIEW + `/${id}`, { state: mockData[id] });
  // };
  const handlegetProduct = async () => {
    await axios
      .get("http://localhost:4000/joyu/products")
      .then((res) => {
        console.log(res,"products");
        setproductData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handledeleteProduct = async (id) => {
  //   await axios
  //     .delete(`http://103.157.218.126:8000/admin/deleteproduct/${id}`)
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         toast.success("delete product success");
  //         handlegetProduct();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const handleEditProduct = (id) => {
  //   navigate("../" + path.PRODUCTEDIT + `/${id}`, {
  //     state: mockData[id],
  //   });
  // };

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    handlegetProduct();
  }, []);
  // Declare label for variable
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      width: 100,
    },
    {
      title: "Name Product",
      dataIndex: "name",
      key: "name",

      fixed: "left",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={`http://localhost:4000/${record.image}`}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    { title: "Categories", dataIndex: "categories", key: "categories" },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            // onClick={() => {
            //   handleClickView(record?.key - 1);
            // }}
          >
            <p className="">View</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            // onClick={() => handleEditProduct(record?.key - 1)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            // onClick={() => handledeleteProduct(record.id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      {contextHolder}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">PRODUCT MANAGE</p>
        </div>
        {/* Start Table Product Manage */}
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4 ">
            <div className="  flex gap-x-4 w-6/12 justify-center items-center">
              <InputGroup className="flex items-center w-full">
                <Input
                  type="text"
                  placeholder="Search Product"
                  className="text-black w-full h-10 border-b-2 border-black border-solid p-2"
                />

                <InputRightElement>
                  <button className="text-black  h-10 flex justify-center items-center">
                    <Icon icon="material-symbols:search" fontSize={24}></Icon>
                  </button>
                </InputRightElement>
              </InputGroup>
            </div>

            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.PRODUCTADD);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Product</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={productData}
              pagination={{ pageSize: 5, position: ["bottomCenter"] }}
              // scroll={{
              //   x: 1500,
              // }}
            />
          </div>
        </div>
        {/* End Table Product Manage */}
      </div>
    </div>
  );
};

export default ProductManage;
