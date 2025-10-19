import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Rutas_Protegidas = ({ children }) => {

    // =========== Saber si si hay inicio de sesion ===========
    const token = localStorage.getItem('token');

    if(!token){
        alert('Debes iniciar sesión');
        return <Navigate to="/" replace />;
    }

    return token ? <>{children}</> : null;
}

export default Rutas_Protegidas