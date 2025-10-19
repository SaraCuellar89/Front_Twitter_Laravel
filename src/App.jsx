import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Registro from "./Paginas/Registro";
import Inicio from "./Paginas/Inicio";
import Perfil from "./Paginas/Perfil";
import Editar_Post from "./Paginas/Editar_Post";
import Rutas_Protegidas from "./Paginas/Rutas_Protegidas";

const App = () => {
  return(
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element = {<Principal/>}/>
          <Route path="/Registro" element = {<Registro/>}/>

          {/* Rutas Protegidas */}
          <Route path="/Inicio" element = {<Rutas_Protegidas><Inicio/></Rutas_Protegidas>}/>
          <Route path="/Perfil" element = {<Rutas_Protegidas><Perfil/></Rutas_Protegidas>}/>
          <Route path="/Editar_Post/:id_post" element = {<Rutas_Protegidas><Editar_Post/></Rutas_Protegidas>}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
