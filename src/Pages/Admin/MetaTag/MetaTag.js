/** @format */

import React from "react";
import { Tabs } from 'antd';
import HomePageMetaTag from "./UpdateMetaTag/HomePageMetaTag";

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Home Page',
      children: <HomePageMetaTag/>,
    },
    // {
    //   key: '2',
    //   label: 'Locations',
    //   children: <>abc</>,
    // },
    // {
    //   key: '3',
    //   label: 'Franchising',
    //   children: 'Content of Tab Pane 3',
    // },
    // {
    //     key: '4',
    //     label: 'About Us',
    //     children: 'Content of Tab Pane 3',
    //   },
    //   {
    //     key: '5',
    //     label: 'Careers',
    //     children: 'Content of Tab Pane 3',
    //   },
    //   {
    //     key: '6',
    //     label: 'News',
    //     children: 'Content of Tab Pane 3',
    //   },
  ];


const MetaTag = () => {
  return (
    <div className="w-full h-fit">
        <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    </div>
  );
};
export default MetaTag;
