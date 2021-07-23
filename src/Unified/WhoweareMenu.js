import React from 'react';
import DropdownMenu from '../UI/DropdownMenu';

function WhoweareMenu(){

    const menuItem = {
        title: "Who we are",
        href: "##",
    }

    const linkList = [
        {
            title: "Contact Us",
            href: "##",
        },
        {
            title: "News",
            href: "##",
        },
        {
            title: "Here for NZ",
            href: "##",
        },
    ];

    return(
        <DropdownMenu menuItem={menuItem} linkList={linkList}></DropdownMenu>
    );
}

export default WhoweareMenu;