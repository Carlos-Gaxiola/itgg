import React, { useState, useEffect } from 'react';
import Axios from 'axios';




const PruebaRol = () => {
    const [rol, setRol] = useState("");
    const [mostrar, setMostrar] = useState(false);
    Axios.defaults.withCredentials = true;

    /*const autorizado = () => {
        Axios.get('http://localhost:3001/getToken', {
        }).then((response) => {
            if(response.data.authorized === true){
                console.log("estoy autorizado "+response.data.authorized)
            }else{
                console.log("no estoy autorizado"+response.data.authorized)
            }
           
           
        })
    }*/

    useEffect(() => {
        Axios.get('http://localhost:3001/getToken', {
        }).then((response) => {
            if (response.data.authorized === true) {
                console.log("estoy autorizado " + response.data.authorized)
                setMostrar(true);
            } else {
                console.log("no estoy autorizado" + response.data.authorized)
                window.location = '/'
            }
        })
    }, [])



    return (
        <>
            {
                mostrar  && 
                <>
                <button >autorizado respuesta</button>
                <h1>aquí ando mamá</h1>
                </>
            }



        </>
    )
}

export default PruebaRol;