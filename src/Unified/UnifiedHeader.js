import React from 'react';
import LoginButton from '../UI/LoginButton';
import HeaderLocation from './HeaderLocation';
import HeaderOperationTime from './HeaderOperationTime';

function UnifiedHeader() {
    return (
        <div className="">
            {/* Medium Screen Style */}
            <div className="hidden md:flex flex-col">
                {/* Header Ribbon */}
                <div className="bg-red-800 text-white text-md">
                    <div className="flex justify-between px-28 py-1">
                        <div class="flex space-x-4">
                            {/* location */}
                            <HeaderLocation/>
                            {/* Operation Time */}
                            <HeaderOperationTime />
                        </div>
                        <div className="flex justify-centre">
                            <LoginButton />
                        </div>
                    </div>
                </div>
                {/* Search Ribbon */}
                <div className="bg-gray-100 text-black text-lg">
                    <div className="flex justify-centre px-10 py-5 space-x-4 ">
                        <div>Logo Link: normal style</div>
                        <div>Search Bar</div>
                    </div>
                </div>
                {/* Menu Ribbon */}
                <div className="bg-gray-100 border-t border-gray-300 shadow-lg text-xl text-red-800">
                    <div>
                        Menu Area: normal style
                    </div>
                </div>
            </div>

            {/* Small Screen Style */}
            <div className="flex flex-col md:hidden">
                <div className="bg-gray-100 text-xl text-black">
                    <div className="flex justify-between px-4 py-1">
                        <div class="flex space-x-4">
                            <div>menu button: mobile style</div>
                            <div>Logo link: mobile style</div>
                        </div>
                        <div>Login: mobiel style</div>
                    </div>
                </div>
                <div className="bg-gray-100 text-black text-lg">
                    <div className="bg-gray-100 border-t border-gray-300 shadow-lg text-xl ">
                        <div>Search Bar</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:hidden">
                <div>
                    Menu Area: mobile Style
                </div>
            </div>
        </div>
    );
}

export default UnifiedHeader;
