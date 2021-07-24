import React from 'react';
import ZoomInCard from '../UI/ZoomInCard';

function CardsSection() {

    const ads3_1 = {
        title: "Recipes of the week",
        image: "./ROTW-promo-tile-Thai-inspired-beef-noodle-salad.jpeg",
        description: "We're bringing you easy dinner ideas and lots of fresh recipe inspiration with our Recipe of the Week",
    };
    const ads3_2 = {
        title: "Welcome to our kitchen",
        image: "./promo-tile-kitchen-2.jpeg",
        description: "We're here to help your life easier... Whether you want to make it or fake it, we've got what you need to win in the kitchen.",
    };
    const ads3_3 = {
        title: "Plastic Free July",
        image: "./FS129377 - NWNZ_Plastic Free July_2021_Homepage Tile 790x656px_v1.jpeg",
        description: "New World kicks off Plastic Free July by annoucing mission to remove single use plastic produce bags from its stores.",
    };

    // 2 ads section
    const headTitle = "Something's cooking at New World";
    const headDescription = "We’ve got it all – weekly specials to save every day, meal solutions and inspiration with easy, fresh, seasonal recipes the whole family will enjoy.";
    const ads2_1 = {
        title: "Recipes of the week",
        image: "./Cauliflower-curry-insp-tile-732x448.jpeg",
        description: "With more than 1000 recipes online it's easy to find meal inspiration and try something new.",
    };
    const ads2_2 = {
        title: "Discover Zero Zone",
        image: "./Zero Zone Inspiration 2.jpeg",
        description: "Going dry this July doesn't mean you have to go thirsty. Our wide range of alcohol free beverages and recipes have you sorted. Check out our Zero Zone for inspiration!",
    };

    return (
        <div>
            {/* 3 ads section */}
            <div className="relative bg-white flex justify-center">
                <div className="absolute top-0 w-full h-64 bg-yellow-50">
                </div>
                <div className="relative z-30 w-11/12 py-12 flex justify-center space-x-12">
                    <ZoomInCard title={ads3_1.title} image={ads3_1.image} description={ads3_1.description} />
                    <ZoomInCard title={ads3_2.title} image={ads3_2.image} description={ads3_2.description} />
                    <ZoomInCard title={ads3_3.title} image={ads3_3.image} description={ads3_3.description} />
                </div>
            </div>

            {/* 2 ads section */}
            <div className="bg-gray-800 text-white flex justify-center py-10">
                <div className="w-11/12 flex flex-col flex-evenly">
                    <div className="flex justify-center">
                        <div className="w-9/12 text-center py-5 space-y-4">
                            <h2 className="font-extrabold text-3xl">{headTitle}</h2>
                            <p className="font-light text-lg">{headDescription}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center space-x-12">
                        <div className="w-2/3">
                            <ZoomInCard title={ads2_1.title} image={ads2_1.image} description={ads2_1.description} />
                        </div>
                        <div className="w-1/3">
                            <ZoomInCard title={ads2_2.title} image={ads2_2.image} description={ads2_2.description} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CardsSection;