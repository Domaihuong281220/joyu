import React from 'react';

import OolongCoconutMilktea from "../../assets/Menu/JoyuSpecials/OLOONGCOCONUTMILKTEA.png"
import HazenutMilktea from "../../assets/Menu/JoyuSpecials/MATCHAJOYU.png"
import JasmineMilktea from "../../assets/Menu/JoyuSpecials/JASMINEMILKTEA.png"
import Thaitea from "../../assets/Menu/JoyuSpecials/THAITEA.png"
import DoubleMatchaMilktea from "../../assets/Menu/JoyuSpecials/DOUBLE MATCHAMILKTEA.png"
import BrownSugarFreshTea from "../../assets/Menu/JoyuSpecials/BROWNSUGARFRESH TEA.png"
import VeryBerryFreshTea from "../../assets/Menu/JoyuSpecials/VERY BERRYFRESH TEA.png"
import VeryBerryFreshTea2 from "../../assets/Menu/FullleafMilktea/VERYBERRYFRESHTEA1.png"

function FullleafMilktea() {
    return (
        <div className='flex flex-col justify-start items-start px-[11.7%] mt-[5vw]'>
            <p className='font-nexa_bold uppercase text-[2.7vw] leading-[2.2vw]'>Fullleaf milktea</p>
            <div className='h-[0.05vw] w-[76.6vw] bg-black my-[2.4vw]'></div>
            <div className='grid grid-cols-6 gap-x-[1.3vw] gap-y-[2.2vw] w-full h-fit'>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={OolongCoconutMilktea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Oolong Coconut Milktea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={HazenutMilktea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Hazenut Milktea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={JasmineMilktea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>jasmine milktea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={Thaitea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Thai tea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={DoubleMatchaMilktea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Double Matcha Milktea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={BrownSugarFreshTea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Brown Sugar Fresh Tea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={VeryBerryFreshTea} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Very Berry Fresh Tea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>
                <div className='flex flex-col items-center w-full h-full  font-shopee_regular uppercase'>
                    <img src={VeryBerryFreshTea2} className='w-fit h-[17.5vw]' alt=''></img>
                    <p className='text-[1.15vw] h-[3.2vw]'>Very Berry Fresh Tea</p>
                    <p className='text-[1vw] text-primary'>4.5</p>
                </div>

            </div>
        </div>
    );
}

export default FullleafMilktea;