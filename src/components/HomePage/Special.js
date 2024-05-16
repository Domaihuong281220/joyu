import React from 'react';

import specials from '../../assets/HomePage/specials.png';
import milktea from '../../assets/HomePage/milktea.png';
import tea from '../../assets/HomePage/tea.png';
import coffee from '../../assets/HomePage/coffee.png';
import topping from '../../assets/HomePage/topping.png';

function Special() {
    return (
        <div className='bg-primary w-full grid grid-cols-5 px-[12%] py-[3vw] gap-6'>
            <div className='relative h-fit'>
                <img src={specials} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[2vw] leading-[2vw]'>Joyu Specials</p>
            </div>
            <div className='relative h-fit'>
                <img src={milktea} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-white text-[2vw] leading-[2vw]'>fullleaf milktea</p>
            </div>
            <div className='relative h-fit'>
                <img src={tea} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[2vw] leading-[2vw]'>fresh tea</p>
            </div>
            <div className='relative h-fit'>
                <img src={coffee} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[2vw] leading-[2vw]'>phin coffee</p>
            </div>
            <div className='relative h-fit'>
                <img src={topping} alt='' className='object-contain' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[2vw] leading-[2vw]'>topping</p>
            </div>
        </div>
    );
}

export default Special;