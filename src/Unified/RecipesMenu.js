import React from 'react';
import DropdownMenu from '../UI/DropdownMenu';

function RecipesMenu(){

    const menuItem = {
        title: "Recipes",
        href: "##",
    }

    const linkList = [
        {
            title: "Recipe Finder",
            href: "##",
        },
        {
            title: "Quick and easy Dinners",
            href: "##",
        },
        {
            title: "Dessert recipes",
            href: "##",
        },
        {
            title: "Baking recipes",
            href: "##",
        },
        {
            title: "Breakfast recipes",
            href: "##",
        },
        {
            title: "Chicken recipes",
            href: "##",
        },
        {
            title: "Gluten free recipes",
            href: "##",
        },
        {
            title: "vegetarain recipes",
            href: "##",
        },
    ];

    return(
        <DropdownMenu menuItem={menuItem} linkList={linkList}></DropdownMenu>
    );
}

export default RecipesMenu;