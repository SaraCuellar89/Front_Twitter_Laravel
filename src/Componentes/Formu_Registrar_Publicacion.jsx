import React, { useEffect, useState } from "react";
import '../Componentes/css/Formu_Registrar_Publicacion.css'
import { useNavigate } from "react-router-dom";

const Formu_Registrar_Publicacion = ({Crear_Publicacion, titulo, setTitulo, descripcion, setDescricion}) => {
    return(
        <div className="contenedor_registrar_publicaciones">
            <form action="" onSubmit={Crear_Publicacion}>

                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <textarea name="" id="" value={descripcion} onChange={(e) => setDescricion(e.target.value)} required></textarea>
                </div>

                <button>Crear</button>

            </form>

            <hr />
        </div>
    )
}

export default Formu_Registrar_Publicacion