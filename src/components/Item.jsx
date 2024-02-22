import React from 'react';
import { Link } from 'react-router-dom';
/*Molde de producto*/
/* En img la ruta tiene 2 puntos porque debe volver para atras, ya que tenemos categorias y las imagenes
se tienen que cargar en mas de 1 lugar*/
const Item = ({product}) => {
    return (
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
         <Link to= {`/productos/${product.id}`}>
            <img className='' src={`../img/${product.img}`} alt={`Imagen de ${product.brand}`} />
            <h2 className='text-lg font-semibold mb-2'>Marca: {product.brand}</h2>
            <p className='text-gray-700 mb-2'>Descripcion: {product.title}</p>
            <p className='text-xl font-bold'>Precio : ${product.price}</p>
            <div className='flex justify-between items-center'>
                
                <button className='bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:'>
                    Add to Cart
                </button>
            </div>
        </Link>
        </div>
    );
}

export default Item;
