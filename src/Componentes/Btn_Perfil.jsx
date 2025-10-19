import React from "react";
import '../Componentes/css/Btn_Perfil.css'
import { Link } from "react-router-dom";

const Btn_Perfil = ({ruta, img}) => {
    return(
        <div className="btn_perfil">
            <Link to={ruta}>
                <img src={img} alt="" />
            </Link>
        </div>
    )
}

export default Btn_Perfil