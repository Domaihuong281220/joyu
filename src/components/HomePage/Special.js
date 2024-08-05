import React from "react";
import specials from "../../assets/HomePage/specicals.webp";
import milktea from "../../assets/HomePage/milktea.webp";
import tea from "../../assets/HomePage/tea.webp";
import coffee from "../../assets/HomePage/coffee.webp";
import pastries from "../../assets/HomePage/pastries.webp";
import { useNavigate } from "react-router-dom";

function Special() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary pv:max-md:bg-white w-full grid grid-cols-5 pv:max-md:grid-cols-1 px-[12%] pv:max-md:px-[5%] py-[3vw] pv:max-md:py-[15vw] gap-[1.5vw]">
      <div
        className="relative h-fit pv:max-md:flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/menu#joyu")}
      >
        <img
          src={specials}
          alt=""
          className="rounded-[10vw] pv:max-md:rounded-[50vw] object-contain w-full hover:opacity-50"
        />
        <p className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]">
          Joyu Specials
        </p>
      </div>
      <div
        className="relative h-fit pv:max-md:flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/menu#fullleaf")}
      >
        <img
          src={milktea}
          alt=""
          className="rounded-[10vw] pv:max-md:rounded-[50vw] object-contain w-full hover:opacity-50"
        />
        <p className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]">
          fullleaf milktea
        </p>
      </div>
      <div
        className="relative h-fit pv:max-md:flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/menu#freshtea")}
      >
        <img
          src={tea}
          alt=""
          className="rounded-[10vw] pv:max-md:rounded-[50vw] object-contain w-full hover:opacity-50"
        />
        <p className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]">
          fresh tea
        </p>
      </div>
      <div
        className="relative h-fit pv:max-md:flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/menu#phin")}
      >
        <img
          src={coffee}
          alt=""
          className="rounded-[10vw] pv:max-md:rounded-[50vw] object-contain w-full hover:opacity-50"
        />
        <p className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]">
          phin coffee
        </p>
      </div>
      <div
        className="relative h-fit pv:max-md:flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/menu#pastries")}
      >
        <img
          src={pastries}
          alt=""
          className="rounded-[10vw] pv:max-md:rounded-[50vw] object-contain w-full hover:opacity-50"
        />
        <p className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]">
          pastries
        </p>
      </div>
    </div>
  );
}

export default Special;
