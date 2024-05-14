import React from 'react';

import BannerBG from "../../assets/HomePage/banner.png"
import Sidebar from '../Sidebar';
function Banner() {
    return (
        <div className="relative">
            <img src={BannerBG} alt='' className='object-cover' />
            
        </div>
    );
}

export default Banner;