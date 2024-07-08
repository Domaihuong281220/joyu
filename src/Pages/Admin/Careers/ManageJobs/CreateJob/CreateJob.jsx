/** @format */

import React, { useState, useRef } from "react";
import { Input } from "antd";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";
// import { isValidInputCategory } from "../../../../helpers/validInputs";

const CreateJob = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   position: "",
  //   description: "",
  //   responsibility: "",
  //   availability: "",
  //   address: "",
  //   image: "",
  // });

  const [position, setPosition] = useState();
  const [description, setdescription] = useState();
  const [responsibility, setresponsibility] = useState();
  const [availability, setavailability] = useState(false);
  // const [address, setaddress] = useState();
  const [image, setImage] = useState();
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const editorRef = useRef(null);
  // console.log(formData, "check");
  const handleCreateJob = async (id) => {
    const formData = new FormData();
    formData.append("position", position); // Use priceNumber instead of price
    formData.append(
      "description",
      editorRef.current ? editorRef.current.innerHTML : ""
    );
    // formData.append("description", description);
    formData.append("responsibility", responsibility);
    formData.append("image", image);
    formData.append("availability", availability);
    // formData.append("address", address);
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/joyu/careers`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Create new job successfully!");

          navigate("../" + path.JOBMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Create job wrong: " + err.message);
      });
  };
  const handleFileChange = (image) => {
    setImage(image); // Update the state
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
          <p className="text-2xl"> CREATE JOB</p>
        </div>
        {/* Start form add categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Job</p>
            <Input
              type="text"
              className="w-full h-auto p-2 border-[1px] border-gray-200"
              placeholder="Name Job"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <Input
              type="text"
              className="w-full h-auto p-2 border-[1px] border-gray-200"
              placeholder="Name Job"
              onChange={(e) => setaddress(e.target.value)}
            />
          </div> */}

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
              className="w-full h-[200px] border-[1px] p-2 text-start overflow-y-auto"
              onInput={updateActiveStyles}
              onMouseUp={updateActiveStyles}
              onKeyUp={updateActiveStyles}
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Responsibility</p>
            <textarea
              className="w-full h-[100px] border-[1px] p-2"
              placeholder="Subtitle"
              maxLength="1000"
              value={responsibility}
              onChange={(e) => setresponsibility(e.target.value)}
            />
            <div className="text-right w-full text-sm text-gray-600">260</div>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Availability</p>
            <input
              className=" border-[1px] p-2"
              placeholder="Subtitle"
              type="checkbox"
              onChange={(e) => {
                setavailability(e.target.checked);

                console.log(availability);
              }}
            />
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
              onClick={() => handleCreateJob()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
