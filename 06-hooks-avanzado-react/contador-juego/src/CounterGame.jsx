import React, { useReducer, useState, useEffect } from "react";

const estadoInicial = { contador: 0, historial: [] };

function cargarEstadoInicial() {
  const guardado = localStorage.getItem("estadoContador");
  if (guardado) {
    try {
      return JSON.parse(guardado);
    } catch {
      return estadoInicial;
    }
  }
  return estadoInicial;
}

function reducer(state, action) {
  switch (action.type) {
    case "sumar":
      return {
        contador: state.contador + action.cantidad,
        historial: [...state.historial, state.contador],
      };
    case "restar":
      return {
        contador: state.contador - 1,
        historial: [...state.historial, state.contador],
      };
    case "reiniciar":
      return estadoInicial;
    case "deshacer":
      if (state.historial.length === 0) return state;
      const ultimo = state.historial[state.historial.length - 1];
      return {
        contador: ultimo,
        historial: state.historial.slice(0, -1),
      };
    default:
      return state;
  }
}


function Contador() {
  const [state, dispatch] = useReducer(reducer, estadoInicial, cargarEstadoInicial);
  const [valorIncremento, setValorIncremento] = useState(1);

  useEffect(() => {
    localStorage.setItem("estadoContador", JSON.stringify(state));
  }, [state]);

  const manejarIncremento = () => {
    const val = Number(valorIncremento);
    if (!isNaN(val) && val > 0) {
      dispatch({ type: "sumar", cantidad: val });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Contador: {state.contador}</h1>

      <input
        type="number"
        value={valorIncremento}
        onChange={(e) => setValorIncremento(e.target.value)}
        min="1"
      />
      <button onClick={manejarIncremento}>Sumar</button>

      <button onClick={() => dispatch({ type: "restar" })}>-1</button>
      <button onClick={() => dispatch({ type: "deshacer" })} disabled={state.historial.length === 0}>
        Deshacer
      </button>
      <button onClick={() => dispatch({ type: "reiniciar" })}>Reiniciar</button>

      <h3>Historial:</h3>
      <ul>
        {state.historial.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Contador;