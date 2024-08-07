/** @format */

import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "sonner";
import { path } from "../../../utils/Constant";
// import { isValidInputCategory } from "../../../../../helpers/validInputs";

const EditHomePageBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [homepageImage, sethomepageImage] = useState(null);

  const [formData, setFormData] = useState({
    image: data.image,
  });
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState();
  const apiEditHomePageImage = async (id) => {
    const formDataToSend = new FormData();
    formDataToSend.append("image", homepageImage);
    // const file = fs.readFileSync(homepageImage);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/joyu/banner/${id}`,
        // `http://localhost:4000/joyu/banner/${id}`,

        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Edit image successfully!");
        navigate("../" + path.HOMEPAGEBANNER);
      }
    } catch (err) {
      toast.error("Edit news wrong: " + err.message);
    }

    // if (formData.image) {
    //   formDataToSend.append("files", formData.image); // Only append image if it's present
    // }

    // try {
    //   const response = await axios.put(
    //     `${process.env.REACT_APP_SERVER_URL}/joyu/homepageimage/${productID}`,
    //     formDataToSend,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   if (response.status === 200 || response.status === 201) {
    //     toast.success("Product updated successfully!");
    //     navigate(`../${path.HOMEPAGEBANNER}`);
    //   } else {
    //     toast.error("Failed to update product.");
    //   }
    // } catch (error) {
    //   toast.error("Failed to update product: " + error.message);
    // }
  };
  const handleImageChange = (event, imageSetter) => {
    const file = event.target.files[0];
    if (file) {
      imageSetter(file);
    }
  };
  return (
    <div className="">
      {/* {contextHolder} */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT IMAGE HOMEPAGE</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">image</p>

            <div className="w-full flex flex-col gap-y-2 pb-6">
              <img
                src={process.env.REACT_APP_SERVER_URL + "/" + data.image}
                alt="1"
              />
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={(e) =>
                  handleImageChange(e, sethomepageImage, "image")
                }
                className="w-full"
              />
              {homepageImage && (
                <img
                  src={URL.createObjectURL(homepageImage)}
                  alt="Title"
                  className="w-[200px] h-[200px] object-cover"
                />
              )}
            </div>
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
              className="w-auto h-auto py-2 px-4  "
              type="primary"
              onClick={(e) => {
                apiEditHomePageImage(data._id);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomePageBanner;
