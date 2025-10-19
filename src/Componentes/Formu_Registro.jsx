import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Formu_Registro = ({Registrar, nombre, setNombre, edad, setEdad, tipo_documento, setTipoDocumento, documento, setDocumento, correo, setCorreo, contrasena, setContrasena, ver, Ver_Contrasena}) => {
    return (
        <div className="contenedor_formu_inicio_sesion">
            <h1>Registro</h1>

            <form onSubmit={Registrar}>

                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Edad</label>
                    <input
                        type="number"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Tipo de documento</label>
                    <select
                        value={tipo_documento}
                        onChange={(e) => setTipoDocumento(e.target.value)}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="1">Cédula de Ciudadanía</option>
                        <option value="2">PPT</option>
                        <option value="3">Tarjeta de Identidad</option>
                    </select>
                </div>

                <div>
                    <label>Documento</label>
                    <input
                        type="text"
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Correo</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
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
                    <button type="submit">Registrarse</button>
                    <p>¿Ya tienes cuenta? <Link to={'/'}>Inicia Sesión</Link></p>
                </div>

            </form>
        </div>
    );
};

export default Formu_Registro;
