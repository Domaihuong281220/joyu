/** @format */
// @ts-expect-error

import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import { path } from "../../../../utils/Constant";
import { Button } from "antd";
const CustomerAdd = () => {
  const [formData, setFormData] = useState({
    emailData: "",
    subject: "",
    img: "",
  });
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    subject: "",
    emailData: "",
  });

  const navigate = useNavigate();

  const handleSendEmail = async () => {
    // Validate subject and email content
    if (!formData.subject.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Subject is required",
      }));
      return;
    }

    if (!formData.emailData.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailData: "Email content is required",
      }));
      return;
    }

    setIsLoading(true);
    const data = new FormData();
    data.append("emailData", formData.emailData);
    data.append("subject", formData.subject);
    if (image) {
      data.append("image", image);
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/sendemail`,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        toast.success("Email sent successfully!");
        setIsLoading(false);
        navigate("../" + path.CUSTOMERMANAGE);
      } else {
        toast.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Server error: Unable to send email");
      } else {
        console.error("Email sending failed:", error);
      }
      setIsLoading(false);
    }
  };

  // Handle changes to the file inputs
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message if user starts typing again
    if (value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <div className="">
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">SEND EMAIL</p>
          <Button
            className="w-auto h-auto"
            type="default"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </Button>
        </div>

        <div className="px-10 py-4 mx-auto w-[50%]">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">Subject Email *</p>
            <textarea
              className={`w-full h-20 border-b-2 ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } p-2 outline-none focus:border-blue-400 focus:ease-out duration-200`}
              placeholder="Enter Subject email"
              value={formData.subject}
              onChange={handleInputChange}
              name="subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">EMAIL CONTENT *</p>
            <textarea
              className={`w-full h-40 border-b-2 ${
                errors.emailData ? "border-red-500" : "border-gray-300"
              } p-2 outline-none focus:border-blue-400 focus:ease-out duration-200`}
              placeholder="Enter the email content here..."
              value={formData.emailData}
              onChange={handleInputChange}
              name="emailData"
            />
            {errors.emailData && (
              <p className="text-red-500 text-sm">{errors.emailData}</p>
            )}
          </div>

          <div className="flex justify-between">
            <p className=""> Attach Image:</p>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Title"
                className="w-[200px] h-[200px] object-cover"
              />
            )}
          </div>

          <Button
            className="mt-4 px-4 py-2 flex items-center "
            type="primary"
            onClick={handleSendEmail}
          >
            <p className=""> Send Email</p>
          </Button>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50 z-50 flex justify-center items-center">
          <p className="text-white text-xl">Sending email to customers...</p>
        </div>
      )}
    </div>
  );
};

export default CustomerAdd;
