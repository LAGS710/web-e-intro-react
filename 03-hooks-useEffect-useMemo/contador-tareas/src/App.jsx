import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtroDuracion, setFiltroDuracion] = useState('');
  const [filtroTareas, setFiltroTareas] = useState([]);

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`; // orignalmente esta parte del codigo era document.title = `Total: ${calcularTiempoTotal()} minutos`;, el error estaba en los parentesis
  }, [tareas]);  // Se ejecuta cada vez que las tareas cambian

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

 useEffect( () => {
    // Completar la lógica para eliminar un producto
    const valor = parseInt(filtroDuracion)
    if(filtroDuracion != "" && !isNaN(valor)){
      setFiltroTareas(tareas.filter((tarea) => tarea.duracion === valor)) // usar la funcion setProductos para establecer la nueva lista, se usa filter para pasar la lista sin el product que se elimino a traves de su indice
    } else{
      setFiltroTareas([]); //vaciamos el arreglo de objetos ya que no hay tareas con esta duraciones invalidas o vacias.
    }
  }, [filtroDuracion, tareas]);

  return (
    <div>
      <h1>Contador de Tareas</h1>
      <h2>Agregar Tareas</h2>
      <div>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div>
        <h2>Filtrar Tareas por duración</h2>
        <div>
          <input 
          type="number" 
          value={filtroDuracion} 
          onChange={(e) => setFiltroDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
          />
        </div>
        <h2>Tareas filtradas</h2>
        <ul>
        {filtroTareas.map((tarea, index) => (
          <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
        ))}
        {filtroTareas.length === 0 && filtroDuracion !== "" && (<p>No hay tareas con esa duración</p>)}
      </ul>
      </div>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea.nombre}: {tarea.duracion} minutos</li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;
