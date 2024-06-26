import React, { useState } from 'react';

import Facebook from "../assets/Footer/Facebook.png"
import IG from "../assets/Footer/IG.png"
import Youtube from "../assets/Footer/Youtube.png"
import axios from 'axios';
import {toast} from "sonner"


function Signature() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/customer`, formData
      )
      if (response.status === 200) {
        toast.success("Thank you for subscribing!")
      }
      else {
        toast.error("Email already exists!")
      }
    }
    catch (err) {
      toast.error("Email already exists!")
      console.log(err)
    }
  };

  return (
    <>

      {/* Desktop */}
      <div className="pv:max-md:hidden w-full h-[31vw] bg-primary flex justify-center items-center flex-col relative">
        <div className='w-full h-[0.05vw] bg-white absolute top-1/2 translate-y-1/2'></div>
        <div className='w-[0.05vw] h-[17.5vw] bg-white absolute left-[40.3vw] '></div>
        <div className='absolute z-10 w-full h-full flex'>
          <div className='w-[40.5vw] h-full flex flex-col'>
            <div className='w-full h-[15.5vw] flex justify-start items-end pb-[2vw] pl-[13.2vw] '>
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="90" viewBox="0 0 310.711 113.527" className='logoFooter'>
                <g id="Group_166" data-name="Group 166" transform="translate(1.5 -4.059)">
                  <path id="Path_23" data-name="Path 23" d="M782.528,264.447v-1.062a2.952,2.952,0,0,1,2.952-2.953h4.062a2.952,2.952,0,0,1,2.952,2.953q0,3.508,4.476,3.507h4.059a9.86,9.86,0,0,0,3.645-.461,2.97,2.97,0,0,0,1.708-3.046V244.375a2.952,2.952,0,0,1,2.952-2.952h4.339a2.952,2.952,0,0,1,2.953,2.952v19.84q0,6.506-3.692,8.952-3.091,2.03-10.612,2.029h-6.69q-7.2,0-10.15-2.445t-2.953-8.3" transform="translate(-655.567 -196.854)" fill="#fff" />
                  <path id="Path_24" data-name="Path 24" d="M1047.246,261.2v-9.966q0-6.921,3.742-9.735,3.169-2.354,10.3-2.354h15.673q7.133,0,10.347,2.354,3.7,2.815,3.7,9.735V261.2q0,6.921-3.7,9.689-3.214,2.4-10.347,2.4h-15.673q-7.133,0-10.3-2.4-3.743-2.768-3.742-9.689m10.038-6.783v3.6q0,3.784,1.057,5.167,1.189,1.522,4.535,1.522h12.5q3.346,0,4.535-1.522,1.057-1.385,1.057-5.167v-3.6q0-3.414-1.146-4.891-1.364-1.8-4.975-1.8H1063.4q-3.611,0-4.975,1.8-1.146,1.478-1.144,4.891" transform="translate(-877.336 -194.946)" fill="#fff" />
                  <path id="Path_25" data-name="Path 25" d="M1383.82,269.706V263.2l-11.708-14.042a4.7,4.7,0,0,1,3.512-7.736h0a4.576,4.576,0,0,1,3.556,1.709l9.665,11.948,9.667-11.948a4.574,4.574,0,0,1,3.555-1.709,4.7,4.7,0,0,1,3.512,7.736L1393.871,263.2v6.505a5.027,5.027,0,1,1-10.052,0" transform="translate(-1148.568 -196.854)" fill="#fff" />
                  <path id="Path_26" data-name="Path 26" d="M1646.479,262.924V246.544a5.121,5.121,0,1,1,10.242,0v14.164q0,3.184,1.293,4.545t4.428,1.361h10.151q3.138,0,4.429-1.361t1.292-4.545V246.544a5.121,5.121,0,0,1,5.121-5.121h0a5.121,5.121,0,0,1,5.121,5.121v16.379q0,6.276-3.345,9.274t-10.359,3h-14.672q-7.014,0-10.358-3t-3.345-9.274" transform="translate(-1379.347 -196.854)" fill="#fff" />
                  <path id="Path_27" data-name="Path 27" d="M1684.415,118h0a5.121,5.121,0,0,1,5.121-5.122h19.576a5.122,5.122,0,0,1,0,10.243h-19.576a5.121,5.121,0,0,1-5.121-5.122" transform="translate(-1411.128 -89.164)" fill="#fff" />
                  <path id="Path_28" data-name="Path 28" d="M1071.771,118h0a5.122,5.122,0,0,1,5.122-5.122h19.577a5.122,5.122,0,0,1,0,10.243h-19.577a5.122,5.122,0,0,1-5.122-5.122" transform="translate(-897.882 -89.164)" fill="#fff" />
                  <path id="Path_29" data-name="Path 29" d="M111.929.985a2.167,2.167,0,0,0-2.167,2.167V54.461a52.712,52.712,0,0,1-50.524,52.665V94.155a41.309,41.309,0,0,0,39.07-41.2V18.963a2.167,2.167,0,0,0-4.334,0V36.04l-3.017,3.017L57.048,72.934,20.782,36.668,20.122,36V19.024a2.167,2.167,0,0,0-4.334,0V52.43c0,22.118,17.2,40.566,39.07,41.725v12.971A52.713,52.713,0,0,1,4.334,54.461v-25.1a2.167,2.167,0,0,0-4.334,0V53.848C0,84.813,24.436,110.6,55.389,111.485A57.11,57.11,0,0,0,114.1,54.461V3.152A2.167,2.167,0,0,0,111.929.985M59.237,89.816V76.937L93.973,42.2V52.485c0,19.717-15.27,36.177-34.736,37.331M20.122,52.956V42.2L54.858,76.937V89.815A36.971,36.971,0,0,1,20.122,52.956" transform="translate(0 4.574)" fill="#fff" stroke="#fff" stroke-width="3" />
                  <path id="Path_30" data-name="Path 30" d="M238.368,58.864c-.208,0-.417,0-.626-.009A21.051,21.051,0,0,1,223.056,52.3a21.545,21.545,0,0,1-6-14.963v-.222a2.024,2.024,0,1,1,4.047,0v.438a17.261,17.261,0,0,0,34.522,0V7.6a2.024,2.024,0,1,1,4.047,0V37.555a21.331,21.331,0,0,1-21.3,21.309" transform="translate(-181.837 0.728)" fill="#fff" stroke="#fff" stroke-width="3" />
                  <path id="Path_32" data-name="Path 32" d="M260.854,4.335H217.872a1.653,1.653,0,0,1-1.653-1.653V1.654A1.653,1.653,0,0,1,217.872,0h42.982a1.653,1.653,0,0,1,1.653,1.653V2.682a1.653,1.653,0,0,1-1.653,1.653" transform="translate(-181.139 4.136)" fill="#fff" />
                </g>
              </svg>
            </div>
            <div className='pl-[13.2vw] pt-[1.8vw] pr-[4vw] text-white'>
              <p className="font-nexa_bold uppercase text-start pv:max-md:text-center pt-2 text-[1.5vw]">Sign up for our update</p>
              <p className="font-nexa_light text-start text-[1vw]">To stay up-to-date on our promotions, discounts, sales, special offers and more.</p>
              <form onSubmit={handleSubmit} className="flex justify-start">
                <input
                  type="email"
                  className="font-nexa_light text-[#44614f46] text-[1vw] mt-[1vw] px-6 py-[1vw] w-full rounded-full"
                  placeholder="Enter your email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <button type="submit" style={{ display: 'none' }}>Submit</button>
              </form>
            </div>
          </div>
          <div className='w-[59vw] h-full flex flex-col'>
            <div className='w-full h-[15.5vw] flex justify-start items-end text-[1.8vw] pl-[3.2vw] pb-[1.5vw]'>
              <p className='font-shopee_bold text-white '>FOLLOW</p>
            </div>
            <div className='flex space-x-[1vw] pl-[3.2vw] pt-[2.6vw]' >
              {/* Facebook */}
              {/* <img src={Facebook} alt='' className='iconFooter' onClick={() => window.location.assign("https://www.facebook.com/JoYuTeaCoffee?mibextid=LQQJ4d")} /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="60.668" height="60.668" viewBox="0 0 60.668 60.668"
                  className='iconFooter' onClick={() => window.location.assign("https://www.facebook.com/JoYuTeaCoffee?mibextid=LQQJ4d")}>
                  <g id="Group_184" data-name="Group 184" transform="translate(-26.729 -1509.641)">
                    <rect id="Rectangle_64" data-name="Rectangle 64" width="59.668" height="59.668" rx="11.207" transform="translate(27.229 1510.141)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                    <path id="Path_37" data-name="Path 37" d="M34.957,18.013c1.611,0,4.336.024,4.336.024V12.564s-1.9-.048-4.383,0-8.6.236-8.6,7.439v4.644H21.57v5.686h4.739V48.1h6.776V30.333h5.544l.664-5.686H33.085V20s.261-1.99,1.872-1.99" transform="translate(26.729 1509.641)" fill="#fff" />
                  </g>
                </svg>

              {/* Instagram */}
              {/* <img src={IG} alt='' className='iconFooter' onClick={() => window.location.assign("https://www.instagram.com/joyuteacoffee?igsh=eThtejIycmcyNGs2&utm_source=qr")} /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="60.668" height="60.668" viewBox="0 0 60.668 60.668" className='iconFooter' onClick={() => window.location.assign("https://www.instagram.com/joyuteacoffee?igsh=eThtejIycmcyNGs2&utm_source=qr")}>
                  <g id="Group_186" data-name="Group 186" transform="translate(-103.896 -1509.641)">
                    <path id="Rectangle_65" data-name="Rectangle 65" d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z" transform="translate(104.396 1510.141)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                    <path id="Path_38" data-name="Path 38" d="M90.663,23.741a11.47,11.47,0,0,1,1.64-6.278,8.923,8.923,0,0,1,4.764-3.626,18.607,18.607,0,0,1,6.025-.667q5.848-.012,11.7.037a11,11,0,0,1,6.141,1.717,8.528,8.528,0,0,1,3.787,5.824,26.676,26.676,0,0,1,.379,4.407c.019,4.2-.027,8.392-.094,12.587a10.173,10.173,0,0,1-1.413,5.217,8.755,8.755,0,0,1-4.977,3.882,19.238,19.238,0,0,1-5.962.655q-5.741.012-11.481-.028a11.6,11.6,0,0,1-5.731-1.349,8.693,8.693,0,0,1-4.158-5.178,18.378,18.378,0,0,1-.642-4.7c-.014-.28-.039-9.283.025-12.5M94.006,38.72a5.871,5.871,0,0,0,2.261,4.191,7.5,7.5,0,0,0,4.565,1.405,133.7,133.7,0,0,0,15.454-.162,6.14,6.14,0,0,0,3.148-1.206,6.427,6.427,0,0,0,2.447-5.326c.1-3.861.077-7.726.063-11.588a40.37,40.37,0,0,0-.219-4.144,5.862,5.862,0,0,0-1.928-3.858,6.654,6.654,0,0,0-4.473-1.619c-4.193-.084-8.388-.143-12.581-.116a15.269,15.269,0,0,0-4.6.506A5.664,5.664,0,0,0,94,21.968c-.234,3.016-.2,14.809,0,16.752" transform="translate(26.729 1509.641)" fill="#fff" />
                    <path id="Path_39" data-name="Path 39" d="M107.9,21.508a8.842,8.842,0,1,1-8.921,8.752,8.845,8.845,0,0,1,8.921-8.752m5.69,8.9a5.718,5.718,0,1,0-5.666,5.64,5.744,5.744,0,0,0,5.666-5.64" transform="translate(26.729 1509.641)" fill="#fff" />
                    <path id="Path_40" data-name="Path 40" d="M117.069,23.206a2.033,2.033,0,0,1-2.1-2.024,2.108,2.108,0,0,1,4.216.019,2.027,2.027,0,0,1-2.119,2" transform="translate(26.729 1509.641)" fill="#fff" />
                  </g>
                </svg>

              {/* Tiktok */}
              <svg xmlns="http://www.w3.org/2000/svg" width="60.668" height="60.668" viewBox="0 0 60.668 60.668" className='iconFooter'
                onClick={() => window.location.assign("https://www.tiktok.com/@joyuteacoffee?_t=8mz1o24QV26&_r=1")}
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_211" width="31.828" height="36.393" transform="translate(0 0)" fill="none" />
                  </clipPath>
                </defs>
                <g id="Group_167" transform="translate(-1538.856 -3073.001)">
                  <path id="Rectangle_93" d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z" transform="translate(1539.356 3073.501)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1" />
                  <g id="Group_78" transform="translate(1553.276 3085.154)" clipPath="url(#clip-path)">
                    <path id="Path_13440" d="M31.036,8.5A7.894,7.894,0,0,1,23.142.6c0-.03,0-.061,0-.091h0V0H16.928V24.824A5.355,5.355,0,1,1,13,19.659V13.341a11.571,11.571,0,1,0,0,22.967A11.569,11.569,0,0,0,23.142,24.824V11.473a8.854,8.854,0,0,0,8.686,3.192V8.459q-.391.039-.793.039" transform="translate(0 -0.002)" fill="#fff" />
                  </g>
                </g>
              </svg>
              {/* Youtube */}
              {/* <img src={Youtube} alt='' className='iconFooter' onClick={() => window.location.assign("https://m.youtube.com/@joyuteacoffee?si=cOhXUceyII9N8xxS")} /> */}
              <svg width="60.668" height="60.668" viewBox="0 0 60.668 60.668" className='iconFooter' onClick={() => window.location.assign("https://m.youtube.com/@joyuteacoffee?si=cOhXUceyII9N8xxS")}>
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rectangle_326" width="38.395" height="26.885" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="Group_185" transform="translate(-261.039 -1509.641)">
                    <rect
                      id="Rectangle_64"
                      width="59.668"
                      height="59.668"
                      rx="11.207"
                      transform="translate(261.539 1510.141)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                    <g id="Group_162" transform="translate(272.176 1526.533)">
                      <g id="Group_161" clipPath="url(#clip-path)">
                        <path
                          id="Path_13741"
                          d="M14.037.064Q21.06-.113,28.084.19c1.521.075,3.042.156,4.554.337a7.444,7.444,0,0,1,2.414.59A4.823,4.823,0,0,1,37.634,4.34a31.883,31.883,0,0,1,.653,5.372,65,65,0,0,1-.053,8.311,27.819,27.819,0,0,1-.615,4.584,4.82,4.82,0,0,1-2.6,3.176,8.391,8.391,0,0,1-2.655.606c-2.332.249-4.677.331-7.021.4q-7.5.223-15-.1a47.416,47.416,0,0,1-5.688-.507A4.843,4.843,0,0,1,1.21,23.714a8.327,8.327,0,0,1-.736-2.687A59.072,59.072,0,0,1,0,13.555,62.016,62.016,0,0,1,.419,6.247a8.978,8.978,0,0,1,.847-3.182A4.822,4.822,0,0,1,3.384,1.1,8.491,8.491,0,0,1,6.072.491C8.718.214,11.38.14,14.037.064M15.357,7.7q0,5.744,0,11.488L25.3,13.443Q20.331,10.568,15.357,7.7Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
            </div>
            <p className='w-full text-start pl-[3.2vw] font-nexa_light font-black  text-white text-[1.1vw] pt-[3.5vw]'>Copyright JoYu Tea & Coffee 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="hidden w-[100vw]  text-white h-[135vw] bg-primary bottom-0 left-0 pv:max-md:flex flex-col justify-center items-start px-[8vw] border-t-[1px] border-white">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="245.68" height="101.252" viewBox="0 0 245.68 101.252">
    <defs>
      <clipPath id="clip-path">
        <rect id="Rectangle_54" data-name="Rectangle 54" width="245.68" height="101.252" transform="translate(-4 -6)" fill="#fff" />
      </clipPath>
    </defs>
    <g id="Group_8" data-name="Group 8" transform="translate(-42.16 -12.193)">
      <g id="Group_7" data-name="Group 7" transform="translate(46.16 18.193)" clipPath="url(#clip-path)">
        <path id="Path_23" data-name="Path 23" d="M782.528,259.31v-.825a2.3,2.3,0,0,1,2.308-2.294h3.174a2.3,2.3,0,0,1,2.308,2.294q0,2.725,3.5,2.725h3.173a7.749,7.749,0,0,0,2.849-.358,2.306,2.306,0,0,0,1.335-2.366V243.717a2.3,2.3,0,0,1,2.308-2.294h3.391a2.3,2.3,0,0,1,2.308,2.294v15.414q0,5.055-2.885,6.955-2.416,1.577-8.294,1.576H792.77q-5.625,0-7.933-1.9t-2.308-6.452" transform="translate(-683.295 -206.797)" fill="#fff" />
        <path id="Path_24" data-name="Path 24" d="M1047.246,256.28v-7.743q0-5.377,2.925-7.564,2.477-1.829,8.052-1.828h12.25q5.575,0,8.087,1.828,2.892,2.187,2.891,7.564v7.743q0,5.377-2.891,7.527-2.512,1.865-8.087,1.864h-12.25q-5.575,0-8.052-1.864-2.925-2.151-2.925-7.527m7.846-5.27v2.8q0,2.94.826,4.015.929,1.182,3.544,1.183h9.773q2.615,0,3.544-1.183.827-1.076.826-4.015v-2.8a6.264,6.264,0,0,0-.9-3.8q-1.066-1.4-3.888-1.4h-8.948q-2.822,0-3.889,1.4a6.262,6.262,0,0,0-.894,3.8" transform="translate(-914.444 -204.806)" fill="#fff" />
        <path id="Path_25" data-name="Path 25" d="M1381.021,263.4v-5.054l-9.151-10.909a3.653,3.653,0,0,1,2.745-6.01h0a3.584,3.584,0,0,1,2.779,1.328l7.554,9.283,7.556-9.283a3.584,3.584,0,0,1,2.779-1.328,3.653,3.653,0,0,1,2.745,6.01l-9.151,10.91V263.4a3.928,3.928,0,1,1-7.856,0" transform="translate(-1197.149 -206.797)" fill="#fff" />
        <path id="Path_26" data-name="Path 26" d="M1646.479,258.127V245.4a4,4,0,0,1,8.005,0v11a5.026,5.026,0,0,0,1.01,3.531,4.655,4.655,0,0,0,3.461,1.057h7.934a4.658,4.658,0,0,0,3.462-1.057,5.025,5.025,0,0,0,1.01-3.531v-11a3.991,3.991,0,0,1,4-3.979h0a3.991,3.991,0,0,1,4,3.979v12.726q0,4.876-2.614,7.205t-8.1,2.33h-11.468q-5.482,0-8.1-2.33t-2.614-7.205" transform="translate(-1437.688 -206.797)" fill="#fff" />
        <path id="Path_27" data-name="Path 27" d="M1684.415,116.856h0a3.991,3.991,0,0,1,4-3.979h15.3a3.979,3.979,0,1,1,0,7.958h-15.3a3.991,3.991,0,0,1-4-3.979" transform="translate(-1470.814 -94.454)" fill="#fff" />
        <path id="Path_28" data-name="Path 28" d="M1071.771,116.856h0a3.991,3.991,0,0,1,4-3.979h15.3a3.979,3.979,0,1,1,0,7.958h-15.3a3.991,3.991,0,0,1-4-3.979" transform="translate(-935.859 -94.454)" fill="#fff" />
        <path id="Path_29" data-name="Path 29" d="M87.484.985A1.689,1.689,0,0,0,85.79,2.669V42.532A41.065,41.065,0,0,1,46.3,83.448V73.37A32.179,32.179,0,0,0,76.837,41.362V14.952a1.694,1.694,0,0,0-3.387,0V28.22l-2.358,2.344-26.5,26.319L16.243,28.708l-.516-.517V15a1.694,1.694,0,0,0-3.387,0V40.954A32.429,32.429,0,0,0,42.877,73.371V83.448A41.065,41.065,0,0,1,3.387,42.531v-19.5a1.694,1.694,0,0,0-3.387,0V42.055a44.589,44.589,0,0,0,89.177.476V2.669A1.689,1.689,0,0,0,87.484.985M46.3,70V59.994L73.45,33.007V41A29.026,29.026,0,0,1,46.3,70M15.728,41.362V33.007l27.15,26.987V70a28.8,28.8,0,0,1-27.15-28.636" transform="translate(0 3.334)" fill="#fff" stroke="#fff" strokeWidth="3" />
        <path id="Path_30" data-name="Path 30" d="M233.713,46.976c-.163,0-.326,0-.489-.007a16.5,16.5,0,0,1-11.479-5.09,16.686,16.686,0,0,1-4.692-11.625v-.173a1.582,1.582,0,0,1,3.163,0v.34a13.492,13.492,0,0,0,26.983,0V7.148a1.582,1.582,0,0,1,3.163,0V30.421a16.375,16.375,0,0,1-5.054,11.868,16.572,16.572,0,0,1-11.6,4.687" transform="translate(-189.528 -0.678)" fill="#fff" stroke="#fff" strokeWidth="3" />
        <path id="Path_31" data-name="Path 31" d="M232.984,46.353h0c-.164,0-.328,0-.492-.007a16.6,16.6,0,0,1-11.552-5.123,16.791,16.791,0,0,1-4.721-11.7v-.173a1.687,1.687,0,0,1,3.375,0v.34a13.386,13.386,0,0,0,26.771,0V6.419a1.688,1.688,0,0,1,3.375,0V29.692a16.478,16.478,0,0,1-5.086,11.944,16.714,16.714,0,0,1-11.669,4.717M217.905,27.885a1.473,1.473,0,0,0-1.476,1.467v.173a16.582,16.582,0,0,0,4.663,11.552A16.393,16.393,0,0,0,232.5,46.135c.163,0,.324.007.486.007a16.5,16.5,0,0,0,11.522-4.657,16.27,16.27,0,0,0,5.022-11.793V6.419a1.476,1.476,0,0,0-2.952,0V29.693a13.6,13.6,0,0,1-27.194,0v-.34a1.473,1.473,0,0,0-1.476-1.467" transform="translate(-188.799 0.05)" fill="#fff" />
        <path id="Path_32" data-name="Path 32" d="M251.106,5.659H217.511c-.714,0-1.292-.966-1.292-2.158V2.159C216.219.967,216.8,0,217.511,0h33.594c.714,0,1.292.966,1.292,2.158V3.5c0,1.192-.579,2.158-1.292,2.158" transform="translate(-188.8 0.923)" fill="#fff" />
      </g>
    </g>
  </svg>
        <p className="font-nexa_bold font-black uppercase text-start w-full pt-[8vw] tracking-tighter text-[6vw]">
          Sign up for our update
        </p>
        <p className="font-nexa text-start text-[4.7vw] tracking-tighter leading-[6.8vw] pt-[2vw]  pb-[3vw]">
         To stay up-to-date on our promotions, discounts, sales, special
          offers and more.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-start">
          <input
            type="email"
            className="font-nexa_light text-[#44614f46]  px-[1vw] text-center py-[4vw] w-[84vw] text-[4vw] rounded-full"
            placeholder="Enter your email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            
          />
          <button type="submit" style={{ display: 'none' }}>Submit</button>
        </form>
        <div className="h-[0.4vw] w-full bg-gray-300 mt-[12vw] mb-[2vw]"></div>
        <p className='font-shopee_bold text-left text-white text-[5vw]'>FOLLOW</p>
        <div className='flex space-x-[2vw] justify-start items-start pt-[2.6vw]' >
          {/* Facebook */}
          {/* <img src={Facebook} alt='' className='w-[14vw] h-[14vw]' onClick={() => window.location.assign("https://www.facebook.com/JoYuTeaCoffee?mibextid=LQQJ4d")} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="60.668" height="60.668" viewBox="0 0 60.668 60.668"
                  className='w-[14vw] h-[14vw]' onClick={() => window.location.assign("https://www.facebook.com/JoYuTeaCoffee?mibextid=LQQJ4d")}>
                  <g id="Group_184" data-name="Group 184" transform="translate(-26.729 -1509.641)">
                    <rect id="Rectangle_64" data-name="Rectangle 64" width="59.668" height="59.668" rx="11.207" transform="translate(27.229 1510.141)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                    <path id="Path_37" data-name="Path 37" d="M34.957,18.013c1.611,0,4.336.024,4.336.024V12.564s-1.9-.048-4.383,0-8.6.236-8.6,7.439v4.644H21.57v5.686h4.739V48.1h6.776V30.333h5.544l.664-5.686H33.085V20s.261-1.99,1.872-1.99" transform="translate(26.729 1509.641)" fill="#fff" />
                  </g>
                </svg>

          {/* Instagram */}
          {/* <img src={IG} alt='' className='w-[14vw] h-[14vw]' onClick={() => window.location.assign("https://www.instagram.com/joyuteacoffee?igsh=eThtejIycmcyNGs2&utm_source=qr")} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="60.668" height="60.668" viewBox="0 0 60.668 60.668" className='w-[14vw] h-[14vw]' onClick={() => window.location.assign("https://www.instagram.com/joyuteacoffee?igsh=eThtejIycmcyNGs2&utm_source=qr")}>
                  <g id="Group_186" data-name="Group 186" transform="translate(-103.896 -1509.641)">
                    <path id="Rectangle_65" data-name="Rectangle 65" d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z" transform="translate(104.396 1510.141)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                    <path id="Path_38" data-name="Path 38" d="M90.663,23.741a11.47,11.47,0,0,1,1.64-6.278,8.923,8.923,0,0,1,4.764-3.626,18.607,18.607,0,0,1,6.025-.667q5.848-.012,11.7.037a11,11,0,0,1,6.141,1.717,8.528,8.528,0,0,1,3.787,5.824,26.676,26.676,0,0,1,.379,4.407c.019,4.2-.027,8.392-.094,12.587a10.173,10.173,0,0,1-1.413,5.217,8.755,8.755,0,0,1-4.977,3.882,19.238,19.238,0,0,1-5.962.655q-5.741.012-11.481-.028a11.6,11.6,0,0,1-5.731-1.349,8.693,8.693,0,0,1-4.158-5.178,18.378,18.378,0,0,1-.642-4.7c-.014-.28-.039-9.283.025-12.5M94.006,38.72a5.871,5.871,0,0,0,2.261,4.191,7.5,7.5,0,0,0,4.565,1.405,133.7,133.7,0,0,0,15.454-.162,6.14,6.14,0,0,0,3.148-1.206,6.427,6.427,0,0,0,2.447-5.326c.1-3.861.077-7.726.063-11.588a40.37,40.37,0,0,0-.219-4.144,5.862,5.862,0,0,0-1.928-3.858,6.654,6.654,0,0,0-4.473-1.619c-4.193-.084-8.388-.143-12.581-.116a15.269,15.269,0,0,0-4.6.506A5.664,5.664,0,0,0,94,21.968c-.234,3.016-.2,14.809,0,16.752" transform="translate(26.729 1509.641)" fill="#fff" />
                    <path id="Path_39" data-name="Path 39" d="M107.9,21.508a8.842,8.842,0,1,1-8.921,8.752,8.845,8.845,0,0,1,8.921-8.752m5.69,8.9a5.718,5.718,0,1,0-5.666,5.64,5.744,5.744,0,0,0,5.666-5.64" transform="translate(26.729 1509.641)" fill="#fff" />
                    <path id="Path_40" data-name="Path 40" d="M117.069,23.206a2.033,2.033,0,0,1-2.1-2.024,2.108,2.108,0,0,1,4.216.019,2.027,2.027,0,0,1-2.119,2" transform="translate(26.729 1509.641)" fill="#fff" />
                  </g>
                </svg>

          {/* Tiktok */}
          <svg xmlns="http://www.w3.org/2000/svg" width="60.668" height="60.668" viewBox="0 0 60.668 60.668" className='w-[14vw] h-[14vw]'
            onClick={() => window.location.assign("https://www.tiktok.com/@joyuteacoffee?_t=8mz1o24QV26&_r=1")}
          >
            <defs>
              <clipPath id="clip-path">
                <rect id="Rectangle_211" width="31.828" height="36.393" transform="translate(0 0)" fill="none" />
              </clipPath>
            </defs>
            <g id="Group_167" transform="translate(-1538.856 -3073.001)">
              <path id="Rectangle_93" d="M11.207,0H48.462A11.206,11.206,0,0,1,59.668,11.206V48.461A11.207,11.207,0,0,1,48.461,59.668H11.207A11.207,11.207,0,0,1,0,48.461V11.207A11.207,11.207,0,0,1,11.207,0Z" transform="translate(1539.356 3073.501)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1" />
              <g id="Group_78" transform="translate(1553.276 3085.154)" clipPath="url(#clip-path)">
                <path id="Path_13440" d="M31.036,8.5A7.894,7.894,0,0,1,23.142.6c0-.03,0-.061,0-.091h0V0H16.928V24.824A5.355,5.355,0,1,1,13,19.659V13.341a11.571,11.571,0,1,0,0,22.967A11.569,11.569,0,0,0,23.142,24.824V11.473a8.854,8.854,0,0,0,8.686,3.192V8.459q-.391.039-.793.039" transform="translate(0 -0.002)" fill="#fff" />
              </g>
            </g>
          </svg>
          {/* Youtube */}
          {/* <img src={Youtube} alt='' className='w-[14vw] h-[14vw]' onClick={() => window.location.assign("https://m.youtube.com/@joyuteacoffee?si=cOhXUceyII9N8xxS")} /> */}
          <svg width="60.668" height="60.668" viewBox="0 0 60.668 60.668" className='w-[14vw] h-[14vw]' onClick={() => window.location.assign("https://m.youtube.com/@joyuteacoffee?si=cOhXUceyII9N8xxS")}>
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rectangle_326" width="38.395" height="26.885" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="Group_185" transform="translate(-261.039 -1509.641)">
                    <rect
                      id="Rectangle_64"
                      width="59.668"
                      height="59.668"
                      rx="11.207"
                      transform="translate(261.539 1510.141)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1"
                    />
                    <g id="Group_162" transform="translate(272.176 1526.533)">
                      <g id="Group_161" clipPath="url(#clip-path)">
                        <path
                          id="Path_13741"
                          d="M14.037.064Q21.06-.113,28.084.19c1.521.075,3.042.156,4.554.337a7.444,7.444,0,0,1,2.414.59A4.823,4.823,0,0,1,37.634,4.34a31.883,31.883,0,0,1,.653,5.372,65,65,0,0,1-.053,8.311,27.819,27.819,0,0,1-.615,4.584,4.82,4.82,0,0,1-2.6,3.176,8.391,8.391,0,0,1-2.655.606c-2.332.249-4.677.331-7.021.4q-7.5.223-15-.1a47.416,47.416,0,0,1-5.688-.507A4.843,4.843,0,0,1,1.21,23.714a8.327,8.327,0,0,1-.736-2.687A59.072,59.072,0,0,1,0,13.555,62.016,62.016,0,0,1,.419,6.247a8.978,8.978,0,0,1,.847-3.182A4.822,4.822,0,0,1,3.384,1.1,8.491,8.491,0,0,1,6.072.491C8.718.214,11.38.14,14.037.064M15.357,7.7q0,5.744,0,11.488L25.3,13.443Q20.331,10.568,15.357,7.7Z"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
        </div>
      </div>
    </>
  );
}

export default Signature;