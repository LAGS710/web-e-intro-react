import { useState } from "react";

function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]); // incializa lista vacia
  const [nuevoProducto, setNuevoProducto] = useState(""); // inicializa nuevo objeto como vacio

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") { // verifica que no haya un producto vacio a agregar a la lista
      setProductos([...productos, nuevoProducto]); // SetProductos mantiene el resto de la lista de productos igual solo que agrega el producto nuevoProducto
      setNuevoProducto(""); // regresa el nuevo producto a vacio para que no haya nada cuando se requiera agregar un nuevo producto
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    // Completar la lógica para eliminar un producto
    setProductos(productos.filter((producto) => producto != productos[index])) // usar la funcion setProductos para establecer la nueva lista, se usa filter para pasar la lista sin el product que se elimino a traves de su indice
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;