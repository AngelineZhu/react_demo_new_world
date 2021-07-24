import React from 'react';

function EqualCard(props) {

    const title=props.title;
    const image=props.image;
    const description=props.description;

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="overflow-hidden w-full object-cover">
                <img src={image} alt="??" className="transform hover:scale-110 transition duration-300"></img>
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

export default EqualCard;