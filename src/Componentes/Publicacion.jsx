import React, { useEffect, useState } from "react";
import usuario from "../img/usuario.png" 
import '../Componentes/css/Publicacion.css'
import { useNavigate } from "react-router-dom";

const Publicacion = ({publicacion}) => {
    return(
        <>
            {publicacion.length === 0 ? 
            (
                <h1>No hay publicaciones</h1>
            ) : 
            (
                <>
                    {publicacion.map((p) => (
                        <div className="contenedor_publicacion" key={p.id}>
                            <div>
                                <img src={usuario} alt="" />
                                <p>usuario_1234</p>
                            </div>
                            
                            <h3>{p.title}</h3>

                            <p>{p.description}</p>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default Publicacion