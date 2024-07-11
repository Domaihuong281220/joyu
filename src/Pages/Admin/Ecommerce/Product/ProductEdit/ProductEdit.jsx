/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Button, Input, Select } from "antd";
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
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/categories`
      );
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
  const cleanHTML = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;

    const cleanNode = (node) => {
      if (node.nodeType === 1) {
        // Element node
        const style = node.getAttribute("style");
        if (style) {
          const stylesToPreserve = [
            "font-weight",
            "font-style",
            "text-decoration",
          ];
          const styleMap = style.split(";").reduce((acc, style) => {
            const [property, value] = style.split(":");
            if (stylesToPreserve.includes(property.trim())) {
              acc[property.trim()] = value.trim();
            }
            return acc;
          }, {});
          node.setAttribute(
            "style",
            Object.entries(styleMap)
              .map(([property, value]) => `${property}: ${value}`)
              .join("; ")
          );
        }
        // Recursively clean child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
          cleanNode(node.childNodes[i]);
        }
      }
    };

    cleanNode(div);
    return div.innerHTML;
  };
  const handleEdit = async (id) => {
    const updateData = new FormData();
    updateData.append("name", formData.name);
    updateData.append("price", formData.price);
    updateData.append(
      "description",
      cleanHTML(editorRef.current ? editorRef.current.innerHTML : "")
    );
    // updateData.append("description", formData.description);
    updateData.append("categoryID", formData.categoryID);

    if (image) {
      updateData.append("image", image);
    } else {
      updateData.append("image", formData.image); // Make sure the current image path is sent
    }
    if (!formData.name) {
      toast.error("Please enter the product name!");
      return;
    }
    if (
      editorRef.current.innerHTML === undefined ||
      editorRef.current.innerHTML === "" ||
      editorRef.current.innerHTML === null
    ) {
      toast.error("Please enter the valid description!");
      return;
    }

    if (!formData.price) {
      toast.error("Please enter the valid product price!");
      return;
    }

    if (!formData.categoryID) {
      toast.error("Please select a category!");
      return;
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
                  activeStyles.underline
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
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

          <div className="flex justify-center items-center gap-x-4">
            <Button
              className="w-auto h-auto py-2 px-4"
              onClick={() => {
                navigate(-1);
              }}
              type="default"
            >
              <p className="">Back</p>
            </Button>

            <Button
              className="w-auto h-auto py-2 px-4 "
              type="primary"
              onClick={() => {
                handleEdit(data._id);
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

export default ProductEdit;
