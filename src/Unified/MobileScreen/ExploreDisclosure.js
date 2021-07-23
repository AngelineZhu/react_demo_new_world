import React from 'react';
import DisclosureMenu from '../../UI/DisclosureMenu';


function ExploreDisclosure(){

    const listTitle = "Explore New World";

    const linkList = [
        {
            name: "Clubcard",
            href: "##",
        },
        {
            name: "Own Brands",
            href: "##",
        },
        {
            name: "Gift Cards",
            href: "##",
        },
        {
            name: "Chirstmas Club",
            href: "##",
        },
        {
            name: "Online Shopping",
            href: "##",
        },
    ];

    return (
        <div>
            <DisclosureMenu listTitle={listTitle} linkList={linkList}/>
        </div>
    );

}

export default ExploreDisclosure;