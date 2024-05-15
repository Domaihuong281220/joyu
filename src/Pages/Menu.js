import React from 'react';
import { FreshTea, FullleafMilktea, JoyuSpecials, PhinCoffee, Topping } from '../components';

function Menu() {
    return (
        <div className='pt-[12vw]'>
            <JoyuSpecials/>
            <FreshTea/>
            <FullleafMilktea/>
            <PhinCoffee/>
            <Topping/>
        </div>
    );
}

export default Menu;