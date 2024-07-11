/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

import { path } from "./../../../../utils/Constant";
import { isValidInputNews } from "./../../../../utils/common/validators";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]); // Using an array to store files
  const [title, setTitle] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [gfsInitialized, setGfsInitialized] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const editorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setGfsInitialized(true), 1000);
  }, []);

  // Handle changes to the file inputs
  const handleFileChange = (event, index) => {
    const newFiles = [...files]; // Make a copy of the current files array
    newFiles[index] = event.target.files[0]; // Update the file at the specified index
    setFiles(newFiles); // Update the state
  };

  // Clean up the HTML content
  const cleanHTML = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;

    const cleanNode = (node) => {
      if (node.nodeType === 1) {
        // Element node
        const style = node.getAttribute("style");
        if (style) {
          const stylesToPreserve = [
            "font-weight",
            "font-style",
            "text-decoration",
          ];
          const styleMap = style.split(";").reduce((acc, style) => {
            const [property, value] = style.split(":");
            if (stylesToPreserve.includes(property.trim())) {
              acc[property.trim()] = value.trim();
            }
            return acc;
          }, {});
          node.setAttribute(
            "style",
            Object.entries(styleMap)
              .map(([property, value]) => `${property}: ${value}`)
              .join("; ")
          );
        }
        // Recursively clean child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
          cleanNode(node.childNodes[i]);
        }
      }
    };

    cleanNode(div);
    return div.innerHTML;
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file)); // Append each file in the array
    formData.append("title", title);
    formData.append(
      "longdescription",
      cleanHTML(editorRef.current ? editorRef.current.innerHTML : "")
    ); // Clean HTML content
    formData.append("shortdescription", shortDescription);

    if (files.length < 2 || !files[0] || !files[1]) {
      toast.info("Please select both files Title Image and Detail Image!");
      return;
    }

    if (!gfsInitialized) {
      toast.info(
        "Image upload functionality not yet ready. Please try again later."
      );
      return;
    }

    if (!title) {
      toast.error("Please enter the News!");
      return;
    }
    if (
      editorRef.current.innerHTML === undefined ||
      editorRef.current.innerHTML === "" ||
      editorRef.current.innerHTML === null
    ) {
      toast.error("Please enter the valid Long Description!");
      return;
    }

    if (!shortDescription) {
      toast.error("Please enter the valid Short Description!");
      return;
    }

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
        navigate("../" + path.EVENTMANAGE);
        toast.success("Create news successfully!");
      } else {
        toast.error("Create news wrong: ");
      }
    } catch (error) {
      toast.error("Create news wrong: " + error.message);
    }
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
          <p className="text-2xl"> CREATE NEWS</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name News </p>
            <Input
              className="w-full h-auto border-[1px] p-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

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

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">
              Long Description
              <span className="text-[10px] text-red-500">
                (Content to display on the details page)
              </span>
            </p>
            <div className="flex items-center mb-2 ">
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
              className="w-full h-[300px] border-[1px] p-2  text-start  overflow-y-auto"
              onInput={updateActiveStyles}
              onMouseUp={updateActiveStyles}
              onKeyUp={updateActiveStyles}
              placeholder="Enter the content here..."
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Title Image</p>
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

          <div className="flex justify-center items-center gap-x-4">
            <Button
              className="w-auto h-auto py-2 px-4 "
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </Button>

            <Button
              className="w-auto h-auto py-2 px-4 "
              type="primary"
              onClick={handleUpload}
              disabled={!gfsInitialized}
            >
              <p className="">Save</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
