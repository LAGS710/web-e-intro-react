import Tarjeta from './Tarjeta';

function App() {
  return (
     <body style={{justifyContent: 'center'}}>
        <div style={{alignSelf: 'center'}}>
          <h1 style={{ display:'flex', justifyContent: 'center'}} >Tarjeta de Entrenador</h1>
          {/* Renderizamos el componente Tarjeta */}
          <Tarjeta />
        </div>
     </body>
  );
}

export default App;
