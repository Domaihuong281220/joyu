import React, { useEffect, useState } from "react";
import {
  FreshTea,
  FullleafMilktea,
  JoyuSpecials,
  PhinCoffee,
  Topping,
} from "../components";
import axios from "axios";
import { Helmet } from "react-helmet";
import { path } from "../utils/Constant";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const location = useLocation();

  const handlegetMenu = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/menu`
      );
      const categories = response.data.data.map((category, index) => ({
        ...category,
        key: index + 1, // Add key property for unique identification
      }));
      categories.reverse();
      setMenu(categories); // Setting the fetched categories to the state.
      // console.log();
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  const [metaTags, setMetaTags] = useState([]);

  const handlegetMetaTag = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_URL}/joyu/metatag`)
      .then((res) => {
        const HomepageTags = res.data.data.filter(
          (tag) => tag.page === "MenuPage"
        );
        setMetaTags(HomepageTags);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const menuString = sessionStorage.getItem("menu"); // Retrieve the stored string

    if (!menuString) {
      handlegetMenu();
    } else {
      setMenu(JSON.parse(menuString)); // Parse the string into an object
    }

    handlegetMetaTag();
    handlegetMetaTag();
  }, []);
  useEffect(() => {
    const fragment = location.hash;
    if (fragment) {
      let attempts = 0;
      const maxAttempts = 10;

      const interval = setInterval(() => {
        const element = document.querySelector(fragment);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
        attempts++;
      }, 100); // Check every 100ms

      // Clear the interval after a reasonable time to prevent infinite loops
      setTimeout(() => clearInterval(interval), 1000); // Stop after 500ms (5 attempts)
    }
  }, [location]);

  const handleViewProduct = (product, categoryID) => {
    navigate("../" + path.PRODUCTDETAIL, {
      state: { product: product, categoryID: categoryID },
    });
  };

  return (
    <div className="pt-[12vw] pv:max-md:pt-[40vw] pb-[4vw]">
      {metaTags === null || metaTags.length === 0 ? (
        ""
      ) : (
        <Helmet>
          <title>Menu - Joyu</title>
          {metaTags.map((tag) => (
            <meta name={tag.name} content={tag.content} key={tag._id} />
          ))}
        </Helmet>
      )}
      {/* <button type="button" onClick={()=>document.querySelector('#JOYU').scrollIntoView()}>test</button> */}

      {menu.map((category, index) => (
        <div
          key={index}
          className={`pv:max-md:text-center,${
            category.products.length < 3
              ? "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[30vw] pv:max-md:h-[100vw]"
              : category.products.length < 5
              ? "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[30vw]  pv:max-md:h-[182vw]"
              : category.products.length < 7
              ? "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[30vw]  pv:max-md:h-[265vw]"
              : category.products.length < 9
              ? "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[55vw]  pv:max-md:h-[360vw]"
              : category.products.length < 11
              ? "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[55vw]  pv:max-md:h-[420vw]"
              : category.products.length < 13
              ? "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[55vw] pv:max-md:h-[530vw]"
              : "flex flex-col justify-start items-start px-[11.7%] pv:max-md:px-[5%] mt-[5vw] h-[79vw]  pv:max-md:h-[565vw]"
          }`}
          id={category.category.split(" ")[0].toLowerCase()}
        >
          <p className="font-nexa_bold pv:max-md:font-nexa text-start pv:max-md:text-center font-bold uppercase text-[2.7vw] pv:max-md:text-[8vw] pv:max-md:leading-[8vw] leading-[2.2vw]">
            {category.category}
          </p>
          <div className="h-[0.4vw] hidden pv:max-md:block w-full bg-gray-300 mt-[1vw] mb-[5vw] "></div>

          <div className="h-[0.05vw] pv:max-md:hidden w-[76.6vw] bg-black my-[2.4vw]"></div>
          <div className="grid grid-cols-6 pv:max-md:grid-cols-2 gap-x-[1.3vw] gap-y-[2.2vw] pv:max-md:gap-x-[6vw] w-full h-fit">
            {category.products.map((product) => (
              <div
                key={product.id} // Ensure to add a key prop here
                className="flex flex-col items-center w-full h-full font-shopee_regular uppercase cursor-pointer"
                onClick={() => {
                  handleViewProduct(
                    product,
                    category.category.split(" ")[0].toLowerCase()
                  );
                }}
              >
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}/${product.image}`}
                  className="w-fit h-[17.5vw] pv:max-md:h-[60vw] rounded-[10vw] pv:max-md:rounded-[21vw] "
                  alt=""
                ></img>
                <div className="flex flex-col md:max-xl:gap-4">
                  <p className="text-[1vw] pv:max-md:text-[4vw] pv:max-md:h-fit h-[3.2vw] pv:max-md:pt-[5vw] md:max-xl:pt-[2vw]">
                    {product.name}
                  </p>
                  <p className="text-[1vw] pv:max-md:text-[3.5vw] pv:max-md:mt-[1.5vw] text-primary">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
