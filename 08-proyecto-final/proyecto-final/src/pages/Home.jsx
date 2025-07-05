export default function Home({ usuario, onLogout }) {
    return (
      <div>
        <h1>¡Hola! Bienvenido a la app</h1>
        {usuario && (
          <>
            <p>Usuario conectado: {usuario.nombre}</p>
            <button onClick={onLogout}>Salir</button>
          </>
        )}
      </div>
    );
  }
  