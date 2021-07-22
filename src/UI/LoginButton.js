import React from "react";

// to do list:
// 1. pop out login frame

function LoginButton() {

    const buttonIcon = LoginIcon();
    const buttonTitle = 'Log in or Register';
    const buttonImage = LoginImage();


    return (
        <button className="flex flex-row items-center space-x-2 text-xs font-light">
            <span>{buttonIcon}</span>
            <span>{buttonTitle}</span>
            <span>{buttonImage}</span>
        </button>
    );
}

export default LoginButton;

function LoginIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    )
}

function LoginImage() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    )
}