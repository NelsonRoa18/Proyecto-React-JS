import React from 'react';
import { useState, useEffect } from 'react';
const Dolar = () => {

    const [dolar, setDolar] = useState([]);

    useEffect(() => {
        fetch('https://criptoya.com/api/dolar')
            /* cuando finalice, resopnse es el contenido y lo transformo en json*/
            /* response es la respuesta de la promesa, y se transforma a json para poder usarlo*/
            .then((response) => response.json())
            /* los daots que traigas, mostramelos en la consola*/
            /* data es la respuesta de el haber pasado a json la promesa*/
            .then((data) => {
                const molde =
                    <div>
                        <h3>Cotizacion del dolar</h3>
                        <p>Dolar Mayorista : {data.mayorista.price}</p>
                        <p>Dolar Tarjeta : {data.tarjeta.price}</p>
                        <p>Dolar Oficial : {data.oficial.price}</p>
                    </div>;
                setDolar(molde);
            })
            .catch((error) => console.log(error));
    }, [])


    return (
        {dolar}
    );
}

export default Dolar;
