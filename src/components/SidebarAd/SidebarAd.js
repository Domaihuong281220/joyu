/** @format */

import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
import imgLogo from "../../assets/Login/logo_admin.png";
import { Menu, Popover, Button, Switch } from "antd";

const SidebarAd = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [theme, setTheme] = useState("dark");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  //   {
  //     key: "jobs",
  //     icon: (
  //       <Icon icon="oui:ml-outlier-detection-job" className="h-5 w-5"></Icon>
  //     ),
  //     label: (
  //       <div
  //         className=""
  //         onClick={() => {
  //           navigate("../" + path.JOBMANAGE);
  //           console.log(1);
  //         }}
  //       >
  //         <p className=" text-lg">Jobs</p>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "news",
  //     icon: <Icon icon="mdi:events-check" className="h-5 w-5"></Icon>,
  //     label: (
  //       <div
  //         className=""
  //         onClick={() => {
  //           navigate("../" + path.EVENTMANAGE);
  //         }}
  //       >
  //         <p className=" text-lg">News</p>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "tags",
  //     icon: <Icon icon={"tabler:tag"} className="h-5 w-5"></Icon>,
  //     label: (
  //       <div
  //         className=""
  //         onClick={() => {
  //           navigate("../" + path.METATAG);
  //         }}
  //       >
  //         <p className=" text-lg">Tags</p>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "users",
  //     icon: <Icon icon="mdi:user-outline" className="h-5 w-5"></Icon>,
  //     label: (
  //       <div
  //         className=""
  //         onClick={() => {
  //           navigate("../" + path.USERMANAGE);
  //         }}
  //       >
  //         <p className=" text-lg">Users</p>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "ecommerce",
  //     label: (
  //       <div className="">
  //         <p className="text-lg">E-commerce</p>
  //       </div>
  //     ),
  //     icon: (
  //       <Icon
  //         className="h-5 w-5"
  //         icon={"healthicons:market-stall-outline"}
  //       ></Icon>
  //     ),
  //     children: [
  //       {
  //         key: "products",
  //         label: (
  //           <div
  //             className=""
  //             onClick={() => {
  //               navigate("../" + path.PRODUCTMANAGE);
  //             }}
  //           >
  //             <p className="text-lg">Products</p>
  //           </div>
  //         ),
  //       },
  //       {
  //         key: "categories",
  //         label: (
  //           <div
  //             className=""
  //             onClick={() => {
  //               navigate("../" + path.CATEGORYMANAGE);
  //             }}
  //           >
  //             <p className="text-lg">Categories</p>
  //           </div>
  //         ),
  //       },
  //     ],
  //   },
  // ];
  // Navigate
  const items = [
    {
      key: "jobs",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.JOBMANAGE);
          }}
        >
          <p className=" text-lg">Jobs</p>
        </div>
      ),
      icon: (
        <Icon icon="oui:ml-outlier-detection-job" className="h-5 w-5"></Icon>
      ),
      children: "",
      type: "",
    },
    {
      key: "news",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.EVENTMANAGE);
          }}
        >
          <p className=" text-lg">News</p>
        </div>
      ),
      icon: <Icon icon="mdi:events-check" className="h-5 w-5"></Icon>,
      children: "",
      type: "",
    },
    {
      key: "tags",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.METATAG);
          }}
        >
          <p className=" text-lg">Tags</p>
        </div>
      ),
      icon: <Icon icon={"tabler:tag"} className="h-5 w-5"></Icon>,
      children: "",
      type: "",
    },
    {
      key: "users",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.USERMANAGE);
          }}
        >
          <p className=" text-lg">Users</p>
        </div>
      ),
      icon: <Icon icon="mdi:user-outline" className="h-5 w-5"></Icon>,
      children: "",
      type: "",
    },
    {
      key: "ecommerce",
      label: (
        <div className="">
          <p className=" text-lg">E-commerce</p>
        </div>
      ),
      icon: (
        <Icon
          className="h-5 w-5"
          icon={"healthicons:market-stall-outline"}
        ></Icon>
      ),
      children: [
        {
          key: "products",
          label: (
            <div
              className=""
              onClick={() => {
                navigate("../" + path.PRODUCTMANAGE);
              }}
            >
              <p className="">Products</p>
            </div>
          ),
        },
        {
          key: "categories",
          label: (
            <div
              className=""
              onClick={() => {
                navigate("../" + path.CATEGORYMANAGE);
              }}
            >
              <p className="">Categories</p>
            </div>
          ),
        },
      ],
      type: "",
    },
  ];
  const confirm = (e) => {
    navigate("../" + path.HOME);
    sessionStorage.clear();
  };
  const cancel = (e) => {
    console.log(e);
  };
  const content = (
    <div>
      <p className="text-black">Admin</p>
      <p className="text-black">admin@gmail.com</p>
    </div>
  );
  const navigate = useNavigate();

  const [openEcommerce, setOpenEcommerce] = useState(true);
  const [openUser, setOpenUsers] = useState(false);
  const handleOpenEcommerce = () => setOpenEcommerce((cur) => !cur);
  const handleOpenUsers = () => setOpenUsers((cur) => !cur);

  return (
    <>
      {/* <div className="">
        <div className="py-2">
          <p className="font-bold text-xl">JOYU ADMIN</p>
        </div>

        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div> */}
      <div
        className={
          theme === "dark"
            ? `bg-[#001529] ${
                collapsed ? "" : "w-[350px]"
              }   py-2  flex flex-col justify-between `
            : `bg-white  py-2  flex flex-col justify-between ${
                collapsed ? "" : "w-[350px]"
              } `
        }
      >
        <div className="">
          <Button
            type="primary"
            className={
              theme === "dark"
                ? "w-[72px] h-[40px] mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-white hover:text-black"
                : "w-[72px] h-[40px] mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-black hover:text-white"
            }
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? (
              <Icon icon={"line-md:menu-fold-right"} className="w-6 h-6" />
            ) : (
              <Icon icon={"line-md:menu-fold-left"} className="w-6 h-6" />
            )}
          </Button>

          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            mode="inline"
            theme={theme}
            inlineCollapsed={collapsed}
            items={items}
            className=""
          />
        </div>

        <div className={`w-[350px] ${collapsed ? "hidden" : "block"}`}>
          <div className="flex justify-between items-center text-[14px] p-4">
            <div className="flex items-center gap-1">
              <button>
                <img
                  className="h-14 w-14 rounded-full object-cover shadow-sm "
                  src={""}
                ></img>
              </button>

              <div
                className={
                  theme === "dark"
                    ? "text-white flex flex-col"
                    : "text-black flex flex-col"
                }
              >
                <p className="">Nguyen Van Tay</p>
                <p className="">nguyenvantay061999@gmail.com</p>
              </div>
            </div>
          </div>
          <div className={`p-2 flex justify-around items-center `}>
            <Button
              type="primary"
              className={
                theme === "dark"
                  ? " mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-white hover:text-black"
                  : "mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-black hover:text-white"
              }
            >
              <Icon icon={"material-symbols:logout"} className="w-6 h-6"></Icon>
            </Button>
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
              className="bg-gray-600"
            />
          </div>
        </div>
        <div
          className={` w-[80px] flex items-center flex-col gap-4  ${
            collapsed ? "flex" : "hidden"
          } `}
        >
          <div className={`flex items-center gap-1`}>
            <Popover content={content}>
              <button>
                <img
                  className="h-14 w-14 rounded-full object-cover shadow-sm "
                  src={""}
                ></img>
              </button>
            </Popover>
          </div>
          <div
            className={` ${
              collapsed
                ? " flex items-center flex-col gap-4 "
                : "flex items-center gap-4"
            }`}
          >
            <Button
              type="primary"
              className={
                theme === "dark"
                  ? " mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-white hover:text-black"
                  : "mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-black hover:text-white"
              }
            >
              <Icon icon={"material-symbols:logout"} className="w-6 h-6"></Icon>
            </Button>
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
              className="bg-gray-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SidebarAd;
