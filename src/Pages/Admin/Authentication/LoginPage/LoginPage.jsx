/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Icon } from "@iconify/react";
import { path, useOnKeyPress } from "../../../../utils/Constant";
import imgBackground from "../../../../assets/Login/background.png";
import LogoAdmin from "../../../../assets/Login/logo_admin.png";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("UserInformation"));
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async() => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/joyu/login`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-secret-key": "Domoishi2024",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        sessionStorage.setItem(
          "UserInformation",
          JSON.stringify(response.data.user)
        );
        toast.success("Login successfully!");
        navigate("../" + path.USERMANAGE);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("User name or password  is wrong");
      } else {
        console.error("Login failed:", error);
      }
    }
  };
  useOnKeyPress(handleLogin, "Enter");

  return (
    <div
      className="w-full h-[100vh]"
      style={{ backgroundImage: `url("${imgBackground}")` }}
    >
      <div className="flex mx-auto w-[90%] items-center pt-4 text-white">
        <img className="w-[100px]" src={LogoAdmin}></img>
      </div>
      <div className="w-[50%] mt-[10%]   mx-auto h-auto rounded-r-2xl">
        <div className="mx-auto w-[90%] bg-white p-8 rounded-md">
          <div className={``}>
            <div className="pt-4">
              <p className="text-gray-300 font-mar text-3xl font-bold">
                Welcome back
              </p>
            </div>
          </div>

          <div className="">
            <form className="">
              <div className="w-full mx-auto h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">User Name</p>
                <input
                  className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200 bg-transparent placeholder-blue-500 placeholder:font-bold"
                  placeholder="Email"
                  type="text"
                  onChange={(e) =>
                    setLoginData({ ...loginData, username: e.target.value })
                  }
                />
              </div>
              <div className="w-full mx-auto h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Password</p>
                <input
                  className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200 bg-transparent placeholder-blue-500 placeholder:font-bold"
                  placeholder="Password"
                  type="password"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
            </form>
            <div className="w-full mx-auto flex justify-start  ">
              <button
                className="  h-auto px-4 py-2 rounded-sm   bg-blue-400 hover:bg-blue-500 "
                onClick={handleLogin}
              >
                <p className="text-white">Login</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
