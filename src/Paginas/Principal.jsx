import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formu_Inicio_Sesion from "../Componentes/Formu_Inicio_Sesion";
import Portada from "../Componentes/Portada";
import '../Paginas/css/General.css'
import '../Paginas/css/Principal.css'

const Principal = () => {

    const navigate = useNavigate()

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');



    // =========== Iniciar Sesion ===========
    const Iniciar_Sesion = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch('https://back-twitter-laravel.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: correo,
                    password: contrasena
                })
            })

            const datos = await res.json()

            if(datos.message === 'CREDENCIALES INCORRECTAS'){
                return alert(datos.message)    
            }

            localStorage.setItem("token", datos.token);
            alert(datos.message)
            navigate('/Inicio')
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }



    // =========== Ver contraseña ===========
    const [ver, setVer] = useState(false)

    const Ver_Contrasena = () => {
        if(ver === false){
            setVer(true)
        }
        else{
            setVer(false)
        }
    }

    

    return(
        <div className="contenedor_principal">
            <Portada/>
            <Formu_Inicio_Sesion
                Iniciar_Sesion = {Iniciar_Sesion}
                correo = {correo} 
                setCorreo = {setCorreo} 
                contrasena = {contrasena} 
                setContrasena = {setContrasena}
                Ver_Contrasena = {Ver_Contrasena}
                ver = {ver}
            />
        </div>
    )
}

export default Principal