import React from 'react';

import specials from '../../assets/HomePage/specials.png';
import milktea from '../../assets/HomePage/milktea.png';
import tea from '../../assets/HomePage/tea.png';
import coffee from '../../assets/HomePage/coffee.png';
import topping from '../../assets/HomePage/topping.png';


function Special() {
    return (
        <div className='bg-primary pv:max-md:bg-white w-full grid grid-cols-5 pv:max-md:grid-cols-1 px-[12%] py-[3vw] gap-[1.5vw]'>
            <div className='relative h-fit pv:max-md:flex justify-center items-center'onClick={()=>{window.location.assign("https://joyuteacoffee.com/menu/joyu-specials/")}}>
                <img src={specials} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa pv:max-md:text-[6vw] pv:max-md:leading-[6vw] leading-[2vw]'>Joyu Specials</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={()=>{window.location.assign("https://joyuteacoffee.com/menu/fullleaf-milktea/")}}>
                <img src={milktea} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-white text-[1.8vw] leading-[2vw] pv:max-md:font-nexa pv:max-md:text-[6vw] pv:max-md:leading-[6vw]'>fullleaf milktea</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={()=>{window.location.assign("https://joyuteacoffee.com/menu/fresh-tea/")}}>
                <img src={tea} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] leading-[2vw] pv:max-md:font-nexa pv:max-md:text-[6vw] pv:max-md:leading-[6vw]'>fresh tea</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={()=>{window.location.assign("https://joyuteacoffee.com/menu/phin-coffee/")}}>
                <img src={coffee} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] leading-[2vw] pv:max-md:font-nexa pv:max-md:text-[6vw] pv:max-md:leading-[6vw]'>phin coffee</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={()=>{window.location.assign("https://joyuteacoffee.com/menu/topping/")}}>
                <img src={topping} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] leading-[2vw] pv:max-md:font-nexa pv:max-md:text-[6vw] pv:max-md:leading-[6vw]'>topping</p>
            </div>
        </div>
    );
}

export default Special;