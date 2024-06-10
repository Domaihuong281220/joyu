import React from 'react';

import coldbrew from "../../assets/HomePage/coldbrew.png";
import fruitjuice from "../../assets/HomePage/fruitjuice.png";
import { Navigate, useNavigate } from 'react-router-dom';

function Signature() {
    const navigate = useNavigate()
    return (
        <div className=" h-[69.5vw] pv:max-md:h-[300vw] flex flex-col space-y-[4.5vw] justify-center items-center px-[9%]">
            {/* desktop */}
            <div className="pv:max-md:hidden flex w-full h-[27vw] space-x-6">
                <div className="bg-[#F0F0F0] rounded-bl-[5vw] w-[59.1%] flex flex-col justify-center px-[4.5vw]">
                    <p className='uppercase text-start font-nexa_light font-black text-[2.8vw]'>Dreamy new cold brew</p>
                    {/* <div className='h-[0.1vw] w-[39vw] pr-[1vw] bg-black'></div> */}
                    <p className='uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]'>Introducing our super-smooth <br></br>Chocolate Cream Cold Brew topped <br></br>with a cloud of silky, chocolaty cold foam.</p>
                    <button className='font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]' onClick={()=>navigate("/menu")}>Order now</button>
                </div>
                <img src={coldbrew} alt='' className='w-[37%]' />
            </div>
            <div className="pv:max-md:hidden flex w-full h-[27vw] space-x-6">
                <img src={fruitjuice} alt='' className='w-[37%]' />
                <div className="bg-[#FCD990] rounded-br-[5vw] w-[59.1%] flex flex-col justify-center px-[4.5vw]">
                    <p className='uppercase text-start font-shopee_regular text-[2.8vw]'>Make a splash</p>
                    {/* <div className='h-[0.1vw] w-[39vw] pr-[1vw] bg-black'></div> */}
                    <p className='uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]'>Dive into the vibrant flavors of the <br></br>Mango Dragonfruit and Strawberry <br></br>JOYU Refreshers beverages, both with <br></br>bright lemonade.</p>
                    <button className='font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]' onClick={()=>navigate("/menu")}>Order now</button>
                </div>
            </div>            

            {/* mobile */}
            <div className="hidden pv:max-md:flex flex-col w-full h-[143vw] space-y-6">
            <img src={coldbrew} alt='' className='w-full' />
                <div className="bg-[#F0F0F0] w-full flex flex-col justify-center h-[100vw] p-[4.5vw]">
                    <p className='uppercase text-start font-nexa_light font-black text-[2.8vw]'>Dreamy new cold brew</p>
                    {/* <div className='h-[0.1vw] w-[39vw] pr-[1vw] bg-black'></div> */}
                    <p className='uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]'>Introducing our super-smooth <br></br>Chocolate Cream Cold Brew topped <br></br>with a cloud of silky, chocolaty cold foam.</p>
                    <button className='font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]' onClick={()=>navigate("/menu")}>Order now</button>
                </div>
                
            </div>
            <div className="hidden pv:max-md:flex flex-col w-full h-[143vw] space-y-6">
                <img src={fruitjuice} alt='' className='w-full' />
                <div className="bg-[#FCD990] h-[100vw] w-full flex flex-col justify-center p-[4.5vw]">
                    <p className='uppercase text-start font-shopee_regular text-[2.8vw]'>Make a splash</p>
                    {/* <div className='h-[0.1vw] w-[39vw] pr-[1vw] bg-black'></div> */}
                    <p className='uppercase text-start font-nexa_light font-black text-[1.5vw] leading-[2.7vw]'>Dive into the vibrant flavors of the <br></br>Mango Dragonfruit and Strawberry <br></br>JOYU Refreshers beverages, both with <br></br>bright lemonade.</p>
                    <button className='font-nexa_light bg-black text-white uppercase rounded-full w-fit px-[2.8vw] py-[0.9vw] text-[1.2vw] mt-[2vw]' onClick={()=>navigate("/menu")}>Order now</button>
                </div>
            </div>
        </div>
    );
}

export default Signature;