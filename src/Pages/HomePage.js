/** @format */

import React, { useEffect, useState } from "react";
import { Banner, Signature, Special, Sidebar } from "../components";
import { Helmet } from "react-helmet";
import axios from "axios";

function HomePage() {
  const [metaTags, setMetaTags] = useState([]);

  const handlegetMetaTag = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/metatag`)
      .then((res) => {
        const HomepageTags = res.data.data.filter((tag)=>tag.page==="HomePage")
        setMetaTags(HomepageTags)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handlegetMetaTag();
  }, []);
  return (
    <div className="">
      {metaTags === null || metaTags.length === 0 ? (
        ""
      ) : (
        <Helmet>
          <title>Home - Domoishi</title>
          {metaTags.map((tag) => (
            <meta name={tag.name} content={tag.content} key={tag._id} />
          ))}
        </Helmet>
      )}
      <Sidebar />
      <Banner />
      <Signature />
      <Special />
    </div>
  );
}

export default HomePage;
