import React from 'react';
import LinkList from '../UI/LinkList';

function ExploreSection() {

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
            <LinkList listTitle={listTitle} linkList={linkList}/>
        </div>
    );
}

export default ExploreSection;