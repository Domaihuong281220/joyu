/** @format */

import React, { useEffect, useState } from "react";

import sidebarBG from "../assets/SideBar/sidebarbg.png";
import sidebarmobileBG from "../assets/SideBar/sidebarmobile.png";
import { useNavigate, useLocation } from "react-router-dom";

import { path } from "../utils/Constant";
import axios from "axios";
import mobileLogo from "../assets/SideBar/Group 5.png";
import mobileLogo2 from "../assets/SideBar/mobilewhite.png";
import menu_close from "../assets/SideBar/menu_close.png";
import menu_open from "../assets/SideBar/menu_open.png";
import { toast } from "sonner";
import { Icon } from "@iconify/react/dist/iconify.js";

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/customer`,
        formData
      );
      if (response.status === 200) {
        toast.success("Thank you for subscribing!");
      } else {
        toast.error("Email already exists!");
      }
    } catch (err) {
      toast.error("Email already exists!");
      console.log(err);
    }
  };
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const [openSidebar, setOpenSidebar] = useState(
    sessionStorage.getItem("openSidebar")
  );
  const navigate = useNavigate();

  const HandleSideBar = () => {
    if (openSidebar === true) {
      setOpenSidebar(false);
      sessionStorage.setItem("openSidebar", false);
    } else {
      setOpenSidebar(true);
      sessionStorage.setItem("openSidebar", true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenSidebar(JSON.parse(sessionStorage.getItem("openSidebar")));
    }, 1);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (openSidebar !== true) {
    return (
      <>
        {/* Desktop */}
        <div className="pv:max-md:hidden absolute z-10 top-0 left-0 w-full h-[10vw] flex justify-center items-end px-[11.7%] py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62.868"
            height="60.988"
            viewBox="0 0 62.868 60.988"
            className="logoSidebar cursor-pointer"
            onClick={() => {
              navigate("/");
              setOpenSidebar(false);
              sessionStorage.setItem("openSidebar", false);
            }}
          >
            <g
              id="Group_165"
              data-name="Group 165"
              transform="translate(-0.482 -0.482)"
            >
              <path
                id="Path_16"
                data-name="Path 16"
                d="M67.673,7.1A1.194,1.194,0,0,0,66.479,8.29V36.562A29.045,29.045,0,0,1,38.64,65.581V58.434a22.762,22.762,0,0,0,21.528-22.7V17a1.194,1.194,0,0,0-2.388,0v9.41l-1.663,1.663L37.433,46.741,17.45,26.758l-.364-.367V17.036a1.194,1.194,0,0,0-2.388,0V35.443A22.941,22.941,0,0,0,36.227,58.434v7.147A29.045,29.045,0,0,1,8.387,36.562V22.733a1.194,1.194,0,0,0-2.388,0V36.224a31.435,31.435,0,1,0,62.868.338V8.29A1.194,1.194,0,0,0,67.673,7.1M38.64,56.043v-7.1l19.14-19.14v5.666a20.535,20.535,0,0,1-19.14,20.57M17.087,35.733V29.807l19.14,19.14v7.1a20.372,20.372,0,0,1-19.14-20.31"
                transform="translate(-5.517 -6.526)"
                fill="#040504"
              />
              <path
                id="Path_18"
                data-name="Path 18"
                d="M259.393,41.57c-.115,0-.23,0-.345,0a11.6,11.6,0,0,1-8.092-3.61,11.872,11.872,0,0,1-3.308-8.245v-.123a1.115,1.115,0,1,1,2.23,0v.241a9.511,9.511,0,0,0,19.022,0V13.323a1.115,1.115,0,1,1,2.23,0V29.829A11.754,11.754,0,0,1,259.393,41.57"
                transform="translate(-227.762 -11.228)"
                fill="#040504"
              />
              <path
                id="Path_22"
                data-name="Path 22"
                d="M271.406,8.388H247.537a.818.818,0,0,1-.818-.818V6.818A.818.818,0,0,1,247.537,6h23.869a.818.818,0,0,1,.818.818V7.57a.818.818,0,0,1-.818.818"
                transform="translate(-226.908 -5.518)"
                fill="#040504"
              />
            </g>
          </svg>

          <div className="w-full h-full flex justify-end space-x-4 items-end">
            <button
              className="font-nexa_light font-black bg-primary uppercase text-white rounded-full px-[4vw] py-[1.1vw] text-[1vw] h-fit"
              onClick={() => {
                navigate("../" + path.LOCATION);
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}
            >
              Order now
            </button>
            <button
              className={` ${
                location.pathname === "/menu"
                  ? "hidden"
                  : "font-nexa_light uppercase border-[1px] border-[#1E1B1A] text-secondary h-fit rounded-full px-[4vw] py-[1.1vw] text-[1vw]"
              }`}
              onClick={() => {
                navigate("../" + path.MENU);
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}
              value={"menu"}
              type="button"
            >
              Menu
            </button>
            <button onClick={() => HandleSideBar()} className="h-[3.5vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 47 35"
                className="buttonSidebar"
              >
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(-1647 -107)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="47"
                    transform="translate(1647 124.5)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_25"
                    data-name="Line 25"
                    x2="47"
                    transform="translate(1647 107.5)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="47"
                    transform="translate(1647 141.5)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="hidden absolute z-10 pv:max-md:top-[12vw] top-0 left-0 !w-[100vw] h-[20vw] pv:max-md:flex justify-center items-end px-[8%] py-4">
          <img
            src={mobileLogo}
            alt=" mobile logo"
            onClick={() => navigate("/")}
          />

          {/* <div className="w-full h-full flex justify-end space-x-[6vw] items-end"> */}
          <div className="w-full h-full flex justify-end space-x-4 items-end">
            <button
              className="font-nexa_light font-black bg-primary uppercase text-white rounded-full  pb-[2.5vw] pt-[3vw] leading-[4vw]  w-[25vw] text-[3vw] flex justify-center items-center h-fit"
              onClick={() => {
                navigate("../" + path.LOCATION);
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}
            >
              Order now
            </button>
            <button
              className={`${
                location.pathname === "/menu"
                  ? "hidden"
                  : "font-nexa font-black uppercase border-[1px] border-[#1E1B1A] text-secondary h-fit rounded-full pb-[2.5vw] pt-[3vw] leading-[4vw]  w-[25vw] text-[3vw] flex justify-center items-center"
              }`}
              onClick={() => {
                navigate("../" + path.MENU);
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}
              type="button"
            >
              Menu
            </button>
            <button
              onClick={() => HandleSideBar()}
              className="h-[14vw] flex flex-col justify-end"
              aria-label="Open menu" // Adding accessible name here
            >
              <img
                className="w-[30px] h-[30px]"
                src={menu_open}
                alt="Menu open icon" // Adding descriptive alt text for the image
              />
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* Desktop */}
        <div className='h-[65.5vw] pv:max-md:hidden w-full z-50 flex flex-row items-end bg-primary " id="sidebar'>
          <div className="absolute z-10 top-0 left-0 w-full h-[10vw] flex justify-center items-end px-[11.7%] py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62.868"
              height="60.988"
              viewBox="0 0 62.868 60.988"
              className="logoSidebar cursor-pointer"
              onClick={() => {
                navigate("/");
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}
            >
              <g
                id="Group_165"
                data-name="Group 165"
                transform="translate(-0.482 -0.482)"
              >
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M67.673,7.1A1.194,1.194,0,0,0,66.479,8.29V36.562A29.045,29.045,0,0,1,38.64,65.581V58.434a22.762,22.762,0,0,0,21.528-22.7V17a1.194,1.194,0,0,0-2.388,0v9.41l-1.663,1.663L37.433,46.741,17.45,26.758l-.364-.367V17.036a1.194,1.194,0,0,0-2.388,0V35.443A22.941,22.941,0,0,0,36.227,58.434v7.147A29.045,29.045,0,0,1,8.387,36.562V22.733a1.194,1.194,0,0,0-2.388,0V36.224a31.435,31.435,0,1,0,62.868.338V8.29A1.194,1.194,0,0,0,67.673,7.1M38.64,56.043v-7.1l19.14-19.14v5.666a20.535,20.535,0,0,1-19.14,20.57M17.087,35.733V29.807l19.14,19.14v7.1a20.372,20.372,0,0,1-19.14-20.31"
                  transform="translate(-5.517 -6.526)"
                  fill="#040504"
                />
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M259.393,41.57c-.115,0-.23,0-.345,0a11.6,11.6,0,0,1-8.092-3.61,11.872,11.872,0,0,1-3.308-8.245v-.123a1.115,1.115,0,1,1,2.23,0v.241a9.511,9.511,0,0,0,19.022,0V13.323a1.115,1.115,0,1,1,2.23,0V29.829A11.754,11.754,0,0,1,259.393,41.57"
                  transform="translate(-227.762 -11.228)"
                  fill="#040504"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M271.406,8.388H247.537a.818.818,0,0,1-.818-.818V6.818A.818.818,0,0,1,247.537,6h23.869a.818.818,0,0,1,.818.818V7.57a.818.818,0,0,1-.818.818"
                  transform="translate(-226.908 -5.518)"
                  fill="#040504"
                />
              </g>
            </svg>

            <div className="w-full h-full flex justify-end space-x-4 items-end">
              <button
                className="font-nexa_light font-black bg-white uppercase text-primary rounded-full px-[4vw] py-[1.1vw] text-[1vw] h-fit"
                onClick={() => {
                  navigate("../" + path.LOCATION);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                Order now
              </button>
              <button
                className="font-nexa_light uppercase border-[1px] border-white text-white text-secondary h-fit rounded-full px-[4vw] py-[1.1vw] text-[1vw]"
                onClick={() => {
                  navigate("../" + path.MENU);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
                type="button"
              >
                Menu
              </button>
              <button onClick={() => HandleSideBar()} className="h-[3.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="buttonSidebar"
                >
                  <g
                    id="Group_166"
                    data-name="Group 166"
                    transform="translate(-1623 -109)"
                  >
                    <g
                      id="Group_10"
                      data-name="Group 10"
                      transform="translate(-5.897 -6.733)"
                    >
                      <line
                        id="Line_1"
                        data-name="Line 1"
                        x2="46.397"
                        y2="40.89"
                        transform="translate(1630.897 120.733)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                      />
                    </g>
                    <g id="Group_165" data-name="Group 165">
                      <line
                        id="Line_2"
                        data-name="Line 2"
                        y1="40.89"
                        x2="45.897"
                        transform="translate(1625.103 114)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                      />
                      <g
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        transform="translate(1623 109)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                      >
                        <circle cx="25" cy="25" r="25" stroke="none" />
                        <circle cx="25" cy="25" r="24.5" fill="none" />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[38vw] h-full relative">
            <img src={sidebarBG} alt="" className="object-cover h-full" />
            <div className="absolute text-white bottom-0 left-0 w-full flex flex-col pt-[3vw] pl-[9vw] pr-[9%] h-[25vw]  border-t-[1px] border-white">
              {/* <img src={logo} alt='' className='w-full'/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250"
                height="90"
                viewBox="0 0 310.711 113.527"
                className="BigLogoSidebar"
              >
                <g
                  id="Group_166"
                  data-name="Group 166"
                  transform="translate(1.5 -4.059)"
                >
                  <path
                    id="Path_23"
                    data-name="Path 23"
                    d="M782.528,264.447v-1.062a2.952,2.952,0,0,1,2.952-2.953h4.062a2.952,2.952,0,0,1,2.952,2.953q0,3.508,4.476,3.507h4.059a9.86,9.86,0,0,0,3.645-.461,2.97,2.97,0,0,0,1.708-3.046V244.375a2.952,2.952,0,0,1,2.952-2.952h4.339a2.952,2.952,0,0,1,2.953,2.952v19.84q0,6.506-3.692,8.952-3.091,2.03-10.612,2.029h-6.69q-7.2,0-10.15-2.445t-2.953-8.3"
                    transform="translate(-655.567 -196.854)"
                    fill="#fff"
                  />
                  <path
                    id="Path_24"
                    data-name="Path 24"
                    d="M1047.246,261.2v-9.966q0-6.921,3.742-9.735,3.169-2.354,10.3-2.354h15.673q7.133,0,10.347,2.354,3.7,2.815,3.7,9.735V261.2q0,6.921-3.7,9.689-3.214,2.4-10.347,2.4h-15.673q-7.133,0-10.3-2.4-3.743-2.768-3.742-9.689m10.038-6.783v3.6q0,3.784,1.057,5.167,1.189,1.522,4.535,1.522h12.5q3.346,0,4.535-1.522,1.057-1.385,1.057-5.167v-3.6q0-3.414-1.146-4.891-1.364-1.8-4.975-1.8H1063.4q-3.611,0-4.975,1.8-1.146,1.478-1.144,4.891"
                    transform="translate(-877.336 -194.946)"
                    fill="#fff"
                  />
                  <path
                    id="Path_25"
                    data-name="Path 25"
                    d="M1383.82,269.706V263.2l-11.708-14.042a4.7,4.7,0,0,1,3.512-7.736h0a4.576,4.576,0,0,1,3.556,1.709l9.665,11.948,9.667-11.948a4.574,4.574,0,0,1,3.555-1.709,4.7,4.7,0,0,1,3.512,7.736L1393.871,263.2v6.505a5.027,5.027,0,1,1-10.052,0"
                    transform="translate(-1148.568 -196.854)"
                    fill="#fff"
                  />
                  <path
                    id="Path_26"
                    data-name="Path 26"
                    d="M1646.479,262.924V246.544a5.121,5.121,0,1,1,10.242,0v14.164q0,3.184,1.293,4.545t4.428,1.361h10.151q3.138,0,4.429-1.361t1.292-4.545V246.544a5.121,5.121,0,0,1,5.121-5.121h0a5.121,5.121,0,0,1,5.121,5.121v16.379q0,6.276-3.345,9.274t-10.359,3h-14.672q-7.014,0-10.358-3t-3.345-9.274"
                    transform="translate(-1379.347 -196.854)"
                    fill="#fff"
                  />
                  <path
                    id="Path_27"
                    data-name="Path 27"
                    d="M1684.415,118h0a5.121,5.121,0,0,1,5.121-5.122h19.576a5.122,5.122,0,0,1,0,10.243h-19.576a5.121,5.121,0,0,1-5.121-5.122"
                    transform="translate(-1411.128 -89.164)"
                    fill="#fff"
                  />
                  <path
                    id="Path_28"
                    data-name="Path 28"
                    d="M1071.771,118h0a5.122,5.122,0,0,1,5.122-5.122h19.577a5.122,5.122,0,0,1,0,10.243h-19.577a5.122,5.122,0,0,1-5.122-5.122"
                    transform="translate(-897.882 -89.164)"
                    fill="#fff"
                  />
                  <path
                    id="Path_29"
                    data-name="Path 29"
                    d="M111.929.985a2.167,2.167,0,0,0-2.167,2.167V54.461a52.712,52.712,0,0,1-50.524,52.665V94.155a41.309,41.309,0,0,0,39.07-41.2V18.963a2.167,2.167,0,0,0-4.334,0V36.04l-3.017,3.017L57.048,72.934,20.782,36.668,20.122,36V19.024a2.167,2.167,0,0,0-4.334,0V52.43c0,22.118,17.2,40.566,39.07,41.725v12.971A52.713,52.713,0,0,1,4.334,54.461v-25.1a2.167,2.167,0,0,0-4.334,0V53.848C0,84.813,24.436,110.6,55.389,111.485A57.11,57.11,0,0,0,114.1,54.461V3.152A2.167,2.167,0,0,0,111.929.985M59.237,89.816V76.937L93.973,42.2V52.485c0,19.717-15.27,36.177-34.736,37.331M20.122,52.956V42.2L54.858,76.937V89.815A36.971,36.971,0,0,1,20.122,52.956"
                    transform="translate(0 4.574)"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_30"
                    data-name="Path 30"
                    d="M238.368,58.864c-.208,0-.417,0-.626-.009A21.051,21.051,0,0,1,223.056,52.3a21.545,21.545,0,0,1-6-14.963v-.222a2.024,2.024,0,1,1,4.047,0v.438a17.261,17.261,0,0,0,34.522,0V7.6a2.024,2.024,0,1,1,4.047,0V37.555a21.331,21.331,0,0,1-21.3,21.309"
                    transform="translate(-181.837 0.728)"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_32"
                    data-name="Path 32"
                    d="M260.854,4.335H217.872a1.653,1.653,0,0,1-1.653-1.653V1.654A1.653,1.653,0,0,1,217.872,0h42.982a1.653,1.653,0,0,1,1.653,1.653V2.682a1.653,1.653,0,0,1-1.653,1.653"
                    transform="translate(-181.139 4.136)"
                    fill="#fff"
                  />
                </g>
              </svg>
              <p className="font-nexa_bold uppercase text-start pt-2 text-[1.5vw]">
                Sign up for our update
              </p>
              <p className="font-nexa_light text-start text-[1vw]">
                To stay up-to-date on our promotions, discounts, sales, special
                offers and more.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex justify-start items-center  "
              >
                <input
                  className="font-nexa_light h-[100%] text-black  text-[1vw]  px-6 py-[1vw] w-full rounded-l-full "
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <button
                  type="submit"
                  className="w-[4.5vw] h-[100%] py-[1vw] bg-[#848347] flex justify-center items-center rounded-r-full"
                >
                  <Icon
                    icon={"mingcute:send-fill"}
                    className="text-white h-[1.5vw] w-[1.5vw]"
                  ></Icon>
                </button>
              </form>
            </div>
          </div>
          <div className="w-3/5 h-full  relative">
            <div className="w-full h-[75%] flex flex-col space-y-[0.7vw] justify-center items-center text-white text-[2.2vw]">
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.MENU);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === "/menu"
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50">Menu</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.LOCATION);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.LOCATION
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50">Locations</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.OURSTORY);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.OURSTORY
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50">Our Story</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.CATERING);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.CATERING
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50 ">Catering</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.CAREERS);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.CAREERS
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50">Career</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.FRANCHISING);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.FRANCHISING
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50">Franchising</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.EVENT);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.EVENT
                      ? "h-[2.5vw] w-1 bg-white"
                      : "h-[2.5vw] w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold opacity-50">Events</p>
              </div>
            </div>
            <div className="absolute text-white bottom-0 left-0 w-full h-[25vw]  border-t-[1px] border-white">
              <div className="w-[59vw] h-full flex flex-col">
                <div className="w-full h-[10vw] flex justify-start items-end text-[1.8vw] pl-[3.2vw] pb-[1.5vw] gap-4">
                  <p className="font-shopee_bold text-white ">FOLLOW</p>
                  <button
                    onClick={() => {
                      navigate("../" + path.POLICY);
                      HandleSideBar();
                    }}
                    className="text-white hover:underline font-shopee_bold cursor-pointer "
                  >
                    <p className="">PRIVACY NOTICE</p>
                  </button>
                </div>
                <div className="flex space-x-[1vw] pl-[3.2vw] pt-[2.6vw]">
                  <div
                    className=" cursor-pointer w-[60px] h-[60px] border-[1px] border-white rounded-xl flex justify-center items-center"
                    onClick={() =>
                      window.location.assign(
                        "https://www.facebook.com/JoYuTeaCoffee?mibextid=LQQJ4d"
                      )
                    }
                  >
                    <Icon
                      icon={"gg:facebook"}
                      className="iconFooter cursor-pointer text-white"
                    ></Icon>
                  </div>

                  <div
                    className=" cursor-pointer w-[60px] h-[60px] border-[1px] border-white rounded-xl flex justify-center items-center"
                    onClick={() =>
                      window.location.assign(
                        "https://www.instagram.com/joyuteacoffee?igsh=eThtejIycmcyNGs2&utm_source=qr"
                      )
                    }
                  >
                    <Icon
                      icon={"lets-icons:insta"}
                      className="iconFooter cursor-pointer text-white"
                    ></Icon>
                  </div>

                  <div
                    className=" cursor-pointer w-[60px] h-[60px] border-[1px] border-white flex rounded-xl justify-center items-center"
                    onClick={() =>
                      window.location.assign(
                        "https://www.tiktok.com/@joyuteacoffee?_t=8mz1o24QV26&_r=1"
                      )
                    }
                  >
                    <Icon
                      icon={"ic:baseline-tiktok"}
                      className="iconFooter cursor-pointer text-white"
                    ></Icon>
                  </div>

                  <div
                    className=" cursor-pointer w-[60px] h-[60px] border-[1px] border-white rounded-xl flex justify-center items-center"
                    onClick={() =>
                      window.location.assign(
                        "https://m.youtube.com/@joyuteacoffee?si=cOhXUceyII9N8xxS"
                      )
                    }
                  >
                    <Icon
                      icon={"mdi:youtube"}
                      className="iconFooter cursor-pointer text-white"
                    ></Icon>
                  </div>
                </div>
                <p className="w-full text-start pl-[3.2vw] font-nexa_light font-black  text-white text-[1.3vw] pt-[2vw]">
                  Copyright JoYu Tea & Coffee {year}. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className='h-[310vw] w-full z-50 hidden pv:max-md:flex flex-row items-end bg-primary " id="sidebar'>
          <div className="hidden absolute z-10 top-[12vw] left-0 w-full h-[20vw] pv:max-md:flex justify-center items-end px-[8%] py-4">
            <img
              src={mobileLogo2}
              alt=" mobile logo"
              onClick={() => navigate("/")}
            />

            {/* <div className="w-full h-full flex justify-end space-x-[6vw] items-end"> */}
            <div className="w-full h-full flex justify-end space-x-3 items-end">
              <button
                className="font-nexa_light font-black bg-white uppercase text-primary rounded-full  pb-[1.5vw] pt-[2.5vw]  w-[25vw] text-[3vw] h-fit"
                onClick={() => {
                  navigate("../" + path.LOCATION);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                Order now
              </button>
              <button
                className="font-nexa font-black uppercase border-[1px] border-white text-white h-fit rounded-full  pb-[1.5vw] pt-[2.5vw]  w-[25vw] text-[3vw]"
                onClick={() => {
                  navigate("../" + path.MENU);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
                type="button"
              >
                Menu
              </button>
              <button
                onClick={() => HandleSideBar()}
                className="h-[14vw] flex flex-col justify-end"
                aria-label="Close menu" // Adding accessible name here
              >
                <img
                  className="w-[30px] h-[30px]"
                  src={menu_close}
                  alt="Close menu icon" // Adding descriptive alt text for the image
                />
              </button>
            </div>
          </div>
          <div className="w-full h-full relative">
            <img
              src={sidebarmobileBG}
              alt=""
              className="object-contain object-top h-full"
            />
            <div className="absolute top-[18vw] left-[2vw] w-full h-[75%] flex flex-col space-y-[4vw] justify-start pt-[30vw] items-center font-nexa text-white text-[8vw]">
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.MENU);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === "/menu"
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50">Menu</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.LOCATION);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.LOCATION
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50">
                  Locations
                </p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.OURSTORY);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.OURSTORY
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50">
                  Our Story
                </p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.CATERING);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.CATERING
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50 ">
                  Catering
                </p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.CAREERS);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.CAREERS
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50">Career</p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.FRANCHISING);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.FRANCHISING
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50">
                  Franchising
                </p>
              </div>
              <div
                className="flex w-full h-fit space-x-[3vw] cursor-pointer"
                onClick={() => {
                  navigate("../" + path.EVENT);
                  setOpenSidebar(false);
                  sessionStorage.setItem("openSidebar", false);
                }}
              >
                <div
                  className={`${
                    location.pathname === path.EVENT
                      ? "h-full w-1 bg-white"
                      : "h-full w-1"
                  }`}
                ></div>
                <p className="font-nexa_bold font-black opacity-50">Events</p>
              </div>
            </div>
            <div className="absolute text-white h-[135vw] bg-primary bottom-0 left-0 w-full flex flex-col justify-center items-start pl-[8vw] pr-[8%] ">
              {/* <img src={logo} alt='' className='w-full'/> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="245.68"
                height="101.252"
                viewBox="0 0 245.68 101.252"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_54"
                      data-name="Rectangle 54"
                      width="245.68"
                      height="101.252"
                      transform="translate(-4 -6)"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_8"
                  data-name="Group 8"
                  transform="translate(-42.16 -12.193)"
                >
                  <g
                    id="Group_7"
                    data-name="Group 7"
                    transform="translate(46.16 18.193)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M782.528,259.31v-.825a2.3,2.3,0,0,1,2.308-2.294h3.174a2.3,2.3,0,0,1,2.308,2.294q0,2.725,3.5,2.725h3.173a7.749,7.749,0,0,0,2.849-.358,2.306,2.306,0,0,0,1.335-2.366V243.717a2.3,2.3,0,0,1,2.308-2.294h3.391a2.3,2.3,0,0,1,2.308,2.294v15.414q0,5.055-2.885,6.955-2.416,1.577-8.294,1.576H792.77q-5.625,0-7.933-1.9t-2.308-6.452"
                      transform="translate(-683.295 -206.797)"
                      fill="#fff"
                    />
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M1047.246,256.28v-7.743q0-5.377,2.925-7.564,2.477-1.829,8.052-1.828h12.25q5.575,0,8.087,1.828,2.892,2.187,2.891,7.564v7.743q0,5.377-2.891,7.527-2.512,1.865-8.087,1.864h-12.25q-5.575,0-8.052-1.864-2.925-2.151-2.925-7.527m7.846-5.27v2.8q0,2.94.826,4.015.929,1.182,3.544,1.183h9.773q2.615,0,3.544-1.183.827-1.076.826-4.015v-2.8a6.264,6.264,0,0,0-.9-3.8q-1.066-1.4-3.888-1.4h-8.948q-2.822,0-3.889,1.4a6.262,6.262,0,0,0-.894,3.8"
                      transform="translate(-914.444 -204.806)"
                      fill="#fff"
                    />
                    <path
                      id="Path_25"
                      data-name="Path 25"
                      d="M1381.021,263.4v-5.054l-9.151-10.909a3.653,3.653,0,0,1,2.745-6.01h0a3.584,3.584,0,0,1,2.779,1.328l7.554,9.283,7.556-9.283a3.584,3.584,0,0,1,2.779-1.328,3.653,3.653,0,0,1,2.745,6.01l-9.151,10.91V263.4a3.928,3.928,0,1,1-7.856,0"
                      transform="translate(-1197.149 -206.797)"
                      fill="#fff"
                    />
                    <path
                      id="Path_26"
                      data-name="Path 26"
                      d="M1646.479,258.127V245.4a4,4,0,0,1,8.005,0v11a5.026,5.026,0,0,0,1.01,3.531,4.655,4.655,0,0,0,3.461,1.057h7.934a4.658,4.658,0,0,0,3.462-1.057,5.025,5.025,0,0,0,1.01-3.531v-11a3.991,3.991,0,0,1,4-3.979h0a3.991,3.991,0,0,1,4,3.979v12.726q0,4.876-2.614,7.205t-8.1,2.33h-11.468q-5.482,0-8.1-2.33t-2.614-7.205"
                      transform="translate(-1437.688 -206.797)"
                      fill="#fff"
                    />
                    <path
                      id="Path_27"
                      data-name="Path 27"
                      d="M1684.415,116.856h0a3.991,3.991,0,0,1,4-3.979h15.3a3.979,3.979,0,1,1,0,7.958h-15.3a3.991,3.991,0,0,1-4-3.979"
                      transform="translate(-1470.814 -94.454)"
                      fill="#fff"
                    />
                    <path
                      id="Path_28"
                      data-name="Path 28"
                      d="M1071.771,116.856h0a3.991,3.991,0,0,1,4-3.979h15.3a3.979,3.979,0,1,1,0,7.958h-15.3a3.991,3.991,0,0,1-4-3.979"
                      transform="translate(-935.859 -94.454)"
                      fill="#fff"
                    />
                    <path
                      id="Path_29"
                      data-name="Path 29"
                      d="M87.484.985A1.689,1.689,0,0,0,85.79,2.669V42.532A41.065,41.065,0,0,1,46.3,83.448V73.37A32.179,32.179,0,0,0,76.837,41.362V14.952a1.694,1.694,0,0,0-3.387,0V28.22l-2.358,2.344-26.5,26.319L16.243,28.708l-.516-.517V15a1.694,1.694,0,0,0-3.387,0V40.954A32.429,32.429,0,0,0,42.877,73.371V83.448A41.065,41.065,0,0,1,3.387,42.531v-19.5a1.694,1.694,0,0,0-3.387,0V42.055a44.589,44.589,0,0,0,89.177.476V2.669A1.689,1.689,0,0,0,87.484.985M46.3,70V59.994L73.45,33.007V41A29.026,29.026,0,0,1,46.3,70M15.728,41.362V33.007l27.15,26.987V70a28.8,28.8,0,0,1-27.15-28.636"
                      transform="translate(0 3.334)"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="3"
                    />
                    <path
                      id="Path_30"
                      data-name="Path 30"
                      d="M233.713,46.976c-.163,0-.326,0-.489-.007a16.5,16.5,0,0,1-11.479-5.09,16.686,16.686,0,0,1-4.692-11.625v-.173a1.582,1.582,0,0,1,3.163,0v.34a13.492,13.492,0,0,0,26.983,0V7.148a1.582,1.582,0,0,1,3.163,0V30.421a16.375,16.375,0,0,1-5.054,11.868,16.572,16.572,0,0,1-11.6,4.687"
                      transform="translate(-189.528 -0.678)"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="3"
                    />
                    <path
                      id="Path_31"
                      data-name="Path 31"
                      d="M232.984,46.353h0c-.164,0-.328,0-.492-.007a16.6,16.6,0,0,1-11.552-5.123,16.791,16.791,0,0,1-4.721-11.7v-.173a1.687,1.687,0,0,1,3.375,0v.34a13.386,13.386,0,0,0,26.771,0V6.419a1.688,1.688,0,0,1,3.375,0V29.692a16.478,16.478,0,0,1-5.086,11.944,16.714,16.714,0,0,1-11.669,4.717M217.905,27.885a1.473,1.473,0,0,0-1.476,1.467v.173a16.582,16.582,0,0,0,4.663,11.552A16.393,16.393,0,0,0,232.5,46.135c.163,0,.324.007.486.007a16.5,16.5,0,0,0,11.522-4.657,16.27,16.27,0,0,0,5.022-11.793V6.419a1.476,1.476,0,0,0-2.952,0V29.693a13.6,13.6,0,0,1-27.194,0v-.34a1.473,1.473,0,0,0-1.476-1.467"
                      transform="translate(-188.799 0.05)"
                      fill="#fff"
                    />
                    <path
                      id="Path_32"
                      data-name="Path 32"
                      d="M251.106,5.659H217.511c-.714,0-1.292-.966-1.292-2.158V2.159C216.219.967,216.8,0,217.511,0h33.594c.714,0,1.292.966,1.292,2.158V3.5c0,1.192-.579,2.158-1.292,2.158"
                      transform="translate(-188.8 0.923)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
              <p className="font-nexa_bold font-black uppercase text-start w-full pt-[10vw] text-[6vw] ">
                Sign up for our update
              </p>
              <p className="font-nexa text-start text-[4.75vw] w-full tracking-tighter leading-[6.8vw] pt-[2vw] pb-[5vw]">
                To stay up-to-date on our promotions, discounts, sales, special
                offers and more.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex justify-start items-center w-[100%] "
              >
                <input
                  type="email"
                  className="font-nexa_light text-black  px-[4vw] text-start py-[4vw] w-[100%] text-[4vw] rounded-l-full"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-[80px] h-[100%] py-[1vw] bg-[#848347] flex justify-center items-center rounded-r-full"
                  aria-label="Send" // Adding an accessible name for the button
                >
                  <Icon
                    icon={"mingcute:send-fill"}
                    className="text-white h-6 w-6"
                  />
                </button>
              </form>

              <div className="h-[0.4vw] w-full bg-gray-300 mt-[12vw] mb-[3vw]"></div>
              <div className="flex items-center  justify-between w-full">
                <p className="font-shopee_bold text-left text-white text-[5vw]">
                  FOLLOW
                </p>
                <button
                  onClick={() => {
                    navigate("../" + path.POLICY);
                    HandleSideBar();
                  }}
                  className="text-white hover:underline font-shopee_bold text-left text-[5vw] cursor-pointer "
                >
                  <p className=""> PRIVACY NOTICE</p>
                </button>
              </div>
              <div className="flex space-x-[2vw]  pt-[2.6vw]">
                <div
                  className=" cursor-pointer w-[14vw] h-[14vw] border-[1px] border-white rounded-xl flex justify-center items-center"
                  onClick={() =>
                    window.location.assign(
                      "https://www.facebook.com/JoYuTeaCoffee?mibextid=LQQJ4d"
                    )
                  }
                >
                  <Icon
                    icon={"gg:facebook"}
                    className="w-[10vw] h-[10vw] cursor-pointer text-white"
                  ></Icon>
                </div>

                <div
                  className=" cursor-pointer w-[14vw] h-[14vw] border-[1px] border-white rounded-xl flex justify-center items-center"
                  onClick={() =>
                    window.location.assign(
                      "https://www.instagram.com/joyuteacoffee?igsh=eThtejIycmcyNGs2&utm_source=qr"
                    )
                  }
                >
                  <Icon
                    icon={"lets-icons:insta"}
                    className="w-[10vw] h-[10vw] cursor-pointer text-white"
                  ></Icon>
                </div>

                <div
                  className=" cursor-pointer w-[14vw] h-[14vw] border-[1px] border-white flex rounded-xl justify-center items-center"
                  onClick={() =>
                    window.location.assign(
                      "https://www.tiktok.com/@joyuteacoffee?_t=8mz1o24QV26&_r=1"
                    )
                  }
                >
                  <Icon
                    icon={"ic:baseline-tiktok"}
                    className="w-[10vw] h-[10vw] cursor-pointer text-white"
                  ></Icon>
                </div>

                <div
                  className=" cursor-pointer w-[14vw] h-[14vw] border-[1px] border-white rounded-xl flex justify-center items-center"
                  onClick={() =>
                    window.location.assign(
                      "https://m.youtube.com/@joyuteacoffee?si=cOhXUceyII9N8xxS"
                    )
                  }
                >
                  <Icon
                    icon={"mdi:youtube"}
                    className="w-[10vw] h-[10vw] cursor-pointer text-white"
                  ></Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Sidebar;
