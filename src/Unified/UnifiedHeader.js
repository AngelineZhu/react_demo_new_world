import React from 'react';
import LoginPopout from '../UI/LoginPopout';
import MonbileSearchBar from '../UI/MobileSearchBar';
import SearchBar from '../UI/SearchBar';
import HeaderLocation from './HeaderLocation';
import HeaderNav from './HeaderNav';
import HeaderOperationTime from './HeaderOperationTime';

// to do list
// header nav folding animation

function UnifiedHeader() {
    return (
        <div className="z-50">
            {/* Medium Screen Style */}
            <div className="hidden md:flex flex-col">
                {/* Header Ribbon */}
                <div className="bg-red-800 text-white text-md flex justify-center">
                    <div className="flex justify-between w-10/12 min-w-max py-1 md:w-11/12">
                        <div class="flex space-x-4">
                            {/* location */}
                            <HeaderLocation />
                            {/* Operation Time */}
                            <HeaderOperationTime />
                        </div>
                        <div className="flex justify-centre">
                            {/* <LoginButton /> */}
                            <LoginPopout></LoginPopout>                        
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
                <div className="border-t border-gray-300 shadow-lg flex justify-center">
                    <div className="w-10/12 min-w-max flex md:w-11/12">
                        <HeaderNav />
                    </div>
                </div>
            </div>

            {/* Small Screen Style */}
            <div className="flex flex-col md:hidden">
                <div className="bg-white text-xl text-black">
                    <div className="flex justify-between px-4 py-1">
                        <div class="flex items-center space-x-4">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                            </button>
                            <div>
                                <a key="" href="##" className="flex justify-center px-3">
                                    <img src="nw-logo-badge.svg" alt="New World Badge" />
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center border-t border-gray-200">
                    <MonbileSearchBar></MonbileSearchBar>
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
