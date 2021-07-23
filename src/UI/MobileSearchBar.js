import React from "react";

// to do list:
// 1. select > search
// 2. hover > change the color of search box boder
// 3. change the color of search box boder when the user is inputting

function MonbileSearchBar() {
    return (
        <div className="w-full flex justify-center py-2 px-3 shadow-md">
                <div className="w-full px-4 py-1 bg-gray-100 rounded shadow-sm flex items-center">
                    <div class="select px-3 py-2 rounded shadow-sm border border-gray-300 bg-white ">
                        <select name="" id="" x-model="?" class="text-sm outline-none focus:outline-none bg-transparent">
                            <option value="all" selected>All</option>
                            <option value="recipes">Recipes</option>
                        </select>
                    </div>
                    <input type="search" placeholder="Search here..." x-model="?" class="w-full h-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                    <button click="getImages()" class="outline-none focus:outline-none">
                        <svg class="w-6 text-gray-800 h-6 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
        </div>
    );
}

export default MonbileSearchBar;