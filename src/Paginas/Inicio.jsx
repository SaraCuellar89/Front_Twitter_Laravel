import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import perfil from "../img/perfil.png"
import Encabezado from "../Componentes/Encabezado";
import Footer from "../Componentes/Footer";
import Publicacion from "../Componentes/Publicacion";
import '../Paginas/css/Inicio.css'
import Btn_Perfil from "../Componentes/Btn_Perfil";

const Inicio = () => {

    const navigate = useNavigate()

    const [publicacion, setPublicacion] = useState([])



    // =========== Saber si si hay inicio de sesion ===========
    const token = localStorage.getItem('token');

    if(!token){
        alert('Debes iniciar sesión');
        navigate('/');
    }



    useEffect(() => {
        // =========== Obtener Posts ===========
        const Obtener_Publicaciones = async () => {
            try{
                const res = await fetch('https://back-twitter-laravel.onrender.com/api/posts', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, //aquí va el token
                    },
                })

                const datos = await res.json()
                
                setPublicacion(datos.data)
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        Obtener_Publicaciones()
    }, [])

    

    return(
        <div className="contenedor_inicio">
            <Encabezado/>

            <div className="publicaciones_inicio">
                <Publicacion
                    publicacion = {publicacion}
                />
            </div>

            <Btn_Perfil
                ruta = '/Perfil'
                img = {perfil}
            />

            <Footer/>
        </div>
    )
}

export default Inicio