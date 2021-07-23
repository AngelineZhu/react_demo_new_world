import React from 'react';
import DisclosureMenu from '../../UI/DisclosureMenu';


function LegalDisclosure(){

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
            <DisclosureMenu listTitle={listTitle} linkList={linkList}/>
        </div>
    );

}

export default LegalDisclosure;