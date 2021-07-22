import React from 'react';
import LoginButton from '../UI/LoginButton';
import SearchBar from '../UI/SearchBar';
import HeaderLocation from './HeaderLocation';
import HeaderOperationTime from './HeaderOperationTime';

function UnifiedHeader() {
    return (
        <div className="">
            {/* Medium Screen Style */}
            <div className="hidden md:flex flex-col">
                {/* Header Ribbon */}
                <div className="bg-red-800 text-white text-md flex justify-center">
                    <div className="flex justify-between w-10/12 min-w-max py-1">
                        <div class="flex space-x-4">
                            {/* location */}
                            <HeaderLocation />
                            {/* Operation Time */}
                            <HeaderOperationTime />
                        </div>
                        <div className="flex justify-centre">
                            <LoginButton />
                        </div>
                    </div>
                </div>
                {/* Search Ribbon */}
                <div className="bg-white text-black text-lg flex justify-center">
                    <div className="w-10/12 min-w-max py-4 md:w-11/12">
                        <SearchBar />
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
                <div className="bg-white text-xl text-black">
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
