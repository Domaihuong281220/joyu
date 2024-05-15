import React from 'react';

import coldbrew from "../../assets/HomePage/coldbrew.png";
import fruitjuice from "../../assets/HomePage/fruitjuice.png";

function Signature() {
    return (
        <div className=" h-[66.5vw] flex flex-col space-y-[3.5vw] justify-center items-center px-[9%]">
            <div className="flex w-full h-[27vw] space-x-6">
                <div className="bg-[#F0F0F0] rounded-bl-[5vw] w-[59.1%] flex flex-col justify-center px-[4.5vw]">
                    <p className='uppercase text-start font-nexa_light font-black text-[3vw]'>Dreamy new cold brew</p>
                    <div className='h-[0.1vw] w-[39vw] pr-[1vw] bg-black'></div>
                    <p className='uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]'>Introducing our super-smooth <br></br>Chocolate Cream Cold Brew topped <br></br>with a cloud of silky, chocolaty cold foam.</p>
                    <button className='font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]'>Order now</button>
                </div>
                <img src={coldbrew} alt='' className='w-[37%]' />
            </div>
            <div className="flex w-full h-[27vw] space-x-6">
                <img src={fruitjuice} alt='' className='w-[37%]' />
                <div className="bg-[#FCD990] rounded-br-[5vw] w-[59.1%] flex flex-col justify-center px-[4.5vw]">
                    <p className='uppercase text-start font-shopee_regular text-[3vw]'>Dreamy new cold brew</p>
                    <div className='h-[0.1vw] w-[39vw] pr-[1vw] bg-black'></div>
                    <p className='uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]'>Dive into the vibrant flavors of the <br></br>Mango Dragonfruit and Strawberry <br></br>JOYU Refreshers beverages, both with <br></br>bright lemonade.</p>
                    <button className='font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]'>Order now</button>
                </div>
                
            </div>            

        </div>
    );
}

export default Signature;