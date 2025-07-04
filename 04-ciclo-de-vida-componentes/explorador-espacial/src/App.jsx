// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';
import './App.css';

function App() {

const [distancia, setDistancia] = useState(0);
const [combustible, setCombustible] = useState(100);
const [estadoNave, setEstadoNave] = useState('En órbita');
const [planetasVisitados, setPlanetasVisitado] = useState([]);
const [text, setText] = useState('Aterrizar');
const [planeta, setPlaneta] = useState('');
const [block, setBlock] = useState(false);
const [placeholderText, setplaceholderText] = useState('Ingrese el nombre del planeta');

  useEffect(() => {
    if(estadoNave != 'Aterrizado'){
    console.log("¡El panel está listo!"); // Montaje
    }
    let intervalo;
    
    if(estadoNave != 'Aterrizado'){
      intervalo = setInterval(() => { // Montaje    
          setCombustible(combustible => {
            if(combustible != 0){
              setDistancia(distancia => {
                //if (combustibleAux =! 'Agotado'){
                  return distancia + 10;
                //}
          }); return combustible -20;
            } else return combustible = 0;  
        });  
          
      }
    , 1000);}

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [estadoNave]);

  useEffect(() => {   
    if(estadoNave === 'En órbita')
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

    const aterrizar = () => {
      if (estadoNave === 'En órbita'){
        setEstadoNave(estadoNave => 'Aterrizado')
        setText (text => 'Despegar')
        setPlanetasVisitado([...planetasVisitados, planeta]);
        setPlaneta('');
        setBlock(true);
        setplaceholderText('¡Despegue!');
      } else {
        setEstadoNave (estadoNave => 'En órbita'); 
        setText(text => 'Aterrizar');
        setBlock(false);
        setplaceholderText('Ingresa nuevo Planeta');
      }
    }

  return (
    <div>
      <h1>Panel de control</h1>
      <ul>
        <li>{`Distancia: ${distancia}`}</li>
        <li>{`Combustible: ${combustible}`}</li>
        <li>{`Estado: ${mensajeEstado}`}</li>
      </ul> 
      <div>
        <h2>Registro de aterrizaje</h2>
        <input 
          type="String" 
          value={planeta} 
          onChange={(e) => setPlaneta(e.target.value)} 
          placeholder= {placeholderText}
          disabled = {block}
          />
          <button onClick={aterrizar}>{text}</button>
      </div>
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}

export default App;