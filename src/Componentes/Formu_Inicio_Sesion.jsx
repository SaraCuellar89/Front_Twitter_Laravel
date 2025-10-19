import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Componentes/css/Formu_Inicio_Sesion.css'

const Formu_Inicio_Sesion = ({Iniciar_Sesion, correo, setCorreo, contrasena, setContrasena, Ver_Contrasena, ver}) => {
    return(
        <div className="contenedor_formu_inicio_sesion">
            <h1>Inicio de Sesion</h1>

            <form action="" onSubmit={Iniciar_Sesion}>

                <div>
                    <label htmlFor="correo">Correo</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="correo">Contraseña</label>
                    {ver === false ? 
                    (
                        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required/>
                    ): 
                    (
                        <input type="text" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required/>
                    )}
                    
                    <p className="ver_contrasena" onClick={Ver_Contrasena}>{ver === false ? "VER" : "OCULTAR"}</p>
                </div>

                <div>
                    <button type="submit">Entrar</button>
                    <p>¿No tienes cuenta? <Link to={'/Registro'}>Registrate</Link></p>
                </div>

            </form>
        </div>
    )
}

export default Formu_Inicio_Sesion