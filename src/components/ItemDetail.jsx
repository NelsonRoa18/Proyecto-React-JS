import React from 'react';
import ItemDetailsContainer from './ItemDetailsContainer';
import useCounter from '../hooks/useCounter';
import { useCarritoContext } from '../context/CartContext';


const ItemDetail = ({ item }) => {
    const {addItem} = useCarritoContext()
    const { count, increment, decrement } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        addItem(item, count)
    }

    return (
        <>
            <div className='flex-none mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <div className="bg-gray-200 p-4 rounded-md shadow-md text-center">
                    <div className='grid grid-rows-3 grid-flow-col gap-4'>
                        <div className='row-start-1 row-end-4'>
                            <img src={`../img/${item.img}`} alt={`Imagen de ${item.brand}`} />
                        </div>
                        <div className='row-start-1 row-end-4 text-center'>
                            <h2 className='text-lg font-semibold mb-2'>Marca: {item.brand}</h2>
                            <p className='text-gray-700 mb-2'>Descripcion: {item.title}</p>
                            <p className='text-gray-700 mb-2'>Stock: {item.stock}</p>
                            <p className='text-gray-700 mb-2'>Precio: ${item.price}</p>


                        </div>
                        <div className='row-start-1 row-end-4 self-center'>
                            <div className="flex items-center justify-center space-x-4">
                                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={decrement}>
                                    -
                                </button>
                                {/*Este es la cantidad de items */}
                                <span className="text-xl font-bold">{count}</span>
                                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={increment}>
                                    +
                                </button>
                            </div>
                            <div className="flex items-center justify-center space-x-4">
                                <button className="mt-4 bg-indigo-500 text-white px-4 y-2 rounded" onClick={handleAddToCart}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>





                </div>


            </div>

        </>
    );
}

export default ItemDetail;
