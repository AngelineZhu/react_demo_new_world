import React from 'react';
import LinkList from '../UI/LinkList';

function MoreSection() {

    const listTitle = "More";

    const linkList = [
        {
            name: "Jobs",
            href: "##",
        },
        {
            name: "Fuel Up >",
            href: "##",
        },
        {
            name: "About Foodstuffs > ",
            href: "##",
        },
    ];

    return (
        <div>
            <LinkList listTitle={listTitle} linkList={linkList}/>
        </div>
    );
}

export default MoreSection;