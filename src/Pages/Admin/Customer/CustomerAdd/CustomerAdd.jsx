/** @format */
// @ts-expect-error

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import { path } from "../../../../utils/Constant";

const CustomerAdd = () => {
  const [formData, setFormData] = useState({
    emailData: "",
    subject: "",
    img: "",
  });
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/sendemail`,
        // `http://localhost:4000/joyu/sendemail`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        toast.success("Email sent successfully!");
        navigate("../" + path.CUSTOMERMANAGE);
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Server error: Unable to send email");
      } else {
        console.error("Email sending failed:", error);
      }
    }
  };
  // Handle changes to the file inputs
  const handleFileChange = (image) => {
    setImage(image); // Update the state
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">SEND EMAIL</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        <div className="px-10 py-4 mx-auto w-[50%]">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">Subject Email</p>
            <textarea
              className="w-full h-20 border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Enter Subject email"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">EMAIL CONTENT</p>
            <textarea
              className="w-full h-40 border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Enter the email content here..."
              value={formData.emailData}
              onChange={(e) =>
                setFormData({ ...formData, emailData: e.target.value })
              }
            />
          </div>

          {/* <label>
            Attach Image:
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleFileChange(e.target.files[0])} // Manage the first file

              // required
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Title"
                className="w-[200px] h-[200px] object-cover"
              />
            )}
          </label> */}

          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSendEmail}
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerAdd;
