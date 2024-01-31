import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget'
import Categories from './Categories';
import ItemCount from './ItemCount';



const Navbar = () => {

    return (
        <>
            <nav className="navBarColor">
                <div className="mx-auto max-w-7xl px-2">

                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center">

                            <img
                                className="imgBanner"
                                src="../public/haritz.jpeg"
                                alt="H"
                            />

                        </div>


                        <div className="flex flex-1 items-center">
                            {/* Aca va el itemListContainer*/}
                            <Categories />


                        </div>
                        <div className="flex flex-1 items-center">
                            <label class="relative block">

                                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </span>
                                <input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar..." type="text" name="search" />
                            </label>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 fill-slate-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>


                        </div>
                        <div className="flex flex-1 items-center">

                            {/* Aca va el CartWidet*/}
                            <CartWidget />

                        </div>

                    </div>
                    <div className="flex flex-1 items-center">

                        {/* Aca va el CartWidet*/}
                        <ItemListContainer />

                    </div>

                </div>
            </nav >
        </>
    )
}


export default Navbar;
