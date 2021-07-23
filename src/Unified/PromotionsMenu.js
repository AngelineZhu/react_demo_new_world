import React from 'react';
import DropdownMenu from '../UI/DropdownMenu';

function PromotionsMenu(){

    const menuItem = {
        title: "Promotions",
        href: "##",
    }

    const linkList = [
        {
            title: "Competitions",
            href: "##",
        },
    ];

    return(
        <DropdownMenu menuItem={menuItem} linkList={linkList}></DropdownMenu>
    );
}

export default PromotionsMenu;