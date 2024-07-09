/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";
import { Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { replaceNewlinesWithBreaks } from "../../../../../utils/Constant";
const ProductManage = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleGetProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/products`
      );
      const products = response.data.data.map((product, index) => ({
        ...product,
        key: index + 1, // Add key property for STT column
      }));
      setProductData(products);
      setFilteredProducts(products); // Initialize filtered products
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/joyu/products/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Delete product success");
          handleGetProduct();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditProduct = (record) => {
    navigate("../" + path.PRODUCTEDIT + `/${record._id}`, {
      state: record,
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    const filtered = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.description?.toLowerCase().includes(value) ||
        product.price.toString().includes(value) ||
        product.categoryID.name?.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

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
              src={`${process.env.REACT_APP_SERVER_URL}/${record.image}`}
              className="object-contain w-full h-full"
              alt={record.name}
            ></img>
          </div>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (e) => {
        return (
          <p
            className="text-start pv:max-md:text-[8vw]"
            dangerouslySetInnerHTML={{
              __html: replaceNewlinesWithBreaks(e),
            }}
          ></p>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Categories",
      dataIndex: ["categoryID", "name"],
      key: "categories",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <Button
            className=""
            type="default"
            onClick={() => handleEditProduct(record)}
          >
            <p className="">Edit</p>
          </Button>

          <Popconfirm
            placement="rightTop"
            title="Confirm Deletion"
            description="Are you sure you want to delete this product?"
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => handleDeleteProduct(record._id)}
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

  return (
    <div className="">
      {contextHolder}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">PRODUCT MANAGE</p>
        </div>
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4">
            <div className="flex items-center gap-x-3">
              <Button
                className="w-auto h-auto p-2  flex items-center gap-x-2 "
                type="primary"
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
              </Button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={filteredProducts}
              pagination={{ pageSize: 15, position: ["bottomCenter"] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
