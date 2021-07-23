import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function DisclosureMenu(props) {

    const listTitle = props.listTitle;
    const linkList = props.linkList

    return (
        <div className="border-t border-gray-700">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="w-full flex justify-between py-3 text-md font-light text-left text-red focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{listTitle}</span>
                            <ChevronUpIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-white`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col justify-evenly text-sm font-thin text-white">
                            {linkList.map((item) => (
                                <a key={item.name} href={item.href} className="py-2">
                                    <span>
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
