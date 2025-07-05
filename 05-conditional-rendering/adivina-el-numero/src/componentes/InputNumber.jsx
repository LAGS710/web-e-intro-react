//InputNumber: Un campo de entrada para que el usuario escriba su número.
//InputNumber para capturar la entrada del usuario.

function InputNumber(props) {

    return (
        <div>
            <h2>Ingresa el numero</h2>
            <input 
            type="Number" 
            onChange={(e) => props.actualizarDesdeHijo(e.target.value)} 
            placeholder= 'Ingrese numero'
            />
        </div>
    )

}

export default InputNumber;