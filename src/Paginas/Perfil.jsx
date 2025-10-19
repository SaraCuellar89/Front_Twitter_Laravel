import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import grupo from "../img/grupo.png"
import Encabezado from "../Componentes/Encabezado";
import Encabezado_Usuario from "../Componentes/Encabezado_Usuario";
import Footer from "../Componentes/Footer";
import '../Paginas/css/Perfil.css'
import Formu_Registrar_Publicacion from "../Componentes/Formu_Registrar_Publicacion";
import Publicacion_Usuario from "../Componentes/Publicacion_Usuario";
import Btn_Perfil from "../Componentes/Btn_Perfil";

const Perfil = () => {

    const navigate = useNavigate()

    const [usuario, setUsuario] = useState('')
    const [id_usuario, setId_usuario] = useState(null)


    
    // =========== Saber si si hay inicio de sesion ===========
    const token = localStorage.getItem('token');

    if(!token){
        alert('Debes iniciar sesión');
        navigate('/');
    }



    // =========== Obtener dotos del usuario ===========
    useEffect(() => {
        const Obtener_Usuario = async () => {
            try{
                const res = await fetch('https://back-twitter-laravel.onrender.com/api/user', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, //aquí va el token
                    },
                })
                const datos = await res.json()
                
                setUsuario(datos)
                setId_usuario(datos.id)
            }
            catch(error){
                console.error('Error: '+ error)
            }
        }

        Obtener_Usuario()
    }, [])



    // =========== Cerrar Sesion ===========
    const Cerrar_Sesion = async () => {
        try{
            const confirmar = confirm('¿Segur@ quiere salir de su cuenta?')
            if(!confirmar) return

            const res = await fetch('https://back-twitter-laravel.onrender.com/api/logout', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, //aquí va el token
                },
            })

            const datos = await res.json()

            //Hay que eliminar el token
            localStorage.removeItem("token");

            navigate('/')
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }
    


    // =========== Crear Post ===========
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescricion] = useState('')

    const Crear_Publicacion = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch('https://back-twitter-laravel.onrender.com/api/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, //aquí va el token
                },
                body: JSON.stringify({
                    user_id: id_usuario,
                    title: titulo,
                    description: descripcion
                })
            })

            const datos = await res.json()
            alert('Se creo la publicacion')
            navigate(0)
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }



    // =========== Obtener todos los Posts ===========
    useEffect(() => {
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

    const [publicacion, setPublicacion] = useState([])



    // =========== Ir al formulario de editar ===========
    const Ir_Editar = (id_publicacion) => {
        navigate(`/Editar_Post/${id_publicacion}`)
    }



    // =========== Eliminar Post ===========
    const Eliminar = async (id_post) => {
        try{
            const confirmar = confirm('¿Segur@ quiere eliminar esta publicacion?')
            if(!confirmar) return

            const res = await fetch(`https://back-twitter-laravel.onrender.com/api/posts/${id_post}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, //aquí va el token
                },
            })

            const datos = await res.json()

            alert('Post Eliminado')
            navigate(0)
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    
    
    return(
        <div className="contenedor_perfil">
            <Encabezado/>

            <div>
                <Encabezado_Usuario
                    usuario = {usuario}
                    Cerrar_Sesion = {Cerrar_Sesion}
                />
                <Formu_Registrar_Publicacion
                    Crear_Publicacion = {Crear_Publicacion}
                    titulo = {titulo}
                    setTitulo = {setTitulo}
                    descripcion = {descripcion}
                    setDescricion = {setDescricion}
                />
                <Publicacion_Usuario
                    publicacion = {publicacion}
                    Ir_Editar = {Ir_Editar}
                    Eliminar = {Eliminar}
                />
            </div>

            <Btn_Perfil
                ruta = '/Inicio'
                img = {grupo}
            />

            <Footer/>
        </div>
    )
}

export default Perfil