// RestartButton para reiniciar el juego generando un nuevo número aleatorio.

function RestartButton (props){

    return(
        <div>
            <button onClick={props.actualizarRandomDesdeHijo}>Generar nuevo numero aleatorio</button>
        </div>
    )
}

export default RestartButton;