/** @format */

import React, { useState } from "react";
import { Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message, Button } from "antd";
import { toast } from "sonner";
import { isValidInputCategory } from "../../../../../utils/common/validators";

const CategoriesAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState();

  const [imagecategory, setimagecategory] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const handleAddcategoryAPI = async () => {
    // validation  input categories
    let check = isValidInputCategory(formData, toast);
    if (check === true) {
      await axios
        .post(`${process.env.REACT_APP_SERVER_URL}/joyu/categories`, formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            toast.success("add categories success");
            navigate("/category-manage");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return;
  };
  return (
    <div className="">
      {contextHolder}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> ADD CATEGORY</p>
        </div>
        {/* Start form add categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Category</p>
            <Input
              type="text"
              className="w-full h-auto p-2 border-[1px] border-gray-200"
              placeholder="Name Category"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <Button
              className="w-auto h-auto py-2 px-4 "
              type="default"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </Button>
            <Button
              className="w-auto h-auto py-2 px-4 "
              type="primary"
              onClick={() => handleAddcategoryAPI()}
            >
              <p className="">Save</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAdd;
