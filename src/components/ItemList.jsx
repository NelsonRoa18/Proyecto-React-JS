import React from 'react';
import Item from './Item';
import ItemCart from './ItemCart';

const ItemList = ({ products, template }) => {

    return (
        <>
            {
                
                /*por cada elemento en mi array lo transformo en una plantilla osea un elemento para html */
                template === "Item"

                    ?
                    
                    products.map(prod =>  <Item key={prod.id} product={prod} /> )
                    :
                    products.map(prod => <ItemCart key={prod.id} product={prod} />)
            }        </>
    );
}

export default ItemList;
