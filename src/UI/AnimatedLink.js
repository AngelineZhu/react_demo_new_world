import React from 'react';

function AnimatedLink(props) {

    const title=props.title;
    const icon=props.icon;
    const href=props.href;

    // const title = "Clubcard";
    // const href = '##';
    // const icon = CardIcon();

    return (
        <a key="" href={href} className="group w-40 felx flex-col text-center py-2">

            <div className="py-4 px-12 flex justify-center transform group-hover:-translate-y-4 transition ease-out duration-500">
                {icon}
            </div>
            <div className="border-t-2 border-black transform group-hover:scale-110 transition duration-500">
            </div>
            <div className="pt-3 font-extrabold text-md">{title}</div> 

        </a>
    )
}

export default AnimatedLink;

// function CardIcon() {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             class="h-12 w-12" fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor">
//             <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="1"
//                 d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//         </svg>
//     )
// }