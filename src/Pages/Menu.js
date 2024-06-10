import React, { useEffect, useState } from 'react';
import { FreshTea, FullleafMilktea, JoyuSpecials, PhinCoffee, Topping } from '../components';
import axios from "axios";
import { path } from '../utils/Constant';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([]);

    const handlegetMenu = async () => {
        try {
            const response = await axios.get("http://103.157.218.115:8802/joyu/menu");
            const categories = response.data.data.map((category, index) => ({
                ...category,
                key: index + 1, // Add key property for unique identification
            }));
            categories.reverse();
            setMenu(categories); // Setting the fetched categories to the state.
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    useEffect(() => {
        handlegetMenu();
    }, []);

    const handleViewProduct = (product) => {
        navigate("../" + path.PRODUCTDETAIL, {
            state: { product:product },
        });
    };
    

    return (
        <div className='pt-[12vw] pb-[4vw]'>
            {menu.map((category, index) => (
                <div key={index} 
                className={`${category.products.length < 3 ? 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[30vw] pv:max-md:h-[62vw]' :category.products.length < 5 ? 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[30vw]  pv:max-md:h-[120vw]' :category.products.length < 7 ? 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[30vw]  pv:max-md:h-[175vw]' : category.products.length < 9 ? 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[55vw]  pv:max-md:h-[232vw]' :category.products.length < 11 ? 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[55vw]  pv:max-md:h-[292vw]' :category.products.length < 13 ? 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[55vw] pv:max-md:h-[345vw]' : 'flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-[79vw]  pv:max-md:h-[400vw]'}`}>
                    <p className="font-nexa_bold uppercase text-[2.7vw] leading-[2.2vw]">
                        {category.category}
                    </p>
                    <div className="h-[0.05vw] w-[76.6vw] bg-black my-[2.4vw]"></div>
                    <div className="grid grid-cols-6 pv:max-md:grid-cols-2 gap-x-[1.3vw] gap-y-[2.2vw] pv:max-md:gap-x-[6vw] w-full h-fit">
                        {category.products.map((product) => 
                            <div
                                key={product.id} // Ensure to add a key prop here
                                className="flex flex-col items-center w-full h-full font-shopee_regular uppercase cursor-pointer"
                                onClick={() => {
                                    handleViewProduct(product);
                                }}
                            >
                                <img src={`${process.env.REACT_APP_SERVER_URL}/${product.image}`} className="w-fit h-[17.5vw] pv:max-md:h-[50vw] rounded-[10vw] pv:max-md:rounded-[17vw] " alt=""></img>
                                <p className="text-[1.15vw] pv:max-md:text-[2vw] h-[3.2vw]">{product.name}</p>
                                <p className="text-[1vw] pv:max-md:text-[1.8vw] text-primary">{product.price}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
