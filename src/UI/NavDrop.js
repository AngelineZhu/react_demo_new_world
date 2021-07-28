import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NavDrop() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const buttonIcon = NavIcon();

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="min-w-max flex flex-row items-center space-x-2 text-xs font-light"
                >
                    <span>{buttonIcon}</span>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 top-0 bottom-0 z-50" onClose={closeModal}>
                    <div className="h-auto">
                        <button
                            type="button"
                            className="w-content inline-flex justify-center px-4 py-3 text-sm font-bold bg-gray-100"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full h-full text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300" 
                            enterFrom="opacity-0" 
                            enterTo="opacity-100" 
                            leave="ease-in duration-200" 
                            leaveFrom="opacity-100" 
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-full align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-flex flex-col w-full h-full justify-between text-left align-middle transition-all transform shadow-xl rounded-sm border-t border-gray-100">
                                <div className="flex flex-col h-full bg-gray-100">
                                    <div className="pt-5 flex justify-center px-3">
                                        <a key="" href="##" className="w-full flex flex-col justify-center rounded-sm bg-purple-900 text-white px-6 py-3">
                                            Shop
                                        </a>
                                    </div>
                                    <div className="flex justify-center px-3 py-3">
                                        <div className="w-full rounded-md border border-gray-400 bg-white divide-y divide-gray-400 text-gray-700">
                                            <button className="flex justify-between w-full px-3 py-3">
                                                <div>
                                                    Promotions
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </button>
                                            <button className="flex justify-between w-full px-3 py-3">
                                                <div>
                                                    Recipes
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </button>
                                            <button className="flex justify-between w-full px-3 py-3">
                                                <div>
                                                    Clubcard
                                                </div>
                                                <div>

                                                </div>
                                            </button>
                                            <button className="flex justify-between w-full px-3 py-3">
                                                <div>
                                                    Discover
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </button>
                                            <button className="flex justify-between w-full px-3 py-3">
                                                <div>
                                                    Who we are
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </button>
                                            <button className="flex justify-between w-full px-3 py-3">
                                                <div>
                                                    Mailer
                                                </div>
                                                <div>

                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between bg-red-600 py-6 px-4">
                                    <div className="text-white flex flex-row items-center">
                                        <div className="px-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col items-start text-sm font-light">
                                            <div>Your store</div>
                                            <div className="font-bold">New World Birkenhead</div>
                                            <div>Open Today 7.00am - 10.00pm</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div>
                                            <button className="border border-white text-white rounded-md px-3 py-1">
                                                Change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

function NavIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
    )
}