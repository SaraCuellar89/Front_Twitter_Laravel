import React, { useEffect, useState } from "react";
import usuario from "../img/usuario.png";
import editar from "../img/editar.png"
import eliminar from "../img/borrar.png"
import aceptar from "../img/chulito.png"
import cancelar from "../img/x.png"
import '../Componentes/css/Publicacion_Usuario.css'
import { useNavigate } from "react-router-dom";

const Publicacion_Usuario = ({publicacion, Ir_Editar, Eliminar}) => {
    return(
        <>
            {publicacion.length === 0 ? 
            (
                <h1>No hay publicaciones</h1>
            ) : 
            (
                <>
                    {publicacion.map((p) => (
                        <div className="contenedor_publicacion_usuario" key={p.id}>
                            <div>
                                <img src={usuario} alt="" />
                                <p>usuario_1234</p>
                            </div>

                            <h3>{p.title}</h3>

                            <p>{p.description}</p>

                            <div>
                                <img onClick={() => Ir_Editar(p.id)} src={editar} alt="" />
                                <img onClick={() => Eliminar(p.id)} src={eliminar} alt="" />
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default Publicacion_Usuario