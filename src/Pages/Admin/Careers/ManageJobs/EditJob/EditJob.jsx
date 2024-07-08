/** @format */

import React, { useState, useRef } from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../../utils/Constant";

const EditJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let jobdetail = location.state;

  const [formData, setFormData] = useState({
    position: jobdetail.position,
    description: jobdetail.description,
    availability: jobdetail.availability,
    responsibility: jobdetail.responsibility,
    image: jobdetail.image,
  });
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const editorRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleEdit = async (id) => {
    const updateData = new FormData();
    updateData.append("position", formData.position);
    updateData.append(
      "description",
      editorRef.current ? editorRef.current.innerHTML : ""
    ); 
    // updateData.append("description", formData.description);
    updateData.append("availability", formData.availability);
    updateData.append("responsibility", formData.responsibility);

    if (image) {
      updateData.append("image", image);
    } else {
      updateData.append("image", formData.image);
    }

    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/joyu/careers/${id}`, updateData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit job successfully!");
          navigate("../" + path.JOBMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Edit job failed: " + err.message);
      });
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
          <p className="text-2xl">EDIT JOB</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Position</p>
            <Input
              type="text"
              className="w-full h-auto border-[1px] p-2"
              placeholder="position"
              defaultValue={jobdetail.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Description
              <span className="text-[10px] text-red-500">(Limit 500 characters)</span>
            </p>
          
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
            className="w-full h-[300px] border-[1px] p-2  text-start overflow-y-auto"
            onInput={updateActiveStyles}
            onMouseUp={updateActiveStyles}
            onKeyUp={updateActiveStyles}
            dangerouslySetInnerHTML={{ __html: jobdetail.longdescription }}
          />
        </div>
            <div className="text-right w-full text-sm text-gray-600">
              {formData.description.length}/500
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Responsibility
              <span className="text-[10px] text-red-500">(Limit 500 characters)</span>
            </p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Responsibility"
              maxLength="500"
              value={formData.responsibility}
              onChange={(e) =>
                setFormData({ ...formData, responsibility: e.target.value })
              }
            />
            <div className="text-right w-full text-sm text-gray-600">
              {formData.responsibility.length}/500
            </div>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Availability</p>
            <input
              className="border-[1px] p-2"
              type="checkbox"
              defaultChecked={jobdetail.availability === "true"}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  availability: e.target.checked.toString(),
                });
              }}
            />
          </div>
          <div className="w-full flex flex-col gap-y-2 pb-6">
            <p className="text-lg">Edit Image</p>
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/${formData.image}`}
              alt="current job"
            />
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleImageChange}
              className="w-full"
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="New"
                className="w-[200px] h-[200px] object-cover"
              />
            )}
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p>Back</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
              onClick={() => handleEdit(jobdetail._id)}
            >
              <p>Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
