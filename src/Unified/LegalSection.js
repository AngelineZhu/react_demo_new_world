import React from 'react';
import LinkList from '../UI/LinkList';

function LegalSection() {

    const listTitle = "Legal";

    const linkList = [
        {
            name: "Privacy Policy",
            href: "##",
        },
        {
            name: "Terms and Conditions",
            href: "##",
        },
    ];

    return (
        <div>
            <LinkList listTitle={listTitle} linkList={linkList}/>
        </div>
    );
}

export default LegalSection;