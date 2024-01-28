import { useState } from 'react';


import React from 'react';

const Test = ( {mensaje} ) => {
    //Valor - Forma de modificarlo - Valor inicial
    const [numero, setNumero] = useState(0)
    return (
        <div>
            
            <button onClick={() => setNumero(numero + 1)}> Sumar Boton </button>
            <p>{numero}</p>
            <p>{mensaje}</p>
        </div>
    );
}

export default Test;
