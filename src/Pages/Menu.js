import React, { useEffect, useState } from 'react';
import { FreshTea, FullleafMilktea, JoyuSpecials, PhinCoffee, Topping } from '../components';
import axios from "axios";

function Menu() {
    const [menu, setMenu] = useState([]);

    const handlegetMenu = async () => {
        try {
            const response = await axios.get("http://localhost:4000/joyu/menu");
            const categories = response.data.data.map((category, index) => ({
                ...category,
                key: index + 1, // Add key property for unique identification
            }));
            setMenu(categories); // Setting the fetched categories to the state
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    useEffect(() => {
        handlegetMenu();
    }, []);

    return (
        <div className='pt-[12vw]'>
            {menu.map((category, index) => (
                <div key={index} className="flex flex-col justify-start items-start px-[11.7%] mt-[5vw] h-auto">
                    <p className="font-nexa_bold uppercase text-[2.7vw] leading-[2.2vw]">
                        {category.name}
                    </p>
                    
                </div>
            ))}
        </div>
    );
}

export default Menu;
