/** @format */

import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { path } from "../../../../utils/Constant";

const EditEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newsData = location.state;

  const [formData, setFormData] = useState({
    title: newsData.title,
    shortdescription: newsData.shortdescription,
    longdescription: newsData.longdescription,
    titlepic: newsData.titlepic,
    detailpic: newsData.detailpic,
  });

  const [titleImage, setTitleImage] = useState(null);
  const [detailImage, setDetailImage] = useState(null);

  const handleImageChange = (event, imageSetter) => {
    const file = event.target.files[0];
    if (file) {
      imageSetter(file);
    }
  };

  const handleEdit = async (id) => {
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("shortdescription", formData.shortdescription);
    formDataToSend.append("longdescription", formData.longdescription);

    formDataToSend.append("files", titleImage);
    formDataToSend.append("files", detailImage);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/news/${id}`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.status === 200 || response.status === 201) {
        // console.log(formDataToSend);
        toast.success("Edit news successfully!");
        navigate("../" + path.EVENTMANAGE);
      }
    } catch (err) {
      toast.error("Edit news wrong: " + err.message);
    }
  };

  return (
    <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
      <div className="flex p-2">
        <p className="text-2xl">EDIT NEWS</p>
      </div>
      <div className="px-10 py-4 mx-auto w-[50%]">
        <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
          <p className="text-lg">Name News</p>
          <Input
            type="text"
            className="w-full h-auto border-[1px] p-2"
            placeholder="Name Event"
            defaultValue={newsData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
          <p className="text-lg">Long Description</p>
          <textarea
            className="w-full h-[300px] border-[1px] p-2"
            placeholder="Description"
            defaultValue={newsData.longdescription}
            onChange={(e) =>
              setFormData({ ...formData, longdescription: e.target.value })
            }
          />
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
          <p className="text-lg">Short Description</p>
          <textarea
            className="w-full h-[200px] border-[1px] p-2"
            placeholder="Short description"
            defaultValue={newsData.shortdescription}
            onChange={(e) =>
              setFormData({ ...formData, shortdescription: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col gap-y-2 pb-6">
          <p className="text-lg">Image Title</p>
          <img
            // src={process.env.REACT_APP_SERVER_URL + "/" + newsData.titlepic}
            src={newsData.titlepic}
            className="w-[100px] h-[100px]"
          />
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={(e) => handleImageChange(e, setTitleImage, "titlepic")}
            className="w-full"
          />
          {titleImage && (
            <img
              src={URL.createObjectURL(titleImage)}
              alt="Title"
              className="w-[200px] h-[200px] object-cover"
            />
          )}
        </div>

        <div className="w-full flex flex-col gap-y-2 pb-6">
          <p className="text-lg">Image Detail</p>
          <img
            // src={process.env.REACT_APP_SERVER_URL + "/" + newsData.detailpic}
            src={newsData.detailpic}
            className="w-[100px] h-[100px]"
          />
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={(e) => handleImageChange(e, setDetailImage, "detailpic")}
            // onChange={(e) => setFormData({ ...formData, detailpic: e.target.files[0] })}

            className="w-full"
          />
          {detailImage && (
            <img
              src={URL.createObjectURL(detailImage)}
              alt="Detail"
              className="w-full object-contain h-[200px] "
            />
          )}
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <button
            className="py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
            onClick={() => handleEdit(newsData._id)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
