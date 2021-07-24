import React from 'react';

function UnequalCard(props) {

    const title=props.title;
    const image=props.image;
    const description=props.description;

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <div className="overflow-hidden w-full h-96">
                <img src={image} alt="??" className="w-full h-full object-cover transform hover:scale-110 transition duration-300"></img>
            </div>
            <div className="w-full h-36 bg-white text-black p-4 text-left space-y-2">
                <div className="font-extrabold text-xl">
                    <span>{title}</span>
                </div>
                <div className="text-xs">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default UnequalCard;