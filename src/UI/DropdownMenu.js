import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

// to do list:
// set the submenu under the main menu
// add animation for dropdownicon

function DropdownMenu(props) {

    const menuItem = props.menuItem;

    const linkList = props.linkList;

    return (
        <div className="w-auto text-center flex justify-center">
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex justify-center w-full px-4 py-4 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {menuItem.title}
                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" stroke="#700aa3"
                        aria-hidden="true"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 w-60 h-auto max-h-60 origin-top-righ bg-gray-200 rounded-sm shadow-inner overflow-scroll focus:outline-none">
                        <div className="p-5">
                            <div className="p-3 border border-gray-300 bg-gray-50 rounded-md divide-y divide-gray-300">
                                <menuItem className="text-sm font-medium text-gray-900">
                                    <div>
                                        <a key={menuItem.title} href={menuItem.href}
                                            className="group flex items-center w-full p-2">
                                            View All ' {menuItem.title} '
                                        </a>
                                    </div>
                                </menuItem>
                                {linkList.map((item) => (
                                    <Menu.Item className="text-sm text-gray-800">
                                        <div>
                                            <a key={item.title} href={item.href}
                                                className="group flex items-center w-full p-2">
                                                {item.title}
                                            </a>
                                        </div>
                                    </Menu.Item>
                                ))}
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default DropdownMenu;