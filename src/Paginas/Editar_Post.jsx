import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import perfil from "../img/perfil.png"
import Encabezado from "../Componentes/Encabezado";
import Formu_Editar_Post from "../Componentes/Formu_Editar_Post";
import Footer from "../Componentes/Footer";
import '../Paginas/css/Editar_Post.css'
import Btn_Perfil from "../Componentes/Btn_Perfil";

const Editar_Post = () => {

    const navigate = useNavigate()

    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const id_post = useParams().id_post



    // =========== Saber si si hay inicio de sesion ===========
    const token = localStorage.getItem('token');

    if(!token){
        alert('Debes iniciar sesión');
    }

    
    
    // =========== Buscar post por medio del ID ===========
    useEffect(() => {
        const Buscar_Post = async () => {
            const res = await fetch(`https://back-twitter-laravel.onrender.com/api/posts/${id_post}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, //aquí va el token
                },
            })
            const datos = await res.json()

            setTitulo(datos.data.title)
            setDescripcion(datos.data.description)
        }

        Buscar_Post()
    }, [])



    // =========== Editar Post ===========
    const Editar = async (e) => {
        e.preventDefault()

        try{
            const confirmar = confirm('¿Segur@ quiere editar esta publicacion?')
            if(!confirmar) return

            const res = await fetch(`https://back-twitter-laravel.onrender.com/api/posts/${id_post}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, //aquí va el token
                },
                body: JSON.stringify({
                    title: titulo,
                    description: descripcion
                })
            })

            const datos = await res.json()

            alert('Publicacion Editada')
            navigate('/Inicio')
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }



    // =========== Cancelar Edicion ===========
    const Cancelar = () => {
        const confirmar = confirm('¿Segur@ quiere deshacer los cambios?')
        if(!confirmar) return
        navigate(0)
    }


    return(
        <div className="contenedor_editar_post">
            <Encabezado/>

            <div>
                <Formu_Editar_Post
                    Editar = {Editar}
                    titulo = {titulo}
                    setTitulo = {setTitulo}
                    descripcion = {descripcion}
                    setDescripcion = {setDescripcion}
                    Cancelar = {Cancelar}
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

export default Editar_Post