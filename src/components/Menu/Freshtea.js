/** @format */

import React from "react";

import { freshteaData } from "../../models/mockdata";
import { path } from "./../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function FreshTea() {
  const navigate = useNavigate();
  const hanndleNavigate = (key) => {
    navigate("../" + path.PRODUCTDETAIL + `/${key}`, {
      state: freshteaData[key],
    });
  };
  return (
    <div className="flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[30vw]">
      <p className="font-nexa_bold uppercase text-[2.7vw] leading-[2.2vw]">
        Fresh tea
      </p>
      <div className="h-[0.05vw] w-[76.6vw] bg-black my-[2.4vw]"></div>
      <div className="grid grid-cols-6 gap-x-[1.3vw] gap-y-[2.2vw] w-full h-fit">
        {freshteaData.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase cursor-pointer "
              onClick={() => {
                hanndleNavigate(index);
              }}
            >
              <img src={item.img} className="w-fit h-[17.5vw]" alt=""></img>
              <p className="text-[1.15vw] h-[3.2vw]">{item.title}</p>
              <p className="text-[1vw] text-primary">{item.price}</p>
            </div>
          );
        })}
        {/* <div className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase">
          <img
            src={OolongCoconutMilktea}
            className="w-fit h-[17.5vw]"
            alt=""
          ></img>
          <p className="text-[1.15vw] h-[3.2vw]">Oolong Coconut Milktea</p>
          <p className="text-[1vw] text-primary">4.5</p>
        </div>
        <div className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase">
          <img src={HazenutMilktea} className="w-fit h-[17.5vw]" alt=""></img>
          <p className="text-[1.15vw] h-[3.2vw]">Hazenut Milktea</p>
          <p className="text-[1vw] text-primary">4.5</p>
        </div>
        <div className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase">
          <img src={JasmineMilktea} className="w-fit h-[17.5vw]" alt=""></img>
          <p className="text-[1.15vw] h-[3.2vw]">jasmine milktea</p>
          <p className="text-[1vw] text-primary">4.5</p>
        </div>
        <div className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase">
          <img src={Thaitea} className="w-fit h-[17.5vw]" alt=""></img>
          <p className="text-[1.15vw] h-[3.2vw]">Thai tea</p>
          <p className="text-[1vw] text-primary">4.5</p>
        </div>
        <div className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase">
          <img
            src={DoubleMatchaMilktea}
            className="w-fit h-[17.5vw]"
            alt=""
          ></img>
          <p className="text-[1.15vw] h-[3.2vw]">Double Matcha Milktea</p>
          <p className="text-[1vw] text-primary">4.5</p>
        </div>
        <div className="flex flex-col items-center w-full h-full  font-shopee_regular uppercase">
          <img
            src={BrownSugarFreshTea}
            className="w-fit h-[17.5vw]"
            alt=""
          ></img>
          <p className="text-[1.15vw] h-[3.2vw]">Brown Sugar Fresh Tea</p>
          <p className="text-[1vw] text-primary">4.5</p>
        </div> */}
      </div>
    </div>
  );
}

export default FreshTea;
