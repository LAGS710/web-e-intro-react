//Game: Componente principal que maneja la lógica del juego.
/*En el componente Game, genera un número aleatorio entre 1 y 100 cuando el juego comienza.
Guarda el estado del número ingresado y la respuesta en useState.
Compara el número ingresado con el generado y usa renderización condicional para mostrar:
"¡Correcto!" si el usuario acierta.
"El número es mayor" o "El número es menor" como pistas.*/
//En Game, usa los componentes creados para mostrar la interfaz.

import InputNumber from './InputNumber';
import Message from './Message';
import React, { useState, useEffect, useMemo } from 'react';
import RestartButton from './RestartButton';

function Game(){
    const[random, setRandom] = useState(Math.floor((Math.random() * 100) + 1)
);
    const[mensaje, setMensaje] = useState('');
    const [number, setNumber] = useState(0);

    const generador = () => {
        setNumber(Math.floor((Math.random() * 100)+1));
    }
    
    useEffect(() => {
        if (number > random){
            setMensaje('El numero secreto es mas bajo')
        } else if ( number < random) {
            setMensaje('El numero secreto es mas alto')
        } else setMensaje('Encontraste el numero secreto');
    },[number]);

    const actualizarNumero = (nuevoValor) => {
        setNumber(nuevoValor);
    }

    return (
        <div>
            <div>
            <InputNumber actualizarDesdeHijo = {actualizarNumero}/>
            <RestartButton actualizarRandomDesdeHijo = {generador}/>
            </div>
            <Message gameMessage={mensaje}/>
        </div>
    );
}

export default Game;
