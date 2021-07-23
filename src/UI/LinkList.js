import React from 'react';

function LinkList(props) {

    return (
        <div className="flex-shink-0 min-w-max flex flex-col items-start py-2 space-y-5">
            <div className="font-bold text-md">
                <span>{props.listTitle}</span>
            </div>
            <div className="h-full flex flex-col space-y-5 text-xs font-thin">
                {props.linkList.map((item) => (
                    <a key={item.name} href={item.href}>
                        <span>
                            {item.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default LinkList;