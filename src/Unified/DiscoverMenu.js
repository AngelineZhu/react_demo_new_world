import React from 'react';
import DropdownMenu from '../UI/DropdownMenu';

function DiscoverMenu(){

    const menuItem = {
        title: "Discover",
        href: "##",
    }

    const linkList = [
        {
            title: "Beer",
            href: "##",
        },
        {
            title: "Butchery",
            href: "##",
        },
        {
            title: "Cider",
            href: "##",
        },
        {
            title: "Deli",
            href: "##",
        },
        {
            title: "In-store",
            href: "##",
        },
        {
            title: "Seafood",
            href: "##",
        },
        {
            title: "Wine",
            href: "##",
        },
        {
            title: "Zero Zone",
            href: "##",
        },
    ];

    return(
        <DropdownMenu menuItem={menuItem} linkList={linkList}></DropdownMenu>
    );
}

export default DiscoverMenu;