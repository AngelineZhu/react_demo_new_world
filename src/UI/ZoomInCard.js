import React from 'react';

function ZoomInCard(props) {

    const title=props.title;
    const image=props.image;
    const description=props.description;

    return (
        <div className="w-auto h-auto flex flex-col items-start">
            <div className="overflow-hidden">
                <img src={image} alt="??" className="w-full h-auto transform hover:scale-110 transition duration-300"></img>
            </div>
            <div className="w-full text-left">
                <div className="py-4 font-extrabold text-xl">
                    <span>{title}</span>
                </div>
                <div className="text-sm">
                    <span>{description}</span>
                </div>
            </div>

        </div>
    )
}

export default ZoomInCard;