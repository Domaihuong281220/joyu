/** @format */

import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
import { Menu, Popover, Button, Switch } from "antd";
import { Popconfirm } from "antd";

const SidebarAd = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [theme, setTheme] = useState("dark");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const items = [
    {
      key: "career",
      label: (
        <div className="">
          <p className=" text-lg">Careers</p>
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
          key: "jobs",
          label: (
            <div
              className=""
              onClick={() => {
                navigate("../" + path.JOBMANAGE);
              }}
            >
              <p className="">Jobs</p>
            </div>
          ),
        },
        {
          key: "address",
          label: (
            <div
              className=""
              onClick={() => {
                navigate("../" + path.MANAGEADDRESS);
              }}
            >
              <p className="">Address</p>
            </div>
          ),
        },
      ],
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
      icon: (
        <Icon
          icon="mdi:events-check"
          className="h-5 w-5"
          onClick={() => {
            navigate("../" + path.EVENTMANAGE);
          }}
        ></Icon>
      ),
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
      icon: (
        <Icon
          icon={"tabler:tag"}
          className="h-5 w-5"
          onClick={() => {
            navigate("../" + path.METATAG);
          }}
        ></Icon>
      ),
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
      icon: (
        <Icon
          icon="mdi:user-outline"
          className="h-5 w-5"
          onClick={() => {
            navigate("../" + path.USERMANAGE);
          }}
        ></Icon>
      ),
      children: "",
      type: "",
    },
    {
      key: "customers",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.CUSTOMERMANAGE);
          }}
        >
          <p className=" text-lg">Customers</p>
        </div>
      ),
      icon: (
        <Icon
          icon="streamline:information-desk-customer"
          className="h-5 w-5"
          onClick={() => {
            navigate("../" + path.CUSTOMERMANAGE);
          }}
        ></Icon>
      ),
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
    {
      key: "homepagebanner",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.HOMEPAGEBANNER);
          }}
        >
          <p className=" text-lg">HomePage Banner</p>
        </div>
      ),
      icon: (
        <Icon
          icon="material-symbols:image-outline"
          className="h-5 w-5"
          onClick={() => {
            navigate("../" + path.HOMEPAGEBANNER);
          }}
        ></Icon>
      ),
      children: "",
      type: "",
    },
    {
      key: "locations",
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.LOCATIONMANAGE);
          }}
        >
          <p className=" text-lg">Location</p>
        </div>
      ),
      icon: (
        <Icon
          icon="mynaui:location"
          className="h-5 w-5"
          onClick={() => {
            navigate("../" + path.LOCATIONMANAGE);
          }}
        ></Icon>
      ),
      children: "",
      type: "",
    },
  ];
  const confirm = (e) => {
    navigate("../" + path.HOME);
    sessionStorage.clear();
  };
  const cancel = (e) => {};
  const content = (
    <div>
      <p className="text-black">Admin</p>
      <p className="text-black">admin@gmail.com</p>
    </div>
  );
  const navigate = useNavigate();

  return (
    <>
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
          <div className={`p-2 flex justify-around items-center `}>
            <Popconfirm
              placement="bottomRight"
              title="Log out"
              description="Are you sure log out ?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Log out"
              cancelText="No"
            >
              <Button
                type="primary"
                className={
                  theme === "dark"
                    ? " mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-white hover:text-black"
                    : "mx-1  bg-transparent hover:bg-[#1677ff] flex justify-center items-center text-black hover:text-white"
                }
              >
                <Icon
                  icon={"material-symbols:logout"}
                  className="w-6 h-6"
                ></Icon>
              </Button>
            </Popconfirm>
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
                  alt="Content"
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
