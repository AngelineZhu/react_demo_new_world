import React from 'react';
import LinkList from '../UI/LinkList';

function CustomerServiceSection() {

    const listTitle = "Customer service";

    const linkList = [
        {
            name: "Contact Us",
            href: "##",
        },
        {
            name: "Store finder",
            href: "##",
        },
        {
            name: "FAQs",
            href: "##",
        },
        {
            name: "Scam Alert",
            href: "##",
        },
        {
            name: "Surveys",
            href: "##",
        },
    ];

    return (
        <div>
            <LinkList listTitle={listTitle} linkList={linkList}/>
        </div>
    );
}

export default CustomerServiceSection;