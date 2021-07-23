import React from 'react';
import DisclosureMenu from '../../UI/DisclosureMenu';


function MoreDisclosure(){

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
            <DisclosureMenu listTitle={listTitle} linkList={linkList}/>
        </div>
    );

}

export default MoreDisclosure;