/** @format */

import React, { useState } from "react";
import { Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "react-toastify";
// import { isValidInputCategory } from "../../../../../helpers/validInputs";

const EditHomePageBanner = () => {
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

  //   const handleAddcategoryAPI = async () => {
  //     // validation  input categories

  //     if (check === true) {
  //       await axios
  //         .post(`${process.env.REACT_APP_SERVER_URL}/joyu/categories`, formData)
  //         .then((res) => {
  //           if (res.status === 200 || res.status === 201) {
  //             toast.success("add categories success");
  //             navigate("/category-manage");
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //     return;
  //   };
  return (
    <div className="">
      {contextHolder}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT IMAGE HOMEPAGE</p>
        </div>
        {/* Start form add categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">image</p>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
              <p className="text-lg">img banner</p>
              <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
                <img
                  className="w-20 h-20 object-cover"
                  src={`http://localhost:4000/${formData.image}`}
                  alt="Product"
                />
              </button>
              <p className="">jpg, png, jpeg</p>
            </div>
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
              //   onClick={() => handleAddcategoryAPI()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomePageBanner;
