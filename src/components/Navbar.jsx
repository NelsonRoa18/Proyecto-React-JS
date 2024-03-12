import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget'
import Categories from './Categories';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {

    return (
        <>
            <Disclosure as="nav" className="navBarColor">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only bg-white">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" stroke-with="1.5" stroke="white" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" stroke-with="1.5" stroke="white" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch">
                                    <div className="flex flex-shrink-0">
                                        <img

                                            className="h-14 imgBanner w-auto mr-2"
                                            src="https://firebasestorage.googleapis.com/v0/b/react-2024-nelson-roa.appspot.com/o/logo.jpg?alt=media&token=d48b355e-2d34-4506-9cbf-0bf50b2838ca"
                                            alt="Logo"
                                        />
                                    </div>
                                    <div className="hidden md:flex md:items-center sm:block">
                                        {/* Aca va el itemListContainer*/}
                                        <Categories />


                                    </div>
                                    <div className="hidden md:flex md:items-center sm:block">

                                        {/* Aca va el CartWidet*/}
                                        <CartWidget />

                                    </div>
                                </div>

                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {/* Aca va el itemListContainer*/}
                                <Categories />
                            </div>
                            <div className="space-y-1 px-2 pb-3 pt-2">

                                {/* Aca va el CartWidet*/}
                                <CartWidget />

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}


export default Navbar;
