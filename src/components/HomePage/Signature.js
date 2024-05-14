import React from 'react';

import coldbrew from "../../assets/HomePage/coldbrew.png";
import fruitjuice from "../../assets/HomePage/fruitjuice.png";

function Signature() {
    return (
        <div className=" h-[120vh] flex flex-col space-y-10 justify-center items-center px-[12%]">
            <div className="flex w-full h-[47vh] space-x-6">
                <div className="bg-[#F0F0F0] rounded-bl-[5rem] w-[60%] flex flex-col justify-center px-16">
                    <p className='uppercase text-start underline font-shopee_regular text-4xl'>Dreamy new cold brew</p>
                    <p className='uppercase text-start font-shopee_regular text-3xl'>Introducing our super-smooth Chocolate Cream Cold Brew topped with a cloud of silky, chocolaty cold foam.</p>
                    <button className='font-nexa_bold bg-black uppercase rounded-full w-fit px-6 h-'>Order now</button>
                </div>
                <img src={coldbrew} alt='' className='w-[40%]' />
            </div>
            <div className="flex w-full h-[47vh] space-x-6">
                <img src={fruitjuice} alt='' className='w-[40%]' />
                <div className="bg-[#FCD990] rounded-br-[5rem] w-[60%] flex flex-col justify-center">
                    <p className='uppercase text-start underline font-shopee_regular text-4xl'>Dreamy new cold brew</p>
                    <p className='uppercase text-start font-shopee_regular text-3xl'>Introducing our super-smooth Chocolate Cream Cold Brew topped with a cloud of silky, chocolaty cold foam.</p>
                    <button className='font-nexa_bold bg-black uppercase rounded-full w-fit px-6 h-'>Order now</button>
                </div>
                
            </div>            

        </div>
    );
}

export default Signature;