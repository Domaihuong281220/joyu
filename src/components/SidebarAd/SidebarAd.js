/** @format */

import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/Constant";
import imgLogo from "../../assets/Login/logo_admin.png";
import { Menu } from "antd";

const SidebarAd = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items = [
    {
      key: "jobs",
      icon: (
        <Icon icon="oui:ml-outlier-detection-job" className="h-5 w-5"></Icon>
      ),
      label: (
        <div
          className=""
          onClick={() => {
            navigate("../" + path.JOBMANAGE);
            console.log(1);
          }}
        >
          <p className=" text-lg">Jobs</p>
        </div>
      ),
    },
    {
      key: "news",
      icon: <Icon icon="mdi:events-check" className="h-5 w-5"></Icon>,
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
    },
    {
      key: "tags",
      icon: <Icon icon={"tabler:tag"} className="h-5 w-5"></Icon>,
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
    },
    {
      key: "users",
      icon: <Icon icon="mdi:user-outline" className="h-5 w-5"></Icon>,
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
    },
    {
      key: "ecommerce",
      label: (
        <div className="">
          <p className="text-lg">E-commerce</p>
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
              <p className="text-lg">Products</p>
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
              <p className="text-lg">Categories</p>
            </div>
          ),
        },
      ],
    },
  ];
  // Navigate
  const confirm = (e) => {
    navigate("../" + path.HOME);
    sessionStorage.clear();
  };
  const cancel = (e) => {
    console.log(e);
  };

  const navigate = useNavigate();

  const [openEcommerce, setOpenEcommerce] = useState(true);
  const [openUser, setOpenUsers] = useState(false);
  const handleOpenEcommerce = () => setOpenEcommerce((cur) => !cur);
  const handleOpenUsers = () => setOpenUsers((cur) => !cur);

  return (
    <>
      <div className="">
        <div className="py-2">
          <p className="font-bold text-xl">JOYU ADMIN</p>
        </div>
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};
export default SidebarAd;
