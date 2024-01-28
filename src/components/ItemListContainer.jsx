

import React from 'react';

const navigation = [

    { name: 'Inicio', href: '#', current: false },
    { name: 'Contacto', href: '#', current: false },
    { name: 'Carta', href: '#', current: false },
    { name: 'Nosotros', href: '#', current: false },
]


const ItemListContainer = () => {
    return (

        <div className="flex space-x-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-300 hover:text-white
                        rounded-md px-3 py-2 text-sm font-medium'
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </a>
            ))}
        </div>


    );
}

export default ItemListContainer;
