/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Button, Input } from "antd";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";
import { isValidInputProduct } from "../../../../../utils/common/validators";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [image, setImage] = useState();
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState([]);
  const [categoriesName, setCategoriesName] = useState([]);
  const [categoryID, setCategoryID] = useState();
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const editorRef = useRef(null);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const categoryobj = categories.filter(
      (category) => category.name === selectedCategory
    );
    setCategoryID(categoryobj[0]._id);
  };

  useEffect(() => {
    handlegetCategories();
  }, []);

  const handlegetCategories = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/categories`)
      .then((res) => {
        const names = res.data.data.map((category) => category.name);
        setCategories(res.data.data);
        setCategoriesName(names);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = (image) => {
    setImage(image);
  };

  const handleUpload = async () => {
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

    const formData = new FormData();
    formData.append("price", price);
    formData.append("categoryID", categoryID);
    formData.append("image", image);
    formData.append("name", productName);
    formData.append(
      "description",
      cleanHTML(editorRef.current ? editorRef.current.innerHTML : "")
    );
    if (!productName) {
      toast.error("Please enter the product name!");
      return;
    }

    if (!price) {
      toast.error("Please enter the valid product price!");
      return;
    }

    if (!categoryID) {
      toast.error("Please select a category!");
      return;
    }
    if (!image) {
      toast.error("Please select an image!");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        navigate("../" + path.PRODUCTMANAGE);
        toast.success("Product created successfully!");
      } else {
        toast.error("Failed to create product.");
      }
    } catch (error) {
      toast.error("Failed to create product: " + error.message);
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

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> CREATE PRODUCT</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input
              className="w-full h-auto border-[1px] p-2"
              placeholder="Name Product"
              onChange={(e) => setProductName(e.target.value)}
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
              className="w-full h-[200px] border-[1px] p-2 text-start  overflow-y-auto"
              onInput={updateActiveStyles}
              onMouseUp={updateActiveStyles}
              onKeyUp={updateActiveStyles}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-full border-[1px] p-2"
              placeholder="Price"
              type="number"
              step={0.1}
              min={0}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Category</p>
            <Select
              icon={false}
              placeholder="Please select category"
              className="border-[1px] p-2 w-full h-auto"
              onChange={handleCategoryChange}
            >
              {categoriesName.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Image</p>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleFileChange(e.target.files[0])}
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
              onClick={() => handleUpload()}
            >
              <p className="">Save</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
