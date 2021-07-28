import React from "react";
import { useState } from 'react';

function ImageMove() {

    const item1 = {
        title: "Image-1",
        imageUrl: "./FS129656_NWSI_ROTW_wc1907-Thai-Style-Beef-Noodle-Specials-Carousel_1022x497_1.jpeg",
    };

    const item2 = {
        title: "Image-2",
        imageUrl: "./FS129656_NWSI_ROTW_wc1907-Thai-Style-Beef-Noodle-Specials-Carousel_1022x497_2.jpeg",
    };

    const [offset, setOffset] = useState('translate-x-1/4');
    const [flag, setFlag] = useState(false)

    function toLeft() {
        setOffset('-translate-x-96');
        setFlag(true)
    };

    function toRight() {
        setOffset('translate-x-1/4');
        setFlag(false)
    };

    return (
        <div className="w-full">
            <div className="hidden md:flex relative w-full min-h-max justify-center">
                <div className="absolute h-full pt-10 overflow-hidden">
                    <div className={`flex h-full justify-items-center space-x-4 ${offset} transform transition ease-out duration-500`}>
                        <img src={item1.imageUrl} alt={item1.title} className={`object-cover ${flag ? `opacity-60` : ``}`} key={item1.title} />
                        <img src={item2.imageUrl} alt={item1.title} className={`object-cover ${flag ? `` : `opacity-60`}`} key={item2.title} />
                    </div>
                </div>
                <div className="relative container flex justify-start bg-opacity-0 overflow-x-auto">
                    <div className="relative z-40 w-48 lg:w-80">
                        <div className="h-32 bg-red-600 text-white text-center px-2">
                            <div className="text-3xl font-extrabold pt-8 ">Recipes of the week deals</div>
                        </div>
                        <div className="h-24 bg-red-600 text-white text-center">
                            <div className="pt-8">
                                <a href="##" key="" className="text-sm font-bold w-2/3 py-2 px-4 rounded-sm border border-white hover:bg-white hover:text-black">See more deals</a>
                            </div>
                        </div>
                        <div>
                            <img alt="" src="./value-device.svg"></img>
                        </div>
                        <div className="h-0 md:h-20 lg:h-32 xl:56 2xl:h-80">
                        </div>
                    </div>
                    <div className="static">
                        <div className="absolute flex justify-center top-1/2 right-4 space-x-3 text-white">
                            <button className={`bg-purple-800 rounded-md p-3 ${flag ? `opacity-60` : ``}`} onClick={toLeft}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className={`bg-purple-800 rounded-md p-3 ${flag ? `` : `opacity-60`}`} onClick={toRight}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full space-y-3 md:hidden">
                <div className="text-center text-xl font-extrabold text-gray-800 pt-2 px-5">Recipes of the week deals</div>
                <div className="h-auto overflow-x-auto">
                    <div className="flex h-full justify-items-start space-x-2">
                        <img src={item1.imageUrl} alt={item1.title} className="w-11/12 object-cover" key={item1.title} />
                        <img src={item2.imageUrl} alt={item1.title} className="w-11/12 object-cover" key={item2.title} />
                    </div>
                </div>
                <div className="text-white text-center pt-3">
                    <a href="##" key="" className="text-sm font-bold w-2/3 py-2 px-12 rounded-sm border border-white bg-red-600 hover:bg-white hover:text-black">See more deals</a>
                </div>
            </div>
        </div>
    );

};

export default ImageMove;