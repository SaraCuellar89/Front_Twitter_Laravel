import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Portada from "../Componentes/Portada";
import '../Paginas/css/Principal.css'
import Formu_Registro from "../Componentes/Formu_Registro";

const Registro = () => {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [tipo_documento, setTipoDocumento] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');



    // =========== Registrar Usuario ===========
    const Registrar = async (e) => {
        e.preventDefault();

        try {

            //Validacion de campos
            if(edad < 16){
                return alert('No puedes ser menor de 16 años')
            }
            else if(documento.length < 7 || documento.length > 11){
                return alert('La documento debe ser mayor de 7 digitos y menor de 11 digitos')
            }
            else if(contrasena.length < 6){
                return alert('La contraseña debe tener mas de 6 caracteres')
            }

            //Registro de datos
            const res = await fetch('https://back-twitter-laravel.onrender.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nombre,
                    age: edad,
                    tipo_documento: tipo_documento,
                    documento: documento,
                    email: correo,
                    password: contrasena
                })
            });

            const datos = await res.json();

            if (!datos.errors) {
                alert('Registro Exitoso');
                navigate('/');
            } else {
                console.error(datos);
                alert('No se pudo completar el registro');
            }
        } catch (error) {
            console.error('Error: ' + error);
        }
    };



    // =========== Ver Contraseña ===========
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
            <Formu_Registro
                Registrar = {Registrar}
                nombre = {nombre}
                setNombre = {setNombre}
                edad = {edad}
                setEdad = {setEdad}
                tipo_documento = {tipo_documento}
                setTipoDocumento = {setTipoDocumento}
                documento = {documento}
                setDocumento = {setDocumento}
                correo = {correo}
                setCorreo = {setCorreo}
                contrasena = {contrasena}
                setContrasena = {setContrasena}
                ver = {ver}
                Ver_Contrasena = {Ver_Contrasena}
            />
        </div>
    )
}

export default Registro