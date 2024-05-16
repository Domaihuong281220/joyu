/** @format */

import React, { useEffect, useState } from "react";

import sidebarBG from "../assets/SideBar/sidebarbg.png";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/SideBar/logo.png";
import { path } from "../utils/Constant";

const Sidebar = () => {

  const location = useLocation(); // Get the current location

  // Log the current path
  console.log('Current path:', location.pathname);

  const [openSidebar, setOpenSidebar] = useState(
    sessionStorage.getItem("openSidebar")
  );
  const navigate = useNavigate();

  const HandleSideBar = () => {
    // console.log("sidebar")

    // console.log(sessionStorage.getItem('openSidebar'));
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
      <div className="absolute z-10 top-0 left-0 w-full h-[10vw] flex justify-center items-end px-[11.7%] py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62.868"
          height="60.988"
          viewBox="0 0 62.868 60.988"
          className="logoSidebar"
          onClick={()=>{navigate("/")
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
          <button className="font-nexa_light  font-black bg-primary uppercase text-white rounded-full px-[4vw] py-[1.1vw] text-[1vw] h-fit" onClick={() => {
            navigate("../" + path.LOCATION);
            setOpenSidebar(false);
            sessionStorage.setItem("openSidebar", false);
          }}>
            Order now
          </button>
          <button className="font-nexa_light uppercase border-[1px] border-[#1E1B1A] text-secondary h-fit rounded-full px-[4vw] py-[1.1vw] text-[1vw]" onClick={() => {
                navigate("../" + path.MENU);
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}>
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
                  stroke-width="1"
                />
                <line
                  id="Line_25"
                  data-name="Line 25"
                  x2="47"
                  transform="translate(1647 107.5)"
                  fill="none"
                  stroke="#000"
                  stroke-width="1"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x2="47"
                  transform="translate(1647 141.5)"
                  fill="none"
                  stroke="#000"
                  stroke-width="1"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='h-[65.5vw] w-full z-50 flex flex-row items-end bg-primary " id="sidebar'>
        <div className="absolute z-10 top-0 left-0 w-full h-[10vw] flex justify-center items-end px-[11.7%] py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62.868"
            height="60.988"
            viewBox="0 0 62.868 60.988"
            className="logoSidebar"
            onClick={()=>{navigate("/")
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
            <button className="font-nexa_light font-black bg-white uppercase text-primary rounded-full px-[4vw] py-[1.1vw] text-[1vw] h-fit" onClick={() => {
              navigate("../" + path.LOCATION);
              setOpenSidebar(false);
              sessionStorage.setItem("openSidebar", false);
            }}>
              Order now
            </button>
            <button className="font-nexa_light uppercase border-[1px] border-[#1E1B1A] text-secondary h-fit rounded-full px-[4vw] py-[1.1vw] text-[1vw]" onClick={() => {
                navigate("../" + path.MENU);
                setOpenSidebar(false);
                sessionStorage.setItem("openSidebar", false);
              }}>
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
                      stroke-width="1"
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
                      stroke-width="1"
                    />
                    <g
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      transform="translate(1623 109)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1"
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
                  stroke-width="3"
                />
                <path
                  id="Path_30"
                  data-name="Path 30"
                  d="M238.368,58.864c-.208,0-.417,0-.626-.009A21.051,21.051,0,0,1,223.056,52.3a21.545,21.545,0,0,1-6-14.963v-.222a2.024,2.024,0,1,1,4.047,0v.438a17.261,17.261,0,0,0,34.522,0V7.6a2.024,2.024,0,1,1,4.047,0V37.555a21.331,21.331,0,0,1-21.3,21.309"
                  transform="translate(-181.837 0.728)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="3"
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
            <input
              type="email"
              className="font-nexa_light text-[#44614f46] mt-[1vw] px-[1vw] py-[1vw] w-[21vw] text-[1vw] rounded-full"
              placeholder="Enter your email"
            ></input>
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
              <div className={`${(location.pathname === "/menu")?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
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
              <div className={`${(location.pathname === path.LOCATION)?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
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
              <div className={`${(location.pathname === path.OURSTORY)?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
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
              <div className={`${(location.pathname === path.CATERING)?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
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
              <div className={`${(location.pathname === path.CAREERS)?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
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
              <div className={`${(location.pathname === path.FRANCHISING)?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
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
              <div className={`${(location.pathname === path.EVENT)?"h-[2.5vw] w-1 bg-white":"h-[2.5vw] w-1"}`}></div>
              <p className="font-nexa_bold opacity-50">Events</p>
            </div>
          </div>
          <div className="absolute text-white bottom-0 left-0 w-full h-[25vw]  border-t-[1px] border-white"></div>
        </div>
      </div>
    );
  }
};

export default Sidebar;
