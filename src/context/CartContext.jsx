import { useState, createContext, useContext } from "react";

const CarritoContext = createContext(); //Creando el contexto 

export const useCarritoContext = () => useContext(CarritoContext); //Funcion para consultar mi contexto desde otros componenetes

//Proveedor es el que me ofrece la forma de poder conocer a este context

export const CarritoProvider = (props) => { //Forma de proveer el contexto, puede recibir o no props

    //Agregar producto - Eliminar producto - Vaciar carrito - Obtener cantidad (subtotales) - 
    //Obtener precio total (suma de subtotales) - Buscar Producto

    const [carrito, setCarrito] = useState([])

    //Buscar producto recibe el id
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id) //.some busca si hay algun producto con el mismo id en el array
                                                    //esto devuelve verdadero o falso en caso de que exista o no
    }

    //Agregar producto recibe, el item y la cantidad
    const addItem = () => {
        if(isInCart(item.id)){

            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)

        } else {
            const newItem = {
                ...item, //operador ... permite copiar objetos en javascript
                quantity: cantidad
            }

            //Guardo el nuevo producto en el carrito
            //Uso el operador spred para copiar el array ya creado de "carrito" y le agrego el nuevo
            setCarrito([...carrito, newItem]) //Guardo en el carrito el nuevo item
        }

    }

    //Eliminar item
    const removeItem = (id) => {
        const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        /*
        //Con .splice
        if (indice != -1){
            setCarrito(aux.splice(indice, 1))
        }
        */

        //Con .filter
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Vaciar carrito
    const emptyCart = () => {

        setCarrito([]);
    }

    //Obtener cantidad de predocutos
    const getItemQuantity = () => {

        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //Obtener precio total del carrito
    const totalPrice = () => {

        return carrito.reduce((acum,prod) => acum += (prod.quantity * prod.price), 0)
    }


    return (
        <CarritoContext.Provider value = {{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}} >
            {props.children}
        </CarritoContext.Provider>
    )
}   
