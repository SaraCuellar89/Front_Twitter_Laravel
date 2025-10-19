import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Registro from "./Paginas/Registro";
import Inicio from "./Paginas/Inicio";
import Perfil from "./Paginas/Perfil";
import Editar_Post from "./Paginas/Editar_Post";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Principal/>}/>
          <Route path="/Registro" element = {<Registro/>}/>

          {/* Rutas Protegidas */}
          <Route path="/Inicio" element = {<Rutas_Protegidas><Inicio/></Rutas_Protegidas>}/>
          <Route path="/Perfil" element = {<Rutas_Protegidas><Perfil/></Rutas_Protegidas>}/>
          <Route path="/Editar_Post/:id_post" element = {<Rutas_Protegidas><Editar_Post/></Rutas_Protegidas>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
