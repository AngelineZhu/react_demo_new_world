import React from 'react';
import DiscoverMenu from './DiscoverMenu';
import PromotionsMenu from './PromotionsMenu';
import RecipesMenu from './RecipesMenu';
import WhoweareMenu from './WhoweareMenu';
import { ChevronDownIcon } from '@heroicons/react/solid'


function HeaderNav() {

    return (
        <nav className="flex flex-row items-center">
            <div className="w-auto flex justify-center px-2">
                <div className="py-1 flex justify-center">
                    <a key="" href="##" className="flex flex-col justify-center rounded-md bg-purple-900 text-white px-6 py-2">
                        <p>Shop</p>
                    </a>
                </div>
            </div>
            <ul className="flex flex-row items-center">
                <li><PromotionsMenu></PromotionsMenu></li>
                <li><RecipesMenu></RecipesMenu></li>
                <li>
                    <a key="" href="##" className="inline-flex justify-center w-full px-4 py-4 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Clubcard
                        <ChevronDownIcon
                            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" stroke="#700aa3"
                            aria-hidden="true"
                        />
                    </a>
                </li>
                <li><DiscoverMenu></DiscoverMenu></li>
                <li><WhoweareMenu></WhoweareMenu></li>
                <li>
                    <a key="" href="##" className="inline-flex justify-center w-full px-4 py-4 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Mailer
                        <ChevronDownIcon
                            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" stroke="#700aa3"
                            aria-hidden="true"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;