import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"

const CheckOut = () => {
    const formRef = useRef()
    const navigate = useNavigate()//Devuelve la locacion actual de mi componente (ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        //Devuelve un objeto con los datos del form
        console.log(formRef.current)

        const datForm = new FormData(formRef.current) //Paso de objeto HTML a objeto iterator

        const data = Object.fromEntries(datForm) //Paso de objeto iterator a un objeto simple

        e.target.reset()
        const cliente = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple

        //Modificar stock

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) { //Si existe stock suficinete para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el producto del carrito al tener stock suficiente
                }

            })

        })
        //Generar la orden de Compra
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })

                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })

    }
    return (

        carrito.length === 0 ?
            <>
                <h2>Para finalizar compra debe tener productos en el carrito</h2>
                <Link to={"/"}>
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                        Volver al inicio
                    </button>
                </Link>

            </>
            :

            <div className="max-w-md mx-auto p-6 my-2 bg-gray-200 rounded-md shadow-md">
                <form action="" ref={formRef} onSubmit={handleSubmit}>
                    <div className="space-y-12">


                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Apellido
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Dni
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="dni"
                                        id="dni"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Direccion
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        </div>


                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </form>
            </div>

    );
}

export default CheckOut;
