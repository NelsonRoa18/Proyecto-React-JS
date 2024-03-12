import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'

const navigation = [

    { nid: 1, name: 'Inicio', href: '/', current: false },
    { nid: 2, name: 'Aceites', href: '/category/aceites', current: false },
    { nid: 3, name: 'Accesorios', href: '/category/accesorios', current: false },
    { nid: 4, name: 'Liquidos refrigerantes', href: '/category/liquidos refrigerantes', current: false },
]

const navigationFiltros = [
    { nfid: 1, name: 'Filtros de aire', href: '/category/filtros de aire', current: false },
    { nfid: 2, name: 'Filtros de aceite', href: '/category/filtros de aceite', current: false }
]
const Categories = () => {
    return (

        <div className="space-x-4 md:flex md:items-center sm:block">
            {navigation.map((item) => (
                <Link key={item.nid} to={item.href}>
                    <button
                        key={item.name}
                        href={item.href}
                        className='text-white hover:bg-red-100 hover:text-black block
                        rounded-md px-3 py-2 text-sm font-medium'
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </button>
                </Link>

            ))}

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md py-2 text-sm font-semibold text-white">
                        Filtros
                        <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </Menu.Button>
                </div>

                <Transition

                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                    <Menu.Items as="section" className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="navBarColor text-center rounded-md">
                            {navigationFiltros.map((itemFiltros) => (
                                <Menu.Item key={itemFiltros.nfid}>

                                    <Link to={itemFiltros.href}>
                                        <a
                                            key={itemFiltros.name}
                                            href={itemFiltros.href}
                                            className='block text-white hover:bg-red-100 hover:text-black block
                                            px-3 py-2 text-sm font-medium'
                                            aria-current={itemFiltros.current ? 'page' : undefined}
                                        >
                                            {itemFiltros.name}

                                        </a>
                                    </Link>

                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>


    );
}

export default Categories;
