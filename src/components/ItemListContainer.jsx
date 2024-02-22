
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/products.json')
            .then(response => response.json())
            .then(prods => {
                console.log(cid);
                if (cid){
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                }else{
                    setProducts(prods)
                }
                
            })

    }, [cid])
    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                <ItemList products={products} />
            </div>
        </div>

    );
}
export default ItemListContainer;
