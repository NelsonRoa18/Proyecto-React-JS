
//No se agrega css en el jsx
//Eventos inline
//img sin etiqueta de cierre, 
//nombre de las clases es className
//Estilos se cambian con cabelcase


//import React from 'react'; //Esta linea no es necesaria react ya entiende que es una fnucion de el
import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemListDetailsContainer from './components/ItemDetailsContainer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { CarritoProvider } from './context/CartContext';
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    //esta apertura y cierre es para agregar mas de 1 componente
    <>
      <BrowserRouter>
        <CarritoProvider> {/* Se coloca abarcando todo el renderizado porque el carrito alcanza a toda la pagina */}
          <Navbar />
          <ToastContainer />
          <h1 className='text-center'>Bienvenidos a su tienda favorita</h1>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:cid' element={<ItemListContainer />} />
            <Route path='/productos/:pid' element={<ItemListDetailsContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />


          </Routes>
          <Footer />
        </CarritoProvider>
      </BrowserRouter>





    </>



  );
}


export default App; //Esta linea no es necesaria react ya entiende que es una fnucion de el

/*
export const App = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default App

*/