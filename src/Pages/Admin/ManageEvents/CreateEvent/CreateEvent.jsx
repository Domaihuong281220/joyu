/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs, Input, Textarea } from "antd";
import { Icon } from "@iconify/react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "react-toastify";

import { path } from "./../../../../utils/Constant";
const CreateEvent = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]); // Using an array to store files
  const [title, setTitle] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [gfsInitialized, setGfsInitialized] = useState(false);
  useEffect(() => {
    setTimeout(() => setGfsInitialized(true), 1000);
  }, []);

  // Handle changes to the file inputs
  const handleFileChange = (event, index) => {
    const newFiles = [...files]; // Make a copy of the current files array
    newFiles[index] = event.target.files[0]; // Update the file at the specified index
    setFiles(newFiles); // Update the state
  };

  const handleUpload = async () => {
    if (files.length < 2 || !files[0] || !files[1]) {
      // alert("Please select both files first!");
      toast.info("Please select both files Title Image and Detail Image!");
      return;
    }

    if (!gfsInitialized) {
      toast.info(
        "Image upload functionality not yet ready. Please try again later."
      );

      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file)); // Append each file in the array
    formData.append("title", title);
    formData.append("longdescription", longDescription);
    formData.append("shortdescription", shortDescription);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/news`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        console.log(response,"new event");
        navigate("../" + path.EVENTMANAGE);
        toast.success("create news successfully!");
      } else {
        toast.error("create news wrong: ");
      }
    } catch (error) {
      toast.error("create news wrong: " + error.message);
    }
  };

  return (
    <div className="">
      {/* Start Form Create Product */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> CREATE NEWS</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          {/* Title */}

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name News </p>
            <Input
              className="w-full h-auto border-[1px] p-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Short Description */}

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Short Description
              <span className="text-[10px] text-red-500">
                (Content to display on the news page)
              </span>
            </p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Subtitle"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>

          {/* Long Description */}

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Long Description
              <span className="text-[10px] text-red-500">
                (Content to display on the details page)
              </span>
            </p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Subtitle"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Title Image</p>
            {/* <Input
              className="w-full h-full border-[1px] p-2"
              placeholder="Tags"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            /> */}
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleFileChange(e, 0)} // Manage the first file
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Detail Image</p>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleFileChange(e, 1)} // Manage the second file
            />
          </div>

          {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <div className="flex justify-between">
              <input type="file" onChange={""} className="p-3  " />

              <button
                className="h-auto w-auto p-2 bg-blue-400 rounded-lg"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
            <div className="">
              {imageproduct ? (
                <img
                  src={imageproduct}
                  className="object-cover w-32 h-32 rounded-lg"
                />
              ) : (
                <img
                  src="https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg"
                  className="object-cover w-32 h-32 rounded-lg"
                />
              )}
            </div>

            <p className="">jpg , png , jpeg</p>
          </div> */}
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
              onClick={handleUpload}
              disabled={!gfsInitialized}
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

export default CreateEvent;
