import React from 'react'

function Hero() {
    return (
        <div>
            {/* large screen */}
            <div className="hidden md:flex w-full pt-40 bg-right-top bg-cover" style={{ backgroundImage: `url('./large-hero-anika-secret-3.jpeg')` }}>
                <div className="flex items-center justify-center w-full h-full bg-opacity-50">
                    <div className="w-10/12">
                        <div className="pl-24">
                            <div className="w-96 flex flex-col space-y-4 text-left py-40">
                                <span className="text-4xl font-black">
                                    <p>
                                        What's your kitchen confession?
                                    </p>
                                </span>
                                <span className="text-lg text-shadow">
                                    <p>
                                        We all do what we can to get by and we want to hear from you. Tell us your kitchen confession to be in to win 1 of 100 prizes of 50 New World Dollars.
                                    </p>
                                </span>
                                <span>
                                    <div class="w-36 bg-red-700 rounded-sm p-2">
                                        <div class="text-sm font-medium text-white text-center">
                                            <a key="ShopLink" href="##">Confess here</a>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* small & medium screen */}
            <div className="w-full pt-28 flex md:hidden">
                <div className="w-full flex flex-col justify-center">
                    <div className="flex w-full bg-right bg-cover h-80" style={{ backgroundImage: `url('./large-hero-anika-secret-3.jpeg')` }}>
                    </div>
                    <div className="flex -mt-20 items-center justify-center w-full h-full">
                        <div className="w-11/12 flex flex-col space-y-5 items-center text-center bg-white py-3 px-5">
                            <span className="text-4xl font-black">
                                <p>
                                    What's your kitchen confession?
                                </p>
                            </span>
                            <span className="text-md text-shadow">
                                <p>
                                    We all do what we can to get by and we want to hear from you. Tell us your kitchen confession to be in to win 1 of 100 prizes of 50 New World Dollars.
                                </p>
                            </span>
                            <span>
                                <div class="w-44 bg-red-600 rounded-sm p-2">
                                    <div class="text-sm font-medium text-white text-center">
                                        <a key="ShopLink" href="##">Confess here</a>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;