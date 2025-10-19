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
          <Route path="/Inicio" element = {<Inicio/>}/>
          <Route path="/Perfil" element = {<Perfil/>}/>
          <Route path="/Editar_Post/:id_post" element = {<Editar_Post/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App