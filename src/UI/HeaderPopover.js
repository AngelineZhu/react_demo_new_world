import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

// to do list:
// 1. popover.panel animation
// 2. conditional rendering

function HeaderPopover(props) {

    const thinTitle = props.thinTitle;
    const thickTitle = props.thickTitle;
    const buttonTitle = props.buttonTitle;
    const iconImage = props.iconImage;

    const linkList = props.linkList;
    const staticList = props.staticList;

    return (
        <div className="w-atuo">
            <Popover className="relative flex justify-center">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                            ${open ? '' : 'text-opacity-90'} 
                            group bg-orange-700 px-3 py-1 rounded-md inline-flex items-center text-base font-medium 
                            hover:text-opacity-100 
                            focus:outline-none 
                            focus-visible:ring-2 
                            focus-visible:ring-white 
                            focus-visible:ring-opacity-75
                            `}
                        >
                            <span class="flex flex-row items-center space-x-3 text-xs">
                                <span>{iconImage}</span>
                                <span class="font-thin">{thinTitle}</span>
                                <span class="font-thick">{thickTitle}</span>
                            </span>
                            <ChevronDownIcon
                                className={`${open ? '' : 'text-opacity-70'} ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 min-w-max px-3 mt-6 top-2">
                                {/* transform-translate-x-1/2 left-1/4  */}
                                <div className="absolute top-0 right-0 w-3 h-3 origin-center transform rotate-45 -translate-x-8 -translate-y-1.5 bg-white border-t border-l border-gray-100 rounded-sm pointer-events-none"></div>
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="py-3 px-2 bg-white">
                                        <button className="flex justify-between transition duration-150 ease-in-out rounded-md w-full">
                                            <div className="text-sm font-medium text-gray-700">
                                                {buttonTitle}
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="relative grid grid-rows-1 divide-y divide-gray-200 justify-items-centre bg-white px-4">
                                        {staticList.map((item) => (
                                            <div className="flex justify-between py-1 text-xs text-gray-800 space-x-6">
                                                <p>{item.day}</p>
                                                <p>{item.time}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative grid grid-rows-1 gap-1 divide-y divide-gray-100 bg-white py-3 px-4">
                                        {linkList.map((item) => (
                                            <div className="text-sm font-medium text-purple-900">
                                                <a key={item.name} href={item.href}
                                                    className="flex items-center py-1
                                                    transition duration-150 ease-in-out rounded-lg 
                                                    hover:bg-gray-50 
                                                    focus:outline-none 
                                                    focus-visible:ring 
                                                    focus-visible:ring-orange-500 
                                                    focus-visible:ring-opacity-50">
                                                    <div>
                                                        <p> {item.name} </p>
                                                    </div>
                                            </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}

export default HeaderPopover;

