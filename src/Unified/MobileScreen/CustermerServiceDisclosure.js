import React from 'react';
import DisclosureMenu from '../../UI/DisclosureMenu';


function CustomerServiceDisclosure(){

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
            <DisclosureMenu listTitle={listTitle} linkList={linkList}/>
        </div>
    );

}

export default CustomerServiceDisclosure;