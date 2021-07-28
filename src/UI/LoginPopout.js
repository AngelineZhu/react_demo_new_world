import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function LoginPopout() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const buttonIcon = LoginIcon();
    const buttonTitle = 'Log in or Register';
    const buttonImage = LoginImage();

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="min-w-max flex flex-row items-center space-x-2 text-xs font-light"
                >
                    <span>{buttonIcon}</span>
                    <span>{buttonTitle}</span>
                    <span>{buttonImage}</span>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child as={Fragment} 
                            enter="ease-out duration-300" 
                            enterFrom="opacity-0" 
                            enterTo="opacity-100" 
                            leave="ease-in duration-200" 
                            leaveFrom="opacity-100" 
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
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
                            <div className="inline-flex flex-col w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm border-t border-gray-100">
                                <div className="flex justify-center py-3">
                                    <img src="nw-logo-badge.svg" alt="new world badge" className="w-16 h-16"></img>
                                </div>
                                <div className="flex justify-center py-3">
                                    <Dialog.Title as="h3" className="text-3xl font-bold leading-6 text-gray-900">
                                        Log in to your account
                                    </Dialog.Title>
                                </div>
                                <div className="flex justify-center py-4">
                                    <p className="text-sm text-gray-800">
                                        New to New World?
                                        <a href="##"className="text-purple-800 text-bold pl-2">
                                            Please register
                                        </a>
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center p-4 space-y-6">
                                    <div className="w-full px-4 py-3 border boder-gray-100 rounded shadow-sm flex items-center">
                                        <input type="??" placeholder="Email" class="w-full h-full pl-2 text-sm outline-none focus:outline-none bg-transparent" />
                                    </div>
                                    <div className="w-full px-4 py-3 border boder-gray-100 rounded shadow-sm flex items-center">
                                        <input type="??" placeholder="Password" class="w-full h-full pl-2 text-sm outline-none focus:outline-none bg-transparent" />
                                    </div>
                                </div>
                                <div className="flex justify-center py-4">
                                    <p className="text-sm text-gray-800">
                                        <a href="##" className="text-purple-800 text-bold pl-2">
                                            Forgotten your password
                                        </a>
                                    </p>
                                </div>
                                <div className="flex justify-end p-4">
                                    <button
                                        type="button"
                                        className="w-content inline-flex justify-center px-4 py-2 text-sm font-bold text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Login
                                    </button>
                                   
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

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