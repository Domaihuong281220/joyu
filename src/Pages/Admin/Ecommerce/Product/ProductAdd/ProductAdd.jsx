/** @format */

import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";

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

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const categoryobj = categories.filter(
      (category) => category.name === selectedCategory
    );
    setCategoryID(categoryobj[0]._id);
  };

  useEffect(() => {
    handlegetCategories();
    // console.log(formData);
  }, []);

  const handlegetCategories = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/categories`)
      .then((res) => {
        // console.log(res, "category");

        // Assuming res.data.data is an array of objects with a "name" property
        const names = res.data.data.map((category) => category.name);
        setCategories(res.data.data);
        setCategoriesName(names);

        // setproductData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Handle changes to the file inputs
  const handleFileChange = (image) => {
    setImage(image); // Update the state
  };

  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image!");
      return;
    }

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


    const formData = new FormData();
    formData.append("price", price); // Use priceNumber instead of price
    formData.append("categoryID", categoryID);
    formData.append("image", image);
    formData.append("name", productName);
    formData.append("description", description);

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

  return (
    <div className="">
      {/* Start Form Create Product */}

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
            <textarea
              className="w-full h-[200px] border-[1px] p-2"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-full border-[1px] p-2"
              placeholder="Price"
              type="number"
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
              onChange={(e) => handleFileChange(e.target.files[0])} // Manage the first file
            />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => handleUpload()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>

      {/* End Form Create Product  */}
    </div>
  );
};

export default ProductAdd;
