export default function Profile({ usuario }) {
    return (
      <div>
        <h1>Tu perfil</h1>
        <p>Nombre: {usuario?.nombre}</p>
      </div>
    );
  }
  