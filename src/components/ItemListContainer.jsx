
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../firebase/firebase';


const ItemListContainer = () => {

    const [ products, setProducts ] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (cid){
                    const productosFiltrados = productos.filter(prod => prod.category == cid)
                   
                    setProducts(productosFiltrados)
                    
                }else{
                    setProducts(productos)
                }
                
            })
            .catch(error => console.log(error))
    }, [cid])
    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                <ItemList products={products} template={"Item"} />
            </div>
        </div>

    );
}
export default ItemListContainer;
