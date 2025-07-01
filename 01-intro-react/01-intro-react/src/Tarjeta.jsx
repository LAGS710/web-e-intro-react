function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Nombre: Luis Ángel González Santos";
  const caracter = "Carácter: Fuerte";
  const pokedex = "Pokédex: 562";
  const imagen = "https://imgs.search.brave.com/V2T1Xr-PGDEHHRcFNnsoopI7rn7heVTGWiqiJDL160c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MjIvMTEvMjUvcG9r/ZW1vbi1yZWQtMWhy/YmZ0YjljcXZqcC5w/bmc"
  const descripcion = '"Si la montaña no va a ti, tú ve a la montaña."'

  // Retornamos el JSX que representa la tarjeta
  return (
    <div style={{justifySelf: 'center', background: 'linear-gradient(150deg, rgba(189, 185, 176, 0.09) 10%, rgba(0, 0, 0, 1) 40%, rgba(107, 101, 112, 1) 68%, rgba(12, 25, 54, 1) 90%)'}}>
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '600px', textAlign: 'center', display: 'flex' }}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
        <div style={{width :'50%'}}>
            <h2>{nombre}</h2>
            <h4>{caracter}</h4>
            <p>{pokedex}</p>
            <p>{descripcion}</p>
        </div>
        <div style={{alignItems : 'center', display: "flex"}}>
            <img src = {imagen} style={{width : '300px', height : "auto", }}/>
        </div>
        </div>
    </div>
  );
}

export default Tarjeta;