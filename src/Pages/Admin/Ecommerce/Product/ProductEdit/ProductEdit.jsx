/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Input, Select } from "antd";
import { Icon } from "@iconify/react";
import { path } from "../../../../../utils/Constant";

const ProductEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: data.name,
    price: data.price,
    description: data.description,
    categoryID: data.categoryID._id,
    image: data.image,

  });
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const editorRef = useRef(null);
  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleGetCategories = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/joyu/categories`);
      setCategories(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  const applyStyle = (command) => {
    document.execCommand(command);
    updateActiveStyles();
  };

  const updateActiveStyles = () => {
    const bold = document.queryCommandState("bold");
    const italic = document.queryCommandState("italic");
    const underline = document.queryCommandState("underline");
    setActiveStyles({ bold, italic, underline });
  };
  const handleEdit = async (id) => {
    const updateData = new FormData();
    updateData.append("name", formData.name);
    updateData.append("price", formData.price);
    updateData.append(
      "description",
      editorRef.current ? editorRef.current.innerHTML : ""
    );
    // updateData.append("description", formData.description);
    updateData.append("categoryID", formData.categoryID);

    if (image) {
      updateData.append("image", image);
    } else {
      updateData.append("image", formData.image); // Make sure the current image path is sent
    }

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/joyu/products/${id}`,
        updateData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Product updated successfully!");
        navigate("../" + path.PRODUCTMANAGE);
      }
    } catch (err) {
      toast.error("Edit Product failed: " + err.message);
    }
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">PRODUCT EDIT</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        <div className="bg-white border-[1px] rounded-md w-[50%] mx-auto p-10">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Product Name</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-auto p-2"
              placeholder="Price"
              type="number"
              value={formData.price}
              onChange={(e) => {
                setFormData({ ...formData, price: e.target.value });
              }}
            />
          </div>



          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
          <p className="text-lg">Description</p>
          <div className="flex items-center mb-2">
            <button
              onClick={() => applyStyle("bold")}
              className={`mr-2 px-2 py-1 rounded ${
                activeStyles.bold ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              <b>B</b>
            </button>
            <button
              onClick={() => applyStyle("italic")}
              className={`mr-2 px-2 py-1 rounded ${
                activeStyles.italic ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              <i>I</i>
            </button>
            <button
              onClick={() => applyStyle("underline")}
              className={`px-2 py-1 rounded ${
                activeStyles.underline ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              <u>U</u>
            </button>
          </div>
          <div
            ref={editorRef}
            contentEditable
            className="w-full h-[300px] border-[1px] p-2  text-start  overflow-y-auto"
            onInput={updateActiveStyles}
            onMouseUp={updateActiveStyles}
            onKeyUp={updateActiveStyles}
            dangerouslySetInnerHTML={{ __html: data.description }}
       
          />
        </div>
          {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Description</p>
            <textarea
              className="w-full h-auto border-[1px] p-2"
              placeholder="Description"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
            />
          </div> */}

          

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Category</p>
            <Select
              className="w-full h-auto"
              placeholder="Select a category"
              value={formData.categoryID}
              onChange={(value) => {
                setFormData({ ...formData, categoryID: value });
              }}
            >
              {categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Current Image</p>
            {formData.image && (
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/${formData.image}`}
                alt="Product"
                className="w-full h-auto mb-4"
              />
            )}
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={() => {
                handleEdit(data._id);
              }}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
