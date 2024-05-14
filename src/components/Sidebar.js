const Sidebar = () => {
    return (
        <div className='absolute z-10 top-0 left-0 w-full h-24 flex px-[12%] py-4'>
            <svg id="Group_6" width="63.832" height="45" viewBox="0 0 63.832 61.952">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_51" width="63.832" height="61.952" fill="none" />
                    </clipPath>
                </defs>
                <g id="Group_5" clipPath="url(#clip-path)">
                    <path id="Path_16" d="M67.673,7.1A1.194,1.194,0,0,0,66.479,8.29V36.562A29.045,29.045,0,0,1,38.64,65.581V58.434a22.762,22.762,0,0,0,21.528-22.7V17a1.194,1.194,0,0,0-2.388,0v9.41l-1.663,1.663L37.433,46.741,17.45,26.758l-.364-.367V17.036a1.194,1.194,0,0,0-2.388,0V35.443A22.941,22.941,0,0,0,36.227,58.434v7.147A29.045,29.045,0,0,1,8.387,36.562V22.733a1.194,1.194,0,0,0-2.388,0V36.224a31.435,31.435,0,1,0,62.868.338V8.29A1.194,1.194,0,0,0,67.673,7.1M38.64,56.043v-7.1l19.14-19.14v5.666a20.535,20.535,0,0,1-19.14,20.57M17.087,35.733V29.807l19.14,19.14v7.1a20.372,20.372,0,0,1-19.14-20.31" transform="translate(-5.517 -6.526)" fill="#040504" />
                </g>
            </svg>
            <div className="w-full h-full flex justify-end space-x-4 items-center">
                <button className='font-nexa_bold bg-primary uppercase text-white rounded-full px-6 h-full'>Order now</button>
                <button className='font-nexa_light uppercase border-[1px] border-[#1E1B1A] text-secondary h-full rounded-full px-6'>Menu</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 47 35">
                    <g id="Group_17" data-name="Group 17" transform="translate(-1647 -107)">
                        <line id="Line_1" data-name="Line 1" x2="47" transform="translate(1647 124.5)" fill="none" stroke="#000" stroke-width="1" />
                        <line id="Line_25" data-name="Line 25" x2="47" transform="translate(1647 107.5)" fill="none" stroke="#000" stroke-width="1" />
                        <line id="Line_2" data-name="Line 2" x2="47" transform="translate(1647 141.5)" fill="none" stroke="#000" stroke-width="1" />
                    </g>
                </svg>

            </div>

        </div>
    )
}

export default Sidebar
