/** @format */

import React, { useState } from "react";
// import { Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Input } from "antd";
import { Select } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { path } from "../../../../utils/Constant";
// import { isValidInputProduct } from "../../../../helpers/validInputs";

const EditJob = () => {
  const navigate = useNavigate();

  const location = useLocation();
  let jobdetail = location.state;

  // console.log(jobdetail);
  const [formData, setFormData] = useState({
    position: jobdetail.position,
    description: jobdetail.description,
    availability: jobdetail.availability,
    address: jobdetail.address,
    responsibility: jobdetail.responsibility,
    image: jobdetail.image,
  });
  const [image, setImage] = useState(null);

  const handleEdit = async (id) => {
    const updateData = new FormData();
    updateData.append("position", formData.position);
    updateData.append("description", formData.description);
    updateData.append("availability", formData.availability);
    updateData.append("address", formData.address);
    updateData.append("responsibility", formData.responsibility);
    if (image) {
      updateData.append("image", image);
    } else {
      updateData.append("image", formData.image); // Make sure the current image path is sent
    }
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/joyu/careers/${id}`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Edit job successfully!");

          navigate("../" + path.JOBMANAGE);
        }
      })
      .catch((err) => {
        toast.error("Edit job wrong: " + err.message);
      });
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT JOB</p>
        </div>
        {/* Start Form Edit Product */}
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
              <span className="text-[10px] text-red-500">
                (Limit 500 characters)
              </span>
            </p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Description"
              maxLength="500"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <div className="text-right w-full text-sm text-gray-600">
              {formData.description.length}/500
            </div>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Responsibility
              <span className="text-[10px] text-red-500">
                (Limit 500 characters)
              </span>
            </p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Description"
              maxLength="500"
              value={formData.responsibility}
              onChange={(e) =>
                setFormData({ ...formData, responsibility: e.target.value })
              }
            />
            <div className="text-right w-full text-sm text-gray-600">
              {formData.description.length}/500
            </div>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <Input
              type="text"
              className="w-full h-auto border-[1px] p-2"
              placeholder="Address"
              defaultValue={jobdetail.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Availability</p>
            <input
              className=" border-[1px] p-2"
              placeholder="Subtitle"
              type="checkbox"
              // defaultValue={jobdetail.availability}
              defaultChecked={jobdetail.availability === "false" ? false : true}
              // checked={jobdetail.availability}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  availability: e.target.checked,
                });
              }}
            />
          </div>
          {/* <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Current Image</p>
            {formData.image && (
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/${formData.image}`}
                alt="Product"
                className="h-[200px] w-[200px] mb-4"
              />
            )}
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => setImage(e.target.files[0])}
            />
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
              onClick={() => handleEdit(jobdetail._id)}
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

export default EditJob;
