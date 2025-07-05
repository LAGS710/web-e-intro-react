//Message: Muestra pistas o mensajes de éxito.
//En Message, recibe una prop con el mensaje adecuado según el estado del juego.
//Usa operadores ternarios o condiciones if para mostrar el mensaje correcto según el estado del juego.
//Message para mostrar retroalimentación.

import React from 'react';


function Message(prop){
    return(
        <div>
            <p>{prop.gameMessage}</p>
        </div>
    )

}

export default Message;