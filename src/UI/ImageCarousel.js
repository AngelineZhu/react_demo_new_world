import React from 'react';
import { useState } from 'react';

function ImageCarousel() {

    const images = [
        {
            title: "Image-1",
            url: "./FS129656_NWSI_ROTW_wc1907-Thai-Style-Beef-Noodle-Specials-Carousel_1022x497_1.jpeg",
        },

        {
            title: "Image-2",
            url: "./FS129656_NWSI_ROTW_wc1907-Thai-Style-Beef-Noodle-Specials-Carousel_1022x497_2.jpeg",
        },

        {
            title: "Image-3",
            url: "./Cauliflower-curry-insp-tile-732x448.jpeg",
        },

        {
            title: "Image-4",
            url: "./Zero Zone Inspiration 2.jpeg",
        },
    ];

    // const image = images[0];

    const [imgIndex, setImgIndex] = useState(0);

    // const [image,setImage] = useState(images[imgIndex]);

    console.log(imgIndex);

    function toLeft() {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1);
            // setImage(images[imgIndex]);
        }
    };

    function toRight() {
        if (imgIndex < 3) {
            setImgIndex(imgIndex + 1);
            // setImage(images[imgIndex]);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="container flex justify-center space-x-4">
                <div className="w-96 h-48 flex justify-center space-x-4 overflow-hidden">
                    
                    {/* {images.map((img) => (
                        <div className="w-full flex-shrink-0 border border-black" key={img.title}>
                            <img src={img.imageUrl} className="w-full object-cover" alt="##"/>
                        </div>
                    ))} */}
                    {/* <img className="" src={images[imgIndex-1].url} alt="##" key={images[imgIndex-1].title} /> */}
                    <img className="animate-fade-in-left" src={images[imgIndex].url} alt="##" key={images[imgIndex].title} />
                    {/* <img className="" src={images[imgIndex+1].url} alt="##" key={images[imgIndex+1].title} /> */}
                </div>
                <button onClick={toLeft}>
                    <div className="bg-purple-800 rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                </button>
                <button onClick={toRight}>
                    <div className="bg-purple-800 rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ImageCarousel;