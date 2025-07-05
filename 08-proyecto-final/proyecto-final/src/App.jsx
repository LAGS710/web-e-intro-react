import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login.jsx";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {
    const guardado = localStorage.getItem("usuario");
    if (guardado) {
      setUsuario(JSON.parse(guardado));
    }
  }, []);

  const iniciarSesion = (nombre) => {
    const nuevoUsuario = { nombre };
    setUsuario(nuevoUsuario);
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
  };

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={iniciarSesion} />} />
        <Route path="/" element={<Home usuario={usuario} onLogout={cerrarSesion} />} />
        <Route
          path="/perfil"
          element={usuario ? <Profile usuario={usuario} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
