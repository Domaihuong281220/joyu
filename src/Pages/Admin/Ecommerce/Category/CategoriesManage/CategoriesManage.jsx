/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { path } from "../../../../../utils/Constant";
import imgCate_1 from "../../../../../assets/cate_1.png";
import imgCate_2 from "../../../../../assets/cate_2.png";
import imgCate_3 from "../../../../../assets/cate_3.png";
import imgCate_4 from "../../../../../assets/cate_4.png";
import imgCate_5 from "../../../../../assets/cate_5.png";
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
      .delete(`http://localhost:4000/joyu/categories/${id}`)
      .then((res) => {
        console.log(res);

        if (res.status === 200 || res.status === 201) {
          messageApi.success("delete category success");
          handlergetCategoryList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlergetCategoryList = async () => {
    await axios
      .get("http://localhost:4000/joyu/categories")
      .then((res) => {
        // console.log(res);
        setcategoryData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditCategory = async (id) => {
    navigate("../" + path.CATEGORYEDIT + `/${id}`, {
      state: mockData[id],
    });
  };
  // const handleEditProduct = (id) => {
  //   navigate("../" + path.PRODUCTEDIT + `/${id}`, {
  //     state: mockData[id],
  //   });
  // };

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
          {/* <button
            className="hover:underline cursor-pointer hover:text-blue-500 "
            onClick={() => handleEditCategory(record?.id - 1)}
          >
            <p className="">Edit</p>
          </button> */}

          <button
            className="hover:underline cursor-pointer hover:text-blue-500"
            onClick={() => handleAPIDeleteCategory(record._id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];
  const mockData = [
    {
      id: "1",
      namecategory: "JOYU SPECIALS",
      img: imgCate_1,
    },
    {
      id: "2",
      namecategory: "FRESH TEA",
      img: imgCate_2,
    },
    {
      id: "3",
      namecategory: "Fullleaf Milktea",
      img: imgCate_3,
    },
    {
      id: "4",
      namecategory: "PHIN COFFEE",
      img: imgCate_4,
    },
    {
      id: "5",
      namecategory: "TOPPING",
      img: imgCate_5,
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
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
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
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={categoryData}
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

export default CategoriesManage;
