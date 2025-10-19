import React, { useEffect, useState } from "react";
import foto_usuario from "../img/usuario.png" 
import '../Componentes/css/Encabezado_Usuario.css'

const Encabezado_Usuario = ({usuario, Cerrar_Sesion}) => {
    return(
        <div className="contenedor_encabezado_usuario">
            <div></div>

            <div>
                {usuario && (
                    <div>
                        <img src={foto_usuario} alt="" />

                        <div>
                            <h3>{usuario.name}</h3>
                            <p>{usuario.email}</p>
                        </div>
                    </div>
                )}

                <button onClick={Cerrar_Sesion}>Cerrar Sesion</button>
            </div>

            <hr />
        </div>
    )
}

export default Encabezado_Usuario