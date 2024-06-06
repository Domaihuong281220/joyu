import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Select } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../../../utils/Constant";

const ProductEdit = () => {
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoriesName, setCategoriesName] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    handleGetProduct();
    handleGetCategories();
  }, []);

  const handleGetCategories = async () => {
    try {
      const res = await axios.get("http://localhost:4000/joyu/categories");
      const names = res.data.data.map(category => category.name);
      setCategories(res.data.data);
      setCategoriesName(names);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/joyu/products/${id}`);
      setProductData(response.data.data);
      setCategoryID(response.data.data.categoryID._id);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const categoryObj = categories.find(category => category.name === selectedCategory);
    setCategoryID(categoryObj._id);
  };

  const apiEditProduct = async (productData) => {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("categoryID", categoryID);
    if (productData.image) {
      formData.append("image", productData.image); // Only append image if it's present
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/joyu/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Product updated successfully!");
        navigate(`../${path.PRODUCTMANAGE}`);
      } else {
        toast.error("Failed to update product.");
      }
    } catch (error) {
      toast.error("Failed to update product: " + error.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">EDIT PRODUCT</p>
        </div>
        {/* Start Form Edit Product */}
        <div className="px-10 py-4 mx-auto w-[50%]">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input
              type="text"
              className="w-full h-auto border-[1px] p-2"
              placeholder="Name Product"
              value={productData.name || ""}
              onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            />
          </div>
          
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-auto border-[1px] p-2"
              placeholder="Price"
              value={productData.price || ""}
              onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Category</p>
            <Select
              icon={false}
              placeholder={productData.categoryID?.name || "Select Category"}
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
            <p className="text-lg">Image Product</p>
            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
              <img
                className="w-20 h-20 object-cover"
                src={`http://localhost:4000/${productData.image}`}
                alt="Product"
              />
            </button>
            <p className="">jpg, png, jpeg</p>
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
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={apiEditProduct}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
        {/* End Form Edit Product */}
      </div>
    </div>
  );
};

export default ProductEdit;
