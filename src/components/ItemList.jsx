import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    return (
        /*por cada elemento en mi array lo transformo en una plantilla osea un elemento para html */
        products.map(prod => <Item product={prod}/> )
    );
}

export default ItemList;
