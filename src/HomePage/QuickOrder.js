import React from 'react';
import AnimatedLink from '../UI/AnimatedLink';

function QuickOrder() {

    const linkList = [
        {
            title: "Find store opeinig hours",
            href: '##',
            icon: OpenIcon(),
        },
        {
            title: 'Ordering catering',
            href: "##",
            icon: TruckIcon(),
        },
        {
            title: 'Get the latest deals',
            href: "##",
            icon: MailIcon(),
        },
    ];

    return (
        <div className="w-full bg-white flex flex-col justify-items-center">
            <div className="text-center text-3xl font-extrabold pt-8">
                Let us help you to...
            </div>

            {/* sm */}
            <div class="w-full px-4 py-4 space-y-2 flex flex-col items-start md:hidden">
                {linkList.map((item) => (
                    <a key="" href={item.href} className="w-full flex flex-row items-center space-x-4 border-b-2 border-black text-sm font-extrabold">
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                    </a>
                ))}
            </div>

            {/* lg&md */}
            <div class="hidden md:flex w-auto py-3 space-x-3 justify-center">
                {linkList.map((item) => (
                    <AnimatedLink icon={item.icon} title={item.title} link={item.href} />
                ))}
            </div>
        </div>
    );
}

export default QuickOrder;

function OpenIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}

function TruckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
    )
}