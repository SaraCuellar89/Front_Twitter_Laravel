import React from "react";
import logo from "../img/linux.png"
import '../Componentes/css/Portada.css'

const Portada = () => {
    return(
        <div className="contenedor_portada">
            <h1>TwiCopy</h1>
            <img src={logo} alt="" />
        </div>
    )
}

export default Portada