import React from 'react';
import specials from '../../assets/HomePage/specials.png';
import milktea from '../../assets/HomePage/milktea.png';
import tea from '../../assets/HomePage/tea.png';
import coffee from '../../assets/HomePage/coffee.png';
import topping from '../../assets/HomePage/topping.png';
import { useNavigate } from 'react-router-dom';

function Special() {
    const navigate = useNavigate();
    console.log(sessionStorage.getItem('menu'));
    return (
        <div className='bg-primary pv:max-md:bg-white w-full grid grid-cols-5 pv:max-md:grid-cols-1 px-[12%] pv:max-md:px-[5%] py-[3vw] pv:max-md:py-[15vw] gap-[1.5vw]'>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={() => navigate('/menu#joyu')}>
                <img src={specials} alt='' className='object-contain w-full hover:opacity-50' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]'>Joyu Specials</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={() => navigate('/menu#fullleaf')}>
                <img src={milktea} alt='' className='object-contain w-full hover:opacity-50' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]'>fullleaf milktea</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={() => navigate('/menu#freshtea')}>
                <img src={tea} alt='' className='object-contain w-full hover:opacity-50' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]'>fresh tea</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={() => navigate('/menu#phin')}>
                <img src={coffee} alt='' className='object-contain w-full hover:opacity-50' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]'>phin coffee</p>
            </div>
            <div className='relative h-fit pv:max-md:flex justify-center items-center' onClick={() => navigate('/menu#topping')}>
                <img src={topping} alt='' className='object-contain w-full hover:opacity-50' />
                <p className='absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-nexa_light font-black text-[1.8vw] pv:max-md:font-nexa_bold pv:max-md:text-[12vw] pv:max-md:leading-[12vw] leading-[2vw]'>topping</p>
            </div>
        </div>
    );
}

export default Special;
