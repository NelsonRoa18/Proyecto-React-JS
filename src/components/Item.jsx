import React from 'react';
import { Link } from 'react-router-dom';
/*Molde de producto*/
/* En img la ruta tiene 2 puntos porque debe volver para atras, ya que tenemos categorias y las imagenes
se tienen que cargar en mas de 1 lugar*/
const Item = ({ product }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-md shadow-md">
            <Link to={`/productos/${product.id}`}>
                <img className='' src={`${product.img}`} alt={`Imagen de ${product.brand}`} />
                <h2 className='text-lg font-semibold mb-2'>Marca: {product.brand}</h2>
                <p className='text-gray-700 mb-2'>Descripcion: {product.title}</p>
                <p className='text-xl font-bold'>Precio : ${product.price}</p>
            </Link>
        </div>
    );
}

export default Item;
