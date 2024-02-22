import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailsContainer = () => {
    const [item, setItem] = useState([]);
    const {pid} = useParams();

    useEffect (() => {
        fetch('../data/products.json')
        .then(response => response.json())
        .then(prods => {
            if (pid) {
                const product = prods.find(prod => prod.id == pid)
                setItem(product)
            }
        })
    },[])
    return (
        <div>
            <ItemDetail item = {item}/>
        </div>
    );
}

export default ItemDetailsContainer;
