import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [nombre, setNombre] = useState("");
  const irA = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      onLogin(nombre);
      irA("/");
    }
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="¿Cómo te llamas?"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
