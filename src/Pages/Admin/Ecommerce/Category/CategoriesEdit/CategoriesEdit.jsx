/** @format */

import React, { useState } from "react";
import { Button, Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { path } from "../../../../../utils/Constant";
import { toast } from "sonner";

const CategoriesEdit = () => {
  const location = useLocation();
  let categoryDetails = location.state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: categoryDetails.name,
    _id: categoryDetails._id,
  });

  const ApiEditCategory = async (categoryId) => {
    await axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/joyu/categories/${categoryId}`,
        formData
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit successfully!");
          navigate("../" + path.CATEGORYMANAGE);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT CATEGORY</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Category</p>
            <Input
              type="text"
              className="w-full h-auto border-[1px] p-2"
              placeholder="Name Category"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              defaultValue={categoryDetails.name}
            />
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <Button
              className="w-auto h-auto py-2 px-4"
              type="default"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </Button>

            <Button
              className="w-auto h-auto py-2 px-4"
              type="primary"
              onClick={() => {
                ApiEditCategory(formData?._id);
              }}
            >
              <p className="">Save</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesEdit;
