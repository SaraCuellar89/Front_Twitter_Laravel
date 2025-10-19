import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';

const Formu_Editar_Post = ({Editar, titulo, setTitulo, descripcion, setDescripcion, Cancelar}) => {
    return(
        <div className="contenedor_registrar_publicaciones">
            <form action="" onSubmit={Editar}>

                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <textarea name="" id="" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required></textarea>
                </div>

                <div>
                    <button type="submit">Editar</button>
                    <button onClick={Cancelar} type="button">Cancelar</button>
                </div>

            </form>
        </div>
    )
}

export default Formu_Editar_Post