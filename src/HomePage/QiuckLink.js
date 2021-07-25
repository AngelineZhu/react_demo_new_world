import React from 'react';
import AnimatedLink from '../UI/AnimatedLink';

function QuickMenu() {

    const linkList = [
        {
            title: "Clubcard",
            href: '##',
            icon: CardIcon(),
        },
        {
            title: 'View the mailer',
            href: "##",
            icon: BookIcon(),
        },
        {
            title: 'Contact Us',
            href: "##",
            icon: ContactIcon(),
        },
    ];

    return (
        <div>
            {/* sm */}
            <div className="flex w-full justify-start bg-white md:hidden">
                <div class="w-full px-4 py-4 space-y-2 flex flex-col items-start">
                    {linkList.map((item) => (
                        <a key="" href={item.href} className="w-full flex flex-row items-center space-x-4 border-b-2 border-black text-sm font-extrabold">
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                        </a>
                    ))}
                </div>
            </div>

            {/* lg&md */}
            <div className="hidden md:flex w-full bg-white justify-center">
                <div class="py-8 space-x-3 flex justify-center">
                    {linkList.map((item) => (
                        <AnimatedLink icon={item.icon} title={item.title} link={item.href} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QuickMenu;

function CardIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12" fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    )
}

function BookIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    )
}

function ContactIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
    )
}